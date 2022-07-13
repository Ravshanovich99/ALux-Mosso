<template>
  <section class="objects" v-for="item in objectData" :key="item.id">
    <Header />
    <Heart />
    <div class="container">
      <p class="section-subtitle" v-if="language == 'en'">
        Main — Catalog — Sale of three-room apartments
      </p>
      <p class="section-subtitle" v-else>
        Главная — Каталог — Продажа трехкомнатных квартир
      </p>
      <h2 class="section-title">{{ item.headline }}</h2>
      <div class="object-main">
        <div class="object-left">
          <div class="object-info">
            <h2 class="price" v-if="this.$store.state.currency == 'price'">
              {{ item.price_from }} KZT - {{ item.price_to }} KZT
            </h2>
            <h2
              class="price"
              v-if="this.$store.state.currency == 'price_dollar'"
            >
              {{ item.price_dollar_from }} $ - {{ item.price_dollar_to }} $
            </h2>
            <h2 class="price" v-if="this.$store.state.currency == 'price_euro'">
              {{ item.price_euro_from }} € - {{ item.price_euro_to }} €
            </h2>
            <div class="infos">
              <p v-if="language == 'en'">City</p>
              <p v-else>Город</p>
              <span></span>
              <div class="info-city">
                <h3>{{ item.city }}</h3>
              </div>
            </div>
            <div class="infos">
              <p v-if="language == 'en'">District</p>
              <p v-else>Район</p>
              <span></span>
              <div class="info-city">
                <h3>{{ item.district }}</h3>
              </div>
            </div>
            <div class="infos">
              <p v-if="language == 'en'">Area</p>
              <p v-else>Площадь</p>
              <span></span>
              <div class="info-area">
                <h3>{{ item.area }} м2</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="object-right">
          <div class="object-btns">
            <Button :title="'ID ' + item.identifier" type="elevated" />
          </div>
          <div class="object-images">
            <div class="main-image">
              <img :src="mainImg" alt="house image" :id="id" />
            </div>
            <div class="more-images">
              <div
                class="more-image"
                v-for="(photo, index) in item.gallery"
                :key="index"
              >
                <img
                  @click="imgSelect($event)"
                  :src="photo"
                  alt="photo"
                  :id="index"
                  :class="id == index ? 'active' : ''"
                />
                <div class="play">
                  <i class="fa-solid fa-play"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="object-description-short">
            <p>{{ item.short_description }}</p>
          </div>
          <div class="object-descriptions">
            <div class="object-description">
              <h3 v-if="language == 'en'">Ad Description</h3>
              <h3 v-else>Описание объявления</h3>
              <p>{{ item.description }}</p>
            </div>
            <!-- <div class="addition-description">
              <h3 class="addition-headline" v-if="language == 'en'">
                Additional description
              </h3>
              <h3 class="addition-headline" v-else>Дополнительное описание</h3>
              <div class="addition-top">
                <div>
                  <h3 v-if="language == 'en'">Balcony is glazed</h3>
                  <h3 v-else>Балкон остеклён</h3>
                  <p v-if="item.balcony_glassed && language == 'en'">Yes</p>
                  <p v-if="item.balcony_glassed && !language == 'en'">Да</p>
                  <p v-if="!item.balcony_glassed && language == 'en'">No</p>
                  <p v-if="!item.balcony_glassed && !language == 'en'">Нет</p>
                </div>
                <div>
                  <h3 v-if="language == 'en'">Door</h3>
                  <h3 v-else>Дверь</h3>
                  <p>{{ item.door }}</p>
                </div>
                <div>
                  <h3 v-if="language == 'en'">Parking</h3>
                  <h3 v-else>Парковка</h3>
                  <p>{{ item.parking }}</p>
                </div>
                <div>
                  <h3 v-if="language == 'en'">Floor</h3>
                  <h3 v-else>Пол</h3>
                  <p>{{ item.floor_type }}</p>
                </div>
                <div>
                  <h3 v-if="language == 'en'">ceilings</h3>
                  <h3 v-else>Потолки</h3>
                  <p>{{ item.ceiling_height }}</p>
                </div>
                <div>
                  <h3 v-if="language == 'en'">Security</h3>
                  <h3 v-else>Безопасность</h3>
                  <p>{{ item.security }}</p>
                </div>
                <div>
                  <h3 v-if="language == 'en'">Windows</h3>
                  <h3 v-else>Окна</h3>
                  <p>{{ item.windows }}</p>
                </div>
                <div>
                  <h3 v-if="language == 'en'">Distance to the sea</h3>
                  <h3 v-else>До моря</h3>
                  <p>{{ item.distance_from_sea }}</p>
                </div>
              </div>
            </div> -->
          </div>
          <div class="object-ads">
            <h3 v-if="language == 'en'">Similar ads</h3>
            <h3 v-else>Похожие объявления</h3>
            <div class="cards">
              <NewObjects @changeRoute="changeRoute" objCount="6" />
            </div>
            <ArrowBtn
              @click="this.$router.push('/filtred-objects')"
              title="See more"
              v-if="language == 'en'"
            />
            <ArrowBtn
              @click="this.$router.push('/filtred-objects')"
              title="Смотреть больше"
              v-else
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Button from "@/components/Button.vue";
import NewObjects from "@/components/NewObjects.vue";
import Footer from "@/components/Footer.vue";
import ArrowBtn from "@/components/ArrowBtn.vue";
import Heart from "@/components/Heart.vue";

import axios from "axios";
export default {
  name: "objectsPage",

  data() {
    return {
      objectData: null,
      mainImg: null,
      id: 0,
      objLikeBtn: false,
      language: localStorage.getItem("language"),
    };
  },

  components: {
    Header,
    Button,
    NewObjects,
    Footer,
    ArrowBtn,
    Heart,
  },

  computed: {
    async changeRoute() {
      const routeId = this.$route.params.id;
      try {
        const { data } = await axios.get(
          `https://mosso.a-lux.dev/api/objects/${routeId}`
        );
        this.objectData = data;
        // console.log(data.data);
        this.mainImg = data.data.gallery[0];
      } catch (e) {
        console.log(e);
      }
      window.scrollTo(0, 0);
    },
  },

  async mounted() {
    try {
      const { data } = await axios.get(
        `https://mosso.a-lux.dev/api/objects/${this.$route.params.id}`,
        {
          headers: {
            "Accept-Language": localStorage.getItem("language"),
          },
        }
      );
      this.objectData = data;
      // console.log(data.data);
      this.mainImg = data.data.gallery[0];
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    imgSelect($event) {
      this.mainImg = $event.target.src;
      this.id = $event.target.id;
    },
  },
};
</script>

<style>
</style>