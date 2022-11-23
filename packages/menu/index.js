import WxMenu from './src/menu';

/* istanbul ignore next */
WxMenu.install = function(Vue) {
  Vue.component(WxMenu.name, WxMenu);
};

export default WxMenu;
