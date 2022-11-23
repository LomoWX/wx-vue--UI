import WxForm from './src/form';

/* istanbul ignore next */
WxForm.install = function(Vue) {
  Vue.component(WxForm.name, WxForm);
};

export default WxForm;
