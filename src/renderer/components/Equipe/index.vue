<template>
    <section class="section">
        <div class="container">
            <h1 class="title">
                Equipe
            </h1>
            <h2 class="subtitle">
                Adicione/Remova as pessoas que fazem parte da Equipe
            </h2>
            <div class="content">
                <div class="field has-addons has-addons-centered">
                    <div class="control is-expanded is-clearfix">
                        <a @click="add" class="button is-info pull-right">
                            <i class="fa fa-plus fa-fw">
                            </i>
                        </a>
                    </div>
                </div>
                Novo Membro
                <table class="table">
                    <thead>
                        <tr>
                            <th>
                                Nome
                            </th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>
                                Nome
                            </th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr v-for='(item, index) in data'>
                            <th>
                                {{ item.name }}
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
import { equipe } from '../../datastore'

export default {
  name: 'home',
  data () {
    return {
      showSlashScreen: true,
      data: null
    }
  },
  methods: {
    add (link) {
      this.$dialog.prompt({
        message: `What's your name?`,
        inputMaxlength: 20,
        inputPlaceholder: 'e.g. John Doe',
        onConfirm: (value) => equipe.setItem('name', value)
      })
    }
  },
  mounted () {
    equipe.getItem('name').then((value) => {
      console.log(value)
    })
  }
}
</script>
<style>
    #wrapper {
    background: #ccc;
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    background: #00aeef;
    position:relative;
    height: 100%;
    width:100%;
  } 

  #logo img {
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
  }
</style>
