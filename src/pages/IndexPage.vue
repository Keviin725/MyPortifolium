<template>
  <q-page padding class="bg-dark">
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
      <q-btn icon="fab fa-github" label="GitHub" class="connect-btn" /> <!-- Corrigido o label para GitHub -->
      <q-btn icon="fab fa-php" label="PHP" class="connect-btn" />
      <q-btn icon="fab fa-css3-alt" label="CSS" class="connect-btn" />
      <q-btn icon="fab fa-html5" label="HTML" class="connect-btn" />
    </div>
    <hr>
  </div>



    <div class="works-section">
      <h2>Recent works</h2>

        <q-btn label="All" class="connect-btn"/>
        <q-btn label="Design" class="connect-btn"/>
        <q-btn label="Frontend" class="connect-btn"/>
        <q-btn label="Backend" class="connect-btn"/>
        <q-btn label="Mobile" class="connect-btn"/>

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
    </div>


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
.intro-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2em;
}

*{
  font-family: 'Permanent Marker', cursive;
}

.intro-text {
  max-width: 50%;
  color: white;
  flex-basis: 50%;
}

.intro-text h1 {

  margin-bottom: 1em;
}

.intro-text p {
  font-size: 1.2em;
}

.intro-image {
  flex-basis: 300px; /* Tamanho base fixo para a imagem */
  height: auto; /* Para manter a proporção da imagem */
  display: block; /* Garante que a div é exibida */
}

.intro-image .intro-img-effect {
  width: 100%; /* Faz a imagem preencher a div .intro-image */
  height: auto; /* Mantém a proporção da imagem */
  transition: transform 0.3s ease;
}

.intro-image .intro-img-effect:hover {
  transform: scale(1.05); /* Aumenta a escala em 5% quando hover */
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
  gap: 10px; /* Espaçamento entre os botões */
}


.services-section {
  margin-bottom: 2em;
}

.services-card {
  background-color: #333;
  color: white;
}

.offerings-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
}

.offering {
  text-align: center;
  color: white;
}

.connect-btn {
  border-radius: 15px;
  font-family: 'Permanent Marker', cursive;
  background-color: #000;
  color: #fff;
  transition: all 0.3s ease;
  margin: 5px;
  box-shadow: 0 0 5px rgba(0, 255, 255, 0.3), /* Brilho interno */
              0 0 10px rgba(0, 255, 255, 0.5), /* Brilho médio */
              0 0 20px rgba(0, 255, 255, 0.2), /* Brilho externo */
              0 0 40px rgba(0, 255, 255, 0.2); /* Brilho distante */
}

.connect-btn:hover, .connect-btn:focus {
  box-shadow: 0 0 5px rgba(0, 255, 255, 0.75),
              0 0 10px rgba(0, 255, 255, 0.75),
              0 0 20px rgba(0, 255, 255, 0.75),
              0 0 40px rgba(0, 255, 255, 0.75),
              0 0 80px rgba(0, 255, 255, 0.75); /* Brilho mais intenso para o efeito de hover/focus */
  transform: translate(-1px, -1px); /* Mantém o efeito de movimento */
}

.works-section {
  text-align: center;
  margin-bottom: 2em;
}

.works-section h2 {
  text-align: center;
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

.testimonials-section {
  margin-bottom: 2em;
}

.testimonials-section h2 {
  text-align: center;
  color: white;
  margin-bottom: 1em;
}

.testimonials {
  display: flex;
  justify-content: space-around;
}

.testimonial-card {
  width: 30%;
  background-color: #333;
  color: white;
}
</style>
