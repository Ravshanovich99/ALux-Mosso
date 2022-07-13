<template>
  <div class="circle" @click="liked = !liked" :class="liked ? 'active' : ''">
    <i class="fa-solid fa-heart"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liked: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.circle {
  width: 36px;
  height: 36px;
  background: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 300ms;
  cursor: pointer;
  .fa-heart {
    font-size: rem(28);
    color: #7e6745;
    cursor: pointer;
    transition: 300ms;
  }

  &.active {
    background: linear-gradient(
        113.09deg,
        rgba(255, 255, 255, 0.07) -15.73%,
        rgba(192, 101, 0, 0.49) 47.76%,
        rgba(228, 123, 0, 0.21) 95.11%,
        rgba(255, 255, 255, 0) 130.53%
      ),
      linear-gradient(93.98deg, #fcf1b5 -17.56%, #ffbf31 107.31%);
    i {
      color: #a46d0f;
    }
  }
}
</style>