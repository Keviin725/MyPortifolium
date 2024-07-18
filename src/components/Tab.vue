<template>
  <div>
    <h3>{{ title }}</h3>
    <div>{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
};
</script>
