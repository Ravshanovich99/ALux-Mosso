<template>
  <div class="service-line">
    <img
      class="service-line-leaf"
      src="../assets/images/services-line-leaf.png"
      alt="leaf"
    />
    <div class="line-info">
      <img src="../assets/images/checked.svg" alt="icon" />
      <p v-if="language == 'en'">Over 30 000 objects</p>
      <p v-else>Более 30 000 объектов</p>
    </div>
    <div class="line-info">
      <img src="../assets/images/shield.svg" alt="icon" />
      <p v-if="language == 'en'">Legal support</p>
      <p v-else>Юридическое сопровождение</p>
    </div>
    <div class="line-info">
      <img src="../assets/images/curve-arrow.svg" alt="icon" />
      <p v-if="language == 'en'">Dynamic pricing</p>
      <p v-else>Динамичное ценообразование</p>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            language: localStorage.getItem('language')
        }
    }
};
</script>

<style>
</style>