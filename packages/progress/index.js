import WxProgress from './src/progress';

/* istanbul ignore next */
WxProgress.install = function(Vue) {
  Vue.component(WxProgress.name, WxProgress);
};

export default WxProgress;
