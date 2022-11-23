import WxDropdownItem from '../dropdown/src/dropdown-item';

/* istanbul ignore next */
WxDropdownItem.install = function(Vue) {
  Vue.component(WxDropdownItem.name, WxDropdownItem);
};

export default WxDropdownItem;
