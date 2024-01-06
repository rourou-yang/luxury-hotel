<template>
  <footer class="web-container footer">
    <div class="top divide-layout">
      <div>
        <nuxt-link to="/" class="logo">
          <img src="~/assets/images/logo.svg" alt="享樂酒店">
        </nuxt-link>
        <div class="social-media">
          <a href="" class="link">
            <img src="~/assets/images/icon-line.png" alt="">
          </a>
          <a href="" class="link">
            <img src="~/assets/images/icon-ig.png" alt="">
          </a>
        </div>
      </div>
      <div class="info divide-layout">
        <div>
          <div class="box">
            <div class="font-title">TEL</div>
            <div class="font-body">+886-7-1234567</div>
          </div>
          <div class="box mt-10">
            <div class="font-title">FAX</div>
            <div class="font-body">+886-7-1234567</div>
          </div>
        </div>
        <div>
          <div class="box">
            <div class="font-title">MAIL</div>
            <div class="font-body">elh@hexschool.com</div>
          </div>
          <div class="box mt-10">
            <div class="font-title">WEB</div>
            <div class="font-body">www.elhhexschool.com.tw</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom divide-layout">
      <address>806023 台灣高雄市新興區六角路123號</address>
      <div class="copyright">© 享樂酒店 2023 All Rights Reserved.</div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped lang="stylus">

.footer
  padding 80px 12px
  background-color $bg-color
  color #fff
  .bottom
    margin-top 80px
    font-weight 500
    letter-spacing 0.32px
  address
    font-style normal
  .logo
    display block
    width 196px
  .social-media
    display flex
    gap 16px
    margin-top 40px
    .link
      width 40px
  .info
    gap 80px
    +under(sm)
      margin-top 40px
      >div + div
        margin-top 40px
  .copyright
    +under(sm)
      margin-top 16px
.divide-layout
  +over(sm)
    display flex
    justify-content space-between

</style>
