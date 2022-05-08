<template>
  <the-navbar/>
  <main class="container">
    <router-view/>
  </main>
</template>

<script>
import '@/style/style_dark.css';

import TheNavbar from '@/components/TheNavbar/TheNavbar';

export default {
  components: {
    TheNavbar,
  },
};
</script>
