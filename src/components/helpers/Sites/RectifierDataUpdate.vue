<template>
    <div class="container-fluid">
        <h3>{{ topic }}</h3>
        <form @submit.prevent="submitUpdateForm()" novalidate>
            <div class="row gx-1">

             
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="rec_brand">Rec Brand</span>
                        <input type="text" class="form-control w-50 " :class="{ 'is-invalid': v$.form.rec_brand.$error }"
                            v-model.trim="v$.form.rec_brand.$model" aria-describedby="rec_brand" />
                        <div v-if="v$.form.rec_brand.$error">
                            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                                v-for="error in v$.form.rec_brand.$errors">
                                {{ error.$message }}</div>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="ntra_cluster">NTRA</span>
                        <select class="form-select w-50 " :class="{ 'is-invalid': v$.form.ntra_cluster.$error }" v-model.trim="v$.form.ntra_cluster.$model" aria-describedby="ntra_cluster">
                            <option value=""></option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                     
                        <div v-if="v$.form.ntra_cluster.$error">
                            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                                v-for="error in v$.form.ntra_cluster.$errors">
                                {{ error.$message }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id=" care_ceo">Care CEO</span>
                        <select  class="form-select w-50 " :class="{ 'is-invalid': v$.form.care_ceo.$error }"
                            v-model.trim="v$.form.care_ceo.$model" aria-describedby="care_ceo">
                            <option value=""></option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.care_ceo.$errors">
                            {{ error.$message }}</div>

                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="axsees">Axis</span>
                        <select  class="form-select w-50 " :class="{ 'is-invalid': v$.form.axsees.$error }"  v-model.trim="v$.form.axsees.$model" aria-describedby="axsees" >
                            <option value=""></option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.axsees.$errors">
                            {{ error.$message }}</div>
                    </div>
                </div>
               
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="no_ldn_accounts">LDN accounts</span>
                        <input type="number" class="form-control w-50"
                            :class="{ 'is-invalid': v$.form.no_ldn_accounts.$error }"
                            v-model.trim="v$.form.no_ldn_accounts.$model" aria-describedby="no_ldn_accounts" />
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.no_ldn_accounts.$errors">
                            {{ error.$message }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="no_tp_accounts">Tp Accounts</span>
                        <input type="number" class="form-control w-50"
                            :class="{ 'is-invalid': v$.form.no_tp_accounts.$error }"
                            v-model.trim="v$.form.no_tp_accounts.$model" aria-describedby="no_tp_accounts" />
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.no_tp_accounts.$errors">
                            {{ error.$message }}</div>
                    </div>
                </div> -->
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="module_capacity">Module Capacity</span>
                        <input type="text" class="form-control w-50" :class="{ 'is-invalid': v$.form.module_capacity.$error }"
                            v-model.trim="v$.form.module_capacity.$model" aria-describedby="module_capacity" />
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.module_capacity.$errors">
                            {{ error.$message }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="no_module">No. Modules</span>
                        <input type="text" class="form-control w-50" :class="{ 'is-invalid': v$.form.no_module.$error }"
                            v-model.trim="v$.form.no_module.$model" aria-describedby="no_module" />
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.no_module.$errors">
                            {{ error.$message }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="pld_value">PlVD value</span>
                        <input type="text" class="form-control w-50" :class="{ 'is-invalid': v$.form.pld_value.$error }"
                            v-model.trim="v$.form.pld_value.$model" aria-describedby="pld_value" />
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.pld_value.$errors">
                            {{ error.$message }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="net_eco">Net Eco</span>
                        <select class="form-select w-50"
                            :class="{ 'is-invalid': v$.form.net_eco.$error }"
                            v-model.trim="v$.form.net_eco.$model" aria-describedby="net_eco">
                            <option value=""></option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.net_eco.$errors">
                            {{ error.$message }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="net_eco_activation">Net Eco Activation</span>
                        <input type="text" class="form-control w-50" :class="{ 'is-invalid': v$.form.net_eco_activation.$error }"
                            v-model.trim="v$.form.net_eco_activation.$model" aria-describedby="net_eco_activation" />
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.net_eco_activation.$errors">
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
import { maxLength, minLength, ipAddress } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators';
import Sites from '../../../apis/Sites';
export default {
    setup: () => ({ v$: useVuelidate() }),
    data() {


        return {
            form: {
                
                rec_brand: null,
                module_capacity: null,
                pld_value: null,
                no_module: null,
                net_eco:null,
                net_eco_activation:null,
                id:null,
             
             


            },
            topic: null,

        };
    },
    validations() {
        const stringReg = helpers.regex(/^[a-zA-Z0-9 \/]+$/);
        const booleanReg = helpers.regex(/^Yes|No$/);

        return {


            form: {
              

                rec_brand: {
                 
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("Alphbet characters only",stringReg),




                },
                module_capacity: {
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("Alphbet characters only",stringReg),



                },
                no_module: {
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                  
                    stringReg: helpers.withMessage("Alphbet characters only",stringReg),


                },
           
                pld_value: {
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("alphanumeric only", stringReg),

                },
              
             
                net_eco: {
                    booleanReg: helpers.withMessage("alphanumeric only", booleanReg),

                },
                net_eco_activation: {
                    ipAddress: helpers.withMessage("invalid IP address", ipAddress),
                   

                },






            },

        }
    },
    name: "RectifierDataUpdate",
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
           
            this.form.rec_brand = this.dialogRef.data.rowData.rec_brand;
            this.form.module_capacity = this.dialogRef.data.rowData.module_capacity;
            this.form.no_module = this.dialogRef.data.rowData.no_module;
            this.form.pld_value = this.dialogRef.data.rowData.pld_value;
            this.form.net_eco = this.dialogRef.data.rowData.net_eco;
            this.form.net_eco_activation = this.dialogRef.data.rowData.net_eco_activation;
            this.topic = this.dialogRef.data.topic;
            this.form.id = this.dialogRef.data.id;

        },
       async submitUpdateForm() {

            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) return
            
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