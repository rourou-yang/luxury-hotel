<template>
  <div class="member-layout">
    <div class="pic-palace" />
    <div class="interface">
      <div class="img-wave" />
      <div class="member-board">
        <div class="font-title color-primary">享樂酒店，誠摯歡迎</div>
        <h1 class="bold mt-2">立即開始旅程</h1>
        <v-form ref="table" class="my-10">
          <div class="info-field">
            <div class="font-title mb-2">電子信箱</div>
            <v-text-field 
              v-model="form.email" 
              :rules="rules.email" 
              variant="solo" 
              placeholder="請輸入電子信箱" 
              hide-details="auto" />
          </div>
          <div class="info-field">
            <div class="font-title mb-2">密碼</div>
            <v-text-field
              v-model="form.password" 
              :rules="rules.password" 
              type="password" 
              variant="solo" 
              placeholder="請輸入密碼" 
              hide-details="auto" />
          </div>
          <div class="info-field d-flex justify-space-between">
            <v-checkbox v-model="rememberMe" color="#BF9D7D" label="記住帳號" hide-details></v-checkbox>
            <nuxt-link to="" class="color-primary text-decoration-underline">忘記密碼？</nuxt-link>
          </div>
        </v-form>
        <v-btn color="#BF9D7D" block size="large" @click="login">
          會員登入
        </v-btn>
        <div class="mt-10 font-body">
          <span>沒有會員嗎？</span>
          <nuxt-link :to="{name: 'signup'}" class="color-primary text-decoration-underline ml-2">前往註冊</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

definePageMeta({
  layout: 'member'
})

const { $swal } = useNuxtApp()
const router = useRouter()

const table = ref()
const form = ref({
  email: '',
  password: '',
})
const rememberMe = ref(true)

const rules = reactive({
  email: [
    (v:string) => !!v || '必填',
    (v: string) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(v) || '信箱格式不正確'
  ],
  password: [
    (v:string) => !!v || '必填',
    (v:string) => v.length >= 8 || '密碼需至少 8 碼以上',
    (v:string) => /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(v) || '密碼需包含英文及數字',
  ],
})

const validate = function() {
  if (table.value) return table.value.validate()
}
const showError = function() {
  $swal.fire({
    title: '尚未完成',
    text: '請填寫所需欄位',
    icon: 'error',
    confirmButtonText: '我知道了'
  })
}
const login = async function() {
  const { valid } = await validate()
  if (valid) {
    const { data, error } = await useFetch('https://freyja-1jf2.onrender.com/api/v1/user/login', 
      { method: 'POST',
        body: { ...form.value },
    })
    if (data.value && data.value.status){
      // success
      await $swal.fire({
        title: '登入成功',
        icon: 'success',
      })
      router.push({name: 'login'})
    } else if (error.value){
      const { data } = error.value
      // failed
      $swal.fire({
        title: data.message,
        icon: 'error',
      })
    }
  } else {
    showError()
  }
}

</script>

<style scoped lang="stylus">
@import "@/assets/styles/member.styl"

</style>
