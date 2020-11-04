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
      students: [
        {first_name: "Jack", last_name: "Conroy", bio: "This is my bio. I'm pretty neat"},
        {first_name: "Sun", last_name: "Shin", bio: "This is my bio. I'm better than Jack"},
        {first_name: "Jimmy", last_name: "Wilson", bio: "This is my bio. I'm the absolute best"},
      ],
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
