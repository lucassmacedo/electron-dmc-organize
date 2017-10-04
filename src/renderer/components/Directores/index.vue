<template>
  <section class="section">
      <b-field position="is-centered">
          <b-input placeholder="Buscar Pasta..." type="search" expanded>
          </b-input>
          <p class="control">
              <button class="button is-info">
                <b-icon
                    pack="fa"
                    icon="folder">
                </b-icon></button>
          </p>
      </b-field>
  </section>
</template>

<script>
  export default {
    name: 'directories',
    mounted () {
      // console.log(2)

      // var doc = { hello: 'world' }

      // this.$db.insert(doc)
      // this.$db.find({}, function (err, docs) {
      //   if (err) {
      //     console.log(err.stack)
      //   }
      //   console.log(docs)
      // })
    }
  }
</script>
