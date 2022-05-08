<template>
  <nav class="navbar flex">
    <h3 class="big-title">Таск Менеджер</h3>

    <ul class="navbar-menu flex">
      <li><router-link to="/" class="btn-basic">Все задачи</router-link></li>
      <li><router-link to="/new" class="btn-basic">Создать</router-link></li>
    </ul>
  </nav>

</template>

<script>
export default {
  name: 'TheNavbar',
};
</script>

