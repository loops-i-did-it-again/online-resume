<template>
  <div class="students-show">
    <!-- <h1>{{student.}}</h1> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      student: [
        {
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
        },
        {
          start_date: "06/06/2020",
          end_date: "12/12/2020",
          job_title: "Software Developer",
          company_name: "Actualize",
          details: "learned how to code",
        },
        {
          start_date: "06/06/2015",
          end_date: "12/12/2019",
          degree: "Comic Art",
          university: "Harvard University",
          details: "Received high honors for my comic artistry",
        },
        {
          name: ["Vue.js", "Javascript"],
        },
        {
          name: "Resume-App",
          description: "created application to view student resumes",
          capstone_url: "resume-app.com",
          screenshot_url: "heroku-link.com",
        },
      ],
    };
  },
  created: function() {},
  methods: {},
};
</script>
