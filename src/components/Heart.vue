<template>
  <div class="heart-block">
    <p class="amount-likes">{{ likes.amount }}</p>
    <div class="circle">
      <i class="fa-solid fa-heart" @click="like" :class="likes.liked ? 'active' : ''"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: {
          amount: 3,
          liked: false
      },
    };
  },

  methods:{
      like(){
          this.likes.liked = !this.likes.liked
          if(this.likes.liked){
              this.likes.amount++
          }
          else{
              this.likes.amount--
          }
      }
  }
};
</script>

<style>
</style>