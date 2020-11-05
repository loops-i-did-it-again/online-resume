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

      <router-view />

      <footer id="footer">
        <div class="inner">
          <section>
            <h2>Follow</h2>
            <ul class="icons">
              <li>
                <a href="#" class="icon brands style2 fa-twitter"
                  ><span class="label">Twitter</span></a
                >
              </li>
            </ul>
          </section>
          <ul class="copyright">
            <li>&copy; Untitled. All rights reserved</li>
            <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>

<style></style>
