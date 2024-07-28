<template>
    <div class="container-fluid">
        <h3>{{ topic }}</h3>
        <form @submit.prevent="submitUpdateForm()" novalidate>
            <div class="row gx-1">

                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="power_source">Power Source</span>
                        <input type="text" class="form-control w-50 "
                            :class="{ 'is-invalid': v$.form.power_source.$error }"
                            v-model.trim="v$.form.power_source.$model" aria-describedby="power_source" />
                        <div v-if="v$.form.power_source.$error">
                            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                                v-for="error in v$.form.power_source.$errors">
                                {{ error.$message }}</div>
                        </div>

                    </div>

                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="power_meter_type">PM type</span>
                        <input type="text" class="form-control w-50 " :class="{ 'is-invalid': v$.form.power_meter_type.$error }"
                            v-model.trim="v$.form.power_meter_type.$model" aria-describedby="power_meter_type" />
                        <div v-if="v$.form.power_meter_type.$error">
                            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                                v-for="error in v$.form.power_meter_type.$errors">
                                {{ error.$message }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="power_cable_cross_sec">power cable cross sec</span>
                        <input type="text" class="form-control w-50 " :class="{ 'is-invalid': v$.form.power_cable_cross_sec.$error }"
                            v-model.trim="v$.form.power_cable_cross_sec.$model" aria-describedby="power_cable_cross_sec" />
                        <div v-if="v$.form.power_cable_cross_sec.$error">
                            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                                v-for="error in v$.form.power_cable_cross_sec.$errors">
                                {{ error.$message }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="power_cable_length">power cable length</span>
                        <input type="number" class="form-control w-50 " :class="{ 'is-invalid': v$.form.power_cable_length.$error }"
                            v-model.trim="v$.form.power_cable_length.$model" aria-describedby="power_cable_length" />
                        <div v-if="v$.form.power_cable_length.$error">
                            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                                v-for="error in v$.form.power_cable_length.$errors">
                                {{ error.$message }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="gen_capacity">Gen Capacity</span>
                        <input type="text" class="form-control w-50 " :class="{ 'is-invalid': v$.form.gen_capacity.$error }"
                            v-model.trim="v$.form.gen_capacity.$model" aria-describedby="gen_capacity" />
                        <div v-if="v$.form.gen_capacity.$error">
                            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                                v-for="error in v$.form.gen_capacity.$errors">
                                {{ error.$message }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="Battery-Volt">MRFU 4G</span>
                        <input type="number" class="form-control w-50 " :class="{ 'is-invalid': v$.form. overhaul_power_consumption.$error }"
                            v-model.trim="v$.form. overhaul_power_consumption.$model" aria-describedby="Battery-Volt" />
                        <div v-if="v$.form. overhaul_power_consumption.$error">
                            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                                v-for="error in v$.form. overhaul_power_consumption.$errors">
                                {{ error.$message }}</div>
                        </div>
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
import { maxLength, minLength,minValue,maxValue } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators';
import Sites from '../../../apis/Sites';
export default {
    setup: () => ({ v$: useVuelidate() }),
    data() {


        return {
            form: {
                power_source: null,
                power_meter_type: null,
                power_cable_cross_sec: null,
                power_cable_length: null,
                gen_capacity: null,
                overhaul_power_consumption:null,
                id:null,
           



            },
            topic: null,

        };
    },
    validations() {
        const stringReg = helpers.regex(/^[a-zA-Z0-9 \/]+$/);
      

        return {


            form: {
                power_source: {

                  
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("Alphbet characters only",stringReg),

                    

                },

                power_meter_type: {
                  
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("Alphbet characters only",stringReg),

                    


                },
                power_cable_cross_sec: {
                 
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("Alphbet characters only",stringReg),

                    
                    


                },
                power_cable_length: {
                 
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("Alphbet characters only",stringReg),

                    

                },
                gen_capacity:{
                   
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("Alphbet characters only",stringReg),

                    

                },
                overhaul_power_consumption:{
                    minValue: helpers.withMessage("incorrect min value", minValue(0)),
                    maxValue: helpers.withMessage("incorrect max value", maxValue(100000)),
                   


                }
               
        


            },

        }
    },
    name: "PowerDataUpdate",
    inject: ["dialogRef"],

    mounted() {
        this.mountData()

    },
    watch:{
        $route(to,from)
        {
            if(to.path=="/user/login")
            {
                this.dialogRef.close();
            }

        }

    },
    methods: {
        mountData() {
            this.form.power_source = this.dialogRef.data.rowData.power_source;
            this.form.power_meter_type = this.dialogRef.data.rowData.power_meter_type;
            this.form.power_cable_cross_sec = this.dialogRef.data.rowData.power_cable_cross_sec;
            this.form.gen_capacity = this.dialogRef.data.rowData.gen_capacity;
            this.form.power_cable_length = this.dialogRef.data.rowData.power_cable_length;
            this.form.overhaul_power_consumption=this.dialogRef.data.rowData.overhaul_power_consumption;
            this.topic = this.dialogRef.data.topic;
            this.form.id = this.dialogRef.data.id;


        },
       async submitUpdateForm() {
            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) return
            Sites.updateSitePowerDetails(this.form).then((response) => {
                if (response.data.message == "updated successfully") {
                    this.$toast.add({
                        severity: "success",
                        summary: "Success Message",
                        detail: "Updated Successfully",
                        life: 3000,
                    });

                }

            }).catch((error) => {
                if (error.response.status == 204) {
                    this.$toast.add({
                        severity: "info",
                        summary: "Success Message",
                        detail: "site instrument not found",
                        life: 3000,
                    });
                  
                }

            });

        



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