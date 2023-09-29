<template>
    <div class="mt-5 d-flex aligin-items-center justify-content-center">

        <div class="alert alert-success" v-if="tokenValid">
            <form @submit.prevent="changePassword">
                <div class="form-group">
                    <label for="newpassword">Change Password</label>
                    <input type="password" class="form-control" v-bind:class="{ 'is-invaled': errorNewPassword }"
                        id="newpassword" v-model="newPassword" autocomplete="off" />
                    <div>
                        {{ errorNewPassword }}
                    </div>
                    <div v-if="passwordBackendError">
                        <p v-for="error in passwordBackendError" :key="error">{{ error }}</p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="password-confirmation">Password Confirmation</label>
                    <input type="password" class="form-control" v-bind:class="{ 'is-invaled': errorPasswordConfirmation }"
                        id="password-confirmation" v-model="passwordConfirmation" autocomplete="off" />
                    <div>
                        {{ errorPasswordConfirmation }}
                    </div>
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
export default {
    data() {
        return {
            user_id: null,
            tokenValid: false,
            invalidToken: false,
            errorToken: false,
            newPassword: "",
            passwordConfirmation: "",
            passwordBackendError:null,
            errorNewPassword: null,
            errorPasswordConfirmation: null,



        };
    },
    name: "validateToken",
    props: ["token"],
    mounted() {
        this.validateToken();

    },
    methods: {

        validateToken() {
            this.$store.dispatch("displaySpinnerPage", false);
            let data={
                "token":this.token
            }

            User.validateToken(data)

                .then((response) => {
                    console.log(response);
                    if (response.data.id) {

                        this.user_id = response.data.id;
                        this.tokenValid = true;

                    }
                })
                .catch((error) => {
                    if (error.response.status == 422) {
                        this.errorToken = error.response.data.errors.token[0];
                        this.invalidToken = true;
                    } else if (error.response.status == 401) {
                        this.errorToken = error.response.data.error;
                        this.invalidToken = true;
                    }
                }).finally(() => {
                    this.$store.dispatch("displaySpinnerPage", true);
                })

        },
        changePassword() {
            this.errorPasswordConfirmation = null;
            this.errorNewPassword = null;
            this.passwordBackendError = null;
            if (!this.newPassword) {
                this.errorNewPassword = "New Password is required";
            }
            if (!this.passwordConfirmation) {
                this.errorPasswordConfirmation = "Password confirmation is required";
            }
            if (this.passwordConfirmation != this.newPassword) {
                this.errorPasswordConfirmation = "Password are not matched";
            }
            if (!this.errorPasswordConfirmation && !this.errorNewPassword) {
                let data = {
                    user_id: this.user_id,
                    password: this.newPassword,
                    password_confirmation: this.passwordConfirmation,
                };
                console.log(data)
                this.$store.dispatch("displaySpinnerPage", false);
                User.resetPassword(data)

                    .then((response) => {
                        sessionStorage.setItem(
                            "User",
                            JSON.stringify(response.data.user_data)
                        );
                        this.$store.dispatch("userData", response.data.user_data);

                        this.$router.push({
                            path: "/home",
                        });

                        // this.$router.push("/user/login");
                    })
                    .catch(error => {
                        if (error.response.status == 422) {

                            this.passwordBackendError = error.response.data.errors.password;

                        }
                    }).finally(() => {
                        this.$store.dispatch("displaySpinnerPage", true);
                    })
            }
        },

    }
}
</script>

<style lang="scss" scoped></style>