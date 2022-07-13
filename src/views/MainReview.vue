<template>
  <section class="main-reviews">
    <div class="container">
      <h2 class="section-title" v-if="language == 'en'">Reviews</h2>
      <h2 class="section-title" v-else >Отзывы</h2>
      <ReviewCard />
    </div>
  </section>
</template>

<script>
import ReviewCard from "@/components/ReviewCard.vue";
export default {
  components: {
    ReviewCard,
  },

  data(){
    return{
      language: localStorage.getItem('language')
    }
  }
};
</script>

<style>
</style>