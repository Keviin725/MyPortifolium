<template>
  <div v-if="drawer" class="item-drawer">
    <q-toolbar>
      <q-toolbar-title>{{ title }}</q-toolbar-title>
      <q-btn flat dense round icon="close" @click="drawer = false" />
    </q-toolbar>
    <q-scroll-area class="fit">
      <TreeItem v-for="(item, index) in sampleTree" :key="index" :item="item" />
    </q-scroll-area>
  </div>
</template>

<script>
import TreeItem from '../components/TreeItem.vue';
import { sampleTree } from '../data/TreeData';

export default {
  props: {
    value: Boolean,
    title: String
  },
  emits: ['update:drawer'],
  data() {
    return {
      drawer: this.value,
      sampleTree: sampleTree // Utiliza os dados importados
    };
  },
  watch: {
    value(val) {
      this.drawer = val;
    },
    drawer(val) {
      this.$emit('update:drawer', val);
    }
  },
  components: {
    TreeItem
  }
};
</script>

<style scoped>
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
