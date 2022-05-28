<script setup>
    
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
            <div class="projects_header_count">
                <p id="currentCount">3 </p> <p> of</p> <p id="allCount"> 12</p>
            </div>
        </div>
        <div class="projects_inner_wrapper">
            <div class="projects_item">  
                <img src="#" alt="Здесь будет картинка" class="projects_item_picture">
                <div class="projects_item_description">
                    <h2>Zara redesign concept</h2>
                    <p>UX/UI design, 15.07.2019</p>
                </div>
            </div>

            <div class="projects_item">  
                <img src="#" alt="Здесь будет картинка" class="projects_item_picture">
                <div class="projects_item_description">
                    <h2>Zara redesign concept</h2>
                    <p>UX/UI design, 15.07.2019</p>
                </div>
            </div>

            <div class="projects_item">  
                <img src="#" alt="Здесь будет картинка" class="projects_item_picture">
                <div class="projects_item_description">
                    <h2>Zara redesign concept</h2>
                    <p>UX/UI design, 15.07.2019</p>
                </div>
            </div>
        </div>

        <a href="#">show all (12)</a>
    </div>

    <div class="profile_skills">
        <h1 class="skills_header">
            Skills & Endoresments
        </h1>

        <div class="skills_inner_wrapper">
            <div class="skills_item">
                <div class="skills_item_header">
                    <p>User experience (UX)</p>
                    <a href ="#" id="skills_item_count">6</a>
                </div>

                <div class="skills_item_users">

                </div>
            </div>

            <div class="skills_item">
                <div class="skills_item_header">
                    <p>User experience (UX)</p>
                    <a href ="#" id="skills_item_count">6</a>
                </div>

                <div class="skills_item_users">

                </div>
            </div>

            <div class="skills_item">
                <div class="skills_item_header">
                    <p>User experience (UX)</p>
                    <a href ="#" id="skills_item_count">6</a>
                </div>

                <div class="skills_item_users">

                </div>
            </div>
        </div>
        
        <a href="#">show all (17)</a>
    </div>

    <div class="profile_experiance">
        <h1>Experiance</h1>
        
            <div class="experiance_item first_item">
                <div class="experiance_item_pic">

                </div>
                <div class="experiance_item_description">
                    <h1>Freelance UX/UI designer</h1>
                    <div class="experiance_item_info">
                        <div class="item_info_line">
                            <p>Self Employed</p>
                            <p>Around the world</p>
                        </div>
                        <div class="item_info_line">
                            <p>Jun 2016 — Present</p>
                            <p><a href="#">3 yrs 3 mos</a></p>
                        </div>
                        
                    </div>

                    <p>Work with clients and web studios as freelancer.  Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.</p>
                </div>
            </div>

            <div class="experiance_item ">
                <div class="experiance_item_pic">
                    
                </div>
                <div class="experiance_item_description">
                    <h1>UX/UI designer</h1>
                    <div class="experiance_item_info">
                        <div class="item_info_line">
                            <p>Upwork</p>
                            <p>International</p>
                        </div>
                        <div class="item_info_line">
                            <p>Jun 2019 — Present</p>
                            <p><a href="#">3 mos</a></p>
                        </div>
                        
                    </div>
                    <p>New experience with Upwork system. Work in next areas: UX/UI design, graphic design, interaction design, UX research.</p>
                </div>
            </div>
    </div>


    <div class="profile_education">
        <h1>Education</h1>
        <div class="education_item">
            <div class="education_item_pic">

            </div>
            <div class="education_item_description">
                <h1>Moscow State Linguistic University</h1>
                <div class="education_item_info">
                    <p>Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assurance</p>
                    <p>2013 — 2017</p>
                </div>
                <p>Additional English classes and UX profile courses.</p>
            </div>
        </div>
    </div>

</div>

</template>

<style lang="sass">
@mixin flex-beetwen
    display: flex
    justify-content: space-between
    
@mixin block_stylization
    display: flex
    flex-direction: column
    justify-content: space-evenly
    padding: 0 30px
    background: #FFFFFF
    margin-top: 20px

.aside_rightbar
    height: 1165px

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
        @include flex-beetwen
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
            @include flex-beetwen
            align-items: center
            
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
        min-height: 355px
        @include block_stylization
        // gap: 25px
        // padding: 30px 30px 31px 30px
    &_skills
        min-height: 220px
        @include block_stylization
    &_experiance
        min-height: 345px
        @include block_stylization
    &_education
        min-height: 195px
        @include block_stylization
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

.projects
    &_header
        display: flex
        gap: 15px
        h1,p 
            font-size: 18px
            line-height: 17px
        &_count
            width: 58px
            @include flex-beetwen
    &_inner_wrapper
        @include flex-beetwen
        flex-flow: wrap
       
    &_item
        // min-height: 216px
        // min-width: 250px
        @include flex-beetwen
        flex-direction: column
        h2 
            font-size: 14px
            line-height: 150%
        &_picture
            width: 250px
            min-height: 160px
        &_description
            margin: 15px 0 0 0
            min-height: 41px
            @include flex-beetwen
            flex-direction: column
           
.skills 
    &_inner_wrapper
        @include flex-beetwen
        flex-flow: wrap    
    &_item
        padding: 14px 20px 16px 20px
        &_header
            width: 210px
            @include flex-beetwen
            p,a 
                font-size: 14px
                line-height: 150%
        &_users
            margin: 5px 0 0 0
            background: gray
            max-width: 99px
            min-height: 24px

.experiance
    &_item
        display: flex
        p  
            // font-size: 10px
            line-height: 150%
        h1 
            font-size: 14px
            line-height: 150%
        &_pic
            min-width: 54px
            height: 54px
            background: gray
        &_description
            margin: 0 0 0 16px
        &_info
            margin: 5px 0 10px 0

.first_item 
    border-bottom: 1px solid #F4F4F4
    padding: 0 0 25px 0

.item_info 
    &_line
        display: flex
        margin-top: 5px
        p:not(:first-child)
            margin-left: 10px

.education
    &_item
        display: flex
        p  
            // font-size: 10px
            line-height: 150%
        h1 
            font-size: 14px
            line-height: 150%
        &_pic
            min-width: 54px
            height: 54px
            background: gray
        &_description
                margin: 0 0 0 16px
        &_info
            margin: 5px 0 10px 0
            p:not(:first-child)
                margin-top: 5px
</style>