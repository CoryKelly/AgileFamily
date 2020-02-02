<template>
  <div>
    <v-layout row wrap>
      <v-col cols="6" md="4">
        <v-card-title class="red accent-2 white--text">
          <span class="headline">TO-DO</span>
        </v-card-title>
        <TodoTaskList />
      </v-col>

      <v-col cols="6" md="4">
        <v-card-title class="blue white--text">
          <span class="headline">Doing</span>
        </v-card-title>
        <DoingTaskList />
      </v-col>

        <v-col cols="6" md="4">
        <v-card-title class="green white--text">
          <span class="headline">Done</span>
        </v-card-title>
        <DoneTaskList />
        </v-col>
    </v-layout>
  </div>
</template>

<script>
import TodoTaskList from "../todoTasks/TodoTaskList";
import DoingTaskList from "../doingTask/DoingTaskList";
import DoneTaskList from "../doneTask/DoneTaskList";
export default {
  name: "Home",
  components: {
    TodoTaskList,
    DoingTaskList,
    DoneTaskList
  }
};
</script>
