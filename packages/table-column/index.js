import WxTableColumn from '../table/src/table-column';

/* istanbul ignore next */
WxTableColumn.install = function(Vue) {
  Vue.component(WxTableColumn.name, WxTableColumn);
};

export default WxTableColumn;
