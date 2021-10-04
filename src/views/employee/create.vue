<template>
  <div>
    <craete-edit-form
      v-model="form"
      @submit="submitHandler"
      @edit="submitHandler"
    ></craete-edit-form>
  </div>
</template>

<script>
import formMixin from './formMixin';
export default {
  mixins: [formMixin],
};
</script>
