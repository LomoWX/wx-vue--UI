export default {
  name: 'WxMarker',

  props: {
    mark: {
      type: [String, Object]
    }
  },
  render() {
    let label = typeof this.mark === 'string' ? this.mark : this.mark.label;

    return (
      <div class="el-slider__marks-text" style={ this.mark.style || {} }>
        { label }
      </div>
    );
  }
};
