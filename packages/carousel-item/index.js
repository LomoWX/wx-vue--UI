import WxCarouselItem from '../carousel/src/item';

/* istanbul ignore next */
WxCarouselItem.install = function(Vue) {
  Vue.component(WxCarouselItem.name, WxCarouselItem);
};

export default WxCarouselItem;
