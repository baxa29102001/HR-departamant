<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex justify-center">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 w-10/12">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="p-3">
          <label class="block text-sm font-medium text-gray-500"
            >Departament</label
          >
          <select
            @change="filterHandler"
            class="px-2 w-28 border  rounded-lg mt-1 py-2 focus:outline-none"
            v-model="filter"
          >
            <option value="Accounting">Accounting</option>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
            <option value="">ALL</option>
          </select>
        </div>
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Full name
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Departament
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Gender
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Position
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date of birth
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 px-3 py-3">
              <tr v-for="person in people" :key="person.email">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    {{ person.name }}
                    <div class="text-sm text-gray-500">
                      {{ person.email }}
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">
                    {{ person.departament }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                  >
                    {{ person.gender }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ person.position }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ person.date }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div class="flex items-center">
                    <div>
                      <router-link
                        :to="{ name: 'EDIT', params: { id: person.id } }"
                      >
                        <img
                          src="../assets/edit.png"
                          class="w-8 cursor-pointer"
                          alt=""
                        />
                      </router-link>
                    </div>
                    <div>
                      <img
                        src="../assets/trash.png"
                        class="w-7 cursor-pointer"
                        alt=""
                        @click="deleteEmployee(person.id)"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination
          :total="pagination.total"
          :limit="pagination.limit"
          :value="pagination.offset"
          @change="paginateHandler"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Pagination from '../components/Pagination.vue';

export default {
  data() {
    return {
      people: [],
      filter: '',
      pagination: {
        total: 0,
        limit: 5,
        offset: 1,
      },
    };
  },

  components: {
    Pagination,
  },

  methods: {
    ...mapActions({
      getEmployeeFunction: 'getAllEmployees',
      deleteOneEmployee: 'deleteOneEmployee',
    }),
    paginateHandler(page) {
      this.pagination.offset = page;
      this.getAllEmployee({
        filter: this.filter,
        limit: this.pagination.limit * this.pagination.offset,
        offset:
          this.pagination.limit * this.pagination.offset -
          this.pagination.limit,
      });
    },

    filterHandler() {
      this.getAllEmployee({
        filter: this.filter,
        limit: this.pagination.limit * this.pagination.offset,
        offset:
          this.pagination.limit * this.pagination.offset -
          this.pagination.limit,
      });
    },
    getAllEmployee(params) {
      this.getEmployeeFunction(params).then((res) => {
        this.pagination.total = res.total;
        this.people = res.arr;
      });
    },

    deleteEmployee(id) {
      this.deleteOneEmployee({ id }).then(() => {
        this.getAllEmployee({
          filter: '',
          limit: this.pagination.limit * this.pagination.offset,
          offset:
            this.pagination.limit * this.pagination.offset -
            this.pagination.limit,
        });
      });
    },
  },

  created() {
    this.getAllEmployee({
      filter: '',
      limit: this.pagination.limit * this.pagination.offset,
      offset:
        this.pagination.limit * this.pagination.offset - this.pagination.limit,
    });
  },
};
</script>
