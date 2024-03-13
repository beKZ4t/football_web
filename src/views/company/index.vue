<template>
  <header-component />
    <div class="main">
      <div class="text">
        <p class="game">GAME BETTER.</p>
        <p class="second_text">START LIVING BEAUTIFULLY
          WITH OUR TEAM</p>
      </div>
      <div class="video">
        <iframe width="80%" height="400" src="https://www.youtube.com/embed/H5SMtN6Qa6w?si=ZC7lW-ROJXN2_tAy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>



</template>

<script>
import HeaderComponent from "@/components/home/header.vue";


export default {
  name: "index",
  components: {
    HeaderComponent},
}
</script>

<style scoped>
.video{
  margin-top: 21px;
  text-align: center;
}
.main{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.text{
  text-align: center;
  margin: 0 auto;
  margin-top: 130px;


}
.game{
  color: #FF5C00;
  font-size: 40px;
}
.second_text{
  color: white;
  font-size: 40px;
  width: 578px;
  text-align: center;
  margin: 0 auto;
}
</style>