<template>
  <section id="cities" class="house-city">
    <div class="container">
      <h2 class="section-title" v-if="language == 'en'">Estate in cities</h2>
      <h2 class="section-title" v-else >Недвижимость в городах</h2>
      <p class="section-subtitle" v-if="language == 'en'">
        Of course, diluted with a fair amount of empathy, rational thinking is
      </p>
      <p class="section-subtitle" v-else>
        Безусловно, разбавленное изрядной долей эмпатии, рациональное мышление
        является
      </p>
      <div class="cards">
        <NewHouseCard />
      </div>
    </div>

    <ArrowBtn title="Смотреть больше" />
    <div class="container">
      <AboutCompany header="About company" type="about" v-if="language == 'en'"/>
      <AboutCompany header="О компании" type="about" v-else />
    </div>
    <ServicesLine />
  </section>
</template>

<script>
import NewHouseCard from "@/components/CitiesCard.vue";
import ArrowBtn from "@/components/ArrowBtn.vue";
import AboutCompany from "@/components/AboutCompany.vue";
import ServicesLine from "@/components/ServicesLine.vue";

export default {
  components: {
    NewHouseCard,
    ArrowBtn,
    AboutCompany,
    ServicesLine,
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