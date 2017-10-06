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
                            </i> Novo Membro
                        </a>
                    </div>
                </div>
                
                <table class="table">
                    <thead>
                        <tr>
                            <th>
                                Nome
                            </th>
                            <th>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='(item, index) in equipes'>
                            <th>
                                {{ item.name }}
                            </th>
                            <th>
                            <button @click="remove(item)" class="button is-danger" v-if="equipes.length > 1">
                                <span class="icon">
                                    <i class="fa fa-trash">
                                    </i>
                                </span>
                            </button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
import localforage from '../../datastore'

export default {
  name: 'home',
  data () {
    return {
      showSlashScreen: true,
      equipes: []
    }
  },
  methods: {
    add (link) {
      this.$dialog.prompt({
        type: 'is-info',
        message: `Nome da pessoa`,
        inputMaxlength: 20,
        inputPlaceholder: 'Nome',
        confirmText: 'Salvar',
        cancelText: 'Cancelar',
        onConfirm: (value) => {
          this.equipes.push({ name: value })
          localforage.setItem('equipe', this.equipes)
        }
      })
    },
    remove: function (item) {
      var index = this.equipes.indexOf(item)
      if (index !== -1) {
        this.equipes.splice(index, 1)
        localforage.setItem('equipe', this.equipes)
      }
    }
  },
  mounted () {
    localforage.getItem('equipe').then((response) => {
      this.equipes = response
    })
  }
}
</script>

