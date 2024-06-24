<template>
  <div class="typewriter">
    <h1  v-html="headerText"></h1>
    <h4 class="text-h6" v-html="paragraphText"></h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerText: '',
      paragraphText: '',
      header: ' Passionate Fullstack Developer & Ethical Hacking Enthusiast',
      paragraph: 'My name is Kevin, I am from Maputo and I am attending the 4th year of Computer and Telecommunications Engineering at ISUTC. I am a young person passionate about software development, with tendencies in the areas of artificial intelligence and web security.',
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
</style>
