<template>
  <div class="row">
    <div :key="task.id">
      <h3>{{ task.title }}</h3>
      <p>{{ task.description }}</p>
      <v-img :src="task.imageUrl"></v-img>
      <p>
        <i>{{ task.user.firstName }}, {{ task.user.lastName }}</i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: ["task"]
};
</script>
