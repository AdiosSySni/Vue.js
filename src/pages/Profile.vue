<script setup>
    // import AsideNavbar from '../components/Aside_navbar.vue'
</script>

<template>
<!-- profile -->
<div class="profile_content">
        <div class="profile">
            <div class="profile_background">
                <div class="profile_tools">
                    <button class="upload_btn "></button>
                    <button class="edit_btn"><p>edit profile</p></button>
                </div>
            </div>

            <div class="profile_info">
                <div class="profile_img">

                </div>

                <div class="profile_description">
                    <div class="profile_header">
                        <h>Dmitry Kargaev</h>

                        <p class="location">
                            Saint Petersburg, Russian Federation</p>
                    </div>

                    
                    <p class="profile_text">
                        Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.
                    </p>
                    
                    <div class="profile_btn">
                        <button class="profile_contact">Contact info</button>
                        <div class="profile_connections">1,043 connections</div>
                    </div>
                </div>
            </div>
        </div>

    <!-- tabs -->
    <div class="profile_tabs">
        <button class="tab_link">
            <p>profile</p>
        </button>
        
       <button class="tab_link">
            <p>Activity & interests</p>
        </button>

        <button class="tab_link">
            <p>Articles (3)</p>
        </button>
    </div>
    <!-- profile_about -->
    <div class="profile_about">
        <h1>About</h1>
        <p>I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites. </p>
        <a href="#">see more</a>
    </div>

    <div class="profile_projects">
        <div class="projects_header">
            <h1>Projects</h1>
            <div class="projects_count">
                <p id="currentCount">3</p> <p>of</p> <p id="allCount">12</p>
            </div>
        </div>

        <div class="project_item">

        </div>

        <a href="#">show all</a>
    </div>
</div>
</template>



<style scoped lang="sass">
.profile
    min-height: 360px
    background: white
    &_content 
        min-height: 100%
        a 
            font-size: 12px
            line-height: 11px
            text-transform: uppercase
            color: #0275B1
    &_background 
        min-height: 180px
        background: url('../assets/images/profile_pic.jpg') center
        background-size: cover
    &_tools
        max-width: 790px
        padding: 20px 30px 124px 30px
        display: flex
        justify-content: space-between
        button 
            background: white
    &_info
        display: flex
        position: relative
        bottom: 30px
    &_description
        padding: 44px 30px 0px 22px
    &_img
        min-width: 170px
        height: 170px
        border-radius: 50%
        background: gray
    &_header
            display: flex
            align-items: center
            justify-content: space-between
    &_text
            margin-top: 15px
            max-width: 583px
            font-size: 14px
            line-height: 150%
    &_btn
            display: flex
            margin-top: 14px
    &_contact
            background: linear-gradient(180deg, #0077B5 0%, #0E6795 100%)
            padding: 11px 37px 10px 37px
            border-radius: 4px
            border: none
            color: white
            line-height: 11px
            font-size: 12px
            text-transform: uppercase
            cursor: pointer
    &_connections
            margin: 0 0 0 15px
            padding: 11px 20px 10px 20px
            color: #0275B1
            border: none
            background: #FFFFFF
            border: 1px solid #0275B1
            border-radius: 4px
            line-height: 11px
            font-size: 12px
            font-weight: bold
            text-transform: uppercase
            cursor: pointer
    &_tabs 
            display: flex
            align-items: end
            min-height: 50px
            margin-top: 31px
            border-bottom: 1px solid #E7E7E7
    &_about
        margin-top: 30px
        padding: 30px 30px 35px 30px
        background: white
        p 
            font-size: 14px
            line-height: 150%
            margin: 15px 0px 20px 0px
    &_projects 
        

.upload_btn 
    padding: 10px
    border: none
    cursor: pointer
    &:before
        content: '\f093'
        font-family: FontAwesome
        font-size: 16px

.edit_btn
    text-transform: uppercase
    border-radius: 4px
    border: none
    padding: 10px 10px
    display: flex
    align-items: center
    cursor: pointer
    p 
        margin-left: 8px
    &:before 
        content: '\f044'
        font-family: FontAwesome
        font-size: 16px

.tab_link
    max-height: 40px 
    text-align: center
    padding: 15px 0px 14px 0px
    width: 240px
    background: #FFFFFF
    border: 1px solid #E7E7E7
    border-radius: 0px 4px 0px 0px
    cursor: pointer
    p
        font-weight: bold
        text-transform: uppercase
    &:hover 
        max-height: 50px
        padding: 21px 0px 18px 0px
        background: linear-gradient(180deg, #0077B5 0%, #0E6795 100%)
        border-radius: 4px 4px 0px 0px




</style>