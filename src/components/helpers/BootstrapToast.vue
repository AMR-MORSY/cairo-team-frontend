<template>
    <div class="toast-container  d-flex  justify-content-center align-items-center w-100" >
        <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
            <div class="toast-header">
                <!-- <img src="..." class="rounded me-2" alt="..."> -->
                <strong class="me-auto">Unauthenticated</strong>
                

                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
               <strong>Session time out......!</strong> 
                <strong>Reload session</strong>
            </div>
            <div class="mt-2 px-3 py-3 border-top">
                <button type="button" class="btn btn-primary btn-sm" @click.prevent="refreshToken()">Ok</button>
                <!-- <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button> -->
            </div>
        </div>
    </div>
</template>

<script>
import "bootstrap";
import User from "../../apis/User";
export default {
    data() {


        return {}
    },
    name: "BootstrapToast",
    methods: {
        refreshToken() {
            let user = JSON.parse(sessionStorage.getItem("User"));

            if (user.user.id) {
                let data = {
                    "id": user.user.id
                }
                User.refreshTocken(data).then((response) => {
                    console.log(response)
                    sessionStorage.setItem(
                        "User",
                        JSON.stringify(response.data.user_data)
                    );
                    this.$store.dispatch("userData", response.data.user_data);
                    window.location.reload();

                }).catch((error) => console.log(error)).finally(() => {

                });

            }
            else {
                this.$router.push({ path: "/user/login" });

            }




        }
    },
}
</script>

<style lang="scss" scoped>
.toast-container{
    position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 6;

}

</style>