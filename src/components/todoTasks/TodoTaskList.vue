<template>
  <div>
    <v-card max-width="540" class="mx-auto">
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <TodoTaskItem
              v-for="task in tasks"
              :key="task.id"
              :task="task"
            ></TodoTaskItem>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
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
import TodoTaskItem from "../todoTasks/TodoTaskItem";
import { GET_TASK } from "../../graphql/TaskQuery";

export default {
  name: "TaskList",
  components: {
    TodoTaskItem
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
