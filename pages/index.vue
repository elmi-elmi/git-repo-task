<template>
  <div class="w-16  w-full" >
    <input v-model="user" class="bg-amber-400" type="text" placeholder="enter your user name">
    <button @click="findUser">search</button>
    <ul>
      <li v-for="result in results" :key="result.id">
        {{result.name}}
      </li>
    </ul>
    <svg class="icon">
      <use :xlink:href="`${iconsSprite}#Search`"></use>
    </svg>
    <BaseBadge type="public">Public</BaseBadge>
    <BaseBadge type="private">Private</BaseBadge>
    <BaseBadge type="simple">Public</BaseBadge>
    <BaseBadge type="selected">All</BaseBadge>
  </div>

</template>

<script>
import BaseBadge from "~/components/BaseBadge.vue";

import iconsSprite from '~/assets/icons.svg'
export default {
  name: 'IndexPage',

  components:{BaseBadge},

  data(){
    return {
      user:null,
      results: null,
      iconsSprite
    }
  },

  methods: {
    /**
     * Fetch users
     *
     * @returns {Object}
     */
    findUser(){
      this.$usersService.getUsers(this.user)
        .then(res=>{
          this.results = res
        })
    }
  }

}
</script>
