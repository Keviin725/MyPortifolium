<template>
  <q-page padding>
    <section class="intro-section">
      <div class="intro-text">
        <typewriter
          :header="'Meet Kevin Machava, Software Engineer'"
          :paragraph="'Welcome to CodeShowcase, where we specialize in creating visually appealing and interactive portfolio websites to showcase your software engineering expertise.'"
        />
      </div>
      <div class="intro-image">
        <q-img src="perfil.jpg" alt="Portfolio Designs" class="intro-img-effect" />
      </div>
    </section>

    <section class="center-container">
      <hr />
      <div class="tech-buttons">
        <q-btn v-for="tech in techs" :key="tech.label" :icon="tech.icon" :label="tech.label" class="connect-btn" />
      </div>
      <hr />
    </section>

    <section>
      <h2 class="section-title">Recent Works</h2>
      <div class="works-section">
        <swiper
          :slides-per-view="4"
          space-between="20"
          navigation
          :loop="true"
          :breakpoints="{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }"
          class="swiper-container"
        >
          <swiper-slide v-for="(work, index) in works" :key="index" class="work-card">
            <q-card>
              <q-card-section>
                <q-img :src="work.img" :alt="work.title" class="work-img" />
                <p class="work-title">{{ work.title }}</p>
              </q-card-section>
            </q-card>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </q-page>
</template>

<script>
import Typewriter from './Typewriter.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  name: 'IndexPage',
  components: {
    Typewriter,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      techs: [
        { icon: 'fab fa-java', label: 'Java' },
        { icon: 'fab fa-js', label: 'JavaScript' },
        { icon: 'fab fa-vuejs', label: 'VueJS' },
        { icon: 'fab fa-node-js', label: 'NodeJs' },
        { icon: 'fab fa-python', label: 'Python' },
        { icon: 'fab fa-laravel', label: 'Laravel' },
        { icon: 'fab fa-github', label: 'GitHub' },
        { icon: 'fab fa-php', label: 'PHP' },
        { icon: 'fab fa-css3-alt', label: 'CSS' },
        { icon: 'fab fa-html5', label: 'HTML' },
      ],
      works: [
        { img: '1.png', title: 'Elegant Portfolio Website' },
        { img: '1.png', title: 'Elegant Portfolio Website' },
        { img: '1.png', title: 'Elegant Portfolio Website' },
        { img: '1.png', title: 'Elegant Portfolio Website' },
        { img: '1.png', title: 'Elegant Portfolio Website' },
      ],
    }
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
  position: relative;
}

.intro-text {
  max-width: 50%;
  flex: 1;
  height: 600px; /* Defina uma altura fixa */
  overflow: hidden; /* Esconde o texto que ultrapassa a altura */
}

.intro-image {
  flex: 0 0 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  filter: grayscale(100%);
}

.intro-img-effect {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.section-title {
  font-size: 2em;
  text-align: center;
  margin: 1em 0;
}

.works-section {
  text-align: center;
  margin-bottom: 2em;
  display: flex;
  justify-content: center;
}

.swiper-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.work-card {
  text-align: center;
  background-color: #444;
  color: white;
  border-radius: 10px;
}

.work-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.work-title {
  font-size: 1.2em;
  margin-top: 0.5em;
}

.swiper-button-next,
.swiper-button-prev {
  color: white;
}
</style>
