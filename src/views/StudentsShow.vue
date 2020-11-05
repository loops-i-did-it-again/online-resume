<template>
  <div class="students-show">
    <h1>{{ student.first_name + " " + student.last_name }}</h1>
    <img :src="student.photo_url" alt="" />
    <h2>Student Contact Info</h2>
    <p>{{ student.email }}</p>
    <p>{{ student.phone_number }}</p>
    <p>{{ student.bio }}</p>
    <p>{{ student.linkedin_url }}</p>
    <p>{{ student.twitter_url }}</p>
    <p>{{ student.personal_url }}</p>
    <p>{{ student.resume_url }}</p>
    <p>{{ student.github_url }}</p>

    <h2>Experience</h2>
    <div v-for="experience in student.experiences">
      <p>Job Title: {{ experience.job_title }}</p>
      <p>
        Worked there from {{ experience.start_date }} to
        {{ experience.end_date }}
      </p>
      <p>Company: {{ experience.company_name }}</p>
      <p>Details: {{ experience.details }}</p>
    </div>

    <h2>Education</h2>
    <div v-for="education in student.educations">
      <p>School: {{ education.university }}</p>
      <p>
        Dates attended: {{ education.start_date }} to {{ education.end_date }}
      </p>
      <p>Degree: {{ education.degree }}</p>
      <p>{{ education.details }}</p>
    </div>

    <h2>Skills</h2>
    <div v-for="skill in student.skills">
      {{ skill.name }}
    </div>

    <h2>Capstone Projects</h2>
    <div v-for="capstone in student.capstones">
      <p>Name: {{ capstone.name }}</p>
      <p>Description: {{ capstone.description }}</p>
      <p>URL: {{ capstone.capstone_url }}</p>
      <img :src="capstone.screenshot_url" alt="" />
    </div>
  </div>
</template>

<template>
  <twitter>
    <a class="twitter-timeline" href="https://twitter.com/JasonIsbell"
      >Tweets</a
    >
  </twitter>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      student: {},
      // student: {
      //   first_name: "Sun",
      //   last_name: "Shin",
      //   email: "sunshin@gmail.com",
      //   phone_number: "123",
      //   bio: "West Philidelphia Born and Raised",
      //   linkedin_url: "linkedin.com/in/sunhanshin/",
      //   twitter_url: "twitter.com",
      //   personal_url: "sun-shin.github.io",
      //   resume_url: "resume.com",
      //   github_url: "github.com/sun-shin",
      //   photo_url: "https://picsum.photos/200/300",

      //   experiences: [
      //     {
      //       start_date: "06/06/2020",
      //       end_date: "12/12/2020",
      //       job_title: "Software Developer",
      //       company_name: "Actualize",
      //       details: "learned how to code",
      //     },
      //   ],
      //   educations: [
      //     {
      //       start_date: "06/06/2015",
      //       end_date: "12/12/2019",
      //       degree: "Comic Art",
      //       university: "Harvard University",
      //       details: "Received high honors for my comic artistry",
      //     },
      //   ],
      //   skills: [
      //     {
      //       name: "Vue.js",
      //     },
      //   ],
      //   capstones: [
      //     {
      //       name: "Resume-App",
      //       description: "created application to view student resumes",
      //       capstone_url: "resume-app.com",
      //       screenshot_url: "heroku-link.com",
      //     },
      //   ],
      // },
    };
  },
  created: function() {
    axios.get(`/api/students/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.student = response.data;
    });
  },
  methods: {},
};
</script>
