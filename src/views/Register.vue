<template>
  <div class="register">
    <header>
      <button @click="$router.go(-1)">取消</button>
    </header>
    <div class="container">
      <div class="title">用户注册</div>
      <div class="content">
        <form>
        <InputGroup
        label="昵称"
        placeholder="请输入昵称"
        v-model="user.name"
       />
        <InputGroup
        label="邮箱"
        placeholder="请输入邮箱"
        v-model="user.email"
       />
       <InputGroup
        label="密码"
        placeholder="请输入密码"
        type="password"
        v-model="user.password"
       />
       <InputGroup
        label="确认密码"
        placeholder="请确认密码"
        type="password"
        v-model="user.password2"
       />
        </form>
        <yButton class="ybutton" :disabled="disabledType" @click="register">注册</yButton>
      </div>
    </div>
  </div>
</template>
<script>
import InputGroup from "../components/InputGroup";
import yButton from "../components/YButton";
export default {
  name:"register",
  data(){
    return {
      user:{
        name:'',
        email:'',
        password:'',
        password2:''
      }
    }
  },
  computed:{
    disabledType(){
      if(this.user.email && this.user.password && this.user.name && this.user.password2) return false;
      else return true;
    }
  },
  methods:{
    register(){
      var reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      if (!reg.test(this.user.email)) {
        this.$copyToastMes({ message: '请输入合法的邮箱地址！', type: 'warning', time: 1800 });
        return;
      };
      if(this.user.password != this.user.password2){
        this.$copyToastMes({ message: '两次输入的密码不一致!', type: 'warning', time: 1800 });
        return;
      };
      this.$axios.post('/register',this.user)
          .then(response=>{
            this.$toastMessage({ message: '注册成功', type: 'warning', time: 1800 });
            this.$router.push('/login');
          });
    }
  },
  components:{InputGroup,yButton}
}
</script>
<style scoped>
.register {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.register header {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 0 10px;
  line-height: 50px;
}

.register header button {
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  color: #20af0e;
}

.register .container {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
}

.register .container .title {
  margin-top: 30px;
  font-size: 22px;
  text-align: center;
}

.register .container .content .ybutton {
  margin-top: 20px;
}
</style>



