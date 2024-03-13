<template>
  <div class="content">
    <div class="items">
      <div class="item">
        <p class="header-text">JOIN THE CLUB</p>
        <p class="secondary-text">Sign up to our newsletter so you never miss out on product drops, news and exclusive offers.</p>
      </div>
      <div class="item" style="text-align: end; padding-top: 20px">
        <input placeholder="Your email address">
        <div class="register-button">Sign Up</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "join-club-component",
}
</script>

<style scoped>
.content {
  margin-top: 50px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  background: #0D0D0D;
  border-radius: 36px;
}
.items {
  padding: 30px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
}
.item {
  -webkit-flex: 1;
  flex: 1;
}
.header-text {
  font-size: 30px;
  font-family: Rubik-medium, system-ui;
  background-image: linear-gradient(45deg, #592401, #FF6600);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}
.secondary-text {
  margin-top: 10px;
  color: white;
  font-size: 14px;
  font-family: Rubik-regular, system-ui;
}
.register-button {
  color: black;
  background: #D9D9D9;
  display: inline;
  display: -webkit-inline-flex;
  vertical-align: middle;
  font-family: Rubik, system-ui;
  font-size: 16px;
  margin-left: 10px;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
}
input {
  background: #606060;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 10px 20px;
  width: 250px;
}
input:focus {
  outline: none;
}
::placeholder {
  color: rgba(255, 255, 255, 0.8);
}
</style>