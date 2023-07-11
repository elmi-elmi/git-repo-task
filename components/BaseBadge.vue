<template>
  <span class="badge" :class="badgeClass">
        <slot/>
  </span>
</template>

<script >
export default {
  name: "BaseBadge",

  props: {
    type: {
      type: String,
      required: false,
      default: 'simple',
      validator(value){
        return ['public', 'private', 'selected', 'simple']
      }
    }
  },

  computed:{
    /**
     * Dynamic badge class
     *
     * @return {{[p: string]: boolean}}
     */
    badgeClass(){
      return {[this.type]: true}
    }
  }

}

</script>


<style lang="scss" scoped>

.badge {
  @apply rounded-[24px] font-bold leading-4;
}

.public {
  @apply  bg-public text-public bg-opacity-15 text-sm px-2 py-1 leading-4;
}

.private {
  @apply  bg-private text-private bg-opacity-15 text-sm px-2 py-1 leading-4;

}

.selected {
  @apply cursor-pointer border border-selected hover:border-selected hover:text-selected   bg-selected bg-opacity-15 text-selected text-base px-3 py-[7px] leading-4;
}

.simple {
  @apply cursor-pointer border border-my-border hover:border-selected hover:text-selected  bg-white text-my-black text-base px-3 py-[7px] leading-4;
}

</style>

