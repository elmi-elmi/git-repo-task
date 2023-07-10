<template>
  <span :class="badgeClass">
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
    badgeClass(){
      return {[this.type]: true}
    }
  }

}

</script>


<style lang="scss" scoped>

.public {
  @apply rounded-[24px] bg-public text-public bg-opacity-15 text-sm px-2 py-1 font-bold;
}

.selected {
  @apply border border-selected  rounded-[24px] bg-selected bg-opacity-15 text-selected text-base px-3 py-[7px] font-bold;
}

.private {
  @apply rounded-[24px] bg-private text-private bg-opacity-15 text-sm px-2 py-1 font-bold;

}

.simple {
  @apply border border-my-border rounded-[24px] bg-white text-my-black text-base px-3 py-[7px] font-bold;
}

</style>

