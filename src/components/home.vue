<template>
  <section id="intro">

  </section>
  <section>
    <div id="breif">

      <div class="container-fluid">
        <div class="row">
          <div class="col-12 mb-xs-3 col-sm-6 col-lg-6">

            <div class="breif-container">

              <Transition name="NUR" appear>
                <p>NUR Analysis</p>

              </Transition>
              <Transition name="Alarm" appear>
                <p>Zone Site Alarms Analysis</p>

              </Transition>
              <Transition name="dataBase" appear>
                <p>Sites Equipment Database</p>

              </Transition>



            </div>


          </div>

          <div class="col-12 col-sm-6 col-lg-6">
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

import "bootstrap";


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
  animation: transformx 1s ease;
}

.Alarm-enter-active {
  opacity: 0;
  animation: transformx 1s ease;
  animation-delay: 1s;
}

.dataBase-enter-active {
  opacity: 0;
  animation: transformx 1s ease;
  animation-delay: 2s;
}


@keyframes transformx {
  0% {
    transform: translateX(-100%);
    opacity: 0
  }

  100% {
    transform: translateX(0);
    opacity: 1
  }

}


#intro {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1)), url("../components/logos/GTR-North-Africa-2022-Cairo_2000x500.jpg");
  background-size: cover;
  position: relative;
  overflow: hidden;

  height: 50vh;



}

#breif {

 
  overflow-y: hidden;
  padding: 2rem 2rem;

  .image-container {

    width: 100%;

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

    p {
      font-size: 2rem;
      font-weight: 700;

    }

  }

}

@media (min-width:320px)  { /* smartphones, iPhone, portrait 480x320 phones */ 

  
#breif {


padding: 1rem 1rem;

.image-container {

 

  img {
    width: 100%;
  
  }

  
}

.breif-container {
 

  p {
    font-size: 1rem;
   

  }

}

}}
@media (min-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ 

 

#breif {


padding: 1rem 1rem;

.image-container {

 
  img {
    width: 100%;
   
  }

}

.breif-container {
 

  p {
    font-size: 1rem;
   

  }

}

}}
@media (min-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ 

#breif {

 
  padding:0;

  .image-container {

  
    img {
      width: 100%;
    
    }

   
  }

  .breif-container {
    

    p {
      font-size: 1.5rem;
     

    }

  }

}}
@media (min-width:961px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */


#breif {

 

  .image-container {


    img {
      width: 70%;
   
    }

  }

  .breif-container {

    p {
      font-size: 2rem;
    

    }

  }

}}
@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */


#breif {


  .image-container {

  

    img {
      width: 70%;
    
    }

  
  }

  .breif-container {
    opacity: 0.5;

    p {
      font-size: 2rem;
      font-weight: 700;

    }

  }

}}
</style>