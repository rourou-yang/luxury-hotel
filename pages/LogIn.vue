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

definePageMeta({
  layout: 'member'
})

const rememberMe = ref(true)
</script>

<style scoped lang="stylus">
@import "@/assets/styles/member.styl"

</style>
