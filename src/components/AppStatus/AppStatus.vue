<template>
    <span :class="['badge', className]">{{text}}</span>
</template>

<script>
import { watch } from '@vue/runtime-core'
import {ref} from 'vue'
export default {
  name: 'AppStatus',
  props: {
    type:{
      type: String,
      validator(value) {
        return ['active', 'done', 'include', 'cancelled'].includes(value)
      }
    }
  },
  setup(props) {
      const classesMap = {
          active: 'bg-accent',
          cancelled: 'danger',
          done: 'warning',
          pending: 'primary'
      }

      const textMap = {
        active: 'Новая',
        cancelled: 'Отменен',
        done: 'Завершен',
        pending: 'Выполняется'
      }

      const className = ref(classesMap[props.type])
      const text = ref(textMap[props.type])

      watch(props, val => {
        className.value = classesMap[val.type]
        text.value = textMap[val.type]
      })

      return {
        className,
        text, 
      }
  }

}
</script>

<style>

</style>