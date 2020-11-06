import { DESKTOP, MOBILE, TABLETPRO, TABLET } from '../Constants/deviceTypes';
const DEVICE_SCREEN_SIZE_ASCENDING = [MOBILE, TABLET, TABLETPRO, DESKTOP];
const FALLBACK_DEVICE_KEY = DESKTOP;

const getTargetComponent = (availableComponents, activeDevice) => {
  if (activeDevice in availableComponents) {
    return availableComponents[activeDevice];
  }
  const nextActiveDeviceIndex =
    DEVICE_SCREEN_SIZE_ASCENDING.indexOf(activeDevice) + 1;
  if (nextActiveDeviceIndex + 1 > DEVICE_SCREEN_SIZE_ASCENDING.length) {
    return availableComponents[FALLBACK_DEVICE_KEY];
  }
  const nextActiveDevice = DEVICE_SCREEN_SIZE_ASCENDING[nextActiveDeviceIndex];
  return getTargetComponent(availableComponents, nextActiveDevice);
};

export default getTargetComponent;
