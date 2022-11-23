import WxIcon from './src/icon.vue';

/* istanbul ignore next */
WxIcon.install = function(Vue) {
  Vue.component(WxIcon.name, WxIcon);
};

export default WxIcon;
