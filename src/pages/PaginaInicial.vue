<template>
  <q-page padding>
    <div class="intro-section">
      <div class="intro-text">
        <typewriter
          :header="'Meet Kevin Machava, Software Engineer'"
          :paragraph="'Welcome to CodeShowcase, where we specialize in creating visually appealing and interactive portfolio websites to showcase your software engineering expertise.'"
        />
      </div>
      <div class="intro-image">
        <q-img src="perfil.jpg" alt="Portfolio Designs" class="intro-img-effect" />
      </div>
    </div>

    <div class="center-container">
      <hr>
      <div class="tech-buttons">
        <q-btn icon="fab fa-java" label="Java" class="connect-btn" />
        <q-btn icon="fab fa-js" label="JavaScript" class="connect-btn" />
        <q-btn icon="fab fa-vuejs" label="VueJS" class="connect-btn" />
        <q-btn icon="fab fa-node-js" label="NodeJs" class="connect-btn" />
        <q-btn icon="fab fa-python" label="Python" class="connect-btn" />
        <q-btn icon="fab fa-laravel" label="Laravel" class="connect-btn" />
        <q-btn icon="fab fa-github" label="GitHub" class="connect-btn" />
        <q-btn icon="fab fa-php" label="PHP" class="connect-btn" />
        <q-btn icon="fab fa-css3-alt" label="CSS" class="connect-btn" />
        <q-btn icon="fab fa-html5" label="HTML" class="connect-btn" />
      </div>
      <hr>
    </div>

    <h2>Recent works</h2>
    <!---<div class="works-section">
      <div class="filter-buttons">
        <q-btn label="All" class="connect-btn" />
        <q-btn label="Design" class="connect-btn" />
        <q-btn label="Frontend" class="connect-btn" />
        <q-btn label="Backend" class="connect-btn" />
        <q-btn label="Mobile" class="connect-btn" />
      </div>
      <div class="works q-pa-md">
        <q-card class="work-card">
          <q-card-section>
            <q-img src="1.png" alt="Work 1" />
            <p>Elegant Portfolio Website</p>
          </q-card-section>
        </q-card>
        <q-card class="work-card">
          <q-card-section>
            <q-img src="2.png" alt="Work 2" />
            <p>Software Engineer</p>
          </q-card-section>
        </q-card>
        <q-card class="work-card">
          <q-card-section>
            <q-img src="3.png" alt="Work 3" />
            <p>App Development</p>
          </q-card-section>
        </q-card>
      </div>
    </div>-->
  </q-page>
</template>

<script>
import Typewriter from './Typewriter.vue';

export default {
  name: 'IndexPage',
  components: {
    Typewriter
  }
}
</script>

<style scoped>
* {
  color: white;
  background-color: rgb(55, 53, 78);
  font-family: 'Permanent Marker', cursive;
}

.intro-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2em;
  position: relative; /* Garante que a posição dos elementos filhos seja relativa à seção */
}

.intro-text {
  max-width: 60%;
  flex: 1; /* Garante que o texto ocupe todo o espaço disponível */
}

.intro-image {
  flex: 0 0 300px; /* Tamanho fixo para a imagem */
  height: 300px; /* Garante que a altura seja a mesma que a largura */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%; /* Torna a imagem circular */
  overflow: hidden; /* Garante que a imagem não ultrapasse os limites do contêiner */
  filter: grayscale(100%); /* Aplica um filtro de escala de cinza */
}

.intro-img-effect {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Garante que a imagem cubra todo o contêiner */
}

.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tech-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.connect-btn {
  border-radius: 15px;
  font-family: 'Permanent Marker', cursive;
  background-color: #000;
  color: #fff;
  transition: all 0.3s ease;
  margin: 5px;

}


.works-section {
  text-align: center;
  margin-bottom: 2em;
}

.works-section h2 {
  color: white;
  margin-bottom: 1em;
}

.works {
  display: flex;
  justify-content: space-around;
}

.work-card {
  width: 30%;
  background-color: #333;
  color: white;
}
</style>
