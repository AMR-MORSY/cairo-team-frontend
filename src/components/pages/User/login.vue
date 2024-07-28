<template>
  <userNavBar></userNavBar>
  <div class="container">

    <Card class="form-container">

      <template #content>


        <p class=" text-center" style="color:  #673EE6 ; font-size: 1.5rem; font-weight: 700;">
          Log in
        </p>

        <form @submit.prevent="submitLoginForm" novalidate>

          <div class="my-3">

            <div class="input-group ">
              <span class="input-group-text" id="email">

                Email

              </span>

              <input class="form-control " :class="{ 'is-invalid': v$.email.$error }" type="text"
                v-model.trim="v$.email.$model" aria-describedby="email" />



            </div>
            <div v-if="v$.email.$error">
              <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                v-for="error in v$.email.$errors">
                {{ error.$message }}</div>
            </div>
          </div>



          <div class="input-group ">
            <span class="input-group-text" id="pass">

              Password

            </span>
            <input class="form-control " :class="{ 'is-invalid': v$.password.$error }" type="password"
              v-model.trim="v$.password.$model" aria-describedby="pass" />

          </div>
          <div v-if="v$.password.$error">
            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
              v-for="error in v$.password.$errors">
              {{ error.$message }}</div>
          </div>



          <div class="d-flex w-100 align-items-center justify-content-between my-3 pl-1">
            <router-link to="/user/resetPassword" class="links">Forgot Password?</router-link>
            <router-link to="/user/register" class="links">Create new Account</router-link>
          </div>

          <button class="btn  w-100" type="submit">Log in</button>


        </form>







      </template>



    </Card>


  </div>
  <Dialog v-model:visible="visible" modal :showHeader="false" :style="{ width: '50vw' }"
    :breakpoints="{ '700px': '70vw' }">

    <p class="m-0">
      <span class="confirmation">Error</span>
    <p style="margin-top: 20px; font-size: clamp(14px,2vw,18px); ">{{ message }} </p>
    </p>
    <template #footer>
      <Button label="Activate Account" icon="pi pi-check" @click="$router.push({ name: 'ActivateUserAccount' })" autofocus />
      <Button label="No" icon="pi pi-check" @click="hideDialog()" />
    </template>
  </Dialog>
</template>

<script >

import User from "../../../apis/User";

import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators';
import userNavBar from "../../helpers/User/userNavBar.vue";




export default {
  setup: () => ({ v$: useVuelidate() }),

  data() {
    return {

      email: null,
      password: null,
      visible: false,
      message: "",



    };
  },
  name: "login",

  components: {
    userNavBar,
  },

  validations() {

    return {


      email: {
        required: helpers.withMessage('Email is required', required),
        email: helpers.withMessage('please enter a valid email address', email)
      },

      password: {
        required: helpers.withMessage('Password is required', required),

      }

    }
  },


  methods: {
    hideDialog() {
      this.visible = false;

    },
    async submitLoginForm() {

      const isFormCorrect = await this.v$.$validate()


      if (!isFormCorrect) return


      let form = {
        email: this.email,
        password: this.password
      }
      User.login(form)
        .then((response) => {
        
          if (response.data.message == "User loged in successfully") {
            sessionStorage.setItem(
              "User",
              JSON.stringify(response.data.user_data)
            );
            this.$store.dispatch("userData", response.data.user_data);

            this.$router.push({
              path: "/home",
            });

          }
          else if (response.data.message == "Account is not verified yet") {
            this.visible = true;
            this.message = response.data.message

          }
          else {

            this.$toast.add({
              severity: "error",
              summary: "Error Message",
              detail: " This email address does not exist",
              life: 6000,
            });

          }


        })
        .catch((error) => {
          console.log(error)
          if (error.response) {

            if (error.response.status == 422) {
              if (error.response.data.errors) {
                let emailError = error.response.data.errors.email;
                emailError.forEach((error) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Error Message",
                    detail: error,
                    life: 3000,
                  });

                })
              }
              else{
                this.$toast.add({
                    severity: "error",
                    summary: "Error Message",
                    detail: "invalid credentials",
                    life: 3000,
                  });

              }
            

            }
          }
        })







    },
  },
};
</script>

<style lang="scss"  scoped>
.container {
  height: 100vh !important;

  .form-container {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px !important;
    max-width: 300px;

    button {
      background-color: #673EE6;
      border: unset;
      color: white;
    }

    .links {
      font-size: clamp(13px, 2vw, 15px);
    }

  }

}
</style>