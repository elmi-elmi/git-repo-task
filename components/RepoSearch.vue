<template>
  <div class="search">
    <svg
      class="search__icon"
      @click="$emit('search')"
    >
      <use :xlink:href="`${iconsSprite}#search`"></use>
    </svg>
    <input
      v-model="user"
      class="search__input"
      type="text"
      placeholder="Find a repository..."
      @keydown.enter="$emit('search')">
  </div>
</template>

<script>
import iconsSprite from '~/assets/icons.svg'

export  default  {
  name: 'RepoSearch',
  data(){
    return {
      iconsSprite,
      user: null
    }
  },
}
</script>

<style lang="scss" scoped>

.search {
  @apply bg-input-bg h-12 flex space-x-4 items-center p-3 rounded-lg mb-4;

  &__icon {
    @apply w-6 h-6 cursor-pointer;
  }

  &__input {
    @apply bg-inherit w-full outline-0 placeholder-my-black;
  }
}
</style>
