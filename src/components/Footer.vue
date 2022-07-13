<template>
  <footer id="footer" class="footer">
    <div class="container">
      <h2 class="section-title" v-if="language == 'en'">
        Any questions? Text us
      </h2>
      <h2 class="section-title" v-else>Есть вопросы? Пишите нам</h2>
      <form @submit.prevent="submitHandler" class="footer-form">
        <div class="name-inp">
          <label class="footer-name-label" for="name" v-if="language == 'en'"
            >Your name</label
          >
          <label class="footer-name-label" for="name" v-else>Ваше имя</label>
          <input
            class="footer-name-inp"
            type="text"
            name="name"
            id="name"
            v-model="state.name"
            :class="{ invalid: v$.name.$errors.length }"
          />
          <small v-if="v$.name.$errors.length && language == 'en'"
            >This field is required</small
          >
          <small v-if="v$.name.$errors.length && language == 'ru'"
            >Это поле обязательно к заполнению</small
          >
        </div>
        <div class="phone-inp">
          <label for="phone" v-if="language == 'en'">Your phone number</label>
          <label for="phone" v-else>Ваш телефон</label>
          <input
            v-maska="'+7 (###) ###-##-##'"
            class="masked"
            type="tel"
            autocomplete="tel"
            placeholder="+7 (777) 777-77-77"
            v-model="state.phone"
            :class="{ invalid: v$.phone.$errors.length }"
          />
          <small v-if="v$.phone.$errors.length && language == 'en'"
            >This field is required</small
          >
          <small v-if="v$.phone.$errors.length && language == 'ru'"
            >Это поле обязательно к заполнению</small
          >
        </div>
        <Button
          title="Find house"
          type="elevated submitHandler"
          v-if="language == 'en'"
        />
        <Button title="Подобрать жилье" type="elevated submitHandler" v-else />
        <div class="agree-inp">
          <input
            type="checkbox"
            class="footer-agree-inp"
            name="agree"
            id="agree"
            v-model="state.agree"
          />

          <label for="agree" class="footer-agree-label" v-if="language == 'en'"
            >I give my consent to the processing of
            <a href="#">personal data</a></label
          >
          <label for="agree" class="footer-agree-label" v-else
            >Я даю своё согласие на обработку
            <a href="#">персональных данных</a></label
          >

          <small v-if="v$.agree.$errors.length && language == 'en'"
            >Sending requires your consent</small
          >
          <small v-if="v$.agree.$errors.length && language == 'ru'"
            >Для отправки нужно ваше согласие</small
          >
        </div>
      </form>
      <div class="footer-mid">
        <div class="footer-logo">
          <img src="../assets/images/footer-logo.png" alt="logo" />
        </div>
        <div class="footer-main">
          <h3 v-if="language == 'en'">Main section</h3>
          <h3 v-else>Основной раздел</h3>
          <ul class="menu-main">
            <li v-if="language == 'en'">
              <router-link to="">Rental real state</router-link>
            </li>
            <li v-else><router-link to="">Аренда недвижимости</router-link></li>

            <li v-if="language == 'en'">
              <router-link to="">Sale real state</router-link>
            </li>
            <li v-else>
              <router-link to="">Продажа недвижимости</router-link>
            </li>

            <li v-if="language == 'en'">
              <router-link to="">Hotel rentals</router-link>
            </li>
            <li v-else><router-link to="">Аренда отелей</router-link></li>

            <li v-if="language == 'en'">
              <router-link to="">Land lease</router-link>
            </li>
            <li v-else><router-link to="">Аренда земли </router-link></li>
          </ul>
        </div>
        <div class="footer-addition">
          <h3 v-if="language == 'en'">Additionally</h3>
          <h3 v-else>Дополнительно</h3>
          <ul class="menu-addition">
            <li v-if="language == 'en'">
              <router-link to="/about">About company</router-link>
            </li>
            <li v-else><router-link to="/about">О компании</router-link></li>
            <li v-if="language == 'en'">
              <router-link to="/reviews">Reviews</router-link>
            </li>
            <li v-else><router-link to="/reviews">Отзывы</router-link></li>
          </ul>
        </div>
        <div class="footer-contacts">
          <div class="footer-call">
            <h3>8 (4872) 704-407</h3>
            <p v-if="language == 'en'">Call us</p>
            <p v-else>Звоните нам</p>
          </div>
          <div class="footer-work">
            <h3 v-if="language == 'en'">Mon-Fri from 9.00 to 18.00</h3>
            <h3 v-else>Пн-Пт с 9.00 до 18.00</h3>
            <p v-if="language == 'en'">Schedule</p>
            <p v-else>График работы</p>
          </div>
          <div class="footer-mail">
            <div>info@mail.ru</div>
            <p v-if="language == 'en'">For emails</p>
            <p v-else>Для электронных писем</p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p v-if="language == 'en'">2022 (с) All rights reserved</p>
        <p v-else>2022 (с) Все права защищены</p>
        <div v-if="language == 'en'">
          Developed in
          <img src="../assets/images/alux-logo.png" alt="alux-logo" />
        </div>
        <div v-else>
          Разработано в
          <img src="../assets/images/alux-logo.png" alt="alux-logo" />
        </div>
      </div>
      <div class="footer-cities">
        <ul class="cities-menu">
          <li @click="this.$router.push('/')">
            <a href="#cities" v-if="language == 'en'">Alanya</a>
            <a href="#cities" v-else>Алания</a>
          </li>
          <li @click="this.$router.push('/')">
            <a href="#cities" v-if="language == 'en'">Cyprus</a>
            <a href="#cities" v-else>Кипр</a>
          </li>
          <li @click="this.$router.push('/')">
            <a href="#cities" v-if="language == 'en'">Mersin</a>
            <a href="#cities" v-else>Мерсин</a>
          </li>
          <li @click="this.$router.push('/')">
            <a href="#cities" v-if="language == 'en'">Antalya</a>
            <a href="#cities" v-else>Анталья</a>
          </li>
          <li @click="this.$router.push('/')">
            <a href="#cities" v-if="language == 'en'">Istanbul</a>
            <a href="#cities" v-else>Стамбул</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>


<script>
import Button from "./Button.vue";

import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { reactive } from "@vue/reactivity";

export default {
  data() {
    return {
      name: null,
      phone: null,
      agree: false,
      language: localStorage.getItem("language"),
    };
  },

  setup() {
    const state = reactive({
      name: null,
      phone: "",
      agree: false,
    });

    const rules = {
      name: { required, minLength: minLength(3) },
      phone: { required, minLength: minLength(7) },
      agree: { checked: (v) => v },
    };
    const v$ = useVuelidate(rules, state);
    return { state, v$ };
  },

  methods: {
    async submitHandler() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      } else {
        try {
          const data = await axios.post(
            "https://mosso.a-lux.dev/api/ask-consultation",
            {
              name: this.state.name,
              phone_number: this.state.phone,
              consent: this.state.agree,
            }
          );
          if (this.language == "en") {
            alert('Your data has been sent, we will contact you soon')
            }
          else{
            alert("Ваши данные отправлены, скоро мы свяжемся с вами");
          }
          this.state.name = "";
          this.state.phone = "";
          this.agree = false;
          // console.log(this.v$.$touch);
        } catch (e) {
          console.log(e);
        }
      }
    },
  },

  components: {
    Button,
  },
};
</script>

<style>
</style>