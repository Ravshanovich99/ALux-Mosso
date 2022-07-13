<template>
  <div class="news-events-card" v-for="item in eventsData" :key="item.id">
    <div class="news-events-card-img">
      <img :src="item.img" alt="city image" />
      <h2 class="news-events-type">
          {{item.type}}
      </h2>
    </div>
    <div class="news-events-card-info">
      <h3 class="news-events-title">
          {{item.title}}
      </h3>
      <p class="news-events-city">
        {{ item.location }}
      </p>
      <p class="news-events-text">
          {{item.description}}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      eventsData: null,
    };
  },

  async mounted() {
    try {
      const { data } = await axios.get(
        "https://mosso.a-lux.dev/api/news-and-events", {
            headers: {
                'Accept-Language' : localStorage.getItem("language"),
            }
        }
      );
      this.eventsData = data.data;
      // console.log(data.data);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
</style>