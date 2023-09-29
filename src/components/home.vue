<template>
  <section id="intro">
    <!-- <div class="overlay"> </div> -->
   
  </section>
  <section >
    <div id="breif">
      <!-- <div class="overlay"> </div> -->
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-6">

            <div class="breif-container">
              <h2>Nur Analysis</h2>
            </div>


          </div>

          <div class="col-12 col-lg-6">
            <div class="image-container ">
              <img src="../../src/components/logos/04.png" alt="">
            </div>

          </div>


        </div>
      </div>

    </div>


  </section>
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

#intro {
  background:linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(255,255,255,1)), url("../components/logos/GTR-North-Africa-2022-Cairo_2000x500.jpg");
  background-size: cover;
  position: relative;
 overflow: hidden;

  height: 50vh;


}
.overlay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
 
 
   
  }


#breif {
  height: 50vh;
  position: relative;
  overflow-y: hidden;

  .image-container {
   
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 70%;
      transform: translateY(0);
      opacity: 0.5;
      animation: animation-translate 1s linear infinite alternate;
    }

    @keyframes animation-translate {
      0% {
        transform: translateY(0);
      }

      100% {
        transform: translateY(1%);
      }
    }
  }
  .breif-container{
    opacity: 0.5;
  }

}
</style>