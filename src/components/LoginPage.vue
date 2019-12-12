<template>
  <div class="column_1">
    <ul class="login">
      <li class="login__logo">
        <img src="../assets/mtrad_logo.jpg" alt="ロゴ" width="100%">
      </li>
      <li class="login__password">
        <span class="login__password--icon"><font-awesome-icon icon="lock" /></span>
        <input type="password" name="pass">
      </li>
      <li class="login__button">
        <router-link to="/date">
          <button>Login</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      msg: 'LoginPage'
    }
  }
}

/* ログインページcss読み込み */
import '../assets/scss/login.scss'

</script>

<style>

</style>
