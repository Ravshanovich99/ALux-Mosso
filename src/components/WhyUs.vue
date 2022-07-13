<template>
  <section class="why-us">
    <div class="container">
      <h2 class="why-us-section-title" v-if="language == 'en'">Why are we</h2>
      <h2 class="why-us-section-title" v-else >Почему мы</h2>
      <div class="why-us-cards">
        <div
          class="why-us-card"
          v-for="(item, index) in whyUsData"
          :key="index"
        >
          <img
            class="why-us-card-background"
            :src="item.why_us_img"
            alt="card image"
          />
          <img
            :class="`why-us-card-svg-${index}`"
            :src="require(`../assets/images/why-us-${++index}.svg`)"
            alt="icon"
          />
          <div class="why-us-info">
            <h3 class="why-us-headline">
              {{ item.why_us_headline }}
            </h3>
            <p class="why-us-description">
              {{ item.why_us_description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      whyUsData: null,
      language: localStorage.getItem('language')
    };
  },

  async mounted() {
    try {
      const { data } = await axios.get(
        "https://mosso.a-lux.dev/api/about-company",
        {
          headers: {
            "Accept-Language": localStorage.getItem("language"),
          },
        }
      );
      this.whyUsData = data.data;
      // console.log(data.data);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
</style>