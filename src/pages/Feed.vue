<script>
    
</script>

<template>
    <div class="post">
        <h1>new post</h1>
        <hr>
        <div class="post_input">
            <input type="text" value="What’s on your mind?">
        </div>
    </div>

    <div class="posts">
        <div class="posts_item">
            <div class="posts_item_status">
                <div class="status_info"></div>
                <div class="status_nav"></div>
            </div>
            <div class="posts_item_info">

            </div>

            

        </div>
    </div>
</template>

<style  lang="sass" >
 @mixin block_stylization
    display: flex
    flex-direction: column
    justify-content: space-evenly
    padding: 0 30px
    background: #FFFFFF
    margin-top: 20px

.post 
    @include block_stylization
    min-height: 135px
    h1 
        text-transform: uppercase
    &_input input
        font-size: 18px
        line-height: 17px
        color: rgba(24, 24, 24, 0.2)

</style>