<template>
  <div class="container-fluid ">
   
  </div>
  <div class="d-flex justify-content-center align-items-center w-100 p-5">
    <h1>The Greatest Team Ever</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: null,
    };
  },
  created() {
    this.cards = [
      { id: 1, icon: "electric_bolt", path: "Energy" },
     { id: 2, icon: " signal_disconnected", path: "NUR" },
      { id: 3, icon: " auto_fix_off", path: "Modifications" },
    ];
  },

  methods: {
    formatElement(id) {
      let card = this.cards.filter((element) => {
        return element.id == id;
      });
      console.log(card);
      if (card[0].path == "Energy") {
        this.$router.push("/energy/index");
      } else if (card[0].path == "NUR") {
        this.$router.push("/nur/index");
      }
       else if (card[0].path == "Modifications") {
        this.$router.push("/modifications");
      }
    },
  },
  name: "home",
};
</script>

<style lang="scss" scoped>
.card {
  background-color: white;
  box-shadow: 1px 3px 5px rgba($color: white, $alpha: 0.1);
  height: 250px;
  width: 100%;
  transition: all 0.5s ease;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    text-align: center;
    font-size: 5rem;
    z-index: 1;
    color: gray;
  }
  p {
    text-align: center;
    font-size: 2rem;
    color: gray;
  }
}

.card:hover {
  transform: scale(1.02);
  transition: all 0.5s ease;
}

.cards-enter-from {
  opacity: 0;

  transform: scale(0.7);
}
.cards-enter-active {
  transition: all 1s ease;
}
.container-fluid{
  background-image: url("../components/logos/GTR-North-Africa-2022-Cairo_2000x500.jpg");
  background-position: center;
  background-size: cover;
  
  height: 50vh;
}

</style>