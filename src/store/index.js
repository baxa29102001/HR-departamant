import Vue from 'vue'
import Vuex from 'vuex'
import instance from '../plugins/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    createEmpolyee(_,data){
      return instance.post('/employess.json',data)
    },
    getAllEmployees(){
      return instance.get('/employess.json').then(res => {
        const list = []
        Object.keys(res.data).forEach(key => {
          list.push({
            ...res.data[key],
            id:key
          })
        })
        return list
      })
    },

    deleteOneEmployee(_,{id}){
      console.log(id)
      return instance.delete(`/employess/${id}.json`).then(res => res.data)
    }
  },
  modules: {
  }
})
