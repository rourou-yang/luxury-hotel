<template>
  <footer class="web-container">
    <div class="top">
      <div class="side">
        left
      </div>
      <div class="side divide-layout">
        <div>
          <div class="info"></div>
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
footer
  padding 80px 12px
  background-color #140F0A
  color #fff
  .bottom
    margin-top 80px
    font-weight 500
    letter-spacing 0.32px
  address
    font-style normal
.divide-layout
  display flex
  justify-content space-between
</style>
