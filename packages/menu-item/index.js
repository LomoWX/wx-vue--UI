import WxMenuItem from '../menu/src/menu-item';

/* istanbul ignore next */
WxMenuItem.install = function(Vue) {
  Vue.component(WxMenuItem.name, WxMenuItem);
};

export default WxMenuItem;
