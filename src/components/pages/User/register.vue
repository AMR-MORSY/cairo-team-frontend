<template>
  <userNavBar></userNavBar>
  <!-- <div class="container">
    <Card class="form-container">
      <template #title class="p-card-title">
        <p class="text-center" style="color: #673EE6 ">Register</p>
      </template>
      <template #content>
        <form @submit.prevent="submitRegisterForm" novalidate>

          <div class="row">
            <div class="col-12">
              <div class="field w-100">
                <span class="p-float-label">
                  <InputText id="inputtext" class="w-100" type="text" v-model.trim="v$.name.$model"
                    :class="{ 'p-invalid': v$.name.$error }" />
                  <label for="inputtext">Name</label>
                </span>
              </div>
              <div v-if="v$.name.$error">
                <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                  v-for="error in v$.name.$errors">
                  {{ error.$message }}</div>
              </div>
            </div>

            <div class="col-12">
              <div class="field w-100 mt-4">
                <span class="p-float-label">
                  <InputText id="inputtext" class="w-100" type="text" v-model.trim="v$.email.$model"
                    :class="{ 'p-invalid': v$.email.$error }" />
                  <label for="inputtext">Email</label>
                </span>
              </div>
              <div v-if="v$.email.$error">
                <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                  v-for="error in v$.email.$errors">
                  {{ error.$message }}</div>
              </div>
            </div>

            <div class="col-12">
              <div class="field w-100 mt-4">
                <span class="p-float-label">
                  <Password toggleMask v-model.trim="v$.password.$model" id="password" class="w-100" required
                    :feedback="true" :class="{ 'p-invalid': v$.password.$error }">
                    <template #header>
                      <h6>Pick a password</h6>
                    </template>
                    <template #footer="sp">
                      {{ sp.level }}
                      <Divider />
                      <p class="mt-2">Suggestions</p>
                      <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                        <li>At least one lowercase</li>
                        <li>At least one uppercase</li>
                        <li>At least one from [@$!%*?&]</li>
                        <li>Minimum 8 characters</li>
                      </ul>
                    </template>
                  </Password>
                  <label for="password">Password</label>
                </span>
              </div>
              <div v-if="v$.password.$error">
                <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                  v-for="error in v$.password.$errors">
                  {{ error.$message }}</div>
              </div>
            </div>

            <div class="col-12">
              <div class="w-100 mt-4">
                <span class="p-float-label">
                  <Password toggleMask v-model.trim="v$.password_confirmation.$model" id="password" class="w-100"
                    :feedback="false" required :class="{ 'p-invalid': v$.password_confirmation.$error }">
                  </Password>
                  <label for="password">Confirm Password</label>
                </span>
              </div>
              <div v-if="v$.password_confirmation.$error">
                <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                  v-for="error in v$.password_confirmation.$errors">
                  {{ error.$message }}</div>
              </div>
            </div>
            <div class="col-12">
              <div class="w-100 mt-4">
                <button class="w-100 btn" type="submit" style="background-color:  #673EE6;color: white;">Sign
                  Up</button>
              </div>
            </div>
          </div>

        </form>
      </template>
    </Card>
  </div> -->

  <div class=" max-w-screen pt-40">

    <Card class=" max-w-xs mx-auto ">

      <template #content>


        <p class=" text-center text-font-main-color font-Signika font-extrabold text-lg">
          Register
        </p>

        <form @submit.prevent="submitRegisterForm" novalidate>
         <div class="my-3 w-full">

            <FloatLabel class=" w-full">


              <InputText class=" w-full" :invalid="v$.email.$error" type="text" v-model.trim="v$.name.$model"
                aria-describedby="name" />
              <label class=" text-xs">name</label>



            </FloatLabel>
            <div v-if="v$.name.$error">
              <ValidationErrorMessage :errors="v$.name.$errors" />
            </div>
          </div>
          <div class="w-full mt-8">

            <FloatLabel class=" w-full">


              <InputText class=" w-full" :invalid="v$.email.$error" type="text" v-model.trim="v$.email.$model"
                aria-describedby="email" />
              <label class=" text-xs">Email</label>



            </FloatLabel>
            <div v-if="v$.email.$error">
              <ValidationErrorMessage :errors="v$.email.$errors" />
            </div>
          </div>

          <div class=" w-full mt-8 ">
            <FloatLabel class=" w-full">
              <InputText class=" w-full" :invalid="v$.password.$error" type="password" v-model.trim="v$.password.$model"
                aria-describedby="pass" />
              <label class=" text-xs">Password</label>
            </FloatLabel>
            <div v-if="v$.password.$error">

              <ValidationErrorMessage :errors="v$.password.$errors" />
            </div>


          </div>
           <div class=" w-full mt-8 ">
            <FloatLabel class=" w-full">
              <InputText class=" w-full" :invalid="v$.password_confirmation.$error" type="password_confirmation" v-model.trim="v$.password_confirmation.$model"
                aria-describedby="pass" />
              <label class=" text-xs">password_confirmation</label>
            </FloatLabel>
            <div v-if="v$.password_confirmation.$error">

              <ValidationErrorMessage :errors="v$.password_confirmation.$errors" />
            </div>


          </div>





          <div class="  flex flex-col justify-center  py-2 mt-5">

            <!-- <Button label="Login"  class="text-xs block w-full rounded-full" type="submit"/> -->
            <button class=" block text-xs text-white rounded-xl py-2 bg-font-main-color">Register</button>


            <div class=" mt-5 flex justify-between items-center">
              <router-link to="/user/login"
                class=" text-sm font-bold font-Signika text-font-main-color underline underline-offset-1">have an account?</router-link>
              
            </div>



          </div>




        </form>







      </template>



    </Card>


  </div>

  <Dialog v-model:visible="visible" modal :showHeader="false" :style="{ width: '50vw' }"
    :breakpoints="{ '700px': '70vw' }">

    <p class="m-0">
      <span class="confirmation">Confirmation</span>
    <p style="margin-top: 20px; font-size: clamp(14px,2vw,18px); ">{{ message }} </p>
    </p>
    <template #footer>
      <Button label="Ok" icon="pi pi-check" @click="closeConfirmation()" autofocus />
    </template>
  </Dialog>
</template>

<script>
import User from "../../../apis/User";

import { email, required, maxLength, sameAs, alpha, minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators'
import userNavBar from "../../helpers/User/userNavBar.vue";
import ValidationErrorMessage from "../../helpers/validationErrorMessage.vue";

export default {
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    const passReg = helpers.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
    const nameReg = helpers.regex(/^[a-zA-Z]{3,}[a-zA-Z ]*$/);
    return {
      name: {
        required: helpers.withMessage('Name is required', required),
        minLength: helpers.withMessage("min 3 characters", minLength(3)),
        maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
        nameReg: helpers.withMessage('Alphabit characters only', nameReg),

      },


      email: {
        required: helpers.withMessage('Email is required', required),
        email: helpers.withMessage('please enter a valid email address', email)
      },

      password: {
        required: helpers.withMessage('Password is required', required),
        passReg: helpers.withMessage("Password does not match requirements", passReg),

      },
      password_confirmation: {

        required: helpers.withMessage('Password is required', required),
        sameAs: helpers.withMessage('Password and confirmation are not matched', sameAs(this.password)),

      },

    }

  },
  data() {
    return {

      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      visible: false,
      message: "",

    };
  },
  components: {
    userNavBar,
    ValidationErrorMessage
  },


  methods: {
    async submitRegisterForm() {
      const isFormCorrect = await this.v$.$validate()


      if (!isFormCorrect) return

      let form = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      }
      User.register(form)
        .then(() => {
          this.visible = true;
          this.message = "Your account has been created Successfully.Please check your e-mail to verify your account "

        })
        .catch((error) => {
          if (error.response.status == 422) {
            let errors = error.response.data.errors;
            if (errors.email) {
              errors.email.forEach((element) => {
                this.$toast.add({
                  severity: "error",
                  summary: "Error Message",
                  detail: element,
                  life: 6000,
                });
              });
            }
            if (errors.name) {
              errors.name.forEach((element) => {
                this.$toast.add({
                  severity: "error",
                  summary: "Error Message",
                  detail: element,
                  life: 6000,
                });
              });
            }
            if (errors.password) {
              errors.password.forEach((element) => {
                this.$toast.add({
                  severity: "error",
                  summary: "Error Message",
                  detail: element,
                  life: 6000,
                });
              });
            }
          }
        })






    },
    closeConfirmation() {
      this.$router.push({ path: "/welcome" });

    }
  },
};
</script>

<style  scoped>

.container {
  height: 100vh !important;



}

.form-container {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px !important;
  max-width: 350px;



}

</style>