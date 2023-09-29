<template>
  <div class="container">
    <div class="reset-password">
      <div class="alert alert-primary">
        <form @submit.prevent="sendToken">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              v-bind:class="{ 'is-invalid': errorEmail, 'is-valid': infoEmail }"
              class="form-control"
              placeholder="Email...."
              v-model="emailForm.email"
              id="email"
            />
            <div class="invalid-feedback">
              {{ errorEmail }}
            </div>
            <div class="valid-feedback">
              {{ infoEmail }}
            </div>
          </div>
          <button class="btn btn-primary mt-2" type="submit">
            Send Token To Email Address
          </button>
        </form>
      </div>

      <!-- <div class="alert alert-secondary">
        <form @submit.prevent="validateToken">
          <div class="form-group">
            <label for="token">Token</label>
            <input
              type="text"
              name="token"
              placeholder="Token...."
              v-bind:class="{ 'is-invalid': errorToken, 'is-valid': infoToken }"
              class="form-control"
              id="token"
              v-model="tokenForm.token"
            />
            <div class="invalid-feedback">
              {{ errorToken }}
            </div>
            <div class="valid-feedback">
              {{ infoToken }}
            </div>
          </div>
          <button class="btn btn-secondary mt-2" type="submit">
            Validate Token
          </button>
        </form>
      </div> -->

     
    </div>
  </div>
</template>

<script>
import User from "../../../apis/User.js";
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
  name: "resetPassword",
  methods: {
    sendToken() {
      this.errorEmail = null;
      this.infoEmail = null;
      if (!this.emailForm.email) {
        this.errorEmail = "Email Field is Required";
      }
      if (!this.errorEmail) {
        this.$store.dispatch("displaySpinnerPage", false);

        User.sendToken(this.emailForm)
          .then(() => {
            this.infoEmail = "Email Sent, please check your mail";
     
          })
          .catch((error) => {
            if (error.response.status == 422) {
              this.errorEmail = error.response.data.errors.email;
            } else if (error.response.status == 401) {
              this.errorEmail = error.response.data.error;
            }
          }).finally(()=>{
            this.$store.dispatch("displaySpinnerPage", true);

          });
      }
    },
  
    
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  margin-top: 6em;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
</style>