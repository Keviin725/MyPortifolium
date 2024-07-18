<template>
  <div class="tree-item">
    <div class="item-content" @click="handleItemClick" :class="{ 'has-children': item.children && item.children.length > 0 }">
      <img :src="getIconPath(item.icon)" :style="{ color: item.color }" class="item-icon" />
      <span>{{ item.name }}</span>
      <q-icon v-if="item.children && item.children.length > 0" :name="showChildren ? 'keyboard_arrow_down' : 'keyboard_arrow_right'" />
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
        this.$emit('item-click', this.item);
      }
    },
    handleChildClick(child) {
      this.$emit('item-click', child);
    },
    getIconPath(icon) {
      const basePath = '/';
      if (icon.endsWith('.svg') || icon.endsWith('.png')) {
        return `${basePath}${icon}`;
      } else {
        return `${basePath}${icon}.svg`;
      }
    }
  }
};
</script>

<style scoped>
.tree-item {
  margin-left: 10px;
}
.item-content {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.item-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
.children {
  margin-left: 15px;
}
.has-children {
  font-weight: bold;
}
</style>
