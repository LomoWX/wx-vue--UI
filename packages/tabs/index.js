import WxTabs from './src/tabs';

/* istanbul ignore next */
WxTabs.install = function(Vue) {
  Vue.component(WxTabs.name, WxTabs);
};

export default WxTabs;
