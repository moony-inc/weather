<template>
  <div class="weather">
    <div class="weather-info">
      {{ weatherData }}
    </div>
    <form class="city-form">
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
    <button @click="signOut">
      Want out of here
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  middleware: 'weather',
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
      signOut: 'signOut',
    }),
    fetchNewWeatherData() {
      this.fetchWeatherData(this.chosenCity);
      this.chosenCity = '';
    },
  },
};
</script>

<style>
.weather {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.weather-info {
  width: fit-content;
  margin-bottom: 20px;
  font-size: 18px;
}

.city-form {
  margin-bottom: 25px;
}

.label {
  margin-bottom: 10px;
}

.city-input {
  width: 150px;
}
</style>
