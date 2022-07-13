<template>
  <div class="company">
    <h2 class="about-header" v-if="header == 'О компании'">
      {{ header }}
    </h2>
    <h2 class="about-header" v-if="header == 'About company'">
      {{ header }}
    </h2>
    <div :class="`company-info-${type}`">
      <div class="company-images">
        <img
          class="company-ellipse"
          src="@/assets/images/Company-ellipse.png"
          alt="ellipse"
        />
        <img
          class="company-couple"
          src="@/assets/images/company-couple.png"
          alt="couple"
        />
        <img
          class="company-girl"
          src="@/assets/images/company-girl.png"
          alt="girl"
        />
      </div>
      <div class="company-about">
        <div class="leaf-img">
          <img src="@/assets/images/company-leaf.png" alt="leaf" />
        </div>
        <div class="about-title" v-if="language == 'en'">
          We will help you quickly and profitably purchase real estate for various purposes
        </div>
        <div class="about-title" v-else>
          Поможем быстро и выгодно приобрести недвижимость для разных целей
        </div>
        <p class="about-text first-child" v-if="language == 'en'">
          Ideological considerations of a higher order, as well as the implementation of the planned
          plan targets contributes to the preparation and implementation of the appropriate
          activation conditions.
        </p>
        <p class="about-text first-child" v-else>
          Идейные соображения высшего порядка, а также реализация намеченных
          плановых заданий способствует подготовки и реализации соответствующий
          условий активизации.
        </p>


        <p class="about-text second-child" v-if="language == 'en'">
          Ideological considerations of a higher order, as well as strengthening and development
          structure provides a wide range of (specialists) participation in
          formation of further directions of development.

          <router-link class="about-link" to="/about"><p>See more</p></router-link>
        </p>
        <p class="about-text second-child" v-else >
          Идейные соображения высшего порядка, а также укрепление и развитие
          структуры обеспечивает широкому кругу (специалистов) участие в
          формировании дальнейших направлений развития.

          <router-link class="about-link" to="/about"><p>Смотреть подробнее</p></router-link>
        </p>
      </div>

      <div class="company-service">
        <h2 class="service-header">{{ header }}</h2>
        <div class="service-items">
          <div
            class="service-info"
            v-for="(item, index) in serviceData"
            :key="index"
          >
            <div class="service-columns">
              <span class="service-num">{{ ++index }}</span>
              <div class="service-description">
                <h3 class="service-title">{{ item.title }}</h3>
                <p class="service-text">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ArrowBtn from "@/components/ArrowBtn.vue";
export default {
  props: ["header", "type"],
  data() {
    return {
      serviceData: null,
      language: localStorage.getItem('language')
    };
  },

  components: {
    ArrowBtn,
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
      // console.log(data.data[1].services);
      this.serviceData = data.data[0].services;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
</style>