<template>
  <section id="videos" class="videos">
    <img
      class="videos-leaf-1"
      src="../assets/images/videos-leaf-1.png"
      alt="leaf"
    />
    <div class="container">
      <div class="section-title" v-if="language == 'en'">Videos from our channel</div>
      <div class="section-title" v-else>Видео с нашего канала</div>
      <div class="videos-cards">
        <div
          class="videos-card"
          v-for="(item, index) in videosData"
          :key="index"
        >
          <a :href="item.link">
            <div class="videos-img">
              <img
                :src="require(`../assets/images/videos-${++index}.png`)"
                alt="video"
              />
              <div class="videos-play-btn">
                <div class="videos-play">
                  <a :href="item.link"><i class="fa-solid fa-play"></i></a>
                </div>
              </div>
            </div>
            <div class="videos-info">
              <h3 class="videos-title">
                {{ item.title }}
              </h3>
              <p class="videos-watch-count" v-if="language == 'en'">
                <i class="fa-solid fa-eye"></i>
                {{ item.watch_count }} views
              </p>
              <p class="videos-watch-count" v-else>
                <i class="fa-solid fa-eye"></i>
                {{ item.watch_count }} просмотров
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <img
      class="videos-leaf-2"
      src="../assets/images/videos-leaf-2.png"
      alt="leaf"
    />
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      videosData: null,
      language: localStorage.getItem('language')
    };
  },

  async mounted() {
    try {
      const { data } = await axios.get("https://mosso.a-lux.dev/api/videos", {
        headers: {
          "Accept-Language": localStorage.getItem("language"),
        },
      });
      this.videosData = data.data;
      //   console.log(data.data);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
</style>