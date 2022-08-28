<template>
  <div class="asd">
    <section v-for="item in data" :key="item.id">
      <the-card>
        <!-- <img :src="item.thumbnail" alt="" />
        <a :href="item.thumbnail" target="_blank">
          <h4>{{ item.title }}</h4>
        </a>
        <p>{{ item.description }}</p>
        <span>{{ item.price }}</span> -->
      </the-card>
    </section>
  </div>
</template>

<script>
import TheCard from "./TheCard.vue";

export default {
  components: {
    TheCard,
  },
  data() {
    return {
      data: [],
    };
  },
  beforeCreate() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.data = json.products;
        console.log(this.data);
        for (let i in this.data) {
          console.log(this.data[i].thumbnail);
        }
      });
  },
};
</script>

<style scoped>
.asd {
  width: 100%;
}
.asd section {
  display: inline-block;
  width: 24%;
  height: 24%;
  background-color: #ab092c;
  padding: 2rem;
  margin: 1%;
}
</style>
