<template>
  <section class="filtred-objects">
    <Header />
    <Heart />
    <div class="container">
      <p class="section-subtitle" v-if="language == 'en'">
        Main — Catalog — Sale of three-room apartments
      </p>
      <p class="section-subtitle" v-else>
        Главная — Каталог — Продажа трехкомнатных квартир
      </p>
      <div class="objects-count" v-if="filtredData && language == 'en'">
        Found {{ objectsCount }} ads
      </div>
      <div class="objects-count" v-if="filtredData && language == 'ru'">
        Найдено {{ objectsCount }} объявления
      </div>
      <div class="objects-count" v-if="!filtredData && language == 'en'">
        Objects not found
      </div>
      <div class="objects-count" v-if="!filtredData && language == 'ru'">
        Не найдено объявления
      </div>
      <div class="objects-container">
        <Filter @getFiltred="getNewFiltered" />
      </div>
      <div v-if="objectsCount > 0" class="filtred-objects-tabs">
        <h3 class="objects-tab-title" v-if="language == 'en'">First:</h3>
        <h3 class="objects-tab-title" v-else>Сначала:</h3>
        <button
          class="objects-tab"
          @click="newTab"
          :class="objectsTab == 'new' ? 'active' : ''"
          v-if="language == 'en'"
        >
          new ads
        </button>
        <button
          class="objects-tab"
          @click="newTab"
          :class="objectsTab == 'new' ? 'active' : ''"
          v-else
        >
          новые объявления
        </button>

        <button
          class="objects-tab"
          @click="cheapTab"
          :class="objectsTab == 'cheap' ? 'active' : ''"
          v-if="language == 'en'"
        >
          cheap
        </button>
        <button
          class="objects-tab"
          @click="cheapTab"
          :class="objectsTab == 'cheap' ? 'active' : ''"
          v-else
        >
          дешевые
        </button>

        <button
          class="objects-tab"
          @click="expensiveTab"
          :class="objectsTab == 'expensive' ? 'active' : ''"
          v-if="language == 'en'"
        >
          expensive
        </button>
        <button
          class="objects-tab"
          @click="expensiveTab"
          :class="objectsTab == 'expensive' ? 'active' : ''"
          v-else
        >
          дорогие
        </button>
      </div>
      <div class="filtred-objects-cards">
        <div class="card" v-for="item in pagination" :key="item.id">
          <div class="img-block">
            <div class="icons">
              <div></div>
              <div class="play">
                <i
                  class="fa-solid fa-play"
                  @click="
                    $router.push({
                      name: 'objectsPage',
                      params: { id: item.id },
                    })
                  "
                ></i>
              </div>
            </div>
            <swiper
              :pagination="magination"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="photo in item.gallery" :key="photo"
                ><img :src="photo" alt="house image"
              /></swiper-slide>
            </swiper>
          </div>
          <div class="card-info">
            <div class="card-info-top">
              <div class="info-top-description">
                <h3 class="card-top-title">
                  {{ item.headline }}
                </h3>
                <div class="card-top-id">
                  {{ item.identifier }}
                </div>
              </div>
              <h2
                class="card-top-price"
                v-if="this.$store.state.currency == 'price'"
              >
                {{ item.price_from }} KZT - {{ item.price_to }} KZT
              </h2>
              <h2
                class="card-top-price"
                v-if="this.$store.state.currency == 'price_dollar'"
              >
                {{ item.price_dollar_from }} $ - {{ item.price_dollar_to }} $
              </h2>
              <h2
                class="card-top-price"
                v-if="this.$store.state.currency == 'price_euro'"
              >
                {{ item.price_euro_from }} € -{{ item.price_euro_to }} €
              </h2>
            </div>
            <div class="card-info-mid">
              <p class="mid-adress">
                {{ item.address }}
              </p>
              <p class="mid-short-description">
                {{ item.short_description }}
              </p>
            </div>
            <div class="card-info-bottom">
              <p class="location">
                <i class="fa-solid fa-location-dot"></i> {{ item.city }}
              </p>
              <p class="width">
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
            </div>
          </div>
        </div>
      </div>
      <div class="paginations" v-if="objectsCount > 8">
        <p
          class="first-pagination"
          @click="firstPaginate"
          :class="pagination == fisrtPagination ? 'active' : ''"
        >
          1
        </p>
        <p
          v-if="secondPagination"
          class="second-pagination"
          @click="secondPaginate"
          :class="pagination == secondPagination ? 'active' : ''"
        >
          2
        </p>
        <p
          v-if="thirdPagination"
          class="third-pagination"
          @click="thirdtPaginate"
          :class="pagination == thirdPagination ? 'active' : ''"
        >
          3
        </p>
        <p
          v-if="fourthPagination"
          class="fourth-pagination"
          @click="fourthPaginate"
          :class="pagination == fourthPagination ? 'active' : ''"
        >
          4
        </p>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Heart from "@/components/Heart.vue";
import Button from "@/components/Button.vue";
import axios from "axios";
import likeObject from "@/components/likeObject.vue";
import Footer from "@/components/Footer.vue";
import Filter from "@/components/Filter.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default {
  name: "filtred-objects",

  components: {
    Heart,
    Header,
    Button,
    Swiper,
    SwiperSlide,
    likeObject,
    Footer,
    Filter,
  },

  data() {
    return {
      filtredData: null,
      fisrtPagination: null,
      secondPagination: null,
      thirdPagination: null,
      fourthPagination: null,
      pagination: null,
      objectsCount: null,
      language: localStorage.getItem("language"),
      objectsTab: "",
      categoriesData: null,
    };
  },

  async mounted() {
    if (this.$store.state.categoriesId) {
      try {
        const resCategoriesData = await axios.get(
          `https://mosso.a-lux.dev/api/categories/${this.$store.state.categoriesId}`
        );
        this.filtredData = resCategoriesData.data.data;
        this.fisrtPagination = this.filtredData.slice(0, 8);
        this.pagination = this.fisrtPagination;
        if (this.filtredData.length > 8) {
          this.secondPagination = this.filtredData.slice(8, 16);
        }
        if (this.filtredData.length > 16) {
          this.secondPagination = this.filtredData.slice(16, 24);
        }
        if (this.filtredData.length > 24) {
          this.secondPagination = this.filtredData.slice(
            24,
            this.filtredData.length
          );
        }
        this.objectsCount = this.filtredData.length;
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const { data } = await axios.get(
          `https://mosso.a-lux.dev/api/objects?cities_ids=${
            this.$store.state.selectedCities
          }&categories_ids=${this.$store.state.selectedTypes}&districts_ids=${
            this.$store.state.selectedDistricts
          }&special_infrastructures_ids=${
            this.$store.state.selectedStructures
          }&ids=${this.$store.state.ids}&is_primary=${
            this.$store.state.isPrimary
          }&is_ready=${this.$store.state.isReady}&is_secondary=${
            this.$store.state.isSecondary
          }${
            this.$store.state.identifier
              ? `&identifier=${this.$store.state.identifier}`
              : ""
          }${
            this.$store.state.startingPrice
              ? `&starting_price=${this.$store.state.startingPrice}`
              : ""
          }${
            this.$store.state.endingPrice
              ? `&ending_price=${this.$store.state.endingPrice}`
              : ""
          }${
            this.$store.state.startArea
              ? `&start_area=${this.$store.state.startArea}`
              : ""
          }${
            this.$store.state.endArea
              ? `&end_area=${this.$store.state.endArea}`
              : ""
          }${
            this.$store.state.startYear
              ? `&start_year=${this.$store.state.startYear}`
              : ""
          }${
            this.$store.state.endYear
              ? `&end_year=${this.$store.state.endYear}`
              : ""
          }`
        );
        this.filtredData = data.data;

        this.fisrtPagination = this.filtredData.slice(0, 8);
        this.pagination = this.fisrtPagination;

        if (this.filtredData.length > 8) {
          this.secondPagination = this.filtredData.slice(8, 16);
        }
        if (this.filtredData.length > 16) {
          this.secondPagination = this.filtredData.slice(16, 24);
        }
        if (this.filtredData.length > 24) {
          this.secondPagination = this.filtredData.slice(
            24,
            this.filtredData.length
          );
        }
        this.objectsCount = this.filtredData.length;
      } catch (e) {
        console.log(e);
      }
    }
  },

  beforeUnmount() {
    this.$store.dispatch("resetState");
  },

  setup() {
    return {
      magination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
      },
      modules: [Pagination],
    };
  },

  methods: {
    firstPaginate() {
      this.pagination = this.fisrtPagination;
      window.scrollTo({
        top: 1000,
        behavior: "smooth",
      });
    },

    secondPaginate() {
      this.pagination = this.secondPagination;
      window.scrollTo({
        top: 1000,
        behavior: "smooth",
      });
    },

    thirdtPaginate() {
      this.pagination = this.thirdPagination;
      window.scrollTo({
        top: 1000,
        behavior: "smooth",
      });
    },

    fourthPaginate() {
      this.pagination = this.fourthPagination;
      window.scrollTo({
        top: 1000,
        behavior: "smooth",
      });
    },

    async getNewFiltered() {
      // console.log("sasas");
      try {
        const { data } = await axios.get(
          `https://mosso.a-lux.dev/api/objects?cities_ids=${
            this.$store.state.selectedCities
          }&categories_ids=${this.$store.state.selectedTypes}&districts_ids=${
            this.$store.state.selectedDistricts
          }&special_infrastructures_ids=${
            this.$store.state.selectedStructures
          }&ids=${this.$store.state.ids}&is_primary=${
            this.$store.state.isPrimary
          }&is_ready=${this.$store.state.isReady}&is_secondary=${
            this.$store.state.isSecondary
          }${
            this.$store.state.identifier
              ? `&identifier=${this.$store.state.identifier}`
              : ""
          }${
            this.$store.state.startingPrice
              ? `&starting_price=${this.$store.state.startingPrice}`
              : ""
          }${
            this.$store.state.endingPrice
              ? `&ending_price=${this.$store.state.endingPrice}`
              : ""
          }${
            this.$store.state.startArea
              ? `&start_area=${this.$store.state.startArea}`
              : ""
          }${
            this.$store.state.endArea
              ? `&end_area=${this.$store.state.endArea}`
              : ""
          }${
            this.$store.state.startYear
              ? `&start_year=${this.$store.state.startYear}`
              : ""
          }${
            this.$store.state.endYear
              ? `&end_year=${this.$store.state.endYear}`
              : ""
          }`
        );
        this.filtredData = data.data;

        this.filtredData = data.data;

        this.fisrtPagination = this.filtredData.slice(0, 8);
        this.pagination = this.fisrtPagination;

        if (this.filtredData.length > 8) {
          this.secondPagination = this.filtredData.slice(8, 16);
        }
        if (this.filtredData.length > 16) {
          this.secondPagination = this.filtredData.slice(16, 24);
        }
        if (this.filtredData.length > 24) {
          this.secondPagination = this.filtredData.slice(
            24,
            this.filtredData.length
          );
        }
        this.objectsCount = this.filtredData.length;
      } catch (e) {
        console.log(e);
      }
    },

    async newTab() {
      try {
        const { data } = await axios.get(
          "https://mosso.a-lux.dev/api/new-objects",
          {
            headers: {
              "Accept-Language": localStorage.getItem("language"),
            },
          }
        );
        this.filtredData = data.data;
        this.fisrtPagination = this.filtredData.slice(0, 8);
        this.pagination = this.fisrtPagination;
        if (this.filtredData.length > 8) {
          this.secondPagination = this.filtredData.slice(8, 16);
        }
        if (this.filtredData.length > 16) {
          this.secondPagination = this.filtredData.slice(16, 24);
        }
        if (this.filtredData.length > 24) {
          this.secondPagination = this.filtredData.slice(
            24,
            this.filtredData.length
          );
        }
        this.objectsCount = this.filtredData.length;
        this.objectsTab = "new";
      } catch (e) {
        console.log(e);
      }
    },

    async cheapTab() {
      try {
        const { data } = await axios.get(
          "https://mosso.a-lux.dev/api/cheap-objects",
          {
            headers: {
              "Accept-Language": localStorage.getItem("language"),
            },
          }
        );
        this.filtredData = data.data;
        this.fisrtPagination = this.filtredData.slice(0, 8);
        this.pagination = this.fisrtPagination;
        if (this.filtredData.length > 8) {
          this.secondPagination = this.filtredData.slice(8, 16);
        }
        if (this.filtredData.length > 16) {
          this.secondPagination = this.filtredData.slice(16, 24);
        }
        if (this.filtredData.length > 24) {
          this.secondPagination = this.filtredData.slice(
            24,
            this.filtredData.length
          );
        }
        this.objectsCount = this.filtredData.length;
        this.objectsTab = "cheap";
      } catch (e) {
        console.log(e);
      }
    },

    async expensiveTab() {
      try {
        const { data } = await axios.get(
          "https://mosso.a-lux.dev/api/expensive-objects",
          {
            headers: {
              "Accept-Language": localStorage.getItem("language"),
            },
          }
        );
        this.filtredData = data.data;
        this.fisrtPagination = this.filtredData.slice(0, 8);
        this.pagination = this.fisrtPagination;
        if (this.filtredData.length > 8) {
          this.secondPagination = this.filtredData.slice(8, 16);
        }
        if (this.filtredData.length > 16) {
          this.secondPagination = this.filtredData.slice(16, 24);
        }
        if (this.filtredData.length > 24) {
          this.secondPagination = this.filtredData.slice(
            24,
            this.filtredData.length
          );
        }
        this.objectsCount = this.filtredData.length;
        this.objectsTab = "expensive";
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
</style>