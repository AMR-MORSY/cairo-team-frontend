<template>
    <div class="container-fluid">
        <h3>{{ topic }}</h3>
        <form @submit.prevent="submitUpdateForm()" novalidate>
            <div class="grid grid-cols-4 gap-4">


                <div class="col-span-4 md:col-span-2 lg:col-span-1  ">
                    <div class="flex-auto">
                        <label class="font-bold" id="rec_brand">Rec Brand</label>
                        <InputText fluid :invalid="v$.form.rec_brand.$error" v-model.trim="v$.form.rec_brand.$model"
                            aria-describedby="rec_brand" />

                    </div>
                    <div v-if="v$.form.rec_brand.$error">
                        <validationErrorMessage :errors="v$.form.rec_brand.$errors" />
                    </div>
                </div>

                <div class="col-span-4 md:col-span-2 lg:col-span-1   ">
                    <div class="flex-auto">
                        <label class="font-bold" id="module_capacity">Module Capacity</label>
                        <InputText fluid :invalid="v$.form.module_capacity.$error"
                            v-model.trim="v$.form.module_capacity.$model" aria-describedby="module_capacity" />

                    </div>
                    <div v-if="v$.form.module_capacity.$error">
                        <validationErrorMessage :errors="v$.form.module_capacity.$errors" />
                    </div>
                  
                </div>
                <div class="col-span-4 md:col-span-2 lg:col-span-1   ">
                    <div class="flex-auto">
                        <label class="font-bold" id="no_module">No. Modules</label>
                        <InputText fluid :invalid="v$.form.no_module.$error"
                            v-model.trim="v$.form.no_module.$model" aria-describedby="no_module" />
                   
                    </div>
                    <div v-if="v$.form.no_module.$error">
                        <validationErrorMessage :errors="v$.form.no_module.$errors" />
                    </div>
                </div>
                <div class="col-span-4 md:col-span-2 lg:col-span-1   ">
                    <div class="flex-auto">
                        <label class="font-bold" id="pld_value">PlVD value</label>
                        <InputText fluid :invalid="v$.form.pld_value.$error "
                            v-model.trim="v$.form.pld_value.$model" aria-describedby="pld_value" />
                       
                    </div>
                    <div v-if="v$.form.pld_value.$error">
                        <validationErrorMessage :errors="v$.form.pld_value.$errors" />
                    </div>
                </div>
                <div class="col-span-4 md:col-span-2 lg:col-span-1   ">
                    <div class="flex-auto">
                        <label class="font-bold" id="net_eco">Net Eco</label>
                        <Select fluid :invalid="v$.form.net_eco.$error " :options="net_eco_options"
                            v-model.trim="v$.form.net_eco.$model" aria-describedby="net_eco">
                         
                        </Select>
                    
                    </div>
                    <div v-if="v$.form.net_eco.$error">
                        <validationErrorMessage :errors="v$.form.net_eco.$errors" />
                    </div>
                </div>
                <div class="col-span-4 md:col-span-2 lg:col-span-1   ">
                    <div class="flex-auto">
                        <label class="font-bold" id="net_eco_activation">Net Eco Activation</label>
                        <InputText fluid 
                           :invalid="v$.form.net_eco_activation.$error "
                            v-model.trim="v$.form.net_eco_activation.$model" aria-describedby="net_eco_activation" />
                        
                    </div>
                    <div v-if="v$.form.net_eco_activation.$error">
                        <validationErrorMessage :errors="v$.form.net_eco_activation.$errors" />
                    </div>

                </div>


                <div class="col-6">
                    <div class="button-container">
                        <Button :label="action" type="submit" icon="pi pi-external-link" severity="success" text
                            raised />

                    </div>
                </div>
            </div>
        </form>


    </div>
</template>

<script>
import { maxLength, minLength, ipAddress, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators';
import Sites from '../../../apis/Sites';
import InputText from 'primevue/inputtext';
import validationErrorMessage from '../validationErrorMessage.vue';
export default {
    setup: () => ({ v$: useVuelidate() }),
    data() {


        return {
            form: {

                rec_brand: null,
                module_capacity: null,
                pld_value: null,
                no_module: null,
                net_eco: 'No',
                net_eco_activation: null,
                id: null,
                site_code: null,




            },
            topic: null,
            action: null,
            net_eco_options:['Yes','No']


        };
    },
    validations() {
        const stringReg = helpers.regex(/^[a-zA-Z0-9 \/]+$/);
        const booleanReg = helpers.regex(/^Yes|No$/);

        return {


            form: {


                rec_brand: {

                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("Alphbet characters only", stringReg),




                },
                module_capacity: {
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("Alphbet characters only", stringReg),



                },
                no_module: {
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),

                    stringReg: helpers.withMessage("Alphbet characters only", stringReg),


                },

                pld_value: {
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("alphanumeric only", stringReg),

                },


                net_eco: {
                    booleanReg: helpers.withMessage("alphanumeric only", booleanReg),
                    // required:helpers.withMessage('net_eco is required',required)

                },
                net_eco_activation: {
                    ipAddress: helpers.withMessage("invalid IP address", ipAddress),


                },






            },

        }
    },
    name: "RectifierDataUpdate",
    inject: ["dialogRef"],
    components:{
        validationErrorMessage

    },

    mounted() {
        this.mountData()

    },
    watch: {
        $route(to, from) {
            if (to.path == "/user/login") {
                this.dialogRef.close();
            }

        }

    },
    methods: {
        mountData() {
            if (this.dialogRef.data.action == "Update") {////////
                this.form.rec_brand = this.dialogRef.data.rowData.rec_brand;
                this.form.module_capacity = this.dialogRef.data.rowData.module_capacity;
                this.form.no_module = this.dialogRef.data.rowData.no_module;
                this.form.pld_value = this.dialogRef.data.rowData.pld_value;
                this.form.net_eco = this.dialogRef.data.rowData.net_eco;
                this.form.net_eco_activation = this.dialogRef.data.rowData.net_eco_activation;
                this.form.id = this.dialogRef.data.id;


            }
            this.topic = this.dialogRef.data.topic;
            this.action = this.dialogRef.data.action;
            this.form.site_code = this.dialogRef.data.site_code;




        },
        async submitUpdateForm() {

            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) return
            if (this.action == 'Update') {
                Sites.updateRectifierDetails(this.form).then((response) => {
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
            else {
                Sites.insertRectifierDetails(this.form).then((response) => {

                    if (response.data.message == "inserted successfully") {
                        this.$toast.add({
                            severity: "success",
                            summary: "Success Message",
                            detail: "Inserted Successfully",
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