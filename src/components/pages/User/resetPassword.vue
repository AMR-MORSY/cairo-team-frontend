<template>
  <userNavBar></userNavBar>
  <div class="container">
    <div class="reset-password my-5">
      <div class="alert alert-primary">
        <form @submit.prevent="sendToken">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email"
              v-bind:class="[errorEmail || v$.emailForm.email.$error ? 'is-invalid' : '', infoEmail ? 'is-valid' : '']"
              @keyup="clearData()" class="form-control" placeholder="Email...." v-model.trim="v$.emailForm.email.$model"
              id="email" />
            <div v-if="v$.emailForm.email.$error">
              <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                v-for="error in v$.emailForm.email.$errors">
                {{ error.$message }}</div>
            </div>
            <div class="invalid-feedback mt-2" v-if="errorEmail">
              {{ errorEmail }}
            </div>
            <div class="valid-feedback mt-2" v-if="infoEmail">
              {{ infoEmail }}
            </div>
          </div>
          <button class="btn btn-primary mt-2" type="submit">
            Send Token To Email Address
          </button>
        </form>
      </div>




    </div>
  </div>
</template>

<script>
import User from "../../../apis/User.js";
import userNavBar from "../../helpers/User/userNavBar.vue";

import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators';
export default {
  data() {
    return {
      emailForm: {
        email: "",
      },
      tokenForm: {
        token: "",
      },


      errorEmail: null,
      infoEmail: null,

    };
  },
  setup: () => ({ v$: useVuelidate() }),
  validations() {

    return {

      emailForm: {

        email: {
          required: helpers.withMessage('Email is required', required),
          email: helpers.withMessage('please enter a valid email address', email)
        },



      }
    }
  },

  name: "resetPassword",
  components: {
    userNavBar
  },
  methods: {
    clearData() {
      this.errorEmail = null;
      this.infoEmail = null

    },
    async sendToken() {
      const isFormCorrect = await this.v$.$validate()


      if (!isFormCorrect) return



      User.sendToken(this.emailForm)
        .then(() => {
          this.infoEmail = "Email Sent, please check your mail";

        })
        .catch((error) => {
          if (error.response.status == 422) {
            this.errorEmail = error.response.data.errors.email;
          }
        })
    }



  },
};
</script>

<style lang="scss" scoped>
.reset-password {

  max-width: 300px;
  margin: auto;

}
</style>