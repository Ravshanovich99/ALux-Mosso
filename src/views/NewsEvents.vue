<template>
  <section id="news-events" class="news-events">
    <div class="container">
      <h2 class="section-title" v-if="language == 'en'">News and events</h2>
      <h2 class="section-title" v-else >Новости и события</h2>
      <p class="section-subtitle" v-if="language == 'en'">
        Of course, diluted with a fair amount of empathy, rational thinking is
      </p>
      <p class="section-subtitle" v-else>
        Безусловно, разбавленное изрядной долей эмпатии, рациональное мышление
        является
      </p>
      <div class="news-events-cards">
        <NewsEnventsCard />
      </div>
    </div>
    <ArrowBtn title="Смотреть больше" />
  </section>
</template>

<script>
import ArrowBtn from "@/components/ArrowBtn.vue";
import NewsEnventsCard from "@/components/NewsEventsCard.vue";

export default {
  components: {
    ArrowBtn,
    NewsEnventsCard,
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