<template>
    <div class="container-fluid">
        <h3>Battery {{ action }}</h3>
        <form @submit.prevent="submitUpdateForm()" novalidate>
            <div class="row gx-1">
                <input type="hidden" v-model.trim="form.site_code">

                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="Battery-Brand">Battery Brand</span>
                        <input type="text" class="form-control w-50 "
                            :class="{ 'is-invalid': v$.form.batteries_brand.$error }"
                            v-model.trim="v$.form.batteries_brand.$model" aria-describedby="Battery-Brand" />
                        <div v-if="v$.form.batteries_brand.$error">
                            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                                v-for="error in v$.form.batteries_brand.$errors">
                                {{ error.$message }}</div>
                        </div>

                    </div>

                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="Battery-Volt">Battery Volt</span>
                        <input type="text" class="form-control w-50 "
                            :class="{ 'is-invalid': v$.form.battery_volt.$error }"
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
                        <input type="number" class="form-control w-50 "
                            :class="{ 'is-invalid': v$.form.no_strings.$error }"
                            v-model.trim="v$.form.no_strings.$model" aria-describedby="No.Strings" />
                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.no_strings.$errors">
                            {{ error.$message }}</div>

                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="no_batteries">Category</span>
                        <select class="form-select w-50 " :class="{ 'is-invalid': v$.form.category.$error }"
                            v-model="v$.form.category.$model" aria-describedby="no_batteries">
                            <option value="Tested">Tested</option>
                            <option value="New">New</option>
                            <option value="Used">Used</option>
                        </select>



                        <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                            v-for="error in v$.form.category.$errors">
                            {{ error.$message }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4  ">
                    <div class="input-group">
                        <span class="input-group-text w-50" id="Battery-Brand">Stock</span>
                        <input type="text" class="form-control w-50 " :class="{ 'is-invalid': v$.form.stock.$error }"
                            v-model.trim="v$.form.stock.$model" aria-describedby="Battery-Brand" />
                        <div v-if="v$.form.stock.$error">
                            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                                v-for="error in v$.form.stock.$errors">
                                {{ error.$message }}</div>
                        </div>

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
                <div class="row">
                    <div class="col-12 col-md-6  ">
                        <div>
                            <span id="batteries_status" style="font-weight: 400;">Comment:</span>
                            <textarea type="text" class="form-control w-100" rows="1" cols="10"
                                :class="{ 'is-invalid': v$.form.comment.$error }" v-model.trim="v$.form.comment.$model"
                                aria-describedby="comment"></textarea>
                            <div style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"
                                v-for="error in v$.form.comment.$errors">
                                {{ error.$message }}</div>
                        </div>
                    </div>


                    <div class="col-12 col-md-6 ">
                        <div>
                            <label for="theft_case" style="font-weight: 400;">Theft Case:</label>

                            <Datepicker v-model.trim="form.theft_case" id="theft_case" />
                            <div v-if="displayDatesError" style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"> Please insert installation or theft case date</div>


                        </div>

                    </div>
                    <div class="col-12 col-md-6 ">
                        <div>
                            <label for="on_air_date" style="font-weight: 400;">Installation Date:</label>

                            <Datepicker v-model.trim="form.installation_date" id="on_air_date" />
                            <div v-if="displayDatesError" style="color: red; font-size: 0.7rem; padding-left: 3px; padding-top: 3px;"> Please insert installation or theft case date</div>

                        </div>

                    </div>
                    <div class="col-12 col-md-6">
                        <div class="button-container">
                            <Button :label="action" type="submit" icon="pi pi-external-link" severity="success" text
                                raised />

                        </div>
                    </div>

                </div>



            </div>
        </form>











    </div>
</template>

<script>
import { maxLength, minLength, integer, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators';
import Sites from '../../../apis/Sites';
export default {
    setup: () => ({ v$: useVuelidate() }),
    data() {


        return {
            form: {
                batteries_brand: null,
                battery_volt: null,
                battery_amp_hr: null,
                no_strings: null,
                stock: null,
                batteries_status: null,
                comment: null,
                site_code: null,
                id: null,
                installation_date: null,
                theft_case: null,
                category: null,




            },
            topic: null,
            action: "insert",
            displayDatesError:false,


        };
    },
    validations() {
        const stringReg = helpers.regex(/^[a-zA-Z0-9 \/+]+$/);

        return {


            form: {
                batteries_brand: {

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

                    integer: helpers.withMessage("max 50 strings", integer),

                },
                stock: {

                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("alphanumeric only", stringReg),

                },
                category: {

                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("alphanumeric only", stringReg),
                    required: helpers.withMessage("Category is required", required),

                },
                batteries_status: {
                    minLength: helpers.withMessage("min 3 characters", minLength(3)),
                    maxLength: helpers.withMessage("max 50 characters", maxLength(50)),
                    stringReg: helpers.withMessage("alphanumeric only", stringReg),

                },
                comment: {

                    maxLength: helpers.withMessage("max 250 characters", maxLength(50)),
                    stringReg: helpers.withMessage("alphanumeric only", stringReg),

                },


            },

        }
    },
    name: "BatteriesUpdate",
    inject: ["dialogRef"],
    watch: {
        $route(to, from) {
            if (to.path == "/user/login") {
                this.dialogRef.close();
            }

        }

    },

    mounted() {
        this.mountData()

    },
    methods: {
        mountData() {
            if (this.dialogRef.data.action == "update") {
                this.form.batteries_brand = this.dialogRef.data.battery.batteries_brand;
                this.form.battery_volt = this.dialogRef.data.battery.battery_volt;
                this.form.battery_amp_hr = this.dialogRef.data.battery.battery_amp_hr;
                this.form.no_strings = this.dialogRef.data.battery.no_strings;
                this.form.stock = this.dialogRef.data.battery.stock;
                this.form.category = this.dialogRef.data.battery.category;
                this.form.site_code = this.dialogRef.data.battery.site_code;
                this.form.comment = this.dialogRef.data.battery.comment;
                this.form.batteries_status = this.dialogRef.data.battery.batteries_status;
                this.form.id = this.dialogRef.data.battery.id;
                this.form.installation_date = this.dialogRef.data.battery.installation_date;
                this.form.theft_case = this.dialogRef.data.battery.theft_case;
                this.action = "update"

            }
            else {
                this.form.site_code = this.dialogRef.data.site_code;
            }


        },
        showToasts(errors) {
            errors.forEach((element) => {
                this.$toast.add({
                    severity: "Error",
                    summary: "Error Message",
                    detail: element,
                    life: 3000,
                });

            })

        },
        showErrors(error) {
            if (error.response.status == 422) {
                let errors = error.response.data[0];
                if (errors.batteries_brand) {
                    this.showToasts(errors.batteries_brand)

                }
                if (errors.battery_amp_hr) {
                    this.showToasts(errors.battery_amp_hr)

                }
                if (errors.battery_volt) {
                    this.showToasts(errors.battery_volt)

                }
                if (errors.batteries_status) {
                    this.showToasts(errors.batteries_status)

                }
                if (errors.comment) {
                    this.showToasts(errors.comment)

                }
                if (errors.stock) {
                    this.showToasts(errors.stock)

                }
                if (errors.no_strings) {
                    this.showToasts(errors.no_strings)

                }
                if (errors.category) {
                    this.showToasts(errors.category)

                }
                if (errors.site_code) {
                    this.showToasts(errors.site_code)

                }



            }



        },
        async submitUpdateForm() {
            this.displayDatesError=false;
            const isFormCorrect = await this.v$.$validate()

            if (!isFormCorrect) return

            if (this.form.installation_date == null && this.form.theft_case == null) {
                this.displayDatesError=true;
                return

            }

            if (this.action == "update") {

                Sites.updateBatteriesData(this.form.id, this.form).then((response) => {
                    if (response.data.success == true) {
                        this.$toast.add({
                            severity: "success",
                            summary: "Success Message",
                            detail: "Updated Successfully",
                            life: 3000,
                        });

                    }

                }).catch((error) => {
                    this.showErrors(error)

                });

            }
            else {
                Sites.insertNewBatterydata(this.form).then((response) => {
                    if (response.data.success == true) {
                        this.$toast.add({
                            severity: "success",
                            summary: "Success Message",
                            detail: "Updated Successfully",
                            life: 3000,
                        });

                    }

                }).catch((error) => {
                    this.showErrors(error)

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