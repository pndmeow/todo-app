import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: true,
    tasks: [],
  },
  getters: {
    tasksCount: state => {
      return state.tasks.filter(el => !el.completed).length
    },
    getTasks: state => filter => {
      return filter === undefined ? state.tasks : state.tasks.filter(el => el.completed === filter)
    },
    getTheme: state => {
      return state.theme
    }
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push({text: task.text, completed: task.completed})
    },
    CLEAR_COMPLETED(state) {
      state.tasks = state.tasks.filter(task => !task.completed)
    },
    CHANGE_THEME(state, theme) {
      state.theme = !theme
    },
    DELETE_TASK(state, task) {
      state.tasks = state.tasks.filter(el => el !== task)
    }
  },

  actions: {
    ADD_TASK(state, task) {
      state.commit('ADD_TASK', task)
    },
    CLEAR_COMPLETED(state) {
      state.commit('CLEAR_COMPLETED')
    },
    CHANGE_THEME(state, theme) {
      state.commit('CHANGE_THEME', theme)
    },
    DELETE_TASK(state, task) {
      state.commit('DELETE_TASK', task)
    }
  },
  modules: {
  }
})
