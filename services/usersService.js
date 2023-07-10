export default $axios => ({
  getUsers(user) {
    return $axios.$get(`/users/${user}/repos`)
  }
})
