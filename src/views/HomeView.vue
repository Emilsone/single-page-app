<template>
  <div class="home">
    <TodoApp />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoApp from "@/components/TodoApp.vue.js";

export default {
  name: "HomeView",
  components: {
    TodoApp,
  },
};
</script>
