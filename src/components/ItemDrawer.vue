<template>
  <div v-if="drawer" class="item-drawer">
    <q-toolbar>
      <q-toolbar-title>{{ title }}</q-toolbar-title>
      <q-btn flat dense round icon="close" @click="drawer = false" />
    </q-toolbar>
    <q-scroll-area class="fit">
      <q-list>
        <q-item clickable v-ripple v-for="(item, index) in items" :key="index">
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
    title: String,
    items: {
      type: Array,
      required: true
    }
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

<style scoped>
.item-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: #1e1e3f;
  z-index: 1000;
  color: #b6b2b2;
}
.q-scroll-area {
  background-color: #2a2139;
}
.q-toolbar {
  background-color: #1e1e3f;
  color: #b6b2b2;
}

.q-item {
  color: #b6b2b2;
  background-color: #1e1e3f;
}
.q-item:hover {
  background-color: #333;
}
</style>
