<template>
  <div class="students-index">
    <div v-for="student in students">
      <img :src="student.photo_url" alt="">
      <h2>{{student.first_name}} {{student.last_name}}</h2>
      <p>{{student.bio}}</p>
    </div>
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
