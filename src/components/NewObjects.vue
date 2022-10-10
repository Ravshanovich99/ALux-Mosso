<template>
  <div
    class="card"
    v-for="item in objData"
    :key="item.id"
    @click="$emit('changeRoute')"
  >
    <div class="img-block">
      <div class="icons">
        <div></div>
        <div class="play">
          <i
            class="fa-solid fa-play"
            @click="
              $router.push({ name: 'objectsPage', params: { id: item.id } })
            "
          ></i>
        </div>
      </div>
      <swiper :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="photo in item.gallery" :key="photo"
          ><img
            :src="photo"
            alt="house image"
            @click="
              $router.push({ name: 'objectsPage', params: { id: item.id } })
            "
        /></swiper-slide>
      </swiper>
    </div>
    <div class="card-info">
      <h3 class="card-title">
        {{ item.headline }}
      </h3>
      <div class="card-id">
        {{ item.identifier }}
      </div>
      <p class="width">
        <i class="fa-solid fa-location-dot"></i> {{ item.city }}
      </p>
      <p class="location">
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 14.9381V4.93815C17.104 4.93815 18 4.04316 18 2.93813C18 1.83409 17.104 0.93811 16 0.93811C14.8949 0.93811 14 1.83409 14 2.93813H4.00004C4.00004 1.83409 3.10505 0.93811 2.00002 0.93811C0.894982 0.93811 0 1.83409 0 2.93813C0 4.04316 0.894982 4.93815 2.00002 4.93815V14.9381C0.894982 14.9381 0 15.8341 0 16.9381C0 18.0431 0.894982 18.9381 2.00002 18.9381C3.10505 18.9381 4.00004 18.0431 4.00004 16.9381H14C14 18.0431 14.8949 18.9381 16 18.9381C17.104 18.9381 18 18.0431 18 16.9381C18 15.8341 17.104 14.9381 16 14.9381ZM2.99985 4.66011C3.29993 4.48609 3.54792 4.23811 3.72293 3.93802H5.99992L2.99985 6.9381V4.66011ZM2.99985 7.93803L7.00001 3.93786H9.00003L2.99995 9.93795L2.99985 7.93803ZM2.99985 10.938L9.9999 3.93793H11.9999L2.99995 12.9379L2.99985 10.938ZM3.4079 15.5299C3.28687 15.408 3.14988 15.3029 2.99985 15.2149V13.9379L12.9998 3.938H14.2767C14.3647 4.08804 14.4698 4.22502 14.5917 4.34605L3.4079 15.5299ZM14.9999 15.2149C14.6998 15.3899 14.4518 15.6379 14.2768 15.9379H12.9998L14.9999 13.9379V15.2149ZM14.9999 12.9379L11.9998 15.9379H9.99977L14.9999 10.9378L14.9999 12.9379ZM14.9999 9.93792L8.99977 15.938H6.99976L14.9998 7.938L14.9999 9.93792ZM14.9999 6.93798L5.99989 15.9379H3.99988L14.9998 4.93806L14.9999 6.93798Z"
            fill="black"
          />
        </svg>
        {{ item.area }} м2
      </p>
      <h2 class="price" v-if="this.$store.state.currency == 'price'">
        {{ item.price_from }} KZT - {{ item.price_to }} KZT
      </h2>
      <h2 class="price" v-if="this.$store.state.currency == 'price_dollar'">
        {{ item.price_dollar_from }} $ - {{ item.price_dollar_to }} $
      </h2>
      <h2 class="price" v-if="this.$store.state.currency == 'price_euro'">
        {{ item.price_euro_from }} € -{{ item.price_euro_to }} €
      </h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Heart from "@/components/Heart.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import likeObject from "@/components/likeObject.vue";

export default {
  props: ["objCount"],
  emits: ["changeRoute"],
  data() {
    return {
      objData: null,
    };
  },

  async mounted() {
    try {
      const { data } = await axios.get(
        "https://mosso.a-lux.dev/api/objects?ids=11",
        {
          headers: {
            "Accept-Language": localStorage.getItem("language"),
          },
        }
      );
      this.objData = data.data;
      this.objData = this.objData.slice(0, this.objCount);
    } catch (e) {
      console.log(e);
    }
  },

  components: {
    Swiper,
    SwiperSlide,
    Heart,
    likeObject,
  },

  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style>
</style>