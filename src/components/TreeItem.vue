<template>
  <div class="tree-item">
    <div class="item-content" @click="handleItemClick" :class="{ 'has-children': item.children && item.children.length > 0 }">
      <img :src="getIconPath(item.icon)" :style="{ color: item.color }" class="item-icon" />
      <span>{{ item.name }}</span>
      <q-icon name="keyboard_arrow_down" v-if="item.children && item.children.length > 0 && showChildren" />
      <q-icon name="keyboard_arrow_right" v-else-if="item.children && item.children.length > 0 && !showChildren" />
    </div>
    <div v-if="showChildren && item.children && item.children.length > 0" class="children">
      <TreeItem v-for="(child, index) in item.children" :key="index" :item="child" @item-click="handleChildClick(child)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showChildren: false
    };
  },
  methods: {
    handleItemClick() {
      if (this.item.children && this.item.children.length > 0) {
        this.showChildren = !this.showChildren;
      } else {
        // Se não tiver children, emitir o evento item-click com o próprio item
        this.$emit('item-click', this.item);
      }
    },
    handleChildClick(child) {
      this.$emit('item-click', child);
    },
    getIconPath(icon) {
      // Determina o caminho base para os ícones
      const basePath = '/';

      // Verifica se o ícone é SVG ou PNG e retorna o caminho correspondente
      if (icon.endsWith('.svg') || icon.endsWith('.png')) {
        return `${basePath}${icon}`;
      } else {
        // Assume que é um nome de ícone padrão sem extensão
        return `${basePath}${icon}.svg`; // Pode ajustar para .png se preferir PNG
      }
    }
  }
};
</script>

<style scoped>
.tree-item {
  margin-left: 10px; /* Ajuste conforme necessário */
}
.item-content {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.item-icon {
  width: 24px; /* Ajuste o tamanho do ícone conforme necessário */
  height: 24px; /* Ajuste o tamanho do ícone conforme necessário */
  margin-right: 8px; /* Espaçamento entre o ícone e o nome */
}
.children {
  margin-left: 5px; /* Ajuste conforme necessário */
}
.has-children {
  font-weight: bold;
}
</style>
