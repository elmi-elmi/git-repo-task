<template>
  <div class="w-16 bg-amber-100 w-full" >
    <input class="bg-amber-400" type="text" v-model="user" placeholder="enter your user name">
    <button @click="findUser">search</button>
    <ul>
      <li v-for="result in results" :key="result.id">
        {{result.name}}
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      user:null,
      results: null
    }
  },
  methods: {
    findUser(){
      this.$usersService.getUsers(this.user)
        .then(res=>{
          this.results = res
        })
    }
  }

}
</script>
