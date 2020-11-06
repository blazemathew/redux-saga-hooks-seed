/**
 * The function purpose is to group validation callbacks into a chain within single callback function.
 *
 * The single callback function should be passed as `validation` prop to an input component. It's being
 * called by the React Controller on a form submit.
 *
 * @param {Array} callbacks
 * @return {function(value, values): *}
 */
export default (callbacks) => {
  if (callbacks == null || !Array.isArray(callbacks)) {
    throw new Error('Expected `callbacks` to be array.');
  }

  return (value, values) => {
    let result = null;

    for (let i = 0; i < callbacks.length; i++) {
      const callback = callbacks[i];

      if (
        callback == null ||
        (!Array.isArray(callback) && typeof callback !== 'function')
      ) {
        throw new Error(
          `Expected \`callbacks[${i}]\` to be array or function.`
        );
      }

      if (Array.isArray(callback)) {
        const [extendedCallback, extendedParam] = callback;

        if (typeof extendedCallback !== 'function') {
          throw new Error(`Expected \`callbacks[${i}][0]\` to be function.`);
        }

        result = extendedCallback(value, values, extendedParam);
      } else {
        result = callback(value, values);
      }

      if (result) {
        break;
      }
    }

    return result;
  };
};
