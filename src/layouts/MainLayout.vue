<template>
  <q-layout>
    <q-header class="bg-dark">
      <q-toolbar>
        <q-toolbar-title>
          <q-img src="2-nobg.png" width="80px" alt="Kevin Machava" class="logo"/>
        </q-toolbar-title>
        <q-btn flat label="Home" @click="goTo('')" class="connect-btn" style="margin-right: 10px;" />
        <q-btn flat label="Projects" @click="goTo('projects')" class="connect-btn" style="margin-right: 10px;" />
        <q-btn flat label="About" @click="goTo('about')" class="connect-btn" style="margin-right: 10px;" />
        <q-btn flat label="Contact" @click="goTo('contact')" class="connect-btn" style="margin-right: 10px;" />
        <q-space />
        <q-btn flat label="Connect" class="connect-btn" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-dark text-white">
      <div>
        <q-toolbar-title>Kevin Machava - Soft. Engineer, Web Security</q-toolbar-title>
        <p>Showcasing Coding Mastery.</p>
      </div>
      <div>
        <q-btn-group flat>
          <q-btn icon="fab fa-facebook-f" />
          <q-btn icon="fab fa-twitter" />
          <q-btn icon="fab fa-linkedin-in" />
        </q-btn-group>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  methods: {
    goTo(page) {
      this.$router.push(`/${page}`);
    },
  },
};
</script>

<style scoped>
.logo {
  height: 40px;
  margin-right: 20px;
  border-radius: 15px;
}
.connect-btn {
  border-radius: 15px;
  font-family: 'Permanent Marker', cursive;
  background-color: #000;
  color: #fff;
  transition: all 0.3s ease;
  position: relative; /* Necessário para o efeito de sombra */
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
.footer-content {
  display: flex;
  justify-content: space-between;
  padding: 1em;
}

.footer-links {
  display: flex;
  gap: 1em;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
}
</style>
