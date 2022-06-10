<script setup>

  
</script>
<template>
<div class="footer_wrapper">
  <footer class="footer container">
    <div class="footer_logo">
      <img src="../assets/images/img_footer/LogoFull.png" alt="logo">
    </div>
    <div class="footer_nav ">
      <a href="#">Navigation</a>
  
      <ul class="footer_links">
        <li><a href="#">About</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Community Guidelines</a></li>

        <li><a href="#">About</a></li>
        <li><a href="#">Talent Solution</a></li>
        <li><a href="#">Privacy & Terms</a></li>

        <li><a href="#">About</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Mobile App</a></li>

        <li><a href="#">About</a></li>
        <li><a href="#">Community Guidelines</a></li>
      </ul>
    </div>

    <div class="footer_access">
      <a href="#">Fast Access</a>
      <button class="questions">QUESTIONS?</button>
      <button class="settings">SETTINGS</button>
    </div>
    <div class="footer_language">
      <a href="#">Language</a>
      <select name="language  " id="lang">
        <option value="eng">English</option>
      </select>
    </div>
  </footer>
</div>

    
</template>

<style lang="sass">
@import '../assets/sass/style'
.footer 
  display: grid
  height: 215px
  grid-template-columns: 6% 41% 15% 23%
  justify-content: space-between
  &_wrapper
    background: $backgroundColor
    margin-top: 20px
    border-top: 1px solid $thirdColor
  div
    margin: 30px 0 53px 0 
  &_nav
    display: grid
    // grid-template-rows: 11px 83px
  &_links
    font-family: $fontRegularSecondary
    display: grid
    grid-template-columns: repeat(3, 1fr)
  &_access
    display: flex
    flex-direction: column
    button
      padding: 8px 15px
      border: 1px solid $secondaryColor
      border-radius: 4px
      background: none
      color: $secondaryColor
      transition: 0.42s
      font-family: $fontMediumMain
    button:hover 
      color: $white
      background: #0275B1
    .questions
      margin-top: 32px
    .settings
      margin-top: 10px
  &_language
    display: flex
    flex-direction: column
    #lang
      font-family: $fontMediumMain
      text-transform: uppercase
      padding: 10px 15px
      margin-top: 23px
      background: $white
      border: 1px solid $white
      border-radius: 4px
</style>
