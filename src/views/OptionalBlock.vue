<template>
  <section class="optional-block">
    <div class="container">
      <div class="optional-info">
        <h2 class="optional-title">{{ optionalTitle }}</h2>
        <div class="optional-top">
          <p class="optional-description-1">{{ optionalDescription_1 }}</p>
          <p class="optional-description-2">{{ optionalDescription_2 }}</p>
        </div>
        <div class="optional-mid">
          <div class="optional-img-balcone">
            <img :src="optionalGallery[1]" alt="balcone image" />
          </div>
          <p class="optional-desription-3">
            {{ optionalDescription_3 }}
          </p>
        </div>
        <div class="optional-bot">
          <h3 class="optional-subtitle">{{ optionalSubtitle }}</h3>
          <p class="optional-description-4">{{ optionalDescription_4 }}</p>
          <div class="optional-bot-images">
            <div class="optional-bot-image">
              <img :src="optionalGallery[2]" alt="house image" />
            </div>
            <div class="optional-bot-image">
              <img :src="optionalGallery[3]" alt="house image" />
            </div>
            <div class="optional-bot-image">
              <img :src="optionalGallery[4]" alt="house image" />
            </div>
          </div>
          <h3 class="optional-subtitle">{{ optionalSubtitle }}</h3>
          <p class="optional-description-5">{{ optionalDescription_5 }}</p>
        </div>
      </div>
      <div class="optional-items">
        <div>
          <div class="optional-img-journal">
            <img :src="optionalGallery[0]" alt="journal image" />
          </div>
        </div>
        <Optionalcard />
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Optionalcard from "@/components/OptionalCard.vue";

export default {
  data() {
    return {
      optionalTitle: null,
      optionalSubtitle: null,
      optionalGallery: [],
      optionalDescription: null,
      optionalDescription_1: null,
      optionalDescription_2: null,
      optionalDescription_3: null,
      optionalDescription_4: null,
      optionalDescription_5: null,
    };
  },

  components: {
    Optionalcard,
  },

  async mounted() {
    if (localStorage.getItem("language") == null) {
      localStorage.setItem("language", "ru");
    }
    try {
      const { data } = await axios.get(
        "https://mosso.a-lux.dev/api/optional-block",
        {
          headers: {
            "Accept-Language": localStorage.getItem("language"),
          },
        }
      );
      // console.log(data.data);
      this.optionalTitle = data.data.title;
      this.optionalSubtitle = data.data.subtitle;
      this.optionalDescription = data.data.description;
      this.optionalGallery = data.data.gallery;
      this.optionalDescription_1 = this.optionalDescription.slice(0, 157);
      this.optionalDescription_2 = this.optionalDescription.slice(157, 333);
      this.optionalDescription_3 = this.optionalDescription.slice(333, 492);
      this.optionalDescription_4 = this.optionalDescription.slice(492, 651);
      this.optionalDescription_5 = this.optionalDescription.slice(651, 809);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
</style>