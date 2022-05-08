<template>
  <div class="card" v-if="task">
    <h2 class="mb-1rem"><strong>Заголовок</strong> {{task.title}}</h2>
      <p class="flex gap1 mb-1rem"><strong>Статус</strong><AppStatus :type='task.status'/></p>
      <p class="flex gap1 mb-1rem"><strong>Дэдлайн</strong>{{new Date(task.date).toLocaleDateString() }}</p>
      <p class="flex direction-column mb-2rem"><strong>Описание : </strong>{{ task.description }}</p>
      <div class="flex gap1">
        <button class="btn primary" @click="setStatus('pending')">Взять в работу</button>
        <button class="btn warning " @click="setStatus('done')">Завершить</button>
        <button class="btn danger" @click="setStatus('cancelled')">Отменить</button>
      </div>
  </div>
  <h3 v-else class="title">
     Задачи с id = <strong>{{id}}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from "@/components/AppStatus/AppStatus.vue";
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
export default{
    name: "Task",
    components: { AppStatus },
    props: ['id'],

    setup(props) {
      const store = useStore()

      const id = props.id
  
      const task = computed(() => store.getters.taskById(id))

      const setStatus =   status =>{
        const update = {...task.value, status}
        store.dispatch( 'changeTask', update)
      }

      return {
        task,
        id,
        setStatus
      }
    }
}
</script>