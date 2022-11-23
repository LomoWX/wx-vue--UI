import WxInputNumber from './src/input-number';

/* istanbul ignore next */
WxInputNumber.install = function(Vue) {
  Vue.component(WxInputNumber.name, WxInputNumber);
};

export default WxInputNumber;
