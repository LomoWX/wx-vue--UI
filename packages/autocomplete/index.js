import WxAutocomplete from './src/autocomplete';

/* istanbul ignore next */
WxAutocomplete.install = function(Vue) {
  Vue.component(WxAutocomplete.name, WxAutocomplete);
};

export default WxAutocomplete;
