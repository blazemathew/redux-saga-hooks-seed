/**
 * process.env.DEV_SERVER_SERVICE_WORKER_ENABLED is
 * a string representation of a boolean value
 */
export const VALID_SERVICE_WORKER_ENVIRONMENT =
  process.env.NODE_ENV === 'production' ||
  process.env.DEV_SERVER_SERVICE_WORKER_ENABLED === 'true';

const handlers = {};

export const registerMessageHandler = (type, handler) => {
  if (!handlers[type]) {
    handlers[type] = [];
  }
  handlers[type].push(handler);
  return () => unRegisterMessageHandler(type, handler);
};

export const unRegisterMessageHandler = (type, handler) => {
  if (handlers[type]) {
    handlers[type] = handlers[type].filter(
      (handlerfn) => handler !== handlerfn
    );
  }
};

/**
 *
 * handleMessageFromSW handles messages from the SW. It matches
 * the message with the handler in the handlers object and delegates
 * the message payload along with the MessageEvent to the handler.
 *
 * @param {string} type type of the message from the SW
 * @param {object} payload payload of the message from the SW
 * @param {MessageEvent} event MessageEvent of the message from the SW
 *
 * @returns {void}
 */
export const handleMessageFromSW = (type, payload, event) => {
  const handlerList = handlers[type];
  if (handlerList) {
    handlerList.forEach((handler) => {
      handler(payload, event);
    });
  }
};

export const sendMessageToSW = (type, payload) =>
  new Promise((resolve, reject) => {
    const channel = new MessageChannel();

    /**
     * channel.port1 is the port for the channel creator to use
     * to send a message to the receiver.
     *
     * channel.port2 is the port for the message received to use
     * to communicate to the channel creator.
     */

    // Listening for a reply from the SW
    channel.port1.onmessage = (event) => {
      if (event.data.error) {
        reject(event.data.error);
      } else {
        resolve(event.data);
      }
      channel.port1.close();
    };

    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type, payload }, [
        channel.port2
      ]);
    } else {
      reject('SW Not Registered');
      channel.port1.close();
    }
  });
