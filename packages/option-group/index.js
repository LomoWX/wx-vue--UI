import WxOptionGroup from '../select/src/option-group';

/* istanbul ignore next */
WxOptionGroup.install = function(Vue) {
  Vue.component(WxOptionGroup.name, WxOptionGroup);
};

export default WxOptionGroup;
