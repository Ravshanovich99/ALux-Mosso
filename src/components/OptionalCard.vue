<template>
  <div class="optional-card">
    <h2 class="optional-card-title" v-if="language == 'en'">
      Let's find an estate in 1 hour!
    </h2>
    <h2 class="optional-card-title" v-else>Подберём недвижимость за 1 час!</h2>
    <div class="optional-card-text" v-if="language == 'en'">
      Book a free consultation
    </div>
    <div class="optional-card-text" v-else>
      Закажите бесплатную консультацию
    </div>
    <div class="optional-inputs">
      <input
        type="text"
        class="optional-card-inp"
        v-model="state.name"
        :class="{ invalid: v$.name.$errors.length }"
      />
      <small v-if="v$.name.$errors.length && language == 'en'"
        >This field is required</small
      >
      <small v-if="v$.name.$errors.length && language == 'ru'"
        >Это поле обязательно к заполнению</small
      >
      <input
        v-maska="'+7 (###) ###-##-##'"
        class="masked optional-card-inp"
        type="tel"
        autocomplete="tel"
        placeholder="+7 (777) 777-77-77"
        v-model="state.phoneNumber"
        :class="{ invalid: v$.phoneNumber.$errors.length }"
      />
      <small v-if="v$.phoneNumber.$errors.length && language == 'en'"
        >This field is required</small
      >
      <small v-if="v$.phoneNumber.$errors.length && language == 'ru'"
        >Это поле обязательно к заполнению</small
      >
      <div class="agree-inp">
        <input
          type="checkbox"
          name="concent"
          id="concent"
          v-model="state.concent"
        />
        <label for="agree" class="footer-agree-label" v-if="language == 'en'"
          >I give my consent to the processing of
          <a href="#">personal data</a></label
        >
        <label for="agree" class="footer-agree-label" v-else
          >Я даю своё согласие на обработку
          <a href="#">персональных данных</a></label
        >
      </div>
      <small v-if="v$.concent.$errors.length && language == 'en'"
        >Sending requires your consent</small
      >
      <small v-if="v$.concent.$errors.length && language == 'ru'"
        >Для отправки нужно ваше согласие</small
      >

      <Button
        @click="submitHandler"
        title="Send"
        type="elevated"
        v-if="language == 'en'"
      />
      <Button @click="submitHandler" title="Отправить" type="elevated" v-else />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import axios from "axios";

import useVuelidate from "@vuelidate/core";
import { required, numeric, minLength } from "@vuelidate/validators";
import { reactive } from "@vue/reactivity";

export default {
  data() {
    return {
      name: null,
      phoneNumber: "+7 (___) - ___-__-__",
      concent: false,

      language: localStorage.getItem("language"),
    };
  },

  setup() {
    const state = reactive({
      name: "",
      phoneNumber: "",
      concent: false,
    });

    const rules = {
      name: { required, minLength: minLength(3) },
      phoneNumber: { required, numeric, minLength: minLength(7) },
      concent: { checked: (v) => v },
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
              phone_number: this.state.phoneNumber,
              consent: this.state.concent,
            }
          );
          this.state.name = "";
          this.state.phoneNumber = "";
          this.concent = false;
          // console.log(data);
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