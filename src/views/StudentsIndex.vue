<template>
  <div id="main">
    <div id="inner">
      <div class="students-index">
        <input
          type="text"
          v-model="nameFilter"
          placeholder="Search by name"
          list="names"
        />
        <datalist id="names">
          <option v-for="student in students"
            >{{ student.first_name }} {{ student.last_name }}</option
          >
        </datalist>

        <div
          v-for="student in orderBy(
            filterBy(students, nameFilter, 'last_name', 'first_name'),
            'last_name'
          )"
        >
          <article class="style1">
            <span class="image">
              <img src="" alt="" />
            </span>
            <a href="generic.html">
              <h2>{{ student.first_name }} {{ student.last_name }}</h2>
              <router-link :to="`/students/${student.id}`">
                <img :src="student.photo_url" alt="" />
              </router-link>
              <p>{{ student.bio }}</p>
              <div class="content"></div>
            </a>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],

  data: function() {
    return {
      // students: [
      //   {first_name: "Sun", last_name: "Shin", bio: "This is my bio. I'm better than Jack", photo_url: "https://images.unsplash.com/photo-1604169326150-95683b17aef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80"},
      //   {first_name: "Jack", last_name: "Conroy", bio: "This is my bio. I'm pretty neat", photo_url: "https://images.unsplash.com/photo-1536936812-5cf0e7b62160?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"},
      //   {first_name: "Jimmy", last_name: "Wilson", bio: "This is my bio. I'm the absolute best", photo_url: "https://images.unsplash.com/photo-1604160450925-0eecf551fa86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"},
      // ],
      students: [],
      nameFilter: [],
    };
  },
  created: function() {
    this.indexStudents();
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
