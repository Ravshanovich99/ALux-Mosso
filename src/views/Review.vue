<template>
  <section class="review" v-for="item in reviewData" :key="item.id">
    <Header />
    <Heart />
    <div class="container">
      <p class="section-subtitle" v-if="language == 'en'">
        Main — Catalog — Sale of three-room apartments
      </p>
      <p class="section-subtitle" v-else>
        Главная — Каталог — Продажа трехкомнатных квартир
      </p>
      <h2 class="section-title" v-if="language == 'en'">Reviews</h2>
      <h2 class="section-title" v-else>Отзывы</h2>
      <div class="main-img" v-if="item.photos">
        <img :src="item.photos" alt="house image" />
      </div>
      <div class="customer-title">
        <div class="comment-box">
          <div class="review-comment">
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.57407 0.00019017C11.7575 0.00019017 15.1494 3.39093 15.1494 7.57454C15.1494 13.5121 11.0704 16.8989 6.62745 19.8972C6.12261 20.2374 5.49546 19.6686 5.78592 19.1328C6.48308 17.8439 6.96229 16.518 7.08011 15.1325C3.12692 14.8774 0 11.5913 0 7.57435C0 3.39093 3.39169 0 7.57435 0L7.57407 0.00019017Z"
                fill="#7E6745"
              />
            </svg>
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.57407 0.00019017C11.7575 0.00019017 15.1494 3.39093 15.1494 7.57454C15.1494 13.5121 11.0704 16.8989 6.62745 19.8972C6.12261 20.2374 5.49546 19.6686 5.78592 19.1328C6.48308 17.8439 6.96229 16.518 7.08011 15.1325C3.12692 14.8774 0 11.5913 0 7.57435C0 3.39093 3.39169 0 7.57435 0L7.57407 0.00019017Z"
                fill="#7E6745"
              />
            </svg>
          </div>
          <p v-if="language == 'en'">Customer - {{ item.respondents_name }}</p>
          <p v-else>Покупатель - {{ item.respondents_name }}</p>
        </div>
        <p>г.{{ item.city }}</p>
      </div>
      <div class="description-title" v-if="language == 'en'">
        Company Mosso Real Estate - the best in the business!
      </div>
      <div class="description-title" v-else>
        Компания Mosso Real Estate – лучшие в своем деле!
      </div>
      <p class="customer-description">
        {{ item.text }}
      </p>
      <!-- <div class="addition-images" v-if="item.photos[2]">
        <img :src="item.photos[1]" alt="house image" />
        <img :src="item.photos[2]" alt="house image" />
      </div> -->
      <hr />
      <AboutCompany
        header="Our services"
        type="service"
        v-if="language == 'en'"
      />
      <AboutCompany header="Наши услуги" type="service" v-else />
    </div>
    <ServicesLine />
    <WhyUs />
    <Footer />
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Heart from "@/components/Heart.vue";
import AboutCompany from "@/components/AboutCompany.vue";
import ServicesLine from "@/components/ServicesLine.vue";
import WhyUs from "@/components/WhyUs.vue";
import Footer from "@/components/Footer.vue";

import axios from "axios";
export default {
  name: "review",
  data() {
    return {
      reviewData: null,
      language: localStorage.getItem("language"),
    };
  },
  components: {
    Header,
    Heart,
    AboutCompany,
    ServicesLine,
    WhyUs,
    Footer,
  },

  async mounted() {
    window.scrollY
    try {
      const { data } = await axios.get(
        "https://mosso.a-lux.dev/api/feedback/" + this.$route.params.id,
        {
          headers: {
            "Accept-Language": localStorage.getItem("language"),
          },
        }
      );
      this.reviewData = data;
      // console.log(data.data);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
</style>