<template>
  <div class="nav-component">

    <b-navbar class="nav-container" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">
        <span class="headline">Poradenství v oblasti bezpečnosti a kvality potravin</span><br>
        <span class="name">Ing. Veronika Matoušková</span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav pills class="ml-auto navigation">
          <b-nav-item to="/">Poradenská činnost</b-nav-item>
          <b-nav-item to="/reference">Reference</b-nav-item>
          <b-nav-item to="/kontakt">Kontakt</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
