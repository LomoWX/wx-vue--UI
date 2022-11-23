import WxTag from './src/tag';

/* istanbul ignore next */
WxTag.install = function(Vue) {
  Vue.component(WxTag.name, WxTag);
};

export default WxTag;
