<template>
  <section class="contacts">
    <Header />
    <div class="container">
      <p class="section-subtitle" v-if="language == 'en'">
        Main — Catalog — Sale of three-room apartments
      </p>
      <p class="section-subtitle" v-else>
        Главная — Каталог — Продажа трехкомнатных квартир
      </p>
      <h2 class="section-title" v-if="language == 'en'">Contacts</h2>
      <h2 class="section-title" v-else>Контакты</h2>

      <div class="contacts-main">
        <div class="contacts-left">
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.5733188097743!2d76.92773035478086!3d43.21843797296693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f307e15b88f%3A0x4c270efcf5c837d3!2sAl-Farabi%20Avenue%2077%20%2F%208%2C%20Almaty%20050040%2C%20Kazakhstan!5e0!3m2!1sen!2s!4v1653982919532!5m2!1sen!2s"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="map-info">
            <div class="map-title">
              {{ headline }}
            </div>
            <div class="map-description">
              {{ description }}
            </div>
          </div>
        </div>
        <div class="contacts-right">
          <div class="contacts-info">
            <div class="navigate">
              <i class="fa-solid fa-location-arrow"></i>
              <div class="navigate-info">
                <p>{{ adressCity }}</p>
                <h3>{{ adressStreet }}</h3>
              </div>
            </div>
            <div class="phone">
              <i class="fa-solid fa-mobile-screen"></i>
              <div class="phone-info">
                <p v-if="language == 'en'">Телефон</p>
                <p v-else>Телефон</p>
                <h3 v-for="phone in phoneNumbers" :key="phone">{{ phone }}</h3>
              </div>
            </div>
            <div class="email">
              <i class="fa-regular fa-envelope-open"></i>
              <div class="email-info">
                <p>{{ emailPhone }}</p>
                <h3>{{ emailEmail }}</h3>
              </div>
            </div>
            <div class="work">
              <i class="fa-regular fa-clock"></i>
              <div class="work-info">
                <p v-if="language == 'en'">График работы</p>
                <p v-else>График работы</p>
                <h3>{{ startWeekday }}-{{ endWeekday }} {{ from }}-{{ to }}</h3>
              </div>
            </div>
          </div>
          <div class="contacts-pdfs">
            <div class="about-pdf">
              <i class="fa-regular fa-file-pdf"></i>
              <div class="pdf-info">
                <h3>{{ companyPresentation }}</h3>
                <a href="#" v-if="language == 'en'">Download</a>
                <a href="#" v-else >Скачать</a>
              </div>
            </div>
            <div class="memo-pdf">
              <i class="fa-regular fa-file-pdf"></i>
              <div class="pdf-info">
                <h3>{{ houseSelectionDocument }}</h3>
                <a href="#" v-if="language == 'en'">Download</a>
                <a href="#" v-else >Скачать</a>
              </div>
            </div>
          </div>
        </div>
        <Heart />
      </div>
      <hr />
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
import AboutCompany from "@/components/AboutCompany.vue";
import ServicesLine from "@/components/ServicesLine.vue";
import WhyUs from "@/components/WhyUs.vue";
import axios from "axios";
import Footer from "@/components/Footer.vue";
import Heart from "@/components/Heart.vue";
export default {
  name: "contacts",
  components: {
    Header,
    AboutCompany,
    ServicesLine,
    WhyUs,
    Footer,
    Heart,
  },

  data() {
    return {
      headline: null,
      description: null,
      coordinates: [], // mashi coordinates ga asoslanib map yasashim kere
      email: null,
      phoneNumbers: [],
      addresses: null,
      startWeekday: null,
      endWeekday: null,
      from: null,
      to: null,
      companyPresentation: null,
      houseSelectionDocument: null,

      adressCity: null,
      adressStreet: null,
      emailPhone: null,
      emailEmail: null,
      language: localStorage.getItem('language')
    };
  },

  async mounted() {
    try {
      const { data } = await axios.get("https://mosso.a-lux.dev/api/contacts", {
        headers: {
          "Accept-Language": "ru",
        },
      });
      // console.log(data.data);
      this.headline = data.data.headline;
      this.description = data.data.description;
      this.coordinates = data.data.coordinates;
      this.email = data.data.email;
      this.phoneNumbers = data.data.phone_numbers;
      this.addresses = data.data.address;
      this.startWeekday = data.data.start_weekday;
      this.endWeekday = data.data.end_weekday;
      this.from = data.data.from;
      this.to = data.data.to;
      this.companyPresentation = data.data.company_presentation;
      this.houseSelectionDocument = data.data.house_selection_document;
      this.adressCity = this.addresses.slice(0, 18);
      this.adressStreet = this.addresses.slice(18, 42);
      this.emailPhone = this.email.slice(0, 7);
      this.emailEmail = this.email.slice(7, 21);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
</style>