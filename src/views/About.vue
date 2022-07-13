<template>
  <section class="about">
    <Header />
    <div class="container">
      <p class="section-subtitle" v-if="language == 'en'">
        Main — Catalog — Sale of three-room apartments
      </p>
      <p class="section-subtitle" v-else>
        Главная — Каталог — Продажа трехкомнатных квартир
      </p>
      <h2 class="section-title" v-if="language == 'en'">About Company</h2>
      <h2 class="section-title" v-else>О Компании</h2>
      <img class="about-main-img" :src="aboutImage" alt="house image" />
      <div class="about-headline">
        {{ headline }}
      </div>
      <img
        class="about-leaf-1"
        src="../assets/images/about-leaf-1.png"
        alt="leaf"
      />
      <div class="about-description">
        {{ description }}
      </div>
      <div class="about-items">
        <div class="item">
          <img src="../assets/images/abou1.svg" alt="icon" />
          <div class="item-info">
            <h3>20+</h3>
            <p v-if="language == 'en'">specialists in the state</p>
            <p v-else>специалистов в штате</p>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/about4.svg" alt="icon" />
          <div class="item-info">
            <h3>500+</h3>
            <p v-if="language == 'en'">successful projects</p>
            <p v-else>успешных проектов</p>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/about3.svg" alt="icon" />
          <div class="item-info">
            <h3>450+</h3>
            <p v-if="language == 'en'">diverse apartments</p>
            <p v-else>разноплановых аппартаментов</p>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/about2.svg" alt="icon" />
          <div class="item-info">
            <h3>50+</h3>
            <p v-if="language == 'en'">satisfied partners</p>
            <p v-else>довольных партнеров</p>
          </div>
        </div>
      </div>
      <hr class="hr-top" />
      <div class="hr-inner">
        <svg
          width="74"
          height="100"
          viewBox="0 0 74 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M73.7903 36.3758C73.7903 16.287 57.5067 0 37.4145 0C17.3257 0 2.74071 15.7242 1.03868 35.7427C-1.55862 66.2877 21.6454 91.8621 49.8186 100C40.216 94.194 33.5192 84.0957 32.4006 72.352C34.0448 72.5856 35.7112 72.7509 37.4138 72.7509C57.5061 72.7509 73.7896 56.4674 73.7896 36.3751L73.7903 36.3758Z"
            fill="#F5F1EA"
          />
        </svg>
        <svg
          width="74"
          height="100"
          viewBox="0 0 74 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M73.7903 36.3758C73.7903 16.287 57.5067 0 37.4145 0C17.3257 0 2.74071 15.7242 1.03868 35.7427C-1.55862 66.2877 21.6454 91.8621 49.8186 100C40.216 94.194 33.5192 84.0957 32.4006 72.352C34.0448 72.5856 35.7112 72.7509 37.4138 72.7509C57.5061 72.7509 73.7896 56.4674 73.7896 36.3751L73.7903 36.3758Z"
            fill="#F5F1EA"
          />
        </svg>
        <h2 class="hr-headline" v-if="language == 'en'">
          They look everywhere, but buy from us Real estate in Turkey -
          <span>it is Mosso Real Estate</span>
        </h2>
        <h2 class="hr-headline" v-else>
          Смотрят везде, а покупают у нас Недвижимость в Турции –
          <span>это Mosso Real Estate</span>
        </h2>
      </div>
      <hr class="hr-bottom" />
    </div>

    <div class="about-secondary">
      <img
        class="about-leaf-2"
        src="../assets/images/about-leaf-2.png"
        alt="leaf"
      />
      <div class="container wrapper">
        <div class="secondary-left">
          <h2 v-if="language == 'en'">
            Why our company <span>is the ideal</span> partner for you?
          </h2>
          <h2 v-else>
            Почему наша компания <span>является идеальным</span> партнером для
            вас?
          </h2>
          <a href="#footer">
            <Button v-if="language == 'en'" type="elevated" title="Talk to an expert" />
            <Button v-else type="elevated" title="Поговорить с экспертом" />
          </a>
        </div>
        <div class="secondary-right">
          <div class="secondary-headline">
            {{ secondaryHeadline }}
          </div>
          <div class="secondary-description">
            {{ secondaryDescription }}
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="about-teritary">
        <div class="teritary-image">
          <img :src="teritaryImage" alt="house image" />
        </div>
        <div class="teritary-info">
          <h3 class="teritary-headline">
            {{ teritaryHeadline }}
          </h3>
          <p class="teritary-description">
            {{ teritaryDescription }}
          </p>
        </div>
      </div>
    </div>
    <Categories />
    <WhyUs />
    <div class="container">
      <AboutCompany header="Наши услуги" type="service" />
    </div>
    <ServicesLine />
    <div class="container">
      <h2 class="section-title-review">Отзывы</h2>
      <ReviewCard />
    </div>
    <Footer />
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Button from "@/components/Button.vue";
import Categories from "@/views/Categories.vue";
import AboutCompany from "@/components/AboutCompany.vue";
import Footer from "@/components/Footer.vue";
import WhyUs from "@/components/WhyUs.vue";
import ServicesLine from "@/components/ServicesLine.vue";
import ReviewCard from "@/components/ReviewCard.vue";

import axios from "axios";
export default {
  name: "about",
  data() {
    return {
      aboutImage: null,
      headline: null,
      description: null,
      secondaryHeadline: null,
      secondaryDescription: null,
      secondaryLeaf: null,
      teritaryHeadline: null,
      teritaryDescription: null,
      teritaryImage: null,
      language: null,
    };
  },
  components: {
    Header,
    Button,
    Categories,
    AboutCompany,
    Footer,
    WhyUs,
    ServicesLine,
    ReviewCard,
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
      this.language = localStorage.getItem("language");

      // console.log(data.data[0]);
      this.aboutImage = data.data[0].mosso_real_estate_img;
      this.headline = data.data[0].mosso_real_estate_headline;
      this.description = data.data[0].mosso_real_estate_description;
      this.secondaryHeadline = data.data[0].secondary_headline;
      this.secondaryDescription = data.data[0].secondary_description;
      this.secondaryLeaf = data.data[0].secondary_img;
      this.teritaryHeadline = data.data[0].tertiary_headline;
      this.teritaryDescription = data.data[0].tertiary_description;
      this.teritaryImage = data.data[0].tertiary_img;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>