<template>
    <userNavBar></userNavBar>
    <Card class="form-container">

        <template #content>


            <p class=" text-center" style="color:  #673EE6 ; font-size: 1.1rem; font-weight: 700;">
                Activate your account
            </p>

            <form @submit.prevent="activateUserAccount" novalidate>

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




                <button class="btn  w-100" type="submit">Activate</button>


            </form>

            <router-Link to="/user/login" class="links">Back to log in page</router-Link>







        </template>



    </Card>
</template>

<script>
import userNavBar from "../../helpers/User/userNavBar.vue";
import User from "../../../apis/User";
import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators';
export default {
    data() {


        return {
            email: null,
        };


    },
    "name": "ActivateUserAccount",
    components: {
        userNavBar,
    },
    setup: () => ({ v$: useVuelidate() }),
    validations() {

        return {


            email: {
                required: helpers.withMessage('Email is required', required),
                email: helpers.withMessage('please enter a valid email address', email)
            },



        }
    },
    methods: {
        async activateUserAccount() {


            const isFormCorrect = await this.v$.$validate()


            if (!isFormCorrect) return


            let form = {
                email: this.email,

            }
            User.activateUserAccount(form).then((response) => {
                console.log(response)
                this.$toast.add({
                        severity: "success",
                        summary: "success Message",
                        detail: "Activation code has been sent to your email.Please check your email",
                        life: 6000,
                    });

            }).catch((error) => {
                if (error.response.status == 422) {
                    this.$toast.add({
                        severity: "error",
                        summary: "Error Message",
                        detail: "Email does not exist",
                        life: 6000,
                    });

                }

            })


        }
    }

}
</script>

<style lang="scss" scoped>
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
    .links{
      font-size: clamp(13px,2vw,15px);
      padding-top: 16px;
      display: block;
      font-weight: 500;
    }

}
</style>