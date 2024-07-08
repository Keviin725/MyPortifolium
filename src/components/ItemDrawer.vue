<template>
  <div v-if="drawer" class="item-drawer">
    <q-toolbar>
      <q-toolbar-title>{{ title }}</q-toolbar-title>
      <q-btn flat dense round icon="close" @click="drawer = false" />
    </q-toolbar>
    <q-scroll-area class="fit">
      <slot></slot>
    </q-scroll-area>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
    title: String
  },
  emits: ['update:drawer'],
  data() {
    return {
      drawer: this.value
    }
  },
  watch: {
    value(val) {
      this.drawer = val
    },
    drawer(val) {
      this.$emit('update:drawer', val)
    }
  }
}
</script>

<style>
.item-drawer {
  position: fixed;
  top: 30px;
  left: 50px;
  width: 300px;
  height: 100vh;
  background-color: #f5f5f5;
  z-index: 1000;
}
</style>
