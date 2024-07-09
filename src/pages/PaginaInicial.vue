<template>
  <q-page padding>
      <typewriter class="typewriter"
        :header="'Meet Kevin Machava, Software Engineer'"
        :paragraph="'Welcome to CodeShowcase, where we specialize in creating visually appealing and interactive portfolio websites to showcase your software engineering expertise.'"
      />
  </q-page>
</template>

<script>
import Typewriter from './Typewriter.vue';
export default {
  components: {
    Typewriter
  }
}
</script>

<style>
 .q-page{
  background-color: rgb(55, 53, 78);;
 }


*{
  font-family: 'Permanent Marker', cursive;
}

.typewriter{
  max-width: 50%;
  color: white;
  flex-basis: 50%;
}

</style>
