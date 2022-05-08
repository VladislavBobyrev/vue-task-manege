<template>
  <form class="card" @submit.prevent="submit">
    <h1 class="title text-center mb-2rem">Создать новую задачу</h1>
    <div class="form-control flex mb-1rem">
      <label for="title" >Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control flex mb-1rem">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control flex mb-1rem">
      <label for="description">Описание</label>
      <input type="text" id="description" v-model="description">
    </div>

    <button class="btn-basic" :disabled="!isValid">Создать</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'

export default {
  name: 'New',
  setup() {
    const store = useStore()
    const router = useRouter()
    const title = ref('')
    const description = ref('')
    const date = ref(null)

    const submit = () => {
      const newTask = {
          id: Date.now().toString(),
          title: title.value,
          date: new Date(date.value).setHours(23,59,59,999),
          description: description.value,
          status: 'active'
      }
      store.dispatch('createTask', newTask)
      router.push('/')
    }

    const isValid = computed(()=> {
      return title.value != '' &&
      date.value && description.value !== ''
    })

    return {
        submit, title, date, description, isValid
    }
  }
}
</script>

<style>

</style>