<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">導覽頁</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" :to="{name:'NewPage'}">router路由</router-link>
        <router-link class="nav-link" to="/RouterMethod">路由的方法</router-link>

      </div>
    </div>
  </nav>
  <div class="container" style=" height:5000px">
    <router-view />
  </div>

  <button type="button" class="btn btn-outline-primary">Primary</button> <!-- 測試有沒有導入bootsrap -->
  {{ name }}
  <!-- 測試將資料內變數渲染自頁面 -->
</template>

<script>
  export default {
    data() {
      return {
        name: process.env.VUE_APP_NAME  // process.env 為取得環境變數固定結構
      }
    },
  }
</script>

<style lang="scss">

</style>