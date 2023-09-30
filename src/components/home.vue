<template>
  <section id="intro">

  </section>
  <section>
    <div id="breif">

      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-6">

            <div class="breif-container">
            
              <Transition  name="NUR" appear>
                <h3>NUR Analysis</h3>
                
              </Transition>
              <Transition  name="Alarm" appear>
                <h3>Zone Site Alarms Analysis</h3>
                
              </Transition>
              <Transition  name="dataBase" appear>
                <h3>Sites Equipment DataBase</h3>
                
              </Transition>



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
    methods: {},
    name: "home",
  }
</script>

<style lang="scss" scoped>
.NUR-enter-active {
  animation: transformx 1s ease ;
}
.Alarm-enter-active {
  opacity: 0;
  animation: transformx 1s ease ;
  animation-delay: 1s;
}
.dataBase-enter-active {
  opacity: 0;
  animation: transformx 1s ease ;
  animation-delay: 2s;
}

#intro {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1)), url("../components/logos/GTR-North-Africa-2022-Cairo_2000x500.jpg");
  background-size: cover;
  position: relative;
  overflow: hidden;

  height: 50vh;


}

@keyframes transformx {
  0%{transform: translateX(-100%);opacity: 0}

  100%{transform: translateX(0);opacity: 1}
  
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

  .breif-container {
    opacity: 0.5;
    padding: 2rem 2rem;
  }

}
</style>