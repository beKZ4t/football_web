<template>
  <div class="content">
    <img class="img-play" src="@/assets/images/play.png">
    <p class="primary-text">Translation</p>
  </div>
</template>

<script>

export default {
  name: "stream-component",
}
</script>

<style scoped>
.content {
  text-align: center;
  width: 70%;
  background: rgba(217, 217, 217, 0.2);
  border-radius: 46px;
  margin: 50px auto 60px;
}
.img-play {
  cursor: pointer;
  margin-top: 150px;
  margin-bottom: 120px;
  height: 40px;
  width: 40px;
}
.primary-text {
  padding: 0 0 30px 30px;
  color: white;
  text-align: start;
  font-family: Rubik-regular, system-ui;
  font-size: 24px;
}
</style>