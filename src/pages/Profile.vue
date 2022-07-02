<script setup>

</script>
<template>
    <div class="main__wrapper">
      <div class="profile">
        <div class="profile_info">
          <div class="info_background">
            <div class="info_edit_bar">
              <a href="#"><img src="../assets/images/img_profile/upload.png" alt="upload"></a>
              <a href="#"><img src="../assets/images/img_profile/edit.png" alt="edit"> EDIT PROFILE</a>
            </div>
          </div>
          <div class="info_context">
            <div class="info_avatar">

            </div>
            <div class="info_text">
              <div class="info_text_header">
                <div class="info_text_header_left">
                  <h1>Dmitry Kargaev</h1>
                  <a href="#"><img src="../assets/images/img_profile/Logo.png" alt="logo"></a> 
                </div>
                <div class="info_text_header_right">
                  <a href="#"><img src="../assets/images/img_profile/navigation.png" alt="nav"></a>
                  <p>Saint Petersburg, Russian Federation</p>
                </div>
              </div>
              <p>Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.</p>
              <div class="info_buttons">
                <button>Contact info</button>
                <button>1,043 connections</button>
              </div>
            </div>
          </div>
        </div>

        <div class="profile_nav">
          <ul>
            <li class="activelink">Profile</li>
            <li>Activity & interests</li>
            <li>Articles (3)</li>
          </ul>
        </div>

        <div class="profile_about">
            <h1>About</h1>
            <p>I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites. </p>
            <a href="#">See more</a>
        </div>

        <div class="profile_projects">
          <div class="profile_projects_header">
            <h1>Projects</h1>
            <p><a href="#">3</a> of <a href="#">12</a></p>
          </div>
          <div class="profile_projects_items">
            <div class="profile_projects_item">
              <img src="../assets/images/img_profile/ext.png" alt="ext.png">
              <h2>Zara redesign concept</h2>
              <p>UX/UI design, 15.07.2019</p>
            </div>

            <div class="profile_projects_item">
              <img src="../assets/images/img_profile/ext.png" alt="ext.png">
              <h2>Zara redesign concept</h2>
              <p>UX/UI design, 15.07.2019</p>
            </div>

            <div class="profile_projects_item">
              <img src="../assets/images/img_profile/ext.png" alt="ext.png">
              <h2>Zara redesign concept</h2>
              <p>UX/UI design, 15.07.2019</p>
            </div>
          </div>
          <a href="#" class="show_all">Show all <p>(12)</p></a> 
        </div>

        <div class="profile_skills">
          <h1>Skills & Endoresments</h1>
          <div class="profile_skills_items">
            <div class="profile_skills_item">
              <div class="profile_skills_item_header">
                <h2>User experience (UX)</h2>
                <a href="#" id="count">6</a>
              </div>

              <div class="profile_skills_item_people">
                
              </div>
            </div>

            <div class="profile_skills_item">
              <div class="profile_skills_item_header">
                <h2>User experience (UX)</h2>
                <a href="#" id="count">6</a>
              </div>

              <div class="profile_skills_item_people">
                
              </div>
            </div>

            <div class="profile_skills_item">
              <div class="profile_skills_item_header">
                <h2>User experience (UX)</h2>
                <a href="#" id="count">6</a>
              </div>

              <div class="profile_skills_item_people">
                
              </div>
            </div>
          </div>
          <a href="#" class="show_all">Show ALL <p>(17)</p></a>
        </div>

        <div class="profile_experiance">
          <h1>Experience</h1>
          <div class="profile_experiance_item">
            <img src="../assets/images/img_profile/Group.png" alt="img">
            <div class="profile_experiance_content">
              <h2>Freelance UX/UI designer</h2>
              <div class="profile_experiance_description">
                <p>Self Employed</p>
                <p>Around the world</p>
              </div>
              <div class="profile_experiance_description">
                <p>Jun 2016 — Present</p>
                <p>3 yrs 3 mos</p>
              </div>
              <p>Work with clients and web studios as freelancer.  Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.</p>
            </div>
          </div>

          <div class="profile_experiance_item">
            <img src="../assets/images/img_profile/Group2png.png" alt="img">
            <div class="profile_experiance_content">
              <h2>UX/UI designer</h2>
              <div class="profile_experiance_description">
                <p>Self Employed</p>
                <p>Around the world</p>
              </div>
              <div class="profile_experiance_description">
                <p>Jun 2016 — Present</p>
                <p>3 yrs 3 mos</p>
              </div>
              <p>New experience with Upwork system. Work in next areas: UX/UI design, graphic design, interaction design, UX research.</p>
            </div>
          </div>
        </div>

        <div class="profile_education">
          <h1>Education</h1>
          <div class="profile_education_item">
            <img src="../assets/images/img_profile/Group3.png" alt="img">
            <div class="profile_education_content">
              <h2>Moscow State Linguistic University</h2>
              <p>Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assurance</p>
              <p>2013 — 2017</p>
              <p>Additional English classes and UX profile courses​.</p>
            </div>
            
          </div>
        </div>
      </div>
      <aside class="asideNavRight"></aside>
    </div>
</template>

<style lang="sass" scoped>
@import '../assets/sass/style'
.main__wrapper
  @include asideRight
@mixin flex_block
  display: flex
  flex-direction: column
  justify-content: space-evenly
  padding: 0 30px
  background: $white
  margin-top: 20px
  box-shadow: 0px 20px 60px rgba(241, 244, 248, 0.5)
  border-radius: 4px
p 
  font-size: 14px
  font-height: 150%
.show_all 
    display: flex
    font-size: 12px
    line-height: 11px
    text-transform: uppercase
    color: $secondaryColor 
button 
  border: 1px solid $secondaryColor
  border-radius: 4px
  background: none
  color: $secondaryColor
  transition: 0.42s
  font-family: $fontMediumMain
button:hover 
    color: $white
    background: $secondaryColor
.profile
  display: grid
  grid-auto-columns: 1fr
  grid-template-rows: 360px 50px 170px minmax(355px,100%) 220px 345px 195px
  &_info
    background: $white
    margin-bottom: 20px
  &_nav
    border-bottom: 1px solid $thirdColor
    ul
      display: grid
      grid-template-columns: repeat(3, 240px)
      height: 100%
      align-items: end
      li
        display: flex
        align-items: center
        justify-content: center
        height: 80%
        border: 1px solid $thirdColor
        border-radius: 4px
        background: none
        transition: 0.42s
        font-family: $fontMediumMain
        text-transform: uppercase
        cursor: pointer
      .activelink
        color: $white
        height: 100%
        background: $secondaryColor
  &_about 
    @include flex_block
    a 
      font-size: 12px
      line-height: 11px
      text-transform: uppercase
      color: $secondaryColor 
  &_projects 
    @include flex_block
    &_header
      display: flex
      p
        margin-left: 15px
        font-size: 18px 
        line-height: 17px 
        color: #747474
        display: flex
        width: 58px
        justify-content: space-between
        a
          font-size: 18px
          line-height: 17px
          color: #747474
    &_items
      @include flex_beetwen
      flex-flow: wrap
    &_item
      width: 100%
      max-width: 250px
      min-height: 216px
      @include flex_beetwen
      flex-direction: column
  &_skills
    @include flex_block
    &_items
      @include flex_beetwen
      flex-flow: wrap
    &_item
      width: 100%
      max-width: 250px
      min-height: 80px
      @include flex_beetwen
      flex-direction: column
      padding: 14px 20px 16px 20px
      border: 1px solid #F4F4F4
      border-radius: 6px
      &_header
        display: flex
        justify-content: space-between
      &_people
        width: 100px
        height: 24px
        background: gray
  &_experiance
    @include flex_block
    &_item
      display: grid
      grid-template-columns: 54px 91% 
      justify-content: space-between
    &_content
      @include flex_beetwen
      flex-direction: column
      min-height: 100px
    &_description
      width: 170px
      height: 16px
      @include flex_beetwen
      p 
        font-size: 10px
        line-height: 150%
  &_education
    @include flex_block
    &_item
      display: grid
      grid-template-columns: 54px 91% 
      justify-content: space-between
    &_content
      @include flex_beetwen
      flex-direction: column
      min-height: 100px
// блок с описанием профиля
.info
  &_background
    height: 180px
    background-image: url(../assets/images/img_profile/background.png)
  &_edit_bar
    @include flex_beetwen
    padding: 20px 30px 124px 40px
    a 
      padding: 10px 10px
      background: $white
      display: flex
      align-items: center
  &_context
    @include flex_beetwen
    padding: 0 30px
  &_avatar
    bottom: 40px
    position: relative
    width: 170px
    height: 170px
    border-radius: 50%
    border: 10px solid $white
    background: gray
  &_text
    width: 600px
    display: flex
    flex-direction: column
    justify-content: space-evenly
    &_header
      @include flex_beetwen
      &_left
        display: flex   
        a
          margin-left: 10px   
      &_right
        display: flex
        p
          margin-left: 10px
  &_buttons
    display: flex
    button
      padding: 11px 37px
    button:not(:first-child)
      margin-left: 15px
// навигационный блок страницы профиля


</style>
