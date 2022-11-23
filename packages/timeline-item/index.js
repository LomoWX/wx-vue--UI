import WxTimelineItem from '../timeline/src/item';

/* istanbul ignore next */
WxTimelineItem.install = function(Vue) {
  Vue.component(WxTimelineItem.name, WxTimelineItem);
};

export default WxTimelineItem;
