import WxDropdown from './src/dropdown';

/* istanbul ignore next */
WxDropdown.install = function(Vue) {
  Vue.component(WxDropdown.name, WxDropdown);
};

export default WxDropdown;
