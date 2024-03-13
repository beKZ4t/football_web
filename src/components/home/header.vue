<template>
  <div class="header-container">
    <div class="header-content">
      <img src="@/assets/images/logo.png">
      <div class="buttons-container">
        <div class="button-text" @click="this.$router.push('/academy')">Academy</div>
        <div class="button-text" @click="this.$router.push('/shop')">Products</div>
        <div class="button-text" @click="this.$router.push('/community')" >Community</div>
        <div class="button-text" @click="this.$router.push('/company')" >Company</div>
      </div>
      <div class="buttons-right-container">
        <div class="login-button" @click="this.$router.push('/login')">Log In</div>
        <div class="register-button">Sign Up</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-component",
}
</script>

<style scoped>
.header-container {
  padding-top: 10px;
}
.header-content {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
}
img {
  width: 65px;
  height: 65px;
  cursor: pointer;
}
.buttons-container {
  -webkit-flex: auto;
  flex: auto;
  text-align: center;
  align-self: center;
}
.button-text {
  color: #D9D9D9;
  display: inline;
  display: -webkit-inline-flex;
  vertical-align: middle;
  font-family: Rubik, system-ui;
  font-size: 16px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 8px 10px;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
}
.button-text:hover {
  cursor: pointer;
  background: #D9D9D9;
  color: black;
}
.buttons-right-container {
  align-self: center;
}
.login-button {
  color: #D9D9D9;
  border: 1px solid #D9D9D9;
  display: inline;
  display: -webkit-inline-flex;
  vertical-align: middle;
  font-family: Rubik, system-ui;
  font-size: 16px;
  margin-right: 10px;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
}
.register-button {
  color: black;
  background: #D9D9D9;
  display: inline;
  display: -webkit-inline-flex;
  vertical-align: middle;
  font-family: Rubik, system-ui;
  font-size: 16px;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
}
</style>