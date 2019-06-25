<template>
  <div>
    <Header title="通讯录" btn_icon="user-plus"/>
    <div class="content">
      <button @click="clickParent">点击</button>
      <Children ref="child1" @ztf="ztf" />
    </div>
  </div>
</template>
<script>
import Header from '../components/Header';
import Children from '../components/Children';
export default {
  name: 'contacts',
  data(){
    return {
      msg:'ccy'
    }
  },
  methods:{
    clickParent() {
        this.$refs.child1.handleParentClick("ssss");
        this.$refs.child1.message='222';
    },
    ztf(e){
      console.log(e);
    },
    a(data){
      console.log('父组件的方法');
      console.log(this.msg);
      this.msg = data
      console.log(this.msg);
    }
  },
  components: {
    Header,Children
  }
};
</script>
<style scoped>
.content{
  height: calc(100%-50px);
  margin-top:50px;
  }
</style>
