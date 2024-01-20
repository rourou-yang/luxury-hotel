<template>
  <div class="member-layout">
    <div class="pic-palace" />
    <div class="interface">
      <div class="img-wave" />
      <div class="member-board">
        <div class="font-title color-primary">享樂酒店，誠摯歡迎</div>
        <h1 class="bold mt-2">立即註冊</h1>

        <div class="steps">
          <div class="step flash">
            <div class="circle">1</div>
            <div class="font-title">輸入信箱及密碼</div>
          </div>
          <div class="divider" />
          <div class="step">
            <div class="circle">2</div>
            <div class="font-title">填寫基本資料</div>
          </div>
        </div>

        <v-form ref="table">
          <template v-if="currentStep === 1">
            <div class="my-10">
              <div class="info-field">
                <div class="font-title mb-2">電子信箱</div>
                <v-text-field 
                  v-model="form.email" 
                  :rules="rules.email" 
                  variant="solo" 
                  placeholder="hello@example.com" 
                  required hide-details="auto" />
              </div>
              <div class="info-field">
                <div class="font-title mb-2">密碼</div>
                <v-text-field 
                  v-model="form.password" 
                  :rules="rules.required" 
                  type="password" 
                  variant="solo" 
                  placeholder="請輸入密碼" 
                  hide-details="auto" />
              </div>
              <div class="info-field">
                <div class="font-title mb-2">確認密碼</div>
                <v-text-field 
                  v-model="passwordConfirm" 
                  :rules="rules.passwordConfirm" 
                  type="password" 
                  variant="solo" 
                  placeholder="請再輸入一次密碼" 
                  hide-details="auto" />
              </div>
            </div>
            <v-btn color="#ECECEC" block size="x-large" @click="next">
              下一步
            </v-btn>
          </template>

          <template v-if="currentStep === 2">
            <div class="my-10">
              <div class="info-field">
                <div class="font-title mb-2">姓名</div>
                <v-text-field
                  v-model="form.name"
                  :rules="rules.required" 
                  variant="solo" 
                  placeholder="請輸入姓名" 
                  hide-details="auto" />
              </div>
              <div class="info-field">
                <div class="font-title mb-2">手機號碼</div>
                <v-text-field 
                  v-model="form.phone"
                  :rules="rules.required" 
                  variant="solo" 
                  placeholder="請輸入手機號碼" 
                  hide-details="auto" />
              </div>
              <div class="info-field">
                <div class="font-title mb-2">生日</div>
                <v-text-field 
                  v-model="form.birthday"
                  :rules="rules.required" 
                  type="date" 
                  variant="solo" 
                  hide-details="auto"/>
              </div>
              <div class="info-field">
                <div class="font-title mb-2">地址</div>
                <v-row class="mb-4">
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-select
                      v-model="selectedCity"
                      :items="cityOptions"
                      variant="solo"
                      hide-details="auto"
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-select
                      v-model="selectedArea"
                      :items="areaOptions"
                      item-title="AreaName"
                      item-value="ZipCode"
                      returnObject
                      variant="solo"
                      hide-details="auto"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-text-field variant="solo" placeholder="請輸入詳細地址" hide-details="auto" />
              </div>
              <div class="info-field">
                <v-checkbox label="我已閱讀並同意本網站個資使用規範" color="#fff" />
              </div>
            </div>
            <v-btn color="#BF9D7D" block size="x-large" @click="submit">
              完成註冊
            </v-btn>
          </template>
        </v-form>

        <div class="mt-10 font-body">
          <span>已經有會員了嗎？</span>
          <nuxt-link :to="{name: 'login'}" class="color-primary text-decoration-underline ml-2">立即登入</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { ISignupForm } from '~/types/member'
import CityCountyData from '~/public/cityCountyData.json'

definePageMeta({
  layout: 'member'
})

const { $swal } = useNuxtApp()

const currentStep = ref(2)
const table = ref()
const form = ref<ISignupForm>({
  name: '',
  email: '',
  password: '',
  phone: '',
  birthday: '',
  address: {
    zipcode: null,
    detail: '',
  },
})
const passwordConfirm = ref()
const selectedCity = ref<string>('')
const selectedArea = ref<object>({})

const cityOptions = computed(() => {
  return CityCountyData.map(item => item.CityName)
})
const areaOptions = computed(() => {
  if (!selectedCity.value) return []
  return CityCountyData.find(item => {
    return item.CityName === selectedCity.value
  })?.AreaList
})

const rules = reactive({
  required: [ (v:string) => !!v || '必填' ],
  email: [
    (v:string) => !!v || '必填',
    (v: string) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(v) || '信箱格式不正確'
  ],
  passwordConfirm: [
    (v:string) => !!v || '必填',
    (v: string) => (v === form.value.password) || '密碼不一致',
  ]
})

const next = async function() {
  const { valid } = await validate()
  if (valid) {
    currentStep.value ++
  } else {
    showError()
  }
}
const submit = async function() {
  const { valid } = await validate()
  if (valid) {
    // 
  } else {
    showError()
  }
}
const validate = function() {
  if (table.value) return table.value.validate()
}
const showError = function() {
  $swal.fire({
    title: '尚未完成',
    text: '請檢查資料及格式是否正確',
    icon: 'error',
    confirmButtonText: '我知道了'
  })
}

onMounted(() => {
  selectedCity.value = CityCountyData[0].CityName
  selectedArea.value = CityCountyData[0].AreaList[0]
})

</script>

<style scoped lang="stylus">
@import "@/assets/styles/member.styl"

.member-board
  margin 85px auto
.steps
  display flex
  align-items center
  padding 16px 0
  .step
    color #909090
    text-align center
    .circle
      display flex
      align-items center
      justify-content center
      width 32px
      height 32px
      border-radius 50%
      margin-bottom 4px
      border 1px solid #909090
      margin 0 auto 4px
    &.flash
      color #fff
      .circle
        background $primary
        border-color $primary
  .divider
    flex 1 1 0
    margin 0 8px
    height 2px
    background #909090
    border-radius 10px

</style>
