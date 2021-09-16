export const state = () => ({
  user: null,
  weatherData: '',
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setWeatherData(state, data) {
    state.weatherData = data;
  },
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('fetchWeatherData', 'Kharkiv');
  },
  async fetchWeatherData({ commit }, city) {
    const weatherData = await this.$axios.$get(`http://wttr.in/${city}?format=3`);

    commit('setWeatherData', weatherData);
  },
  async signIn({ commit, dispatch }, username) {
    try {
      const { data: { user } } = await this.$axios.get('/auth.json');

      if (username === user.name) {
        commit('setUser', user);
        await dispatch('fetchWeatherData', user.city);
        this.$router.push('/weather');
      }
    } catch (error) {
      console.log(error.message);
    }
  },
};
