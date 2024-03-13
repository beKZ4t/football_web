<template>

  <header-component />
    <div class="header">
    <img src="@/assets/images/fon.png">
  </div>
  <div style="background-color: black">
  <div class="main">
    <div class="search_block">

      <div class="left_side">
        <div class="first">
          JOIN THE CLUB
        </div>
        <div class="second">
          Sign up to our newsletter so you never miss out on product drops,
          news and exclusive offers.
        </div>
      </div>
      <div class="space"></div>
      <div class="right">
        <input type="text" placeholder="Your email address">
          <div class="button">Sign Up</div>

      </div>

    </div>
  </div>

    <div class="under">
      <div class="second_main">
      <div class="under_first">
        <div class="telephone">
        <img src="@/assets/images/tele.png" class="tele">
        </div>
        <div class="right_text">
          <h3>
            DOWNLOAD APP!
          </h3>

          <h4>On the App you can see more information, more details and news!</h4>
          <h5>Stay with our academy!</h5>
        </div>
      </div>


      <div class="second_under">
        <div class="left_side_text">
          <h3>CHECK OUT THE NEWS!</h3>
          <h4>Check out the last news, stats our academy!</h4>

        </div>

        <div class="right_side">
          <img class="tv" src="@/assets/images/tv%201.png" alt="">
        </div>
      </div>
    </div>
    </div>

  </div>
  <footer-component />




</template>

<script>
import HeaderComponent from "@/components/home/header.vue";
import AcademyAndCommunityComponent from "@/components/home/academy_community.vue";
import ProductsComponent from "@/components/home/products.vue";
import DevsComponent from "@/components/home/devs.vue";
import JoinClubComponent from "@/components/home/join_club.vue";
import StreamComponent from "@/components/home/stream.vue";
import FooterComponent from "@/components/home/footer.vue";

export default {
  name: "index",
  components: {
    FooterComponent,
    StreamComponent,
    JoinClubComponent, DevsComponent, ProductsComponent, AcademyAndCommunityComponent, HeaderComponent},
}
</script>

<style scoped>
.second_under{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 153px;
}
.tv{
  height: 675px;
}
img{
  max-width: 100%;
  height: auto;
}
.second_main,
.main{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.search_block{
  color: white;
  background-color: black;
  display: flex;
  align-items:center;
  padding-top: 45px;
  padding-bottom: 52px;



}
.space{
  flex: auto;
}
.first{
  color: red;
  font-size: 24px;
  font-family: Rubik-medium, system-ui;
}
.second{
  font-size: 16px;
  width: 508px;
  font-family: Rubik-regular, system-ui;
}
input{
  width: 359px;
  height: 41px;
  background-color: #606060;
  outline: none;
  border: none;
  border-radius: 8px;
}
input::placeholder{
  color: #c9c9c9;
}
.button{
  font-size: 20px;
  padding: 10px;
  border-radius: 8px;
  margin-left: 5px;
  background-color: #D9D9D9;
  color: black;
  font-family: Rubik-regular,system-ui;
}
.right{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.under{
  background-color: #E6E6E6;
}
.tele{
  height: 616px;
}
.under_first{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h3{
  color: #FF7E00;
  font-family: Rubik-bold,system-ui;
  font-size: 36px;
}
h5,
h4{
  line-height: 0;
  font-size: 24px;
  font-family: Rubik-regular,system-ui;
}

</style>