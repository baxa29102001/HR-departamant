import Vue from 'vue';
import Vuex from 'vuex';
import instance from '../plugins/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    createEmpolyee(_, data) {
      return instance.post('/employess.json', data);
    },
    getAllEmployees(_, params) {
      return instance.get('/employess.json').then((res) => {
        let list = [];
        Object.keys(res.data).forEach((key) => {
          list.push({
            ...res.data[key],
            id: key,
          });
        });

        if (params.filter) {
          list = list.filter((item) => item.departament === params.filter);
        }
        const arr = list.slice(params.offset, params.limit);
        return {
          arr,
          total: list.length,
        };
      });
    },

    deleteOneEmployee(_, { id }) {
      return instance.delete(`/employess/${id}.json`).then((res) => res.data);
    },

    getOneEmpoyee(_, { id }) {
      return instance.get(`/employess/${id}.json`).then((res) => res.data);
    },

    patchOneEmpoyee(_, { id, data }) {
      return instance
        .patch(`/employess/${id}.json`, data)
        .then((res) => res.data);
    },
  },
  modules: {},
});
