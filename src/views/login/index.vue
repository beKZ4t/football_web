<template>
  <div class="main">
    <div class="block">
      <div class="main_block">
          <img class="logo" src="@/assets/images/logo_black.png">
          <div class="email">
            <p>E-mail</p>
            <input type="email" placeholder="Your email address">
          </div>
        <div class="email">
          <p>Password</p>
          <input style="margin-bottom: 7px" type="password" placeholder="Create a password">
        </div>
        <p class="forgot">Forgot your password?</p>
        <div class="login">Log In</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/background1.png"); /* Используем префикс "~@" для пути к изображению */
  background-size: cover; /* Масштабировать изображение по размеру блока */
}
.block{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}
.main_block{
  background-color: rgba(239, 239, 239, 0.4);
  width: 566px;
  height: 513px;

  margin-top: 283px;
  horiz-align: center;

}
.logo{
  margin-top: 23px;
  margin-left: 246px;
  height: 46px;
  margin-bottom: 42px;
}
input::placeholder{

}
.email{
  margin-left: 37px;
  font-family: Rubik-regular, system-ui;
}
.forgot{
  margin-left: 37px;
}
.login{
  font-family: Rubik-bold,system-ui;
  width: 490px;
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FF6B00;
  margin: 0 auto;
  margin-top: 44px;
  border-radius: 7px;
}

input{
  height: 50px;
  width: 490px;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  outline: none;
  border-radius: 7px;
  margin-top: 7px;
  margin-bottom: 27px;
}
</style>
