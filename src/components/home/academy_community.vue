<template>
  <div class="content">
    <div class="items">
      <div class="item first">
        <p class="header-text">JOIN TO ACADEMY</p>
        <p class="secondary-text">Be a part of our team</p>
        <img class="team-image" src="@/assets/images/team.png"/>
        <p class="join-text">JOIN NOW</p>
      </div>
      <div class="item second">
        <div class="top-background">
          <p class="header-text">COMMUNITY</p>
          <img class="logo-img" src="@/assets/images/logo.png">
        </div>
        <p class="comment-text">WE BELIEVE!</p>
        <p class="comment-text">Next match VS Qairat</p>
        <p class="comment-text">My team, My dream</p>
        <p class="comment-text">A Trophy hall</p>
        <p class="comment-text">i am going to cry</p>
        <p class="comment-text">So funny ^^</p>
        <p class="comment-text">What does mean LA?</p>
        <p class="comment-text">Good luck!</p>
        <p class="comment-text">gg</p>
        <p class="comment-text">It’s A! Pit!</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "academy-and-community-component",
}
</script>

<style scoped>
.content {
  margin-top: 60px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
.items {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
}
.item {
  cursor: pointer;
  -webkit-flex: 1;
  flex: 1;
  background: #0D0D0D;
  border-radius: 35px;
  transition: 0.3s;
}
.item:hover {
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);
}
.first {
  margin-right: 20px;
}
.second {
  margin-left: 20px;
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
.team-image {
  margin-top: 30px;
  width: 75%;
  margin-left: 12.5%;
}
.join-text {
  color: white;
  font-size: 14px;
  font-family: Rubik, system-ui;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 40px;
}
.top-background {
  border-radius: 40px;
  background-image: url("src/assets/images/top_background.png");
  background-size: 100%;
  background-repeat: no-repeat;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  margin-bottom: 30px;
}
.top-background > * {
  display: inline-block;
  vertical-align: middle;
  padding-top: 0;
}
.top-background > p {
  margin-top: 30px;
}
.logo-img {
  height: 50px;
  width: 50px;
  margin-top: 20px;
  margin-right: 30px;
  vertical-align: middle;
  display: inline-block;
}
.comment-text {
  margin-left: 30px;
  margin-bottom: 10px;
  color: white;
  font-size: 13px;
  font-family: Rubik, system-ui;
}
</style>