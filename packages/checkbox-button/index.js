import WxCheckboxButton from '../checkbox/src/checkbox-button.vue';

/* istanbul ignore next */
WxCheckboxButton.install = function(Vue) {
  Vue.component(WxCheckboxButton.name, WxCheckboxButton);
};

export default WxCheckboxButton;
