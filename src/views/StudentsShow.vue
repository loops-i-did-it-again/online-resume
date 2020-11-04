<template>
  <div class="students-show">
    {{ student }}
    <h1>{{ student.first_name + " " + student.last_name }}</h1>
    <h2>Student Contact Info</h2>
    <p>{{ student.email }}</p>
    <p>{{ student.phone_number }}</p>
    <p>{{ student.bio }}</p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      student: {
        first_name: "Sun",
        last_name: "Shin",
        email: "sunshin@gmail.com",
        phone_number: "123",
        bio: "West Philidelphia Born and Raised",
        linkedin_url: "linkedin.com/in/sunhanshin/",
        twitter_url: "twitter.com",
        personal_url: "sun-shin.github.io",
        resume_url: "resume.com",
        github_url: "github.com/sun-shin",
        photo_url: "https://picsum.photos/200/300",

        experience: [
          {
            start_date: "06/06/2020",
            end_date: "12/12/2020",
            job_title: "Software Developer",
            company_name: "Actualize",
            details: "learned how to code",
          },
        ],
        education: [
          {
            start_date: "06/06/2015",
            end_date: "12/12/2019",
            degree: "Comic Art",
            university: "Harvard University",
            details: "Received high honors for my comic artistry",
          },
        ],
        skill: [
          {
            name: "Vue.js",
          },
        ],
        capstone: {
          name: "Resume-App",
          description: "created application to view student resumes",
          capstone_url: "resume-app.com",
          screenshot_url: "heroku-link.com",
        },
      },
    };
  },
  created: function() {},
  methods: {},
};
</script>
