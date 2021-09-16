<template>
  <div class="app-weather">
    <div class="weather-info">
      {{ weatherData }}
    </div>
    <form>
      <label>
        <div class="label">
          Another city?
        </div>
        <input
          v-model="chosenCity"
          class="city-input"
          type="text"
        >
      </label>
      <button @click.prevent="fetchNewWeatherData">
        Yes, please
      </button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  middleware: 'auth',
  data: () => ({
    chosenCity: '',
  }),
  computed: {
    ...mapState({
      user: 'user',
      weatherData: 'weatherData',
    }),
  },
  methods: {
    ...mapActions({
      fetchWeatherData: 'fetchWeatherData',
    }),
    fetchNewWeatherData() {
      this.fetchWeatherData(this.chosenCity);
      this.chosenCity = '';
    },
  },
};
</script>

<style>
.weather-info {
  width: fit-content;
  margin-bottom: 20px;
  font-size: 18px;
}

.label {
  margin-bottom: 10px;
}

.city-input {
  width: 150px;
}
</style>
