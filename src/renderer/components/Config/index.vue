<template>
    <section class="section">
        <div class="container">
            <h1 class="title">
                Configuração
            </h1>
            <h2 class="subtitle">
                Defina as informações básicas para o funcionamento do sistema
            </h2>
            <div class="content config">

              <form @submit.prevent="onSubmit">

                <b-field grouped>
                 <b-field expanded label="Nome *" >
                    <b-input v-model='form.first_name' required></b-input>
                </b-field>

                <b-field expanded label="Sobrenome *">
                    <b-input v-model='form.last_name' required></b-input>
                </b-field>

                <b-field expanded label="Email *" >
                    <b-input type="email"
                        v-model='form.email' required>
                    </b-input>
                </b-field>
              </b-field>

             <div class="field" >
                  <div class="field-label is-normal">
                      <label class="label">
                          Pasta de destino
                      </label>
                  </div>
                  <div class="field-body">
                      <div class="field has-addons has-addons-centered">
                          <div class="control is-expanded is-clearfix">
                              <b-input type="text" disabled @click.native="findDirectory"
                                placeholder="Buscar Pasta..."
                                v-model="form.directory" required>
                            </b-input>
                          </div>
                          <p class="control">
                              <button @click="findDirectory" class="button is-info" type="button">
                                  <span class="icon">
                                      <i class="fa fa-folder">
                                      </i>
                                  </span>
                              </button>
                          </p>
                      </div>
                  </div>
              </div>
              <p class="help">A pasta selecionada deve (<b>A1 - Fotográfias Digitalizadas</b> ou <b>A1 - Fotográfias Digitais</b>)</p>
              <button class="button is-info" type="submit" :disabled="isDisabled">Salvar</button>
               </form>
            </div>
        </div>
    </section>
</template>
<script>
import localforage from '../../datastore'
export default {
  name: 'config',
  data () {
    return {
      showSlashScreen: true,
      equipes: [],
      form: {
        first_name: '',
        last_name: '',
        email: '',
        directory: ''
      }
    }
  },
  computed: {
    isDisabled () {
      return !this.form.first_name || !this.form.last_name || !this.form.email || !this.form.directory
    }
  },
  methods: {
    findDirectory () {
      const folder = this.$electron.remote.dialog.showOpenDialog({
        properties: ['openDirectory']
      })
      if (!folder) return false
      this.form.directory = folder[0]
    },
    onSubmit: function () {
      localforage.setItem('config', this.form).then(() => {
        this.$toast.open('User agreed')
      })
    }
  },
  beforeMount () {
    localforage.getItem('config', (err, value) => {
      if (err) throw err
      if (value) this.form = value
    })
  }
}
</script>
