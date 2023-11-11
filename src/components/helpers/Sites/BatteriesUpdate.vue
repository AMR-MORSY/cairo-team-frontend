<template>
    <div class="container-fluid">
        <h3>{{ topic }}</h3>
        <form @submit.prevent="submitUpdateForm()" novalidate>
            <div class="row gx-1">

                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="Battery-Brand">Battery Brand</span>
                        <input type="text" class="form-control w-50 "
                            :class="{ 'is-invalid': v$.form.battery_brand.$error }"
                            v-model.trim="v$.form.battery_brand.$model" aria-describedby="Battery-Brand" />
                        <div v-if="v$.form.battery_brand.$error">
                            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                                v-for="error in v$.form.battery_brand.$errors">
                                {{ error.$message }}</div>
                        </div>

                    </div>

                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="Battery-Volt">Battery Volt</span>
                        <input type="text" class="form-control w-50 " :class="{ 'is-invalid': v$.form.battery_volt.$error }"
                            v-model.trim="v$.form.battery_volt.$model" aria-describedby="Battery-Volt" />
                        <div v-if="v$.form.battery_volt.$error">
                            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                                v-for="error in v$.form.battery_volt.$errors">
                                {{ error.$message }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="Battery-amp">Battery Amp</span>
                        <input type="text" class="form-control w-50 "
                            :class="{ 'is-invalid': v$.form.battery_amp_hr.$error }"
                            v-model.trim="v$.form.battery_amp_hr.$model" aria-describedby="Battery-amp" />
                        <div v-if="v$.form.battery_amp_hr.$error">
                            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                                v-for="error in v$.form.battery_amp_hr.$errors">
                                {{ error.$message }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id=" No.Strings">No.Strings</span>
                        <input type="text" class="form-control w-50 " :class="{ 'is-invalid': v$.form.no_strings.$error }"
                            v-model.trim="v$.form.no_strings.$model" aria-describedby="No.Strings" />
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.no_strings.$errors">
                            {{ error.$message }}</div>

                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="no_batteries">No.Batteries</span>
                        <input type="text" class="form-control w-50 " :class="{ 'is-invalid': v$.form.no_batteries.$error }"
                            v-model="v$.form.no_batteries.$model" aria-describedby="no_batteries" />
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.no_batteries.$errors">
                            {{ error.$message }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="batteries_status">Batteries Status</span>
                        <input type="text" class="form-control w-50"
                            :class="{ 'is-invalid': v$.form.batteries_status.$error }"
                            v-model.trim="v$.form.batteries_status.$model" aria-describedby="batteries_status" />
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.batteries_status.$errors">
                            {{ error.$message }}</div>
                    </div>
                </div>


                <div class="col-6">
                    <div class="button-container">
                        <Button label="Update" type="submit" icon="pi pi-external-link" severity="success" text raised />

                    </div>
                </div>
            </div>
        </form>











    </div>
</template>

<script>
import { maxLength, minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators';
import Sites from '../../../apis/Sites';
export default {
    setup: () => ({ v$: useVuelidate() }),
    data() {


        return {
            form: {
                battery_brand: null,
                battery_volt: null,
                battery_amp_hr: null,
                no_strings: null,
                no_batteries: null,
                batteries_status: null,
                id: null,



            },
            topic: null,


        };
    },
    validations() {
        const stringReg = helpers.regex(/^[a-zA-Z0-9 \/]+$/);

        return {


            form: {
                battery_brand: {

                    minLength: helpers.withMessage("min 3 characters", minLength(3)),
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("alphanumeric only", stringReg),

                },

                battery_volt: {
                 
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("alphanumeric only", stringReg),



                },
                battery_amp_hr: {
                  
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("alphanumeric only", stringReg),

                },
                no_strings: {
                  
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("alphanumeric only", stringReg),

                },
                no_batteries: {
                 
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("alphanumeric only", stringReg),

                },
                batteries_status: {
                    minLength: helpers.withMessage("min 3 characters", minLength(3)),
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("alphanumeric only", stringReg),

                },


            },

        }
    },
    name: "BatteriesUpdate",
    inject: ["dialogRef"],
    watch:{
        $route(to,from)
        {
            if(to.path=="/user/login")
            {
                this.dialogRef.close();
            }

        }

    },

    mounted() {
        this.mountData()

    },
    methods: {
        mountData() {
            this.form.battery_brand = this.dialogRef.data.rowData.battery_brand;
            this.form.battery_volt = this.dialogRef.data.rowData.battery_volt;
            this.form.battery_amp_hr = this.dialogRef.data.rowData.battery_amp_hr;
            this.form.no_strings = this.dialogRef.data.rowData.no_strings;
            this.form.no_batteries = this.dialogRef.data.rowData.no_batteries;
            this.form.batteries_status = this.dialogRef.data.rowData.batteries_status;
            this.topic = this.dialogRef.data.topic;
            this.form.id = this.dialogRef.data.id;

        },
        submitUpdateForm() {
            console.log(this.form)
               

            if (!this.v$.$invalid) {
                console.log(this.form)
               
                Sites.updateBatteriesData(this.form).then((response)=>{
                    if (response.data.message == "updated successfully") {
                        this.$toast.add({
                            severity: "success",
                            summary: "Success Message",
                            detail: "Updated Successfully",
                            life: 3000,
                        });

                    }

                }).catch((error)=>{
                    if(error.response.status==404)
                    {
                        this.$router.push({name:"notFound"})
                    }

                });
              

            }
            else{
                console.log("invalid")
            }


        }


    },
}
</script>

<style lang="scss" scoped>
.input-group {
    width: 100%;
    margin-bottom: 1rem;
}

.button-container {

    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-top: 1em;

}

@media screen and (min-width:320px) and (max-width: 480px) {

    /* smartphones, iPhone, portrait 480x320 phones */

}

@media screen and (min-width:481px) and (max-width: 640px) {

    /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */


}

@media screen and (min-width:641px) and (max-width: 960) {

    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */

}
</style>