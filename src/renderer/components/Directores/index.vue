<template>
    <section class="section convert">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Converter Fotos
                </h1>
                <h2 class="subtitle">
                    Selecione as pastas que contenham as fotos que deseja conveter/otimizar
                </h2>
            </div>
        </div>

        <div class="columns">
            <div class="column">
              <div class="field has-addons has-addons-centered">
                    <div class="control is-expanded is-clearfix">
                        <a @click="addDirectory" class="button is-info pull-right">
                            <i class="fa fa-refresh fa-fw"></i>
                            </i>
                           Converter
                        </a>
                    </div>
                </div>

                <div :key="direcory.key" class="field is-horizontal bd-notification is-light" v-for="(direcory, index) in directories">
                    <div class="field-label is-normal">
                        <label class="label">
                            Fotos
                        </label>
                    </div>
                    <div class="field-body">
                        <div class="field has-addons has-addons-centered">
                            <div class="control is-expanded is-clearfix">
                                <input :disabled="direcory.value !== ''" @click="findDirectory(direcory, index)" class="input is-info" placeholder="Buscar Pasta..." type="search" v-model="direcory.value" webkitdirectory="">
                                </input>
                            </div>
                            <p class="control">
                                <button @click="findDirectory(direcory, index)" class="button is-info">
                                    <span class="icon">
                                        <i class="fa fa-folder">
                                        </i>
                                    </span>
                                </button>
                            </p>
                        </div>

                        <button @click="removeDirectory(direcory)" class="button is-danger" v-if="directories.length > 1">
                            <span class="icon">
                                <i class="fa fa-trash">
                                </i>
                            </span>
                        </button>

                        <div class="field field-label is-normal is-text-left">
                            <div class="count-files-directory" v-if="direcory.files">
                                {{ direcory.files.length }} {{ direcory.files.length === 1 ? 'Foto' : 'Fotos' }} - 
                                {{ sizeFiles(direcory.files) }}
                            </div>
                            <div v-else="">
                                Selecione uma pasta
                            </div>
                        </div>

                    </div>
                </div>
                <div class="field has-addons has-addons-centered">
                    <div class="control is-expanded is-clearfix">
                        <a @click="addDirectory" class="button is-success pull-right">
                            <i class="fa fa-plus fa-fw">
                            </i>
                            Nova Pasta
                        </a>
                        <a class="button is-info is-outlined pull-left">
                        {{ directories.length }} {{ directories.length === 1 ? 'Pasta' : 'Pastas' }} - {{ sizeFolders(directories) }} </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
  // const filters = [
  //   { name: 'Images', extensions: ['jpg', 'png'] }
  // ]
  import walkSync from 'walk-sync'
  import filesize from 'filesize'

  // const fs = require('fs')
  export default {
    name: 'directories',
    data () {
      return {
        directories: [
          {
            key: 1,
            value: '',
            files: null
          }
        ],
        direcory: null,
        files: null
      }
    },
    methods: {
      findDirectory (direcory, index) {
        const folder = this.$electron.remote.dialog.showOpenDialog({
          properties: ['openDirectory']
        })
        if (!folder) return false
        this.directories[index].value = folder[0]

        this.directories[index].files = walkSync.entries(folder, { globs: ['*.png', '*.jpg', '*.jpeg'], ignore: ['subdir'], directories: false })
      },
      addDirectory: function () {
        var last = this.directories.slice(-1).pop()

        this.directories.push({
          key: last.key + 1,
          value: ''
        })
      },
      removeDirectory: function (item) {
        var index = this.directories.indexOf(item)
        if (index !== -1) {
          this.directories.splice(index, 1)
        }
      },
      sizeFiles: function (item) {
        return filesize(item.reduce((a, b) => a + b.size, 0))
      },
      sizeFolders: function (directories) {
        let total = 0
        directories.forEach((elem) => {
          if (elem.files) {
            total += elem.files.reduce((a, b) => a + b.size, 0)
          }
        })
        return filesize(total)
      }
      // wachtFiles () {
      //   const direcory = this.$electron.remote.dialog.showOpenDialog({
      //     properties: ['openDirectory']
      //   }, function (path) {
      //     if (path) {
      //       fs.readdir('.', (err, files) => {
      //         if (err) {
      //           throw err
      //         }
      //         for (let file of files) {
      //           console.log(file)
      //         }
      //       })
      //     } else {
      //       console.log('No path selected')
      //     }
      //   })
      //   this.direcory = direcory
      // }
    },
    mounted () {
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
