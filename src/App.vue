<template>
  <div id="app">
    <div id="wrapper">
      <header id="header">
        <div class="inner">
          <a href="index.html" class="logo">
            <span class="symbol"><img src="images/logo.svg" alt=""/></span
            ><span class="title">Student Resumes</span>
          </a>
          <h3>Come see our catalog of student resumes!</h3>
          <nav>
            <ul>
              <li><a href="#menu">Menu</a></li>
            </ul>
          </nav>
        </div>
        <nav id="menu">
          <h2>Menu</h2>
          <ul>
            <li>
              <router-link :to="`/students`">Student Resumes</router-link>
            </li>
          </ul>
        </nav>
      </header>
      <nav id="menu">
        <h2>Menu</h2>
        <ul>
          <li><a href="/students">Student Resumes</a></li>
        </ul>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style></style>
