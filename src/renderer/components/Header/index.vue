<template>
  <nav class="navbar is-info">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://bulma.io">
          <img src="~@/assets/logodmc.png" alt="Bulma: a modern CSS framework based on Flexbox" >
      </a>

      <div class="navbar-burger burger" data-target="navMenuColorinfo-example">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenuColorinfo-example" class="navbar-menu">
      <div class="navbar-start">


        <router-link class="navbar-item" :to="{ name: 'home'}">Home</router-link>

        <router-link class="navbar-item" :to="{ name: 'directories'}">Converter</router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="#">
            Docs
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item" href="#">
              Overview
            </a>
            <a class="navbar-item" href="http://bulma.io/documentation/modifiers/syntax/">
              Modifiers
            </a>
            <a class="navbar-item" href="http://bulma.io/documentation/columns/basics/">
              Columns
            </a>
            <a class="navbar-item" href="http://bulma.io/documentation/layout/container/">
              Layout
            </a>
            <a class="navbar-item" href="http://bulma.io/documentation/form/general/">
              Form
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item" href="http://bulma.io/documentation/elements/box/">
              Elements
            </a>
            <a class="navbar-item is-active" href="http://bulma.io/documentation/components/breadcrumb/">
              Components
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="bd-tw-button button" target="_blank" href="#">
                <span class="icon">
                  <i class="fa fa-twitter"></i>
                </span>
                <span>
                  Tweet
                </span>
              </a>
            </p>
            <p class="control">
              <a class="button is-primary" href="#">
                <span class="icon">
                <b-icon
                    pack="fa"
                    icon="user">
                </b-icon>
                </span>
                <span>Download</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'header',
    mounted () {
      document.addEventListener('DOMContentLoaded', function () {
        // Get all "navbar-burger" elements
        var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
          // Add a click event on each of them
          $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {
              // Get the target from the "data-target" attribute
              var target = $el.dataset.target
              var $target = document.getElementById(target)

              // Toggle the class on both the "navbar-burger" and the "navbar-menu"
              $el.classList.toggle('is-active')
              $target.classList.toggle('is-active')
            })
          })
        }
      })
    }
  }
</script>
