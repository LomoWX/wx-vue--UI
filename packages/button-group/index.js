import WxButtonGroup from '../button/src/button-group';

/* istanbul ignore next */
WxButtonGroup.install = function(Vue) {
  Vue.component(WxButtonGroup.name, WxButtonGroup);
};

export default WxButtonGroup;
