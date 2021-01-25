<template>
  <div class="profile">
    <div class="slogan">
      <p>Familiar<br />with<br /><span>novelty</span></p>
      <ul></ul>
    </div>
    <div class="name">
      <p>
        김민상
        <br />
        <span class="eng">Kim Min Sang</span>
        <span class="highlight">Kim Min Sang</span>
      </p>
    </div>
    <div class="career">
      <strong>2014~2017</strong><br />
      B.S in Dept of Computer Software Engineering<br />in Soonchunhyang University.<br /><br />
      <strong>2017~2019</strong><br />
      M.S Course in Dept of Computer Science<br />in Soonchunhyang University.<br /><br />
      <strong>2019~Current</strong><br />
      Software Engineer at CODEMIND<br /><br />
      <br />

      His research interests are in computer graphics,<br />physically-based modeling and simulation,<br />android
      applications, and deep learning
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>
<style scoped lang="scss">
p {
  margin: 0px;
}
.profile {
  transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: 0.9;
  user-select: none;
}
.slogan {
  color: var(--text-color);
  text-align: start;
  font-weight: bold;
  font-size: 64px;
  line-height: 0.8;
  transform: scale(1, 0.9);
  span {
    color: var(--accent);
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: var(--accent);
  }
  margin-bottom: 24px;
}
.name {
  color: var(--text-color);
  text-align: start;
  font-size: 48px;
  line-height: 0.8;
  font-weight: bolder;
  margin-bottom: 32px;
  .eng {
    color: white;
    font-size: 0.5em;
    margin-left: 5px;
  }
  .highlight {
    position: absolute;
    font-size: 0.5em;
    padding: 6px;
    color: var(--accent);
    background: var(--accent);
    z-index: -1;
    margin-left: -164px;
    margin-top: 14px;
  }
}
.career {
  color: var(--text-color);
  text-align: start;
  font-size: 0.8em;
  line-height: 1.2;
  margin-bottom: 20px;
  strong {
    color: var(--accent);
    font-weight: bold;
  }
}
</style>
