import WxBreadcrumb from './src/breadcrumb';

/* istanbul ignore next */
WxBreadcrumb.install = function(Vue) {
  Vue.component(WxBreadcrumb.name, WxBreadcrumb);
};

export default WxBreadcrumb;
