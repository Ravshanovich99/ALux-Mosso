<template>
  <div class="house-card" v-for="item in houseData" :key="item.id">
    <div class="house-img-block">
      <img class="house-img" :src="item.img" alt="city image" />
    </div>
    <div class="house-card-info">
      <div class="house-title">
        {{ item.name }}
      </div>
      <div class="house-price" v-if="language == 'en'">from {{ item.starting_price }} euro</div>
      <div class="house-price" v-else >от {{ item.starting_price }} евро</div>
      <ArrowBtn
        @click="this.$store.state.selectedCities.push(item.id), this.$router.push('/filtred-objects')"
      />
    </div>
  </div>
</template>

<script>
import ArrowBtn from "@/components/ArrowBtn.vue";
import axios from "axios";

export default {
  // inject:['lang'],

  components: {
    ArrowBtn,
  },

  data() {
    return {
      houseData: null,
      language: localStorage.getItem('language')
    };
  },

  async mounted() {
    try {
      const { data } = await axios.get("https://mosso.a-lux.dev/api/cities", {
        headers:{
          'Accept-Language' : localStorage.getItem("language"),
        }
      });
      // console.log(data);
      this.houseData = data.data;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
</style>