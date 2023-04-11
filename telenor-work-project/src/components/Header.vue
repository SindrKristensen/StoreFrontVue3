<template>
  <div class="header">
    <RouterLink to="/" class="heading"> My Super Pro Store </RouterLink>

    <nav class="nav_bar">
      <RouterLink to="/">
        <font-awesome-icon class="icon_color" icon="store" size="xl" />
      </RouterLink>

      <RouterLink to="/cart">
        <font-awesome-icon class="icon_color" icon="cart-shopping" size="xl" />
      </RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.heading {
  text-decoration: none;
  color: Black;
}
.heading:hover {
  background-color: rgba(235, 235, 235, 0.64);
}

.nav_bar {
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
}

.icon_color {
  color: hsla(160, 100%, 37%, 1);
}
</style>
