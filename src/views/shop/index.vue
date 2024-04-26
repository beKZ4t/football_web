<template>
  <header-component />
  <div class="main">
      <h1>Shop</h1>
    <div class="category">
      <div class="left">
      <div class="header_text">
        Category
      </div>
        <div class="all_items">

          <div class="item">T-Shirt</div>
          <div class="item">Hoodie</div>
          <div class="item">Cap</div>
          <div class="item">Accessories</div>
          <div class="item">Equipment</div>


        </div>

    </div>

      <div class="right">

          <div class="first">
            <img class="img_t" src="@/assets/images/tshirt.png">
            <div class="under_img">
              <p>t-shirt “LAUNITED” <span>+</span></p>
              <p class="price">22$</p>
            </div>

          </div>

          <div class="first">
            <img class="img_t" src="@/assets/images/tshirt.png">
            <div class="under_img">
              <p>t-shirt “LAUNITED” <span>+</span></p>
              <p class="price">22$</p>
            </div>

          </div>
          <div class="first">
            <img class="img_t" src="@/assets/images/tshirt.png">
            <div class="under_img">
              <p>t-shirt “LAUNITED” <span>+</span></p>
              <p class="price">22$</p>
            </div>

          </div>
          <div class="first">
            <img class="img_t" src="@/assets/images/tshirt.png">
            <div class="under_img">
              <p>t-shirt “LAUNITED” <span>+</span></p>
              <p class="price">22$</p>
            </div>

          </div>

      </div>
  </div>


  </div>




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
.img_t{
  height: 259px;
}
.category{
  display: flex;
  justify-content: space-between;
  margin-top: 58px;
}
.main{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
h1{
  text-align: center;
  margin-top: 87px;
  color: white;
  font-size: 24px;

}
.header_text{
  text-align: center;
  font-size: 24px;
  font-family: Rubik-bold, system-ui;
  padding-top: 21px;
  padding-bottom: 30px;
}
.left{
  color: white;
  width: 329px;
  height: 658px;
  border-radius: 10px;
  background-color: #606060;
}
.item{
  font-size: 24px;
  font-family: Rubik-medium, system-ui;
  padding-left: 33px;
  padding-bottom:17px;
}
.right{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.first{
  margin-left: 50px;

}
.under_img p{
  color: white;
  font-size: 24px;
  font-family: Rubik-medium,system-ui;
}
.under_img span{
  color: red;
}
.under_img{
  text-align: center;
}
.under_img .price{
  color: green;
}

</style>