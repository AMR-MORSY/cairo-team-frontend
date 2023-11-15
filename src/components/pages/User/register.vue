<template>
  <userNavBar></userNavBar>
  <div class="container">
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
                <button class="w-100 btn"  type="submit"
                  style="background-color:  #673EE6;color: white;">Sign Up</button>
              </div>
            </div>
          </div>

        </form>
      </template>
    </Card>
  </div>
</template>

<script>
import User from "../../../apis/User";

import { email, required, maxLength, sameAs, alpha, minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators'
import userNavBar from "../../helpers/User/userNavBar.vue";

export default {
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    const passReg = helpers.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
    return {
      name: {
        required: helpers.withMessage('Name is required', required),
        minLength: helpers.withMessage("min 3 characters", minLength(3)),
        maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
        alpha: helpers.withMessage('Alphabit characters only', alpha),

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

    };
  },
  components: {
    userNavBar,
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
          this.$router.push({ path: "/user/login" });
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
  },
};
</script>

<style lang="scss" scoped>
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

  }
}

::v-deep(.p-password input) {
  width: 100%;

}


.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>