<template>
  <div class="grid grid-cols-2 w-full bg-gray-400 p-5 ">
    <div>
      Logo
    </div>
    <div class="col-span-1">
      <ul class="grid grid-cols-4">
        <li>
          <router-link to="/dashboard">
            Dashboard
          </router-link>
        </li>
        <li>
          <router-link to="/add">
            Add employee
          </router-link>
        </li>
        <li>
          <router-link to="/employes">
            Employees
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
