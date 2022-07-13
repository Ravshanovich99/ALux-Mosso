<template>
  <div
    v-if="bgImage"
    class="bg"
    :style="`
    width: 100%;
    background: #000 url(${bgImage}) no-repeat right;
    background-size: cover;`"
  >
    <Header />
    <main class="main">
      <div class="container">
        <div class="right">
          <h1>
            {{ title }}
            <img
              class="right-flag"
              src="../assets/images/main-flag.png"
              alt="Flag of Turkey"
            />
          </h1>
          <p>{{ subtitle }}</p>
        </div>
        <div class="left"></div>
        <Heart />
      </div>
    </main>
  </div>

  <Objects />
  <Cities />
  <Categories />
  <MainReviews />
  <Videos />
  <NewsEvents />
  <OptionalBlock />
  <Footer />

</template>

<script>
import Header from "@/components/Header.vue";
import Heart from "@/components/Heart.vue";
import Objects from "./Objects.vue";
import Cities from "./Cities.vue";
import Categories from "./Categories.vue";
import MainReviews from "./MainReview.vue";
import Videos from "./Videos.vue";
import NewsEvents from "./NewsEvents.vue";
import OptionalBlock from "./OptionalBlock.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import About from "@/views/About.vue";



export default {
  data() {
    return {
      bgImage: null,
      title: null,
      subtitle: null,
    };
  },

  components: {
    Header,
    Heart,
    Objects,
    Cities,
    Categories,
    MainReviews,
    Videos,
    NewsEvents,
    OptionalBlock,
    Footer,
    About,
  },

  async mounted() {
    if (localStorage.getItem("language") == null) {
      localStorage.setItem("language", "ru");
    }
    try {
      const { data } = await axios.get("https://mosso.a-lux.dev/api/banner", {
        headers: {
          "Accept-Language": localStorage.getItem("language"),
        },
      });
      // console.log(data.data);
      this.bgImage = data.data.background_img;
      this.title = data.data.title;
      this.subtitle = data.data.subtitle;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/main";
</style>