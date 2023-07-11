export default $axios => ({
  async getUsers(user) {
    try{
      const data = await $axios.$get(`/users/${user}/repos`);
      return {data, error: null}

    }catch (error) {
      return {data:null, error}
    }
  }
})
