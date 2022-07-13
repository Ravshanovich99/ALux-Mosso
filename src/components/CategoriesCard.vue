<template>
  <div
    class="categories-card"
    v-for="item in categoriesData"
    :key="item.id"
    @click="
      this.$router.push('/filtred-objects'),
        (this.$store.state.categoriesId = item.id)
    "
  >
    <div class="categories-img-block">
      <img class="categories-img" :src="item.img" alt="city image" />
    </div>
    <div class="categories-card-info">
      <div class="categories-title">
        {{ item.name }}
      </div>
      <ArrowBtn />
    </div>
  </div>
</template>

<script>
import ArrowBtn from "@/components/ArrowBtn.vue";
import axios from "axios";

export default {
  components: {
    ArrowBtn,
  },

  data() {
    return {
      categoriesData: null,
    };
  },

  async mounted() {
    try {
      const { data } = await axios.get(
        "https://mosso.a-lux.dev/api/categories",
        {
          headers: {
            "Accept-Language": localStorage.getItem("language"),
          },
        }
      );
      //   console.log(data);
      this.categoriesData = data.data;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
</style>