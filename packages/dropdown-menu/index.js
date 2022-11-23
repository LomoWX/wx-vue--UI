import WxDropdownMenu from '../dropdown/src/dropdown-menu';

/* istanbul ignore next */
WxDropdownMenu.install = function(Vue) {
  Vue.component(WxDropdownMenu.name, WxDropdownMenu);
};

export default WxDropdownMenu;
