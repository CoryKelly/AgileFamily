<template>
  <div>
    <TaskItem v-for="task in tasks" :key="task.id" :task="task"></TaskItem>
  </div>
</template>

<style scoped>
.list-of-movies {
  display: flex;
  justify-content: center;
}
.movie-item {
  margin: 0 10px;
}
</style>

<script>
import TaskItem from "./TaskItem.vue";
import { GET_TASK } from "../../graphql/TaskQuery";

export default {
  name: "TaskList",
  components: {
    TaskItem
  },
  data() {
    return {
      tasks: []
    };
  },
  apollo: {
    tasks: {
      query: GET_TASK
    }
  }
};
</script>
