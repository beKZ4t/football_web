<template>
  <div class="content">
    <p class="header-text">WE ARE LA UNITED</p>
    <div class="items">
      <div class="item">
        <div class="image-container"></div>
        <div class="name-container">
          <p class="name-text">Aidos A.</p>
          <p class="role-text">CEO</p>
        </div>
      </div>
      <div class="item">
        <div class="image-container"></div>
        <div class="name-container">
          <p class="name-text">Baltabek T.</p>
          <p class="role-text">Manager</p>
        </div>
      </div>
      <div class="item">
        <div class="image-container"></div>
        <div class="name-container">
          <p class="name-text">Aidos A.</p>
          <p class="role-text">Mobilographer</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "devs-component",
}
</script>

<style scoped>
.content {
  margin-top: 50px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
.header-text {
  text-align: center;
  font-family: Rubik-medium, system-ui;
  font-size: 24px;
  color: white;
}
.items {
  margin-top: 30px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
}
.item {
  -webkit-flex: auto;
  flex: auto;
  background: #0D0D0D;
  clip-path: polygon(16% 0, 100% 0%, 84% 100%, 0% 100%);
}
.image-container {
  height: 300px;
}
.name-container {
  background: #FF6600;
  padding: 10px 30px 20px 30px;
}
.name-text {
  color: white;
  font-size: 20px;
  font-family: Rubik-medium, system-ui;
}
.role-text {
  color: white;
  font-size: 14px;
  font-family: Rubik-regular, system-ui;
}
</style>