<template>
  <userNavBar></userNavBar>
  <div class="container">
    <div class="reset-password my-5">
      <div class="alert alert-primary">
        <form @submit.prevent="sendToken">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
             
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

      

     
    </div>
  </div>
</template>

<script>
import User from "../../../apis/User.js";
import userNavBar from "../../helpers/User/userNavBar.vue";
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
  components:{
    userNavBar
  },
  methods: {
    sendToken() {
      this.errorEmail = null;
      this.infoEmail = null;
      if (!this.emailForm.email) {
        this.errorEmail = "Email Field is Required";
      }
      if (!this.errorEmail) {
       

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
  
    
  },
};
</script>

<style lang="scss" scoped>
.reset-password {

  max-width: 300px;
  margin: auto;
 
}
</style>