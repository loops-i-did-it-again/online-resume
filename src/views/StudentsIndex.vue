<template>
  <div class="students-index">
    <div v-for="student in students">
      <h2>{{student.first_name}} {{student.last_name}}</h2>
      <img :src="student.photo_url" alt="">
      <p>{{student.bio}}</p> <br> <br>
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
        {first_name: "Jack", last_name: "Conroy", bio: "This is my bio. I'm pretty neat", photo_url: "https://images.unsplash.com/photo-1536936812-5cf0e7b62160?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"},
        {first_name: "Sun", last_name: "Shin", bio: "This is my bio. I'm better than Jack", photo_url: "https://images.unsplash.com/photo-1604169326150-95683b17aef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80"},
        {first_name: "Jimmy", last_name: "Wilson", bio: "This is my bio. I'm the absolute best", photo_url: "https://images.unsplash.com/photo-1604160450925-0eecf551fa86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"},
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
