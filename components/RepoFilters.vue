<template>
  <div class="filters ">
    <svg class="filters__icon">
      <use :xlink:href="`${iconsSprite}#filter`"></use>
    </svg>

    <span class="filters__label">Filter</span>

    <BaseBadge  :type="filter === 'all'? 'selected': 'simple'"  @click.native="$emit('filter', 'all') ">All</BaseBadge>
    <BaseBadge  :type="filter === 'public'? 'selected': 'simple'" @click.native="$emit('filter', 'public') ">Public</BaseBadge>
    <BaseBadge  :type="filter === 'private'? 'selected': 'simple'" @click.native="$emit('filter', 'private') ">Private</BaseBadge>
  </div>
</template>

<script>
import iconsSprite from '~/assets/icons.svg'
import BaseBadge from "~/components/BaseBadge.vue";

export  default  {
  name: 'RepoFilters',
  components: {BaseBadge},

  props: {
    filter: {
      type: String,
      default: 'all'
    },
    disabled: {
      type: Boolean,
    }
  },

  data(){
    return {
      iconsSprite,
    }
  },

}
</script>

<style lang="scss" scoped>
.filters {
  @apply flex space-x-2 items-center mb-3;

  &__icon {
    @apply w-6 h-6;
  }

  &__label {
    @apply text-sm text-my-black font-medium leading-5;
  }
}
</style>
