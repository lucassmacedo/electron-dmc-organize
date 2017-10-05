import localforage from 'localforage'

localforage.config({
  driver: localforage.WEBSQL,
  name: 'DMC'
})

const equipe = localforage.createInstance({
  name: 'nameHere'
})

const sessions = localforage.createInstance({
  name: 'nameHere2'
})

export default { equipe, sessions }
