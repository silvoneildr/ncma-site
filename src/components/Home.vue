<template lang="pug">
  div(id="home")
    carousel
</template>

<script>
import Carousel from './Carrousel';

export default {
  name: 'Home',

  components: {
    Carousel,
  },

  data() {
    return {
    };
  },
};
</script>

<style scoped>
  .slidesHeight {
    height: 589px;
    background-color: #424a52;
    padding: 0;
  }

  .slidesHeight.p-2 {
    padding: 0 !important;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .p-2 {
    padding: 0 !important;
  }

  /* footer {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  } */

  .topHeight {
    height: 97px;
  }

  @media (min-width: 768px) {
    .slidesHeight.p-2 {
      padding: 0 !important;
    }
  }

</style>
