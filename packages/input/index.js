import WxInput from './src/input';

/* istanbul ignore next */
WxInput.install = function(Vue) {
  Vue.component(WxInput.name, WxInput);
};

export default WxInput;
