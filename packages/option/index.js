import WxOption from '../select/src/option';

/* istanbul ignore next */
WxOption.install = function(Vue) {
  Vue.component(WxOption.name, WxOption);
};

export default WxOption;
