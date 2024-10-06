<template>
    <div>

        <h1 style="text-align: center;margin-top: 30px;">{{ message }}</h1>

    </div>

    <div class="flex justify-center items-center" v-if="message">

        <router-Link to="/user/login" class="links">Back to log in page</router-Link>

    </div>

   
</template>

<script>
import User from '../../../apis/User';
export default {
    data() {


        return {
            message: null,
        }
    },
    props: ["code"],
    name: "validateSignUpCode",
    mounted() {
        this.validateSignUpCode();

    },

    methods: {

        validateSignUpCode() {
            User.validateSignUpCode(this.code).then((response) => {
              
                this.message = response.data.message;
            }).catch((error) => {
                if (error.response.status = 422) {
                    this.message = "invalid Activation Code";

                }

            })

        }

    },
}
</script>

<style lang="scss" scoped></style>