<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">Cairo Team</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link v-if="isLogin" class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="!isLogin" class="nav-link" to="/user/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="!isLogin" class="nav-link" to="/user/register">Register</router-link>
          </li>


        </ul>

      </div>
    </div>
  </nav>


  <div class="container">

    <div class="row">
      <div class="col-md-6 mt-2">

        <div class="text-container ">
          <h2>The Greatest Team Ever</h2>


          <div class="row gx-0 mt-5 ">
            <div v-if="displaySpinner">
              <ProgressSpinner style="width: 50px; height: 50px" animationDuration=".5s" />

            </div>


            <div class=" item col-3" v-if="displayData">
              <div class="card" style="background: transparent;">


                <h5 class="card-title card-te   mt-3" data-target="450" id="card-text1">
                  {{ nodals }}
                </h5>
                <p class="card-text">
                  Nodals</p>
              </div>
            </div>

            <div class=" item col-3 " v-if="displayData">
              <div class=" card " style="background: transparent;">

                <h5 class="card-title card-te mt-3" data-target="25" id="card-text2">
                  {{ vip }}
                </h5>
                <p class="card-text">
                  Vip</p>
              </div>

            </div>

            <div class=" item col-3" v-if="displayData">
              <div class="card " style="background: transparent;">



                <h5 class="card-title card-te mt-3" data-target="550" id="card-text3">
                  {{ ldn }}

                </h5>
                <p class="card-text">
                  LDN</p>
              </div>

            </div>

            <div class=" item col-3" v-if="displayData">
              <div class=" card" style="background: transparent;">



                <h5 class="card-title card-te mt-3" data-target="48" id="card-text4">
                  {{ vipNDL }}
                </h5>
                <p class="card-text">
                  VIP+NDL</p>
              </div>

            </div>

          </div>





        </div>

      </div>
      <div class="col-md-6 mt-2">
        <div class="image-container">
          <img style="width: 100%;" src="../components/logos/header-image-2x-8fa7b8.webp" alt="">

        </div>


      </div>

    </div>




  </div>
</template>

<script>
import Sites from "../apis/Sites";
export default {
  data() {


    return {
      nodals: 0,
      maxNodals: null,
      vip: 0,
      maxVip: null,
      ldn: 0,
      maxLDN: null,
      vipNDL: 0,
      maxVIPNDL: null,
      displayData: false,
      displaySpinner: true,
    };
  },
  name: "TheWelcome",
  computed: {
    isLogin() {

      return this.$store.getters.isLogin

    },

  },
  mounted() {
    this.getData();

  },

  methods: {
    mountData(counter, target, data) {

      let works = setInterval(() => {

        if (data == "nodals") {
          if (counter < target) {
            counter++;
            this.nodals = counter;

          }


          else {
            clearInterval(works);
          }

        }
        else if (data == "vip") {
          if (counter < target) {
            counter++;
            this.vip = counter;


          }
          else {
            clearInterval(works);

          }
        }
        else if (data == "total_sites") {
          if (counter < target) {
            counter++;
            this.vipNDL = counter;

          }
          else {
            clearInterval(works);

          }
        }
        else if (data == "LDN") {
          if (counter < target) {
            counter++;
            this.ldn = counter;

          }
          else {
            clearInterval(works);

          }
        }

      }, 0.5);


    },





    getData() {


      Sites.index().then((response) => {
        this.maxVIPNDL = response.data.statestics.VIP_NDL;
        this.maxNodals = response.data.statestics.NDL;
        this.maxLDN = response.data.statestics.LDN;
        this.maxVip = response.data.statestics.VIP;

        this.mountData(this.nodals, this.maxNodals, "nodals");
        this.mountData(this.vipNDL, this.maxVIPNDL, "total_sites");
        this.mountData(this.vip, this.maxVip, "vip");
        this.mountData(this.ldn, this.maxLDN, "LDN");






      }).catch((error) => {

      }).finally(() => {
        this.displaySpinner = false;
        this.displayData = true;


      });

    }

  },
}
</script>

<style lang="scss" scoped>
.text-container,
.image-container {

  margin-top: 6rem;





}
.text-container{
  max-width: 500px;
}

.me-auto {
  margin-left: auto !important;
}

.navbar-brand {
  color: #673EE6 !important;
  font-weight: bolder;
  font-size: 2rem;
}

.nav-link {
  color: #673EE6 !important;
  font-weight: bolder;

}

.navbar-collapse {

  flex-grow: unset !important;

}


.item .card {
  height: 80px;
  width: 80px;
  border: 1px #673EE6 solid;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>