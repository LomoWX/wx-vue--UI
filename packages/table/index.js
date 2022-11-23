import WxTable from './src/table';

/* istanbul ignore next */
WxTable.install = function(Vue) {
  Vue.component(WxTable.name, WxTable);
};

export default WxTable;
