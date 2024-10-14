<template>
    <div class=" w-full px-7">
        <div class=" max-w-xs md:max-w-7xl mx-auto">
            <Fieldset>
                <template #legend>
                    <p class=" bg-slate-500 text-white font-Signika rounded font-semibold py-1 px-3">
                        {{ siteCode }}-{{ siteName }}
                    </p>
                </template>
                <div class="form">
                    <form>
                        <div class="grid grid-cols-4 gap-4 p-5">
                            <div class="col-span-4 md:col-span-2 lg:col-span-1">

                                <div class=" flex-auto">

                                    <label for="Subcontrator">Subcontrator:</label>
                                    <Select fluid id="Subcontrator" v-model="subcontractor"
                                        :invalid="v$.subcontractor.$errors.length > 0" :options="subcontractors">

                                    </Select>
                                </div>
                                <div v-if="v$.subcontractor.$error">

                                    <validationErrorMessage :errors="v$.subcontractor.$errors" />
                                </div>


                            </div>
                            <div class="col-span-4 md:col-span-2 lg:col-span-1">
                                <div class=" flex-auto">
                                    <label for="status">Status:</label>

                                    <Select fluid id="status" :options="status_options" v-model="status"
                                        :invalid="v$.status.$errors.length > 0">

                                    </Select>
                                </div>
                                <div v-if="v$.status.$error">

                                    <validationErrorMessage :errors="v$.status.$errors" />
                                </div>
                            </div>
                            <div class="col-span-4 md:col-span-2 lg:col-span-1">
                                <div class=" flex-auto">
                                    <label for="Requesters">Requesters:</label>
                                    <Select v-model="requester" id="Requesters" fluid
                                        :invalid="v$.requester.$errors.length > 0" :options="requester_options">

                                    </Select>
                                </div>
                                <div v-if="v$.requester.$error">

                                    <validationErrorMessage :errors="v$.requester.$errors" />
                                </div>
                            </div>
                            <div class="col-span-4 md:col-span-2 lg:col-span-1">
                                <div class=" flex-auto">
                                    <label for="Projects">Projects:</label>

                                    <Select fluid aria-label="Default select example" :options="project_options"
                                        v-model="project" id="Projects" :invalid="v$.project.$errors.length > 0">

                                    </Select>
                                </div>
                                <div v-if="v$.project.$error">

                                    <validationErrorMessage :errors="v$.project.$errors" />
                                </div>
                            </div>

                            <div class="col-span-4 md:col-span-2 lg:col-span-1">
                                <label for="request">Request Date:</label>

                                <Datepicker v-model="request_date" placeholder="Request Date"
                                    :state="!v$.request_date.$errors.length > 0" id="request" />
                                <div v-if="v$.request_date.$error">

                                    <validationErrorMessage :errors="v$.request_date.$errors" />
                                </div>
                            </div>
                            <div class="col-span-4 md:col-span-2 lg:col-span-1">
                                <label for="finish">Finish Date:</label>

                                <Datepicker v-model="finish_date" :state="!v$.finish_date.$errors.length > 0"
                                    placeholder="Finish Date:" id="finish" />
                                <div v-if="v$.finish_date.$error">

                                    <validationErrorMessage :errors="v$.request_date.$errors" />
                                </div>
                            </div>

                            <div class="col-span-4 md:col-span-2 lg:col-span-1">
                                <div class="flex-auto">
                                    <label for="materials">Cost</label>
                                    <InputNumber fluid v-model="cost" :invalid="v$.cost.$errors.length > 0" :min="0"
                                        id="materials" />
                                </div>
                                <div v-if="v$.cost.$error">

                                    <validationErrorMessage :errors="v$.cost.$errors" />
                                </div>
                            </div>
                            <div class="col-span-4 md:col-span-2">
                                <div class="flex flex-col justify-start">
                                    <label for="materials">Materials</label>
                                    <Textarea v-model="materials" id="materials" cols="32" rows="3"></Textarea>
                                </div>
                            </div>
                            <div class="col-span-4 md:col-span-2">
                                <div class=" flex flex-col justify-start">
                                    <label id="Action">Action:</label>
                                    <Textarea v-model="action" id="Action" :invalid="v$.action.$errors.length > 0"
                                        rows="5" cols="40"></Textarea>
                                </div>
                                <div v-if="v$.action.$error">

                                    <validationErrorMessage :errors="v$.action.$errors" />
                                </div>
                            </div>
                            <div class="col-span-4 md:col-span-2">
                                <div class=" flex justify-evenly">
                                    <Button label="Back" type="button" severity="success" raised @click.prevent="goBack"
                                        class="block" />
                                    <template v-if="needed_action == 'update'">
                                        <Button label="Update" type="Button" @click="updateModification()"
                                            severity="help" raised class="block" />
                                    </template>
                                    <template v-else>
                                        <Button label="insert" type="Button" @click="insertNewModification()"
                                            severity="help" raised class="block" />
                                    </template>

                                </div>

                            </div>

                        </div>



                    </form>
                </div>
            </Fieldset>
        </div>
    </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import { computed } from 'vue';
import { onUpdated, onActivated } from 'vue';
import { ref, onMounted, watch, defineProps } from 'vue';
import { useRouter } from 'vue-router';
import { email, required, requiredIf } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators';
import validationErrorMessage from '../../helpers/validationErrorMessage.vue';
import Modifications from '../../../apis/Modifications';
const toast = useToast();
const router = useRouter();

const subcontractor = ref(null)

const cost = ref(null)

const subcontractors = [
    "OT",
    "Alandick",
    "Tri-Tech",
    "Siatnile",
    "Merc",
    "GP",
    "MBV",
    "Systel",
    "TELE-TECH",
    "SAG",
    "LM",
    "HAS",
    "Red Tech",
    "H-PLUS",
    "MERG",
    "STEPS",
    "GTE",
    "AFRO",
    "Benaya",
    "EEC",
    "Egypt Gate",
    "Huawei",
    "INTEGRA",
    "Unilink",
    "Tele-Trust"

];
const request_date = ref(null)

const requester = ref(null)

const requester_options = [
    "Acquisition",
    "Civil Team",
    "Maintenance",
    "Radio",
    "Transmission",
    "rollout",
    "GA",
    "Sharing team",
]
const project = ref(null)

const project_options = [
    "Normal Modification",
    "LTE",
    "Critical repair",
    "Repair",
    "LDN",
    "Retrofitting",
    "Adding sec",
    "NTRA",
    "Sharing",
    "L2600",
];
const status = ref(null);

const status_options = ["waiting D6", "done", "in progress"];
const finish_date = ref(null);

const action = ref(null)

const materials = ref(null);

const props = defineProps([
    "modificationData",
    "needed_action",
    "siteCode",
    "siteName",
    "site_id"

])



watch(props.modificationData, (newValue, oldValue) => {


    if (newValue.length > 0 || typeof (newValue) == "object") {

        subcontractor.value = props.modificationData.subcontractor;
        request_date.value = props.modificationData.request_date;
        requester.value = props.modificationData.requester;
        project.value = props.modificationData.project;
        status.value = props.modificationData.status;
        finish_date.value = props.modificationData.finish_date;
        action.value = props.modificationData.action;
        cost.value = Number(props.modificationData.cost);
        materials.value = props.modificationData.materials;



    }
})


const goBack = () => {
    router.go(-1);
}
const rules = computed(() => ({
    subcontractor: {
        required: helpers.withMessage('Subcontractor is required', required),
    },
    request_date: {
        required: helpers.withMessage('Request date is required', required),

    },
    finish_date: {

        requiredIf: helpers.withMessage('finish date is required', requiredIf(status.value == 'done'))

    },
    requester: {
        required: helpers.withMessage('Requester is required', required),

    },
    project: {
        required: helpers.withMessage('project is required', required),


    },
    status: {
        required: helpers.withMessage('status is required', required),

    },
    action: {
        required: helpers.withMessage('Action is required', required),


    },
    cost: {
        requiredIf: helpers.withMessage('Cost date is required', requiredIf(status.value == 'done'))

    }



}))


const v$ = useVuelidate(rules, { subcontractor, request_date, requester, project, status, finish_date, action, cost, materials });
const updateModification = async () => {
    const isFormCorrect = await v$.value.$validate()
    if (!isFormCorrect) {
        return

    }

    let data = {
        id: props.site_id,
        site_code: props.siteCode,
        site_name: props.siteName,
        subcontractor: subcontractor.value,
        requester: requester.value,
        request_date: request_date.value,
        finish_date: finish_date.value,
        cost: cost.value,
        project: project.value,
        status: status.value,
        action: action.value,
        materials: materials.value,
    };


    Modifications.updateModification(data)

        .then((response) => {


            toast.add({
                severity: "success",
                summary: "Success Message",
                detail: "Updated Successfully",
                life: 3000,
            });
        })
        .catch((error) => {

            if (error.response.status == 422) {
                let errors = error.response.data.errors;

                if (errors.siteCode) {
                    errors.siteCode.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.siteName) {
                    errors.siteName.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.subcontractor) {
                    errors.subcontractor.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.project) {
                    errors.project.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.status) {
                    errors.status.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.requester) {
                    errors.requester.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.request_date) {
                    errors.request_date.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.finish_date) {
                    errors.finish_date.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.cost) {
                    errors.cost.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.materials) {
                    errors.materials.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.action) {
                    errors.action.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
            }
        })

}




const insertNewModification = async () => {
    const isFormCorrect = await v$.value.$validate()
    if (!isFormCorrect) {
        return

    }

    let data = {
        site_code: props.siteCode,
        site_name: props.siteName,
        subcontractor: subcontractor.value,
        requester: requester.value,
        request_date: request_date.value,
        finish_date: finish_date.value,
        cost: cost.value,
        project: project.value,
        status: status.value,
        action: action.value,
        materials: materials.value,
    };

    Modifications.insertNewModification(data)

        .then((response) => {

          
            toast.add({
                severity: "success",
                summary: "Success Message",
                detail: "inserted Successfully",
                life: 3000,
            });
            router.push(
                `/modifications/sitemodifications/${props.siteCode}/${props.siteName}`
            );
        })
        .catch((error) => {
            console.log(error);
            if (error.response.status == 422) {
                let errors = error.response.data.errors;

                if (errors.siteCode) {
                    errors.siteCode.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.siteName) {
                    errors.siteName.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.subcontractor) {
                    errors.subcontractor.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.project) {
                    errors.project.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.status) {
                    errors.status.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.requester) {
                    errors.requester.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.request_date) {
                    errors.request_date.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.finish_date) {
                    errors.finish_date.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.cost) {
                    errors.cost.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.materials) {
                    errors.materials.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
                if (errors.action) {
                    errors.action.forEach((element) => {
                        toast.add({
                            severity: "error",
                            summary: "Failed",
                            detail: element,
                            life: 3000,
                        });
                    });
                }
            }
        })


}

</script>

<style lang="scss" scoped></style>