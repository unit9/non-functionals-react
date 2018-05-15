import semverCompare from 'semver-compare';
import UAParser from 'ua-parser-js';

class BrowserDetection {
  constructor(supported) {
    this.supported = supported;

    this.parser = new UAParser();
    this.device = this.parser.getDevice();

    this.type = null;

    switch (this.device.type) {
      case 'mobile':
        this.type = 'mobile';
        break;
      case 'tablet':
        this.type = 'tablet';
        break;
      default:
        this.type = 'desktop';
        break;
    }
  }

  compareVersions(a, b) {
    if (typeof a === 'string' || a instanceof String) {
      return semverCompare(a, b) <= 0;
    }

    return a <= parseInt(b, 10);
  }

  isSupported() {
    let supported = false;

    if (this.isAppBrowser()) {
      return false;
    }

    this.supported[this.type].every((device) => {
      supported = Object.keys(device).every((requirement) => {
        const value = device[requirement];

        switch (requirement) {
          case 'os':
            return value === this.parser.getOS().name.toLowerCase();
          case 'minos':
            return this.compareVersions(value, this.parser.getOS().version);
          case 'browser':
            return value === this.parser.getBrowser().name.toLowerCase();
          case 'minversion':
            return this.compareVersions(value, this.parser.getBrowser().version);
          case 'versions': // eslint-disable-line
            const v = isNaN(parseInt(this.parser.getBrowser().version, 10)) // eslint-disable-line
              ? this.parser.getBrowser().version.toLocaleLowerCase()
              : parseInt(this.parser.getBrowser().version, 10);

            return value.indexOf(v) >= 0;
          default:
            return false;
        }
      });

      return !supported;
    });

    return supported;
  }

  isAppBrowser() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1 || ua.indexOf('Twitter') > -1;
  }
}

export default BrowserDetection
;