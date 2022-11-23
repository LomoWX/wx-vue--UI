import WxButton from './src/button';

/* istanbul ignore next */
WxButton.install = function(Vue) {
  Vue.component(WxButton.name, WxButton);
};

export default WxButton;
