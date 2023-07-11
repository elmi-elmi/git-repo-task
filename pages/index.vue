<template>
  <div class="get-repo">
    <h1 class="get-repo__title">Repository</h1>
    <div class="get-repo__body" >
      <div class="body-content">

        <repo-filters :filter="filter" @filter="filter = $event"/>
        <repo-search @search="findUsers"/>
        <repo-list v-if="results.length" :items="filteredItems" />

      </div>

    </div>
  </div>

</template>

<script>
import RepoList from "~/components/RepoList.vue";
import iconsSprite from '~/assets/icons.svg'
import RepoFilters from "~/components/RepoFilters.vue";
import RepoSearch from "~/components/RepoSearch.vue";
export default {
  name: 'IndexPage',

  components:{
    RepoList,
    RepoFilters,
    RepoSearch,
  },

  data(){
    return {
      results: [],
      filter: 'all',
      iconsSprite,
      user: null
    }
  },

  computed:{
    /**
     * Filter repository base on filter
     * @return {Array}
     */
    filteredItems() {
      if(!this.results.length) {
        return []
      }
       if (this.filter === "private") {
        return this.results.filter((item) => item.private === true);
      } else if (this.filter === "public") {
        return this.results.filter((item) => item.private === false);
      }
      return this.results;
    },

  },

  methods: {
    /**
     * Fetch users
     *
     * @returns {Object}
     */
    async findUsers($event){
      if(!$event) {
        this.results = []
        return
      }
      const {data, error} = await this.$usersService.getUsers($event)
      if(error && error.status !== 404) {
        this.$nuxt.error({statusCode: error.status, message: 'This is an example for error'})
      } else {
        this.results = data
      }
    },
  }

}
</script>

<style lang="scss" scoped >

.get-repo {
  @apply container mx-auto mt-16;

  &__title {
    @apply text-[32px] font-extrabold px-8 mb-6 leading-10;
  }

  &__body {
    @apply min-h-[400px] w-full border rounded-[16px] p-8;
  }
}

</style>
