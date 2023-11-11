<template>
    <div class="container-fluid">
        <h3>{{ topic }}</h3>
        <form @submit.prevent="submitUpdateForm()" novalidate>
            <div class="row gx-1">

                <div class="col-12 col-md-6  ">
                    <div class="input-group">
                        <label class="input-group-text w-25" for="on_air_date">On air date</label>
                     
                        <Datepicker class="form-control w-75 " v-model.trim="form.on_air_date" id="on_air_date" />
                    

                    </div>

                </div>
                <div class="col-12 col-md-6">
                    <div class="input-group">
                        <span class="input-group-text w-25" id=" last_pm_date">Last PM date</span>
                        <Datepicker class="form-control w-75" v-model.trim="form.last_pm_date"  />
                   
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="topology">Topology</span>
                        <input type="text" class="form-control w-50 " :class="{ 'is-invalid': v$.form.topology.$error }"
                            v-model="v$.form.topology.$model" aria-describedby="topology" />
                        <div v-if="v$.form.topology.$error">
                            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                                v-for="error in v$.form.topology.$errors">
                                {{ error.$message }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="ntra_cluster">NTRA</span>
                        <select class="form-select w-50 " :class="{ 'is-invalid': v$.form.ntra_cluster.$error }" v-model.trim="v$.form.ntra_cluster.$model" aria-describedby="ntra_cluster">
                           
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
                        <span class="input-group-text w-50" id="serve_compound">Serve Compound</span>
                        <select class="form-select w-50"
                            :class="{ 'is-invalid': v$.form.serve_compound.$error }"
                            v-model.trim="v$.form.serve_compound.$model" aria-describedby="serve_compound">
                        
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.serve_compound.$errors">
                            {{ error.$message }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="no_ldn_accounts">LDN accounts</span>
                        <input type="number" class="form-control w-50"
                            :class="{ 'is-invalid': v$.form.no_ldn_accounts.$error }"
                            v-model.number="v$.form.no_ldn_accounts.$model" aria-describedby="no_ldn_accounts" />
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
                            v-model.number="v$.form.no_tp_accounts.$model" aria-describedby="no_tp_accounts" />
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.no_tp_accounts.$errors">
                            {{ error.$message }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="ac1_type">AC1 type</span>
                        <input type="text" class="form-control w-50" :class="{ 'is-invalid': v$.form.ac1_type.$error }"
                            v-model="v$.form.ac1_type.$model" aria-describedby="ac1_type" />
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.ac1_type.$errors">
                            {{ error.$message }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="ac1_hp">AC1 HP</span>
                        <input type="text" class="form-control w-50" :class="{ 'is-invalid': v$.form.ac1_hp.$error }"
                            v-model="v$.form.ac1_hp.$model" aria-describedby="ac1_hp" />
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.ac1_hp.$errors">
                            {{ error.$message }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="ac2_type">AC2 type</span>
                        <input type="text" class="form-control w-50" :class="{ 'is-invalid': v$.form.ac2_type.$error }"
                            v-model="v$.form.ac2_type.$model" aria-describedby="ac2_type" />
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.ac2_type.$errors">
                            {{ error.$message }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="ac2_hp">AC2 HP</span>
                        <input type="text" class="form-control w-50" :class="{ 'is-invalid': v$.form.ac2_hp.$error }"
                            v-model="v$.form.ac2_hp.$model" aria-describedby="ac2_hp" />
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.ac2_hp.$errors">
                            {{ error.$message }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id=" network_type">Network Type</span>
                        <input type="text" class="form-control w-50" :class="{ 'is-invalid': v$.form.network_type.$error }"
                            v-model="v$.form.network_type.$model" aria-describedby=" network_type" />
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.network_type.$errors">
                            {{ error.$message }}</div>
                    </div>
                </div>
             
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id=" need_access_permission">Access Permission</span>
                        <select class="form-select w-50"
                            :class="{ 'is-invalid': v$.form.need_access_permission.$error }"
                            v-model.trim="v$.form.need_access_permission.$model"
                            aria-describedby=" need_access_permission">
                          
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                     
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.need_access_permission.$errors">
                            {{ error.$message }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id=" permission_type">Permission Type</span>
                        <input type="text" class="form-control w-50"
                            :class="{ 'is-invalid': v$.form.permission_type.$error }"
                            v-model="v$.form.permission_type.$model" aria-describedby=" permission_type" />
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.permission_type.$errors">
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
import { maxLength, minLength, minValue,maxValue } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators';
import Sites from '../../../apis/Sites';
export default {
    setup: () => ({ v$: useVuelidate() }),
    data() {


        return {
            form: {
                on_air_date: null,
                topology: null,
                ntra_cluster: null,
                care_ceo: null,
                axsees: null,
                serve_compound: null,
                no_ldn_accounts: null,
                no_tp_accounts: null,
                ac1_type: null,
                ac1_hp: null,
                ac2_type: null,
                ac2_hp: null,
                network_type: null,
                last_pm_date: null,
                need_access_permission: null,
                permission_type: null,
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
                topology: {
                  
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("Alphbet characters only",stringReg),




                },
                ntra_cluster: {
                    
                    booleanReg: helpers.withMessage("alphanumeric only", booleanReg),

                },
                care_ceo: {
                    booleanReg: helpers.withMessage("alphanumeric only", booleanReg),
                },
                axsees: {
                    booleanReg: helpers.withMessage("alphanumeric only", booleanReg),
                },
                serve_compound: {
                    booleanReg: helpers.withMessage("alphanumeric only", booleanReg),
                },
                no_ldn_accounts: {
                    minValue: helpers.withMessage("zero or Max 150 Accounts", minValue(0)),
                    maxValue: helpers.withMessage("zero or Max 150 Accounts",maxValue(150)),
                   
                },
                no_tp_accounts: {
                    minValue: helpers.withMessage("zero or Max 150 Accounts", minValue(0)),
                    maxValue: helpers.withMessage("zero or Max 150 Accounts",maxValue(150)),
                   
                   

                },
                ac1_type: {
                  
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("alphanumeric only", stringReg),

                },
                ac2_type: {
                
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("alphanumeric only", stringReg),

                },
                ac1_hp: {
                  
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("alphanumeric only", stringReg),

                },
                ac2_hp: {
                 
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("alphanumeric only", stringReg),

                },
                network_type: {
                 
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("alphanumeric only", stringReg),

                },
             
                need_access_permission: {
                    booleanReg: helpers.withMessage("alphanumeric only", booleanReg),

                },
                permission_type: {
                  
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("alphanumeric only", stringReg),

                },






            },

        }
    },
    name: "SiteDataUpdate",
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
            this.form.on_air_date = this.dialogRef.data.rowData.on_air_date;
            this.form.topology = this.dialogRef.data.rowData.topology;
            this.form.ntra_cluster = this.dialogRef.data.rowData.ntra_cluster;
            this.form.care_ceo = this.dialogRef.data.rowData.care_ceo;
            this.form.axsees = this.dialogRef.data.rowData.axsees;
            this.form.serve_compound = this.dialogRef.data.rowData.serve_compound;
            this.form.no_ldn_accounts = this.dialogRef.data.rowData.no_ldn_accounts;
            this.form.no_tp_accounts = this.dialogRef.data.rowData.no_tp_accounts;
            this.form.ac1_type = this.dialogRef.data.rowData.ac1_type;
            this.form.ac2_type = this.dialogRef.data.rowData.ac2_type;
            this.form.ac1_hp = this.dialogRef.data.rowData.ac1_hp;
            this.form.ac2_hp = this.dialogRef.data.rowData.ac2_hp;
            this.form.network_type = this.dialogRef.data.rowData.network_type;
            this.form.last_pm_date = this.dialogRef.data.rowData.last_pm_date;
            this.form.need_access_permission = this.dialogRef.data.rowData.need_access_permission;
            this.form.permission_type = this.dialogRef.data.rowData.permission_type;
            this.topic = this.dialogRef.data.topic;
            this.form.id = this.dialogRef.data.id;


        },
        submitUpdateForm() {

            if (!this.v$.$invalid) {
              
            
            Sites.updatesiteDeepDetails(this.form).then((response) => {
                if (response.data.message == "updated successfully") {
                    this.$toast.add({
                        severity: "success",
                        summary: "Success Message",
                        detail: "Updated Successfully",
                        life: 3000,
                    });

                }

            }).catch((error) => {
                if(error.response.status==404)
                {
                    this.$router.push({name:"notFound"})
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