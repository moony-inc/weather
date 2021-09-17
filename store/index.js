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

  // auth
  async signIn({ commit, dispatch }, username) {
    const { data: { users } } = await this.$axios.get('/auth.json');
    const user = users.find(user => user.name === username);

    if (user) {
      commit('setUser', user);
      await dispatch('fetchWeatherData', user.city);
      this.$router.push('/weather');
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      throw new Error('No such user');
    }
  },
  signOut({ commit }) {
    commit('setUser', null);
    this.$router.push('/');
    localStorage.removeItem('user');
  },

  // weather api
  async fetchWeatherData({ commit }, city) {
    const weatherData = await this.$axios.$get(`http://wttr.in/${city}?format=3`);

    commit('setWeatherData', weatherData);
  },
};
