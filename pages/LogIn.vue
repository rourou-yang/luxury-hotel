<template>
  <div class="member-layout">
    <div class="pic-palace" />
    <div class="interface">
      <div class="img-wave" />
      <div class="member-board">
        <div class="font-title color-primary">享樂酒店，誠摯歡迎</div>
        <h1 class="bold mt-2">立即開始旅程</h1>
        <div class="my-5">
          <div class="info-field">
            <div class="font-title mb-2">電子信箱</div>
            <v-text-field variant="solo" hide-details />
          </div>
          <div class="info-field">
            <div class="font-title mb-2">密碼</div>
            <v-text-field variant="solo" hide-details />
          </div>
          <div class="info-field d-flex justify-space-between">
            <v-checkbox v-model="rememberMe" color="#BF9D7D" label="記住帳號" hide-details></v-checkbox>
            <nuxt-link to="" class="color-primary text-decoration-underline">忘記密碼？</nuxt-link>
          </div>
        </div>
        <v-btn color="#BF9D7D" block size="large">
          會員登入
        </v-btn>
        <div class="mt-10 font-body">
          <span>沒有會員嗎？</span>
          <nuxt-link to="" class="color-primary text-decoration-underline ml-2">前往註冊</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const rememberMe = ref(true)
</script>

<style scoped lang="stylus">
.member-layout
  background $bg-color
  min-height 100vh
  +over(md)
    display flex
    .pic-palace, .interface
      flex 0 0 50%
  .pic-palace
    width 100%
    background-image url('assets/images/bg-login.jpg')
    background-size cover
    background-position center center
    background-repeat no-repeat
    +under(md)
      display none
.interface
  position relative
  display flex
  align-items center
  justify-content center
  height 100%
  .img-wave
    position absolute
    width 100%
    height 187px
    top 72px
    left 0
    background-image url('assets/images/member-wave.png')
    background-size cover
    background-position center center
    background-repeat no-repeat
    +under(md)
      top 32px
      // height 54px
  .member-board
    color #fff
  .info-field + .info-field
    margin-top 16px

.color-primary 
  color $primary


</style>
