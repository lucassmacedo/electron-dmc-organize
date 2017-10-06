import localforage from 'localforage'

localforage.config({
  driver: localforage.WEBSQL,
  name: 'DMC-ORGANIZE'
})
export default localforage
