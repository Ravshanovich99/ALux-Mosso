<template>
  <section class="categories">
    <img
      src="../assets/images/about-leaf-3.png"
      alt="leaf"
      class="about-leaf-3"
    />
    <div class="container">
      <h2 class="section-title" v-if="language == 'en'">Offers by category</h2>
      <h2 class="section-title" v-else>Предложения по категориям</h2>
      <p class="section-subtitle" v-if="language == 'en'">
        Of course, diluted with a fair amount of empathy, rational thinking is
      </p>
      <p class="section-subtitle" v-else>
        Безусловно, разбавленное изрядной долей эмпатии, рациональное мышление
        является
      </p>
      <div class="categories-cards">
        <CategoriesCard />
      </div>
    </div>
  </section>
</template>

<script>
import CategoriesCard from "@/components/CategoriesCard.vue";

export default {
  components: {
    CategoriesCard,
  },

  data() {
    return {
      language: localStorage.getItem("language"),
    };
  },
};
</script>

<style>
</style>