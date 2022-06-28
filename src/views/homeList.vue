<template>
  <div class="body">
  <div class="copitalbody">
   <div>
    <Menu/>
   </div>
  <div>
   <router-view/>
  </div>
  </div>
  </div>
</template>

<script lang="ts">
import home from "@/components/home.vue"
import Menu from "@/components/menu.vue";
export default {
  name: "homeList",
  components: {Menu,home},

}
</script>

<style scoped>
.body{
  display: flex;
  flex-direction: column;
}
.copitalbody{
  display: flex;
  flex-direction: row;
  -webkit-box-shadow: 20px 22px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 20px 22px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 20px 22px 5px 0px rgba(0,0,0,0.75);
}
</style>