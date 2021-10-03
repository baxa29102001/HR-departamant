<template>
      <div class="grid grid-cols-12">
        <div class="col-span-4"></div>
           <div class="col-span-4">
        <!-- <form @submit.prevent=""> -->
            <div class="bg-gray-100">
             <div class="p-3" v-if="value.err">
               <p class="text-white bg-red-400 p-3 rounded-lg" >{{value.err}}</p>
             </div>
             <div class="p-3" v-if="value.goodres">
               <p class="text-white bg-green-300 p-3 rounded-lg" >{{value.goodres}}</p>
             </div>
                <div class="p-3">
                  <label class="block text-sm font-medium" :class="`${value.name.validate ? 'text-red-500':'text-gray-500'}`">Full name</label>
                  <input @blur="value.name.listener.blur" type="text" class=" focus:outline-none px-2 w-full rounded-lg mt-1 py-1" v-model="value.name.value" />
                </div>
                <div class="p-3">
                  <label  class="block text-sm font-medium " :class="`${value.position.validate ? 'text-red-500':'text-gray-500'}`">Position</label>
                  <input @blur="value.position.listener.blur" type="text" class="focus:outline-none px-2 w-full rounded-lg mt-1 py-1" v-model="value.position.value" />
                </div>
              <div class="p-3">
                <label  class="block mb-2" :class="`${value.position.validate ? 'text-red-500':'text-gray-500'}`">Gender</label>
                 <div class="flex items-center">
                  <div class="flex items-center mr-3">
                  <input v-model="value.gender.value" value="male"  type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                    <label  class="ml-3 block text-sm font-medium text-gray-700">
                      Male
                    </label>
                </div> 
                <div class="flex items-center">
                  <input v-model="value.gender.value" value="female"   type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                    <label  class="ml-3 block text-sm font-medium text-gray-700">
                      Female
                    </label>
                </div>
              </div>
              </div>
                <div class="p-3" >
                  <label  class="block text-sm font-medium " :class="`${value.departament.validate ? 'text-red-500':'text-gray-500'}`">Departament</label>
                  <select @blur="value.departament.listener.blur" class="px-2 w-full rounded-lg mt-1 py-2 focus:outline-none" v-model="value.departament.value">
                    <option value="Accounting" >Accounting</option>
                    <option value="IT">IT</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                </div>
                <div class="p-3">
                  <label  class="block text-sm font-medium " :class="`${value.departament.validate ? 'text-red-500':'text-gray-500'}`">Date of birth</label>
                  <input max="2021-12-31" @blur="value.date.listener.blur" type="date" class="focus:outline-none px-2 w-full rounded-lg mt-1 py-1" v-model="value.date.value" />
                </div>
            </div>
            <div class="px-4 py-3 bg-gray-200 text-right sm:px-6">
              <button type="submit" @click="$emit('submit')" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
              </button>
            </div>
        <!-- </form> -->
            </div>
        <div class="col-span-4"></div>
      </div>
</template>

<script>
export default {
  props: {
     value: {
      type: Object,
      default: () => ({})
    }

  },

  model:{
    prop: 'value',
    event:'change'
  },

  

  created(){
    console.log(this.value)
  }
}
</script>