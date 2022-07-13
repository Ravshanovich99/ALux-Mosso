<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="10"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      '@1.50': {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(item, index) in reviewData" :key="index">
      <div class="review-card">
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
        <div class="review-img" v-if="item.photos">
          <img :src="item.photos" alt="appartment image" />
        </div>
        <div class="review-info">
          <div class="review-title">
            <h2 class="review-name">
              {{ item.respondents_name }}
            </h2>
            <p class="review-city">{{ item.city }}</p>
          </div>
          <p class="review-text" >
            {{ textArr[index] }}...
          </p>

          <button
            v-if="language == 'en'"
            class="review-btn"
            @click="
              this.$router.push({ name: 'review', params: { id: item.id } })
            "
          >
            Read more
          </button>
          <button
            v-else
            class="review-btn"
            @click="
              this.$router.push({ name: 'review', params: { id: item.id } })
            "
          >
            Читать далее
          </button>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import ArrowBtn from "./ArrowBtn.vue";

export default {
  data() {
    return {
      reviewData: null,
      modules: [Pagination],
      language: localStorage.getItem("language"),
      textArr: []
    };
  },

  async mounted() {
    try {
      const { data } = await axios.get("https://mosso.a-lux.dev/api/feedback", {
        headers: {
          "Accept-Language": localStorage.getItem("language"),
        },
      });
      this.reviewData = data.data;
      this.computedText
    } catch (e) {
      console.log(e);
    }
  },

  computed:{
    computedText(){
      for(let i = 0; i < this.reviewData.length; i++){
        this.textArr.push(this.reviewData[i].text.slice(0, 210))
      }
    }
  },

  components: {
    Swiper,
    SwiperSlide,
    ArrowBtn,
  },
};
</script>

<style>
</style>