<template >
  <header class="header">
    <div class="container">
      <div class="navigation-menu" :class="burgerOpen ? 'active' : ''">
        <ArrowBtn
          title="About company"
          @click="$router.push('/about'), (burgerOpen = false)"
          v-if="language == 'en'"
        />
        <ArrowBtn
          title="О компании"
          @click="$router.push('/about'), (burgerOpen = false)"
          v-else
        />
        <a href="#objects"
          ><ArrowBtn
            title="Object catalog"
            @click="this.$router.push('/'), (burgerOpen = false)"
            v-if="language == 'en'" />

          <ArrowBtn
            title="Каталог объектов"
            @click="this.$router.push('/'), (burgerOpen = false)"
            v-else
        /></a>
        <a href="#cities"
          ><ArrowBtn
            title="Estate in cities"
            @click="this.$router.push('/'), (burgerOpen = false)"
            v-if="language == 'en'" />

          <ArrowBtn
            title="Недвижимость в городах"
            @click="this.$router.push('/'), (burgerOpen = false)"
            v-else
        /></a>

        <ArrowBtn
          title="Reviews"
          @click="$router.push('/reviews'), (burgerOpen = false)"
          v-if="language == 'en'"
        />
        <ArrowBtn
          title="Отзывы"
          @click="$router.push('/reviews'), (burgerOpen = false)"
          v-else
        />
        <a href="#videos"
          ><ArrowBtn
            title="Videos"
            @click="this.$router.push('/'), (burgerOpen = false)"
            v-if="language == 'en'" />

          <ArrowBtn
            title="Видео"
            @click="this.$router.push('/'), (burgerOpen = false)"
            v-else
        /></a>

        <a href="#news-events"
          ><ArrowBtn
            title="News and events"
            @click="this.$router.push('/'), (burgerOpen = false)"
            v-if="language == 'en'" />
          <ArrowBtn
            title="Новости и события"
            @click="this.$router.push('/'), (burgerOpen = false)"
            v-else
        /></a>

        <ArrowBtn
          title="Contacts"
          @click="$router.push('/contacts'), (burgerOpen = false)"
          v-if="language == 'en'"
        />
        <ArrowBtn
          title="Контакты"
          @click="$router.push('/contacts'), (burgerOpen = false)"
          v-else
        />

        <div class="md-menu">
          <div class="header-center">
            <div class="currency">
              <select
                name="currency"
                id="currency"
                v-model="this.$store.state.currency"
              >
                <option value="price_euro">€</option>
                <option value="price_dollar">$</option>
                <option value="price">tenge</option>
              </select>
            </div>
            <div class="lang-block">
              <Button
                v-if="lang.ru || lang.en"
                title="Ru"
                type="text"
                @langSwitch="langRu"
                :active="lang.ru == 'true' ? 'active' : ''"
              />
              <Button
                v-if="!lang.ru && !lang.en"
                title="Ru"
                type="text"
                @langSwitch="langRu"
                active="active"
              />
              <Button
                title="En"
                type="text"
                @langSwitch="langEn"
                :active="lang.en == 'true' ? 'active' : ''"
              />
            </div>
          </div>
          <div class="phone">
            <p v-if="language == 'en'">Free in Kazakhstan</p>
            <p v-else>Бесплатно по Казахстану</p>
            <h3>{{ phone }}</h3>
          </div>
        </div>
      </div>
      <nav class="nav">
        <div class="header-left">
          <div
            class="burger-menu"
            @click="burgerMenu"
            :class="burgerOpen ? 'active' : ''"
          >
            <span class="burger-span"></span>
            <span class="burger-span"></span>
          </div>
          <div class="logo">
            <img :src="logo" alt="logo" @click="$router.push('/')" />
          </div>
          <div class="info">{{ name }}</div>
        </div>

        <div class="header-center">
          <div class="currency">
            <select
              name="currency"
              id="currency"
              v-model="this.$store.state.currency"
            >
              <option value="price_euro">€</option>
              <option value="price_dollar">$</option>
              <option value="price">tenge</option>
            </select>
          </div>
          <div class="lang-block">
            <Button
              v-if="lang.ru || lang.en"
              title="Ru"
              type="text"
              @langSwitch="langRu"
              :active="lang.ru == 'true' ? 'active' : ''"
            />
            <Button
              v-if="!lang.ru && !lang.en"
              title="Ru"
              type="text"
              @langSwitch="langRu"
              active="active"
            />
            <Button
              title="En"
              type="text"
              @langSwitch="langEn"
              :active="lang.en == 'true' ? 'active' : ''"
            />
          </div>
        </div>

        <div class="header-right">
          <div class="phone">
            <p v-if="language == 'en'">Free in Kazakhstan</p>
            <p v-else>Бесплатно по Казахстану</p>
            <a class="phone-call" :href="'tel:' + phone">{{ phone }}</a>
          </div>
          <a href="#footer">
            <Button title="Call back" type="elevated" v-if="language == 'en'" />
            <Button title="Обратный звонок" type="elevated" v-else />
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import Button from "./Button.vue";
import axios from "axios";
import ArrowBtn from "@/components/ArrowBtn.vue";
export default {
  data() {
    return {
      name: null,
      logo: null,
      phone: null,
      burgerOpen: false,
      newsLink: null,
      activeRu: localStorage.getItem("ruTrue"),

      lang: {
        ru: localStorage.getItem("ruTrue"),
        en: localStorage.getItem("enTrue"),
      },
      language: localStorage.getItem("language"),
    };
  },

  components: {
    Button,
    ArrowBtn,
  },

  methods: {
    langRu() {
      localStorage.setItem("ruTrue", true);
      this.lang.ru = localStorage.getItem("ruTrue");
      localStorage.setItem("enTrue", false);
      this.lang.en = localStorage.getItem("enTrue");
      localStorage.setItem("language", "ru");
      window.location.reload();
    },

    langEn() {
      localStorage.setItem("ruTrue", false);
      this.lang.ru = localStorage.getItem("ruTrue");
      localStorage.setItem("enTrue", true);
      this.lang.en = localStorage.getItem("enTrue");
      localStorage.setItem("language", "en");
      window.location.reload();
    },

    burgerMenu() {
      this.burgerOpen = !this.burgerOpen;
    },
  },

  async mounted() {
    if (localStorage.getItem("language") == null) {
      localStorage.setItem("language", "ru");
    }
    try {
      const { data } = await axios.get("https://mosso.a-lux.dev/api/header", {
        headers: {
          "Accept-Language": localStorage.getItem("language"),
        },
      });
      // console.log(data.data);
      this.name = data.data.name;
      this.logo = data.data.logo;
      this.phone = data.data.phone_number;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
</style>