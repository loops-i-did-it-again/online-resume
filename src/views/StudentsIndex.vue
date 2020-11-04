<template>
  <div class="students-index">
    <!-- <div v-for="student in students">
      <h2>{{}}</h2>
    </div> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      students: [],
    };
  },
  created: function() {
    this.indexStudents;
  },
  methods: {
    indexStudents: function() {
      axios.get("/api/students").then((response) => {
        console.log(response.data);
        this.students = response.data;
      });
    },
  },
};
</script>
