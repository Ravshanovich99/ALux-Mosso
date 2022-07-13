<template>
  <section class="reviews">
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
      <swiper :pagination="pagination" :modules="modules" class="mySwiper">
        <swiper-slide>
          <div class="reviews-cards">
            <div class="reviews-card" v-for="item in reviewsData" :key="item">
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
              <div class="review-img">
                <img :src="item.photos" alt="appartment image" />
              </div>
              <div class="review-info">
                <div class="review-title">
                  <h2 class="review-name">
                    {{ item.respondents_name }}
                  </h2>
                  <p class="review-city">{{ item.city }}</p>
                </div>
                <p class="review-text">{{ item.text }}</p>
                <button
                  class="review-btn"
                  @click="
                    this.$router.push({
                      name: 'review',
                      params: { id: item.id },
                    })
                  "
                >
                  Читать далее
                </button>

                <!-- en -->

                <button
                  class="review-btn"
                  @click="
                    this.$router.push({
                      name: 'review',
                      params: { id: item.id },
                    })
                  "
                  v-if="language == 'en'"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <AboutCompany header="Our services" type="service" v-if="language == 'en'"/>
      <AboutCompany header="Наши услуги" type="service" v-else/>
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

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default {
  name: "reviews",
  components: {
    Header,
    Heart,
    Swiper,
    SwiperSlide,
    AboutCompany,
    ServicesLine,
    WhyUs,
    Footer,
  },

  data() {
    return {
      reviewsData: null,
      language: localStorage.getItem('language'),
    };
  },

  async mounted() {
    try {
      const { data } = await axios.get("https://mosso.a-lux.dev/api/feedback", {
        headers: {
          "Accept-Language": localStorage.getItem("language"),
        },
      });
      // console.log(data.data);
      this.reviewsData = data.data;
    } catch (e) {
      console.log(e);
    }
  },

  setup() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      modules: [Pagination],
    };
  },
};
</script>

<style>
</style>