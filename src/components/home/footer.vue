<template>
  <div class="content">
    <div class="main">

        <img src="@/assets/images/logo_white.png" class="logo" alt="">
      <div class="all">
        <div class="first">
          <div class="item">About</div>
          <div class="item">Our story</div>
          <div class="item">Contact Us</div>
          <div class="item">Academy</div>


        </div>
        <div class="second">
          <div class="item">Shop</div>
          <div class="item">Help</div>
          <div class="item">Products</div>

        </div>



      <div class="third">
          <div class="item">Terms and Policy</div>
          <div class="item">All Terms and Policies </div>
      </div>

      <div class="last">
        <div class="them">Light mode <div></div> </div>
        <div class="logos">
          <img src="@/assets/images/icon/youtube.png" class="icon">
          <img src="@/assets/images/icon/twitch.png" class="icon">
          <img src="@/assets/images/icon/tiktok.png" class="icon">
          <img src="@/assets/images/icon/instagram.png" class="icon">
          <img src="@/assets/images/icon/discord.png" class="icon">
        </div>

      </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "footer-component",
}
</script>

<style scoped>
.item{
  color: white;
}
.content {
  width: 100%;
  background: #0D0D0D;
  height: 400px;
}
.main{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.logo{
  height: 46px;
  margin-top: 60px;
  margin-bottom: 60px;
}
.all{
  display: flex;
  justify-content: space-between;
  align-items: start;
  line-height: 35px;
  font-family: Rubik-bold,system-ui;
  font-size: 20px;
}
.icon{
  height: 45px;
}
.them{
  color: white;
  font-size: 20px;
  font-family: Rubik-bold,system-ui;
  display: flex;
  justify-content: end;
}
</style>