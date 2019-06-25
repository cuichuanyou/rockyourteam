<template>
  <div class="test">
    <button @click="chidlren">子组件方法</button>
  </div>
</template>
<script>
export default {
  name:'children',
  data(){
    return {
      message:'111'
    }
  },
  methods:{
    handleParentClick(e){
      console.log(e);
      console.log(this.message);
      this.message='333';
      console.log(this.message);
    },
    chidlren(){
      this.$emit('ztf','子组件方法');
      console.log(this.$parent);
      this.$parent.a('cuichuanyou');
    },
    b(){
      console.log('子组件的方法');
    }
  }
}
</script>
<style scoped>
</style>

