<template>
  <div class="flex mt-4 mb-2 mx-0 items-center justify-center">
    <div
      class="mr-1"
      :class="{ 'hover-cursor': cValue > 1 }"
      @click="emitPage(cValue - 1)"
    >
      <!-- <icon name="chevron-left"></icon> -->
    </div>

    <div
      v-for="item in totalCount"
      :class="[
        'ba-pagination-number',
        { active: cValue === +item, 'ba-pagination-number-disabled': loading },
      ]"
      :key="item"
      @click="emitPage(item)"
    >
      {{ item }}
    </div>

    <div
      class="ml-1"
      :class="{ 'hover-cursor': cValue !== totalCount }"
      @click="emitPage(cValue + 1)"
    >
      <!-- <icon name="chevron-right"></icon> -->
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    loading: {
      type: Boolean,
    },
    total: {
      // total count
      type: [Number, String],
      default: () => 0,
    },
    limit: {
      // per page
      type: Number,
      default: () => 10,
    },
    btnCount: {
      // size of slice
      type: [Number, String],
      default: () => 3,
    },

    value: {
      // page number
      type: [Number, String],
      default: () => -1,
    },
    navigate: {
      // use $router.push ?
      type: Boolean,
      default: () => false,
    },
  },

  computed: {
    totalCount() {
      return Math.ceil((+this.total || 0) / (+this.limit || 10));
    },

    cValue() {
      return +this.value || 0;
    },
  },

  methods: {
    emitPage(pageNumber) {
      if (
        pageNumber <= 0 ||
        pageNumber > this.totalCount ||
        pageNumber == this.value ||
        this.totalCount == 1
      ) {
        return;
      }

      this.$emit('change', pageNumber);

      if (this.navigate) {
        this.$router.push({
          query: {
            ...this.$router.query,
            page: pageNumber,
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.ba-pagination-number {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  color: #006400;
  background-color: #fff;
  border: 2px solid #006400;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  margin-right: 4px;
  cursor: pointer;
}

.ba-pagination-number.active {
  cursor: default;
  background-color: #006400;
  color: #fff;
}
</style>
