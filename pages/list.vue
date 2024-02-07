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
          <h1 class="bold topic">客房旅宿</h1>
        </div>
      </div>
    </div>
    <div class="room-list">
      <div class="web-container">
        <div class="topic">
          <h6 class="bold" style="color: #4B4B4B;">房型選擇</h6>
          <h1 class="bold">各種房型，任您挑選</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>

.landing
  position relative
  width 100%
  height 100vh
  +under(md)
    height 480px
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
    padding 40px 80px
    +over(md)
      display flex
      align-items center
      justify-content center
      gap 80px
      height 100%
    +under(md)
      display flex
      flex-direction column
      justify-content center
      padding 40px 20px
  .watermark
    color $primary
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
    color #fff
    +under(md)
      text-align center
.room-list
  background #F7F2EE
  padding 120px 0 168px
  .topic
    margin-bottom 80px
    +under(md)
      margin-bottom 40px
    h1
      margin-top 16px
      color $primary
      +under(md)
        margin-top 8px
</style>