<template>
  <ul class="repo-items" >
    <li v-for="item in items"  :key="item.id" class="repo-item between-border">

      <div class="repo-item__name">
        <div class="flex space-x-0.5 items-center">
          <span class="leading-5">{{item.name}}</span>
          <svg class="w-4 h-4">
            <use :xlink:href="`${iconsSprite}#open`"></use>
          </svg>
        </div>
        <BaseBadge type="public">Public</BaseBadge>
      </div>

      <div class="repo-item__language">
        <span v-if="item.language" class="text-sm font-medium leading-4">{{item.language}}</span>
        <div class="flex items-center gap-1">
          {{toLocaleString(item.stargazers_count)}}
          <svg class="w-4 h-4">
            <use :xlink:href="`${iconsSprite}#stars`"></use>
          </svg>
        </div>

        <div class="repo-item__fork">
          <span>
             {{toLocaleString(item.forks_count)}}
          </span>
          <svg class="w-4 h-4">
            <use :xlink:href="`${iconsSprite}#flow`"></use>
          </svg>
        </div>

        <div class="repo-item__watchers">
          <span>
              {{toLocaleString(item.watchers)}}
          </span>

          <svg class="w-4 h-4">
            <use :xlink:href="`${iconsSprite}#line`"></use>
          </svg>
        </div>

        <span class="repo-item__updated">
          {{getLastTimeUpdate(item.updated_at)}}
        </span>
      </div>
    </li>

  </ul>
</template>

<script>
import {
  getLastTimeUpdate,
  toLocaleString} from "~/utils/helpers";
import iconsSprite from '~/assets/icons.svg'

export  default  {
  name: 'RepoList',

  props: {
    items: {
      type: Array,
      required: true
    }
  },

  data(){
    return {
      iconsSprite
    }
  },

  methods: {
    getLastTimeUpdate,

    toLocaleString

  }
}
</script>

<style lang="scss" scoped>
.repo-items {
  .repo-item {

    &__name {
      @apply flex py-2 items-center  text-base font-bold space-x-4;
    }

    &__language {
      @apply text-base py-2 flex items-center space-x-[28px];
    }

    &__fork {
      @apply flex items-center gap-1;
    }

    &__watchers {
      @apply flex items-center gap-1;
    }

    &__updated {
      @apply text-base  text-my-black-light font-medium leading-4;
    }

  }
}

.between-border{
  &:not(:last-child) {
    @apply  border-b border-my-border;
  }
}
</style>
