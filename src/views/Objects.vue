<template>
  <section id="objects" class="new-obj-turkey">
    <Filter />
    <div class="mosso">
      <img src="../assets/images/Mosso.png" alt="" />
    </div>
    <div class="leaf-1">
      <img src="../assets/images/newObj-leaf-1.png" alt="leaf" />
    </div>
    <div class="container">
      <h2 class="section-title" v-if="language == 'en'">New objects in Turkey</h2>
      <h2 class="section-title" v-else >Новые объекты в Турции</h2>
      <p class="section-subtitle" v-if="language == 'en'">
        Of course, diluted with a fair amount of empathy, rational thinking is
      </p>
      <p class="section-subtitle" v-else>
        Безусловно, разбавленное изрядной долей эмпатии, рациональное мышление
        является
      </p>

      <div class="cards">
        <NewObjects objCount="8"/>
      </div>
      <ArrowBtn title="See more" v-if="language == 'en'" @click="this.$router.push('filtred-objects')"/>
      <ArrowBtn title="Смотреть больше" v-else @click="this.$router.push('filtred-objects')"/>
    </div>
    <div class="leaf-2">
      <img src="../assets/images/newObj-leaf-2.png" alt="leaf" />
    </div>
  </section>
</template>

<script>
import NewObjects from "@/components/NewObjects.vue";
import ArrowBtn from "@/components/ArrowBtn.vue";
import Filter from "@/components/Filter.vue";

export default {
  components: {
    NewObjects,
    ArrowBtn,
    Filter,
  },

  data(){
    return{
      language: localStorage.getItem('language'),
    }
  },
};
</script>

<style>
</style>