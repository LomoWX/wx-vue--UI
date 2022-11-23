import WxDialog from './src/component';

/* istanbul ignore next */
WxDialog.install = function(Vue) {
  Vue.component(WxDialog.name, WxDialog);
};

export default WxDialog;
