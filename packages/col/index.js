import WxCol from './src/col';

/* istanbul ignore next */
WxCol.install = function(Vue) {
  Vue.component(WxCol.name, WxCol);
};

export default WxCol;

