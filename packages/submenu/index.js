import WxSubmenu from '../menu/src/submenu';

/* istanbul ignore next */
WxSubmenu.install = function(Vue) {
  Vue.component(WxSubmenu.name, WxSubmenu);
};

export default WxSubmenu;
