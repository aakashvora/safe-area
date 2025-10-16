'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const SafeArea = core.registerPlugin('SafeArea', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.SafeAreaWeb()),
});
function setProperty(position) {
    var _a;
    if (typeof document !== 'undefined') {
        const rootStyle = (_a = document.querySelector(':root')) === null || _a === undefined ? undefined : _a.style;
        const currentValue = rootStyle === null || rootStyle === undefined ? undefined : rootStyle.getPropertyValue(`--safe-area-inset-${position}`);
        if (!currentValue) {
            // If a value is already present,
            // we can assume we do not have to set an initial value.
            // Probably the native code has already set a property.
            // Otherwise the developer or another plugin has set this value.
            rootStyle === null || rootStyle === undefined ? undefined : rootStyle.setProperty(`--safe-area-inset-${position}`, `max(env(safe-area-inset-${position}), 0px)`);
        }
    }
}
/**
 * Set initial safe area values.
 * This makes sure `var(--safe-area-inset-*)` values can be used immediately and everywhere.
 * This method will be automatically called.
 *
 * Note for developers using SSR:
 * Only in an SSR environment this method will not necessarily be executed.
 * So if you're using this plugin in an SSR environment,
 * you should call this method as soon as `window.document` becomes available.
 */
function initialize() {
    setProperty('top');
    setProperty('left');
    setProperty('bottom');
    setProperty('right');
}
initialize();

class SafeAreaWeb extends core.WebPlugin {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async enable(_options) {
        return;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async disable(_options) {
        return;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SafeAreaWeb: SafeAreaWeb
});

exports.SafeArea = SafeArea;
exports.default = SafeArea;
exports.initialize = initialize;
//# sourceMappingURL=plugin.cjs.js.map
