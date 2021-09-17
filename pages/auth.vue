<template>
  <form>
    <label>
      <div class="label">
        Speak friend and enter
      </div>
      <input
        v-model="username"
        @input="clearErrorMessage"
      >
    </label>
    <button @click.prevent="signInLocal">
      That's me
    </button>
    <ErrorMessage :error-message="errorMessage" />
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    username: '',
    errorMessage: '',
  }),
  methods: {
    ...mapActions({
      signIn: 'signIn',
    }),
    signInLocal() {
      this.signIn(this.username).catch(error => {
        this.errorMessage = error.message;
      });
    },
    clearErrorMessage() {
      this.errorMessage = '';
    },
  },
};
</script>

<style>
.label {
  margin-bottom: 10px;
}
</style>
