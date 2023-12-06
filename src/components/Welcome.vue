<script setup>
import { ref } from 'vue'
defineProps({
  msg: String,

})

const count = ref(0)
const mode = ref(import.meta.env.VITE_VUE_APP_SECRET);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>
      Edit
      <code>components/Welcome.vue</code> project mode <b>{{mode}}</b>
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
