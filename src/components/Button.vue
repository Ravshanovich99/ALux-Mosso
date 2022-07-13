<template>
  <div :class="`btn btn-${type}`"
    @click="$emit('langSwitch')"
    >
    <button :class="active">
      {{title}}
    </button>
  </div>
</template>

<script>
export default {
  emits:['langSwitch'],
  props:['title', 'type', 'active'],
}
</script>