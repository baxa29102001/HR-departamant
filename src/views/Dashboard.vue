<template>
  <div>
    <vc-donut
      background="black"
      foreground="grey"
      :size="350"
      unit="px"
      :thickness="10"
      hasLegend
      class="mt-4"
      legendPlacement="bottom"
      :sections="sections"
      :total="100"
    >
      <div class="title">{{ allEmployee }} people</div>
      <div class="text-white mt-2">
        Accounting: {{ departament.Accounting }}
      </div>
      <div class="text-white">Marketing: {{ departament.Marketing }}</div>
      <div class="text-white">IT: {{ departament.IT }}</div>
      <div class="text-white">Average age: {{ age }}</div>
    </vc-donut>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      sections: [
        { label: 'Female', value: 0, color: '#B62727' },
        { label: 'Male', value: 0, color: '#0064E5' },
      ],

      allEmployee: 0,
      male: 0,
      female: 0,
      departament: {
        IT: 0,
        Accounting: 0,
        Marketing: 0,
      },
      age: 0,
    };
  },

  methods: {
    ...mapActions({
      getEmployeeFunction: 'getAllEmployees',
    }),
  },

  created() {
    this.getEmployeeFunction({
      filter: '',
    }).then((res) => {
      const arr = res.arr.map(
        (item) => new Date().getFullYear() - +item.date.slice(0, 4)
      );
      arr.forEach((item) => {
        this.age += item;
      });

      res.arr.forEach((item) => {
        this.departament[item.departament]++;
        if (item.gender === 'male') {
          this.male++;
        } else {
          this.female++;
        }
      });
      this.sections[0].value = this.female;
      this.sections[1].value = this.male;
      this.allEmployee = res.total;
      this.age = this.age / 2;
    });
  },
};
</script>

<style>
.cdc-legend-item {
  color: black !important;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 2.25753px;
}
.title {
  font-size: 34px;
  line-height: 44px;
  color: #ffffff99;
  font-weight: 700;
}
.text {
  font-size: 10px;
  line-height: 16px;
  color: #ffffff99;
  font-weight: 700;
  letter-spacing: 1.5px;
}
</style>
