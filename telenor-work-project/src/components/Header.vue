<template>
  <div class="header">
    <div>My Super Pro Store</div>
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

.nav_bar {
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
}

.icon_color {
  color: hsla(160, 100%, 37%, 1);
}
</style>
