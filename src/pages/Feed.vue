<script setup>
    import VPost from '../components/_post.vue'
    import {userFetch} from '../api/api'
    const fetch = userFetch();
    const users = fetch.getUsers()
</script>
<template>
    <div class="feed">
      <div class="feed_newpost">
          <h2>NEW POST</h2>
          <div class="feed_newpost_input">
              <input type="text" value="What’s on your mind?">
              <a @click="fetch.fetchPostUsers()" href="#"><img src="../assets/images/img_feed/send.png" alt="img"></a>
          </div>
      </div>

      <v-post v-for="user in users" :user="user"/>
      <!-- <div class="feed_post">
          <div class="feed_post_header">    
              <p>Ted Bell, Annette Nguyen and Cody Hawkins liked this</p>
              <img src="../assets/images/img_feed/more-horizontal.png" alt="dots">
          </div>

          <div class="feed_post_content">
              <div class="feed_post_content_author">
                  <img src="../assets/images/img_feed/Photo.png" alt="author">
                  <div class="description">
                      <h2>Theresa Steward</h2>
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
      </div> -->

      <!-- <v-post/> -->

      <!-- <div class="feed_post">
          <div class="feed_post_header">
              <p>Ted Bell, Annette Nguyen and Cody Hawkins liked this</p>
              <img src="../assets/images/img_feed/more-horizontal.png" alt="dots">
          </div>

          <div class="feed_post_content">
              <div class="feed_post_content_author">
                  <img src="../assets/images/img_feed/Photo.png" alt="author">
                  <div class="description">
                      <h2>Theresa Steward</h2>
                      <p>iOS developer</p>
                  </div>
              </div>

              <div class="feed_post_content_main">
                  <p>How’s your day going, guys?</p>
                  <img src="../assets/images/img_feed/Rectangle2.png" alt="img" >
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

      <div class="feed_post">
          <div class="feed_post_header">
              <p>Ted Bell, Annette Nguyen and Cody Hawkins liked this</p>
              <img src="../assets/images/img_feed/more-horizontal.png" alt="dots">
          </div>

          <div class="feed_post_content">
              <div class="feed_post_content_author">
                  <img src="../assets/images/img_feed/Photo.png" alt="author">
                  <div class="description">
                      <h2>Theresa Steward</h2>
                      <p>iOS developer</p>
                  </div>
              </div>

              <div class="feed_post_content_main">
                  <p>What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).</p>
                  <p>What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).</p>
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

      <div class="feed_post">
          <div class="feed_post_header">
              <p>Ted Bell, Annette Nguyen and Cody Hawkins liked this</p>
              <img src="../assets/images/img_feed/more-horizontal.png" alt="dots">
          </div>

          <div class="feed_post_content">
              <div class="feed_post_content_author">
                  <img src="../assets/images/img_feed/Photo.png" alt="author">
                  <div class="description">
                      <h2>Theresa Steward</h2>
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
      </div> -->
      
      
    </div>
</template>

<style lang="sass">
@import '../assets/sass/style'

.a_btn 
    display: flex
    font-size: 12px
    line-height: 11px
    text-transform: uppercase
    color: $secondaryColor 

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
  &_newpost
    display: flex
    flex-direction: column
    padding: 25px 30px
    gap: 40px
    @include content_block
    background: $white
    &_input
      display: flex
      justify-content: space-between
      input
        width: 70%
        height: 24px
        font-size: 18px
        line-height: 17px
        color: rgba(24, 24, 24, 0.2)
        outline: none
      a
        padding: 10px 10px
        background: linear-gradient(180deg, #0077B5 0%, #0E6795 100%)
        border-radius: 4px
</style>