<template>
  <header-component />
 <div class="main">
   <div class="header_text">
     <p>  ALL</p>
     <p style="margin-top: 13px; margin-bottom: 29px">COMMUNITY</p>
   </div>

   <div class="block">
     <div class="first_block">
       <div class="left">
         <p>Latest</p>
         <p class="active">Popular</p>
         <p>Newest</p>
         <p>Oldest</p>
       </div>
       <div class="right">
         <div class="create">Create community</div>
         <img class="img_logo" src="@/assets/images/logo%20gen%207.png">
       </div>

     </div>

     <div class="second_block">
       <div class="left_second">
         <div class="info">
           <p>From wich country you are supporting LA UNITED?</p>
           <div>
             <div class="user">
             <img class="arrow" src="@/assets/images/Arroww.png">
             <p> Arman <span> 4h ago</span></p>
             </div>
           </div>
         </div>
         <div class="info">
           <p>LA UNITED exclusive - VCT Kickoff 2024!</p>
           <div class="user">
             <img class="arrow" src="@/assets/images/Arroww.png">
             <p> Arman <span> 4h ago</span></p>
           </div>
         </div>
         <div class="info">
           <p>New Head Coach Update!</p>
           <div class="user">
             <img class="arrow" src="@/assets/images/Arroww.png">
             <p> Arman <span> 4h ago</span></p>
           </div>
         </div>
       </div>
       <div class="right_second">
          <input type="text" placeholder="Type here..">
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
input{
  height: 38px;
  width: 310px;
  margin: 497px 15px 15px 15px;
  border-radius: 12px;
  outline: none;
  border: none;
  background-color: #606060;

}
input::placeholder{
  color: white;
  padding-left: 13px;
  font-size: 14px;
  font-family: Rubik-light, system-ui;
}
.main{
  width: 80%;
  margin-left: auto;
  margin-right: auto;

}
.header_text{
  color: white;
  font-size: 24px;
  font-family:  Rubik-medium, system-ui;
  margin-top: 95px;
  margin-left: 48px;

}
.header_text p{
  display: flex;
  justify-content: start;
}
.left{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 488px;
  color: white;

  background-color: black;
  padding-top: 32px;
  padding-left: 48px;
  padding-bottom: 33px;
  border-radius: 25px;
  padding-right: 260px;

 margin-right: 25px;
}
.active{
  padding: 8px 14px;
  background-color: rgba(79, 79, 79, 0.4);
  border-radius: 10px;
}
.right{
  width: 282px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: white;
  padding: 15px 27px 22px 31px;
  border-radius: 25px;
  margin-left: 25px;
  font-size: 24px;

}

.img_logo{
  max-width: 89px;
  height: 50px;
}
.first_block{
  display: flex;
  font-family: Rubik-medium, system-ui;

}
.create{
  width: 132px;
}

.second_block{
  display: flex;

  justify-content: space-between;
  color: white;
  font-family: Rubik, system-ui;
  margin-top: 36px;
}
.arrow{
  height: 17px;
}
.info{
  background-color: #575757;
  height: 63px;
  padding: 25px 139px 31px 34px;
  margin-bottom: 22px;
  border-radius: 25px;
  font-size: 24px;
  font-family: Rubik-bold, system-ui;

}
.user{
  display: flex;
  align-items: center;
  margin-top: 22px;
}
.user p{
  font-size: 15px;
  margin-left: 5px;
  font-family: Rubik-medium, system-ui;

}
.user p span {
  color: rgba(241, 241, 241, 0.4);
  font-family: Rubik-light, system-ui;
}
.right_second{
  width: 340px;
  background-color: rgba(112, 112, 112, 0.4);
  border-radius: 25px;
}
</style>