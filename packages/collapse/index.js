import WxCollapse from './src/collapse';

/* istanbul ignore next */
WxCollapse.install = function(Vue) {
  Vue.component(WxCollapse.name, WxCollapse);
};

export default WxCollapse;

