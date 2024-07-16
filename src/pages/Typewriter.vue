<template>
  <div class="typewriter">
    <h2 v-html="headerText"></h2>
    <p class="text-h6" v-html="paragraphText"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerText: '',
      paragraphText: '',
      header: 'Software Engineer & Web Security Enthusiast',
      paragraph:'I am a young person passionate about software development, with tendencies in the areas of artificial intelligence and web security. I am a curious, creative and determined person. I always seek to improve myself and learn new things.'
    };
  },

  mounted() {
    this.typeWriter('headerText', this.header, 100);
    setTimeout(() => {
      this.typeWriter('paragraphText', this.paragraph, 50);
    }, (this.header.length * 100) + 1000);
  },
  methods: {
    typeWriter(dataKey, text, delay) {
      let i = 0;
      const cursorHtml = '<span class="cursor">|</span>'; // Representação HTML do cursor
      const interval = setInterval(() => {
        if (i < text.length) {
          this[dataKey] = this[dataKey].replace(/<span class="cursor">\|<\/span>/, ''); // Remove o cursor do final do texto atual
          this[dataKey] += text.charAt(i) + cursorHtml; // Adiciona o próximo caractere e o cursor
          i++;
        } else {
          clearInterval(interval);
          this[dataKey] = this[dataKey].replace(/<span class="cursor">\|<\/span>/, ''); // Remove o cursor ao final da digitação
        }
      }, delay);
    },
},
};
</script>

<style scoped>

.cursor {
  animation: blink-caret .75s step-end infinite;
}

@keyframes blink-caret {
  from, to { color: transparent; }
  50% { color: orange; }
}

h2{
  font-size: 4.5em;
  margin-bottom: 1em;
}


</style>
