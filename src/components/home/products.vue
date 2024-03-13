<template>
  <div class="content">
    <div class="item">
      <p class="header-text">PRODUCTS</p>
      <p class="secondary-text">our own line of products created with our company</p>
      <div class="products-list">

      </div>
      <div class="under-button">
        <div class="register-button">Shop Now</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "products-component",
}
</script>

<style scoped>
.content {
  margin-top: 50px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
.under-button {
  padding: 30px;
  text-align: end;
}
.register-button {
  color: black;
  background: #D9D9D9;
  display: inline;
  display: -webkit-inline-flex;
  vertical-align: middle;
  font-family: Rubik, system-ui;
  font-size: 16px;
  margin-right: 10px;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
}
.item {
  background: #0D0D0D;
  border-radius: 35px;
}
.products-list {
  height: 200px;
}
.header-text {
  -webkit-flex: auto;
  flex: auto;
  padding: 30px 30px 0 30px;
  font-family: Rubik-medium, system-ui;
  font-size: 24px;
  color: white;
}
.secondary-text {
  margin: 5px 30px 0 30px;
  font-family: Rubik-regular, system-ui;
  font-size: 16px;
  color: white;
}
</style>