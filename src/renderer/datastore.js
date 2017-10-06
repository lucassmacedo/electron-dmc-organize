import localforage from 'localforage'

export const equipe = localforage.createInstance({
  driver: [
    localforage.WEBSQL
  ],
  name: 'DMC-EQUIPE'
})
export default { equipe }
