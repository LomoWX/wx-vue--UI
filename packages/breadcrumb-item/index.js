import WxBreadcrumbItem from '../breadcrumb/src/breadcrumb-item';

/* istanbul ignore next */
WxBreadcrumbItem.install = function(Vue) {
  Vue.component(WxBreadcrumbItem.name, WxBreadcrumbItem);
};

export default WxBreadcrumbItem;
