<template>
  <form>
    <label>
      <div class="label">
        Speak friend and enter
      </div>
      <input v-model="username">
    </label>
    <button @click.prevent="signIn(username)">
      That's me
    </button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    username: '',
  }),
  methods: {
    ...mapActions({
      signIn: 'signIn',
    }),
  },
};
</script>

<style>
.label {
  margin-bottom: 10px;
}
</style>
