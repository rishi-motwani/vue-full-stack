<template>
  <div>
      <h2>Register</h2>
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="email"/>
        <br><br><br>
        <input
          type="password"
          name="password"
          v-model="password"
          placeholder="password"/>
          <button
          @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email : 'rishi@gmail.com',
      password : '123'
    }
  },
  methods: {
    async register(){
      const response = await AuthenticationService.register({
          email : this.email,
          password : this.password
      })
      console.log(response.data);
    }
  },
  watch : {
    email (value){
      console.log(value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
