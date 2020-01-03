<template lang="pug">
  div.bg(id="app")
    navigation
    .container
      home
      services
      about
      contact
    page-footer
</template>

<script>
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Services from './components/Services';
import PageFooter from './components/Footer';

export default {
  components: {
    Home,
    About,
    Contact,
    Navigation,
    Services,
    PageFooter,
  },
};
</script>

<style lang="scss" scoped>
  .bg {
    height: 100vh;
    background-image: url('./assets/images/bg.jpg');
  }
  .container {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  @media (min-width: 576px) {
    .container {
      width: 100%;
      max-width: 100% !important;
    }
  }
  @media (min-width: 768px) {
    .container {
      width: 100%;
      max-width: 100% !important;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 900px !important;
    }
  }
  @media (min-width: 1140px) {
    .container {
      max-width: 1100px !important;
    }
  }
  @media (min-width: 1440px) {
    .container {
      max-width: 1400px !important;
    }
  }
  @media (min-width: 1650px) {
    .container {
      max-width: 1600px !important;
    }
  }
</style>
