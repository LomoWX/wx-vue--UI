import WxMenuItemGroup from '../menu/src/menu-item-group';

/* istanbul ignore next */
WxMenuItemGroup.install = function(Vue) {
  Vue.component(WxMenuItemGroup.name, WxMenuItemGroup);
};

export default WxMenuItemGroup;
