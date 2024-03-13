<template>
  <header-component />
  <academy-and-community-component />
  <products-component />
  <devs-component />
  <join-club-component />
  <stream-component />
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

</style>