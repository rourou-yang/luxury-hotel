<template>
  <div>
    <header>
      <nuxt-link to="/" class="logo">
        <img src="~/assets/images/logo.svg" alt="享樂酒店">
      </nuxt-link>
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
  height 120px
  background-color $bg-color
  +under(md)
    height 72px
  .logo 
    display block
    width 196px
</style>
