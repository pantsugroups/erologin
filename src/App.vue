<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{}
}
</script>

<style>

.padding-limiter{
    padding-left:15%;
    padding-right:15%;
}
@media(max-width:1440px){
    .padding-limiter{
        padding-left:6%;
        padding-right:6%;
    }
}
</style>
