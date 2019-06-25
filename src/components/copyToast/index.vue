<template>
  <transition name='copyToast'>
    <div class="copy-success" :class="type" v-show="show">{{ message }}</div>
  </transition>
</template>
<script>
export default {
  name: 'copyToast',
  data() {
    return {
      message: '',
      show: false,
      type: '',
    };
  },
};
</script>

<style lang="stylus" scoped>
.copy-success
  height 44px;
  opacity: 0.9;
  line-height 44px;
  text-align center;
  position fixed;
  top 0;
  left 0;
  color #fff;
  width 100%;
.primary
  background-color #00D18E
.warning
  background-color #FE595E

.primary
  background-color #00D18E

.warning
  background-color #FE595E

</style>
