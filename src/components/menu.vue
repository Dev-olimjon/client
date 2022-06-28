<template>
<div class="menu">
  <div class="sm-logo">
    <h1 class="logo">uz-book</h1>
  </div>
  <div style="margin-bottom: 40px;">
    <hr size="5">
  </div>
  <div class="big-par">
    <div class="small-par">
      <router-link to="/"><img class="img" src="home.png" alt=""></router-link>
      <router-link to="/books"><img class="img" src="books.png" alt=""></router-link>
      <router-link to="/about"><img class="img" src="about.png" alt=""></router-link>
      <router-link to="/profile"><img class="img" src="profile.png" alt=""></router-link>
      <router-link to="/logout"><img class="img" src="logout.png" alt=""></router-link>
    </div>
    <div class="normal-par">
      <router-link class="link" to="/">HOME</router-link>
      <router-link class="link" to="/books">BOOKS</router-link>
      <router-link class="link" to="/about">ABOUT</router-link>
      <router-link class="link" to="/profile">PROFILE</router-link>
      <router-link class="link" to="/logout">LOGOUT</router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "menu"
}
</script>

<style scoped>
.big-par{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.small-par{
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.normal-par{
  display: flex;
  flex: 3;
  flex-direction: column;
  gap: 20px;
}

.logo{
  font-size: 60pt;
  text-align: center;
  font-family: system-ui;
  color: white;
  font-weight: 200;
  margin-bottom: 0;
}
.img{
  width: 60px;
  margin-bottom: 15px;
  margin-left: 30px;
}
.link{
  font-size: 35pt;
  color: black;
  text-decoration: none;
  font-family: sans-serif;
  margin-left: 50px;
}
.menu{
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex: 1;
  background-color: #444849;
  width: 400px;
}

</style>