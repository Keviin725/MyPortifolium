<template>
  <div v-if="drawer" class="item-drawer">
    <!-- Conteúdo do drawer -->
    <TreeItem
      v-for="(item, index) in sampleTree"
      :key="index"
      :item="item"
      @item-click="handleItemClick"
    />
  </div>
</template>

<script>
import TreeItem from '../components/TreeItem.vue';
import { sampleTree } from '../data/TreeData';

export default {
  props: {
    value: Boolean
  },
  emits: ['update:drawer', 'open-tab'],
  data() {
    return {
      drawer: this.value,
      sampleTree: sampleTree, // Dados de exemplo importados
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
    handleItemClick(payload) {
      if (payload.action === 'open-tab') {
        // Lógica para abrir uma nova aba com base no item clicado
        const item = payload.item;
        console.log('Abrir aba para:', item);
        // Emitir evento para o componente pai abrir uma nova aba
        this.$emit('open-tab', item);
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
