<template>
  <div>
    <v-card class="ma-3" color="#2196F3" :key="task.id" dark>
      <div class="d-flex wrap justify-space-between">
        <div>
          <v-card-title class="headline">{{ task.title }}</v-card-title>
          <v-card-subtitle>{{ task.description }}</v-card-subtitle>
        </div>
        <v-avatar class="ma-3" size="120" tile>
          <v-img :src="task.imageUrl"></v-img>
        </v-avatar>
      </div>

      <v-card-actions>
        <v-list-item-avatar color="grey darken-1">
          <v-img class="elevation-6" :src="task.user.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title
            >{{ task.user.firstName }},
            {{ task.user.lastName }}</v-list-item-title
          >
        </v-list-item-content>
        <v-chip v-if="task.task_complete" class="ma-2" color="green" label
          >Done</v-chip
        >
        <v-chip v-else class="ma-2" color="red" label>To-Do</v-chip>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "DoneTaskItem",
  data() {
    return {
      completeChip: true
    };
  },
  props: ["task"]
};
</script>
