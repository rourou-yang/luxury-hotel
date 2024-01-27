export const useMainStore = defineStore('main', () => {
  const token = useCookie('token')
  
  const isLogin = computed(() => {
    return Boolean(token.value)
  })

  const logout = function () {
    token.value = null
  }

  return {
    token,
    isLogin,
    logout,
  }
})