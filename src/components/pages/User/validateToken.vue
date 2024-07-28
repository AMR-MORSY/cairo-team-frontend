<template>
    <userNavBar></userNavBar>
    <div class="mt-5 d-flex aligin-items-center justify-content-center">

        <div class="alert alert-success" v-if="tokenValid">
            <form @submit.prevent="changePassword">
                <div class="form-group">
                    <label for="newpassword">Change Password</label>
                    <input type="password" class="form-control"
                        v-bind:class="[v$.newPassword.$error || passwordBackendError ? 'is-invalid' : '']" id="newpassword"
                        v-model.trim="v$.newPassword.$model" autocomplete="off" />
                        <p>*At least 8 characters <br>*includes a special char.<br>*includes uppercase letter<br>*includes a number</p>

                    <div v-if="v$.newPassword.$error">
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.newPassword.$errors">
                            {{ error.$message }}</div>
                    </div>


                </div>
                <div class="form-group">
                    <label for="password-confirmation">Password Confirmation</label>
                    <input type="password" class="form-control"
                        v-bind:class="[v$.passwordConfirmation.$error || passwordBackendError ? 'is-invalid' : '']"
                        id="password-confirmation" v-model.trim="v$.passwordConfirmation.$model" autocomplete="off" />


                </div>
                <div v-if="v$.passwordConfirmation.$error">
                    <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                        v-for="error in v$.passwordConfirmation.$errors">
                        {{ error.$message }}</div>
                </div>
                <div v-if="passwordBackendError">
                    <p v-for="error in passwordBackendError" :key="error">{{ error }}</p>
                </div>
                <button type="submit" class="btn btn-success mt-2">
                    Change Password
                </button>
            </form>
        </div>
        <h1 class="alert alert-primary" v-if="invalidToken">{{ errorToken }}</h1>

    </div>
</template>

<script>
import User from "../../../apis/User";

import { required, sameAs } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators'
import userNavBar from "../../helpers/User/userNavBar.vue";
export default {
    data() {
        return {
            user_id: null,
            tokenValid: false,
            invalidToken: false,
            errorToken: false,
            newPassword: "",
            passwordConfirmation: "",
            passwordBackendError: null,




        };
    },
    name: "validateToken",
    components: {
    userNavBar,
  },
    props: ["token"],
    setup: () => ({ v$: useVuelidate() }),
    validations() {
        const passReg = helpers.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);

        return {


            newPassword: {
                required: helpers.withMessage('Password is required', required),
                passReg: helpers.withMessage("Password does not match requirements", passReg),

            },
            passwordConfirmation: {

                required: helpers.withMessage('Password is required', required),
                sameAs: helpers.withMessage('Password and confirmation are not matched', sameAs(this.newPassword)),

            },

        }
    },
    mounted() {
        this.validateToken();

    },
    methods: {

        validateToken() {

            let data = {
                "token": this.token
            }

            User.validateToken(data)

                .then((response) => {
                    console.log(response);
                    if (response.data.id) {

                        this.user_id = response.data.id;
                        this.tokenValid = true;

                    }
                    else if(response.data.error)
                    {
                        this.errorToken =response.data.error;
                        this.invalidToken = true;

                    }
                })
                .catch((error) => {
                    if (error.response.status == 422) {
                        this.errorToken = error.response.data.errors.token[0];
                        this.invalidToken = true;
                    }
                })

        },
        async changePassword() {
            const isFormCorrect = await this.v$.$validate()


            if (!isFormCorrect) return


            let data = {
                user_id: this.user_id,
                password: this.newPassword,
                password_confirmation: this.passwordConfirmation,
            };
            console.log(data)

            User.resetPassword(data)

                .then((response) => {
                    sessionStorage.setItem(
                        "User",
                        JSON.stringify(response.data.user_data)
                    );
                    this.$toast.add({
                        severity: "success",
                        summary: "Success Message",
                        detail: " Password changed successfully",
                        life: 3000,
                    });
                    this.$store.dispatch("userData", response.data.user_data);

                    this.$router.push({
                        path: "/home",
                    });

                  
                })
                .catch(error => {
                    if (error.response.status == 422) {

                        this.passwordBackendError = error.response.data.errors.password;

                    }
                })

        },

    }
}
</script>

<style lang="scss" scoped></style>