<template>
  <div id="app">
    <header id="header">
      <div class="inner">
        <nav>
          <ul>
            <li><a href="#menu">Menu</a></li>
          </ul>
        </nav>
      </div>
      <nav id="menu">
        <h2>Menu</h2>
        <ul>
          <li><a href="/students">Student Resumes</a></li>
        </ul>
      </nav>
    </header>

    <router-view />
  </div>
</template>

<style></style>
