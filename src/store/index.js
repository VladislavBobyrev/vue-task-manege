import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      tasks: JSON.parse(localStorage.getItem('my-tasks')) ?? []
    }
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)
      localStorage.setItem('my-tasks', JSON.stringify(state.tasks))
    },
    changeTask(state, task) {
      const idx = state.tasks.findIndex(t => t.id === task.id)
      state.tasks[idx] = task
      localStorage.setItem('my-tasks', JSON.stringify(state.tasks))
    },
    deleteTask(state, id)
    {
      state.tasks = state.tasks.filter((item) =>
      {
        return item.id !== id

      })
       localStorage.setItem('my-tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({commit}, task) {
      if (task.date < new Date()) {
        task.status = 'cancelled'
      }
      commit('createTask', task)
    },
    changeTask({commit}, task) {
      commit('changeTask', task)
    },
    deleteTask({commit}, task)
    {
      commit('deleteTask', task)
    },
  },
  getters: {
    activeTasksCount(state) {
      return state.tasks.filter(t => t.status === 'active' || 'pending' ).length
    },
    tasks(state) {
      return state.tasks
    },
    taskById(_, getters) {
      return id => getters.tasks.find(t => t.id === id)
    },
  }
})
