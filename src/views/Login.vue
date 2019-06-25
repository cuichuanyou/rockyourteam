<template>
  <div class="login">
    <header>用户登录</header>
    <div class="content">
      <form>
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
      </form>
      <yButton class="ybutton" :disabled="disabledType" @click="login">登陆</yButton>
    </div>
    <footer>
      |<button class="register" @click="$router.push('/register')">注册账号</button>|
    </footer>
  </div>
</template>
<script>
import InputGroup from "../components/InputGroup";
import yButton from "../components/YButton";
export default {
  name:"login",
  data(){
    return {
      user:{
        email:'',
        password:''
      }
    }
  },
  computed:{
   disabledType(){
     if(this.user.email && this.user.password) return false;
     else return true;
   }
  },
  methods:{
   login(){
      var reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      if (!reg.test(this.user.email)) {
        this.$copyToastMes({ message: '请输入合法的邮箱地址！', type: 'warning', time: 1800 });
        return;
      };
      this.$axios.post('/login',this.user)
          .then(response=>{
             const { token } = response.data;
             localStorage.setItem('wxpyqToken',token);
             this.$router.push('/');
          });
   }
  },
  components:{InputGroup,yButton}
}
</script>
<style scoped>
.login{
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding:16px;
  box-sizing: border-box;
}
.login header{
  margin-top: 80px;
  font-size: 22px;
  text-align: center;
}
.login .content .ybutton{
  margin-top: 20px;
}
.login footer{
  position: absolute;
  left: 0;
  bottom: 16px;
  width: 100%;
  font-size: 16px;
  color: #888;
  text-align: center;
  cursor: pointer;
}
.login footer .register{
  color: #7b8ca9;
  background-color: transparent;
  border: none;
  outline: none;
}
</style>



