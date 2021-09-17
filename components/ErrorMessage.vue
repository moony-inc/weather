<template>
  <div
    v-if="errorMessage"
    class="error-message"
  >
    {{ errorMessage }}
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>
.error-message {
  position: absolute;
  top: 180px;
  left: 50%;
  width: fit-content;
  transform: translateX(-50%);
}
</style>
