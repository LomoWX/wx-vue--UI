import WxFormItem from '../form/src/form-item';

/* istanbul ignore next */
WxFormItem.install = function(Vue) {
  Vue.component(WxFormItem.name, WxFormItem);
};

export default WxFormItem;
