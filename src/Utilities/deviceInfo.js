import { DESKTOP, MOBILE, TABLETPRO, TABLET } from '../Constants/deviceTypes';

export const getWindowDimensions = () => ({
  innerHeight: window.innerHeight,
  innerWidth: window.innerWidth,
  outerHeight: window.outerHeight,
  outerWidth: window.outerWidth
});

export const getCurrentDevice = () => {
  const windowDimensions = getWindowDimensions();
  let currentDevice;
  if (windowDimensions.innerWidth >= 1024) {
    currentDevice = DESKTOP;
  } else if (windowDimensions.innerWidth < 768) {
    currentDevice = MOBILE;
  } else if (windowDimensions.innerWidth < 992) {
    currentDevice = TABLET;
  } else if (windowDimensions.innerWidth < 1024) {
    currentDevice = TABLETPRO;
  }
  console.log(currentDevice);

  return currentDevice;
};

export const getOS = () => {
  const userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'MacOS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
};

export const strictlyShowImage = () => {
  const elem = document.createElement('canvas');
  if (elem.getContext && elem.getContext('2d')) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  // very old browser like IE 8, canvas not supported
  return false;
};
