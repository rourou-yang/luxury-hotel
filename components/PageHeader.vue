<template>
  <div>
    <header>
      <nuxt-link to="/" class="logo">
        <img src="~/assets/images/logo.svg" alt="享樂酒店">
      </nuxt-link>
      <nav>
        <v-btn variant="text" color="#BF9D7D" size="large">
          <nuxt-link  class="nav-link">客房旅宿</nuxt-link>
        </v-btn>
        <v-btn variant="text" color="#BF9D7D" size="large">
          <nuxt-link :to="{name: 'Login'}" class="nav-link">會員登入</nuxt-link>
        </v-btn>
        <v-btn color="#BF9D7D" size="large">
          <nuxt-link  class="nav-link">立即訂房</nuxt-link>
        </v-btn>
      </nav>
    </header>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="stylus">
header
  display flex
  align-items center
  justify-content space-between
  padding 24px 80px
  background-color $bg-color
  +under(md)
    padding 16px 12px
  .logo 
    display block
    height 72px
    +under(md)
      height 40px
    img
      height 100%
nav
  display flex
  gap 16px
  .nav-link
    color #fff
</style>
