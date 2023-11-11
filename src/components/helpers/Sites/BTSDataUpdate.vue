<template>
    <div class="container-fluid">
        <h3>{{ topic }}</h3>
        <form @submit.prevent="submitUpdateForm()" novalidate>
            <div class="row gx-1">

                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="Battery-Brand">No. BTS</span>
                        <input type="number" min="0" class="form-control w-50 "
                            :class="{ 'is-invalid': v$.form.no_bts.$error }"
                            v-model.trim="v$.form.no_bts.$model" aria-describedby="Battery-Brand" />
                        <div v-if="v$.form.no_bts.$error">
                            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                                v-for="error in v$.form.no_bts.$errors">
                                {{ error.$message }}</div>
                        </div>

                    </div>

                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="mrfu_2G">MRFU 2G</span>
                        <input type="number" min="0" class="form-control w-50 " :class="{ 'is-invalid': v$.form.mrfu_2G.$error }"
                            v-model.trim="v$.form.mrfu_2G.$model" aria-describedby="mrfu_2G" />
                        <div v-if="v$.form.mrfu_2G.$error">
                            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                                v-for="error in v$.form.mrfu_2G.$errors">
                                {{ error.$message }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="Battery-Volt">MRFU 3G</span>
                        <input type="number" min="0" class="form-control w-50 " :class="{ 'is-invalid': v$.form.mrfu_3G.$error }"
                            v-model.trim="v$.form.mrfu_3G.$model" aria-describedby="Battery-Volt" />
                        <div v-if="v$.form.mrfu_3G.$error">
                            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                                v-for="error in v$.form.mrfu_3G.$errors">
                                {{ error.$message }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="Battery-Volt">MRFU 4G</span>
                        <input type="number" min="0" class="form-control w-50 " :class="{ 'is-invalid': v$.form.mrfu_4G.$error }"
                            v-model.trim="v$.form.mrfu_4G.$model" aria-describedby="Battery-Volt" />
                        <div v-if="v$.form.mrfu_2G.$error">
                            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                                v-for="error in v$.form.mrfu_4G.$errors">
                                {{ error.$message }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="tdd">TDD</span>
                        <select class="form-select w-50"
                            :class="{ 'is-invalid': v$.form.tdd.$error }"
                            v-model.trim="v$.form.tdd.$model" aria-describedby="tdd">
                          
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.tdd.$errors">
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
import { maxLength, minLength,minValue,maxValue,required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators';
import Sites from '../../../apis/Sites';
export default {
    setup: () => ({ v$: useVuelidate() }),
    data() {


        return {
            form: {
                no_bts: 0,
                mrfu_2G: 0,
                mrfu_3G: 0,
                mrfu_4G: 0,
                tdd: null,
                id:null,
           



            },
            topic: null,
         

        };
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
    validations() {
        const stringReg = helpers.regex(/^[a-zA-Z0-9 \/]+$/);
        const booleanReg = helpers.regex(/^Yes|No$/);

        return {


            form: {
                no_bts: {
                    required:helpers.withMessage("zero or Max 50 BTS",required),

                    minValue: helpers.withMessage("No or Max 50 BTS", minValue(0)),
                    maxValue: helpers.withMessage("No or Max 50 BTS",maxValue(50)),
                    

                },
                mrfu_2G: {
                    required:helpers.withMessage("zero or Max 50 BTS",required),
                    minValue: helpers.withMessage("No or Max 50 BTS", minValue(0)),
                    maxValue: helpers.withMessage("No or Max 50 BTS",maxValue(50)),
                    


                },

                mrfu_3G: {
                    required:helpers.withMessage("zero or Max 50 MRFU",required),
                    minValue: helpers.withMessage("No or Max 50 MRFU", minValue(0)),
                    maxValue: helpers.withMessage("No or Max 50 MRFU",maxValue(50)),
                    


                },
                mrfu_4G: {
                    required:helpers.withMessage("zero or Max 50 MRFU",required),
                    minValue: helpers.withMessage("No or Max 50 MRFU", minValue(0)),
                    maxValue: helpers.withMessage("No or Max 50 MRFU",maxValue(50)),
                    


                },
                tdd: {
                    booleanReg: helpers.withMessage("Yes or No only", booleanReg),

                },
               
        


            },

        }
    },
    name: "BTSDataUpdate",
    inject: ["dialogRef"],

    mounted() {
        this.mountData()

    },
    methods: {
        mountData() {
            this.form.no_bts = this.dialogRef.data.rowData.no_bts;
            this.form.mrfu_2G = this.dialogRef.data.rowData.mrfu_2G;
            this.form.mrfu_3G = this.dialogRef.data.rowData.mrfu_3G;
            this.form.mrfu_4G = this.dialogRef.data.rowData.mrfu_4G;
            this.form.tdd = this.dialogRef.data.rowData.tdd;
            this.topic = this.dialogRef.data.topic;
            this.form.id = this.dialogRef.data.id;


        },
        submitUpdateForm() {

            if (!this.v$.$invalid) {
            
            Sites.updateSiteBTSDetails(this.form).then((response) => {
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