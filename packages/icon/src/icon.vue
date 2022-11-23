<template>
  <i :class="'el-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'WxIcon',

    props: {
      name: String
    }
  };
</script>
