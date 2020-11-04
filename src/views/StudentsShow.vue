<template>
  <div class="students-show">
    <h1>{{ message }}</h1>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "This is the Students Show page",
    };
  },
  created: function() {},
  methods: {},
};
</script>
