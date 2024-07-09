<template>
  <div v-if="drawer" class="item-drawer">
    <q-toolbar>
      <q-toolbar-title>{{ title }}</q-toolbar-title>
      <q-btn flat dense round icon="close" @click="closeDrawer" />
    </q-toolbar>
    <q-scroll-area class="fit">
      <!-- Lista de itens TreeItem -->
      <TreeItem
        v-for="(item, index) in sampleTree"
        :key="index"
        :item="item"
        @item-click="handleItemClick"
      />
    </q-scroll-area>

    <!-- Conteúdo das tabs -->
    <div v-if="activeItem">
      <q-tabs v-model="activeTab">
        <q-tab v-for="(tab, tabIndex) in activeItem.content" :key="tabIndex" :label="tab.label" />
      </q-tabs>
      <q-tab-panels v-model="activeTab">
        <q-tab-panel v-for="(tab, tabIndex) in activeItem.content" :key="tabIndex">
          {{ tab.content }}
        </q-tab-panel>
      </q-tab-panels>
    </div>
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
      sampleTree: sampleTree, // Utiliza os dados importados
      activeItem: null, // Item ativo para exibir as tabs
      activeTab: 0 // Índice da tab ativa
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
  methods: {
    closeDrawer() {
      this.drawer = false;
      this.$emit('update:drawer', false);
    },
    handleItemClick(item) {
      if (item.content && item.content.length > 0) {
        this.activeItem = item;
      }
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
