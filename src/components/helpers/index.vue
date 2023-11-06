<template>
  <div class="container my-5">
    <div class="card index">
      <div class="header w-100">
        <h5 class="text-center">{{ alarms }}</h5>
      </div>
      <form @submit.prevent="getNur">
        <div class="row">
          <ul v-if="notFoundErrors">
            <li style="color: red" v-for="error in notFoundErrors" :key="error">
              {{ error }}
            </li>
          </ul>

          <div class="col-12 mb-2">

            <div class="form-group">
              <label for="week">Week:</label>
              <select v-model="v$.week.$model" :class="{ 'is-invalid': v$.week.$error }" id="week" class="form-select">
                <option> </option> 
              
                <option v-for="period in periods" :key="period">
                  {{ period }}
                </option>


              </select>
              <div v-if="v$.week.$error">
                <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                  v-for="error in v$.week.$errors">
                  {{ error.$message }}</div>
              </div>
            </div>

          </div>
          <div class="col-12 ">
            <div class="form-group">
              <label for="year">Year:</label>
              <select name="" id="year" v-model="v$.year.$model"  :class="{ 'is-invalid': v$.year.$error }"
               class="form-select">
                <option> </option>
             
                <option v-for="year in years" :key="year">
                  {{ year }}
                </option>
              </select>
              <div v-if="v$.year.$error">
                <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                  v-for="error in v$.year.$errors">
                  {{ error.$message }}</div>
              </div>
            </div>
          </div>
          <div class="col-12 mt-2">
            <spinner-button type="submit" :show-spinner="showSpinner" class="btn"
              style="background-color:#79589f;color:white;">
              <span> Submit</span>
            </spinner-button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import { required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators';
export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      showSpinner: false,
      years: [],
      year:null,
   
      periods: [],

    
      week: null,


      notFoundErrors: null,
      NUR2G: null,
    };
  },
  name: "index",
  props: ["alarms"],
  validations() {

    return {


      week: {
        required: helpers.withMessage('Please select a week', required),

      },

      year: {
        required: helpers.withMessage('Please select a year', required),

      }

    }
  },


  methods: {
    getNur() {
     


      if (!this.v$.$invalid) {


        if (this.alarms == "NUR") {
          this.showSpinner = false;
          this.$router.push(
            `/nur/statestics/${this.week}/${this.year}`
          );
        } else {
          this.showSpinner = false;
          this.$router.push(
            `/energy/statestics/${this.week}/${this.year}`
          );

          
        }

      }


      
    },
    mountFormData() {
      for (var i = 1; i <= 52; i++) {
        this.periods.push(i);
      }
      for (var i = 2022; i <= 2050; i++) {
        this.years.push(i);
      }
    },

  },
  mounted() {
    this.mountFormData();
  },
};
</script>

<style lang="scss" scoped>
.index {
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
}

// .index {
//   // margin-top: 6em;
//   // .header{
//   //   width: 100%;
//   //   display: flex;
//   //   align-items: center;
//   //   justify-content: center;
//   //   p{
//   //     font-size: 2rem;
//   //     font-weight: 900;
//   //     color: darkmagenta;
//   //   }
//   // }
// }
</style>