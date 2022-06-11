<script setup>
const props = defineProps(
    {
        user: null
    }
)
const user = props.user
</script>

<template>
      <div class="feed_post">
          <div class="feed_post_header">
              <p>Ted Bell, Annette Nguyen and Cody Hawkins liked this</p>
              <img src="../assets/images/img_feed/more-horizontal.png" alt="dots">
          </div>

          <div class="feed_post_content">
              <div class="feed_post_content_author">
                  <img src="../assets/images/img_feed/Photo.png" alt="author">
                  <div class="description">
                      <h2>{{user.name}}</h2>
                      <p>iOS developer</p>
                  </div>
              </div>

              <div class="feed_post_content_main">
                  <p>What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).</p>
                  <img src="" alt="">
              </div>

              <a href="#" class="a_btn">Read more</a>
          </div>

          <div class="feed_post_footer">
              <div class="feed_post_footer_right">
                  <a href="#"><img src="../assets/images/img_feed/thumbs-up.png" alt="like"> 42</a>
                  <a href="#"><img src="../assets/images/img_feed/message-circle.png" alt="message"> 9</a>
              </div>
              <a href="#"><img src="../assets/images/img_feed/share-2.png" alt="share"> SHARE</a>
          </div>
      </div>
</template>

<style lang="sass">
@import '../assets/sass/style'
@mixin flex_block
  display: flex
  flex-direction: column
  justify-content: space-evenly
  padding: 0 30px
@mixin content_block
    margin-top: 20px
    box-shadow: 0px 20px 60px rgba(241, 244, 248, 0.5)
    border-radius: 4px
    background: $white
.feed
  display: grid
  &_post
    @include content_block
    display: flex
    flex-direction: column
    gap: 20px
    &_header
      display: flex
      justify-content: space-between
      align-items: center
      border-bottom:1px solid $thirdColor
      height: 45px
      padding: 10px 15px
    &_content
      height: 100%
      gap: 10px
      @include flex_block
      &_main
        display: flex
        flex-direction: column
        gap: 15px
      &_author
        display: grid
        grid-template-columns: 52px 200px
    &_footer
      display: flex
      justify-content: space-between
      height: 50px
      border-top:1px solid $thirdColor
      &_right
        display: flex
      a 
        padding: 15px 30px 18px 30px
        display: flex
        gap: 6px
        align-items: center
      a:not(last-child)
        border-right: 1px solid $thirdColor
      a:last-child
        border-left: 1px solid $thirdColor

.description
  display: flex
  flex-direction: column
  justify-content: space-evenly
  margin-left: 15px        
</style>