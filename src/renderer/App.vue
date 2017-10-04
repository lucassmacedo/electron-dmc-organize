<template>
	<div  id="app">
		<router-view name="menuView"></router-view>
		<transition name="fade">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
  export default {
    name: 'dmc-organize'
  }
</script>

<style>
	/*@import "~bulma/css/bulma.css";*/
	@import "~buefy/lib/buefy.css";
	@import "~font-awesome/css/font-awesome.css";
	@import "assets/css/style.css";
</style>
