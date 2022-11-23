import WxCheckbox from './src/checkbox';

/* istanbul ignore next */
WxCheckbox.install = function(Vue) {
  Vue.component(WxCheckbox.name, WxCheckbox);
};

export default WxCheckbox;
