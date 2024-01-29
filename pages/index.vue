<template>
  <div>
    <div class="landing">
      <div class="pic-cover" />
      <div class="layout">
        <div class="watermark">
          <h2 class="bold">享樂酒店</h2>
          <h5 class="bold mt-2">Enjoyment Luxury Hotel</h5>
          <div class="deco-line" />
        </div>
        <div class="main">
          <div class="content">
            <h1 class="bold topic">高雄<br>豪華住宿之選</h1>
            <div class="font-caption slogan mt-6">我們致力於為您提供無與倫比的奢華體驗與優質服務</div>
            <a href="" class="btn-booking">
              <span class="font-title bold">
                立即訂房
                <span class="deco" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="stylus" scoped>
.landing
  position relative
  width 100%
  height 100vh
  &:after
    content ''
    position absolute
    background rgba(0, 0, 0, 0.60)
    width 100%
    height 100%
    top 0
    left 0
  .pic-cover
    position absolute
    width 100%
    height 100%
    background-image url('assets/images/bg-cover.jpg')
    background-size cover
    background-position center center
    background-repeat no-repeat
  .layout
    position relative
    z-index 10
    height 100%
    padding 40px 80px
    +over(md)
      display flex
      align-items center
      justify-content space-between
    +under(md)
      padding 40px 20px
  .watermark
    color $primary
    padding-right 11%
    +under(md)
      margin 0
      padding 40px 20px
      text-align center
    .deco-line
      width 100%
      height 2px
      border-radius 2px
      background linear-gradient(90deg, #BE9C7C 0%, #FFF 100%)
      margin-top 40px
      +under(md)
        width 2px
        height 83px
        margin 20px auto 0
  .main
    width 50%
    padding 96px 20px 96px 0
    border-radius 88px
    border-top 1px solid #F5F7F9
    border-right 1px solid #F5F7F9
    background linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.30) 100%)
    backdrop-filter blur(10px)
    +under(md)
      padding 60px 20px 60px 0
      width calc(100% - 50px)
      margin-left auto
    .content
      margin-left -50px
  .topic
    color #fff
    +over(md)
      font-size 5vw
      letter-spacing 5px
  .slogan
    color $black-40
    +over(md)
      font-size 32px
      line-height 120%
      letter-spacing 1.6px
  .btn-booking
    display block
    padding 40px
    border-radius 8px
    background-color #fff
    margin-top 60px
    transition .3s
    +under(md)
      padding 20px
    &:hover
      background $primary
      color #fff
      .deco
        background #fff
    > span
      width 100%
      display flex
      justify-content flex-end
      align-items center
      gap 16px
      +over(md)
        font-size 24px
        font-style normal
        letter-spacing 1.2px
    .deco
      display block
      width 20%
      background #000
      height 1px
</style>
