import WxCheckboxGroup from '../checkbox/src/checkbox-group.vue';

/* istanbul ignore next */
WxCheckboxGroup.install = function(Vue) {
  Vue.component(WxCheckboxGroup.name, WxCheckboxGroup);
};

export default WxCheckboxGroup;
