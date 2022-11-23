<template>
  <footer class="el-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'WxFooter',

    componentName: 'WxFooter',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
