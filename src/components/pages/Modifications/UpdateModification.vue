<template>


  <ModificationCreationForm needed_action="update" :modificationData="modificationDetails" :siteCode="site_code" :siteName="site_name" :site_id="id" />


</template>

<script setup>

import { reactive, watch,ref,onMounted } from "vue";
import Modifications from "../../../apis/Modifications";
import ModificationCreationForm from "../../helpers/Modification/ModificationCreationForm.vue";

const site_code=ref();
const site_name=ref();
const modificationDetails = reactive({
  subcontractor: null,
  request_date: null,
  project: null,
  requester: null,
  finish_date: null,
  action: null,
  materials: null,
  status: null,
  cost: null,
  site_name: '',
  site_code: '',

});
const props = defineProps(["id"])
const emits = defineEmits(["displayNoneSpinner"])



onMounted(() => {
  getModificationDetails();

})

const getModificationDetails = () => {


  Modifications.getModificationDetails(props.id)

    .then((response) => {

     site_code.value = response.data.details.site_code;

     site_name.value = response.data.details.site_name;
      modificationDetails.subcontractor = response.data.details.subcontractor;


      modificationDetails.request_date = response.data.details.request_date;
      modificationDetails.requester = response.data.details.requester;

      modificationDetails.project = response.data.details.project;

      modificationDetails.status = response.data.details.status;

      modificationDetails.finish_date = response.data.details.finish_date;
      modificationDetails.action = response.data.details.action;
      modificationDetails.cost = response.data.details.cost;
      modificationDetails.materials = response.data.details.materials;
    })
    .catch((error) => {
      console.log(error);
    })

}

// export default {
//   data() {
//     return {

//       subcontractor: null,
//       subcontractorError: false,

//       cost: null,

//       modificationDetails: {
//         subcontractor: null,
//         request_date: null,
//         project: null,
//         requester: null,
//         finish_date: null,
//         action: null,
//         materials: null,
//         status: null,
//         cost: null,
//         site_name: '',
//         site_code: '',

//       },

//       subcontractors: [
//         "OT",
//         "Alandick",
//         "Tri-Tech",
//         "Siatnile",
//         "Merc",
//         "GP",
//         "MBV",
//         "Systel",
//         "TELE-TECH",
//         "SAG",
//         "LM",
//         "MERG",
//         "HAS",
//         "H-PLUS",
//         "STEPS",
//         "Red Tech",
//         "GTE",
//         "AFRO",
//         "Benaya",
//         "EEC",
//         "Egypt Gate",
//         "Huawei",
//         "INTEGRA",
//         "Unilink",
//         "Tele-Trust"

//       ],
//       request_date: null,
//       request_dateError: false,
//       requester: null,
//       requesterError: false,
//       requester_options: [
//         "Acquisition",
//         "Civil Team",
//         "Maintenance",
//         "Radio",
//         "Transmission",
//         "rollout",
//         "GA",
//         "Sharing team",
//       ],
//       project: null,
//       projectError: false,
//       project_options: [
//         "Normal Modification",
//         "LTE",
//         "Critical repair",
//         "Repair",
//         "LDN",
//         "Retrofitting",
//         "Adding sec",
//         "NTRA",
//         "Sharing",
//         "L2600",
//       ],
//       status: null,
//       statusError: false,
//       status_options: ["waiting D6", "done", "in progress"],
//       finish_date: null,

//       action: null,
//       actionError: false,
//       materials: null,
//     };
//   },
//   name: "UpdateModification",
//   components: {
//     ModificationCreationForm
//   },

//   props: ["id"],
//   emits: ["displayNoneSpinner"],
//   watch: {
//     id() {
//       this.getModificationDetails();
//     },
//   },
//   computed: {
//     isLogin() {
//       return this.$store.getters.isLogin;
//     },

//   },
//   mounted() {
//     this.getModificationDetails();
//   },

//   methods: {
//     goBack() {
//       this.$router.go(-1);
//     },

//     getModificationDetails() {


//       Modifications.getModificationDetails(this.id)

//         .then((response) => {

//           this.modificationDetails.site_code = response.data.details.site_code;

//           this.modificationDetails.site_name = response.data.details.site_name;
//           this.modificationDetails.subcontractor = response.data.details.subcontractor;


//           this.modificationDetails.request_date = response.data.details.request_date;
//           this.modificationDetails.requester = response.data.details.requester;

//           this.modificationDetails.project = response.data.details.project;

//           this.modificationDetails.status = response.data.details.status;

//           this.modificationDetails.finish_date = response.data.details.finish_date;
//           this.modificationDetails.action = response.data.details.action;
//           this.modificationDetails.cost = response.data.details.cost;
//           this.modificationDetails.materials = response.data.details.materials;
//         })
//         .catch((error) => {
//           console.log(error);
//         })

//     },
//     updateModification() {
//       this.subcontractorError = false;
//       this.request_dateError = false;
//       this.requesterError = false;
//       this.statusError = false;
//       this.projectError = false;
//       this.actionError = false;
//       if (!this.subcontractor) {
//         this.subcontractorError = true;
//       }

//       if (!this.project) {
//         this.projectError = true;
//       }
//       if (!this.status) {
//         this.statusError = true;
//       }
//       if (!this.action) {
//         this.actionError = true;
//       }
//       if (!this.request_date) {
//         this.request_dateError = true;
//       }
//       if (!this.requester) {
//         this.requesterError = true;
//       }
//       if (
//         this.requester &&
//         this.subcontractor &&
//         this.action &&
//         this.request_date &&
//         this.project &&
//         this.status
//       ) {

//         let data = {
//           id: this.id,
//           site_code: this.site_code,
//           site_name: this.site_name,
//           subcontractor: this.subcontractor,
//           requester: this.requester,
//           request_date: this.request_date,
//           finish_date: this.finish_date,
//           cost: this.cost,
//           project: this.project,
//           status: this.status,
//           action: this.action,
//           materials: this.materials,
//         };

//         Modifications.updateModification(data)

//           .then((response) => {


//             this.$toast.add({
//               severity: "success",
//               summary: "Success Message",
//               detail: "Updated Successfully",
//               life: 3000,
//             });
//           })
//           .catch((error) => {

//             if (error.response.status == 422) {
//               let errors = error.response.data.errors;

//               if (errors.siteCode) {
//                 errors.siteCode.forEach((element) => {
//                   this.$toast.add({
//                     severity: "error",
//                     summary: "Failed",
//                     detail: element,
//                     life: 3000,
//                   });
//                 });
//               }
//               if (errors.siteName) {
//                 errors.siteName.forEach((element) => {
//                   this.$toast.add({
//                     severity: "error",
//                     summary: "Failed",
//                     detail: element,
//                     life: 3000,
//                   });
//                 });
//               }
//               if (errors.subcontractor) {
//                 errors.subcontractor.forEach((element) => {
//                   this.$toast.add({
//                     severity: "error",
//                     summary: "Failed",
//                     detail: element,
//                     life: 3000,
//                   });
//                 });
//               }
//               if (errors.project) {
//                 errors.project.forEach((element) => {
//                   this.$toast.add({
//                     severity: "error",
//                     summary: "Failed",
//                     detail: element,
//                     life: 3000,
//                   });
//                 });
//               }
//               if (errors.status) {
//                 errors.status.forEach((element) => {
//                   this.$toast.add({
//                     severity: "error",
//                     summary: "Failed",
//                     detail: element,
//                     life: 3000,
//                   });
//                 });
//               }
//               if (errors.requester) {
//                 errors.requester.forEach((element) => {
//                   this.$toast.add({
//                     severity: "error",
//                     summary: "Failed",
//                     detail: element,
//                     life: 3000,
//                   });
//                 });
//               }
//               if (errors.request_date) {
//                 errors.request_date.forEach((element) => {
//                   this.$toast.add({
//                     severity: "error",
//                     summary: "Failed",
//                     detail: element,
//                     life: 3000,
//                   });
//                 });
//               }
//               if (errors.finish_date) {
//                 errors.finish_date.forEach((element) => {
//                   this.$toast.add({
//                     severity: "error",
//                     summary: "Failed",
//                     detail: element,
//                     life: 3000,
//                   });
//                 });
//               }
//               if (errors.cost) {
//                 errors.cost.forEach((element) => {
//                   this.$toast.add({
//                     severity: "error",
//                     summary: "Failed",
//                     detail: element,
//                     life: 3000,
//                   });
//                 });
//               }
//               if (errors.materials) {
//                 errors.materials.forEach((element) => {
//                   this.$toast.add({
//                     severity: "error",
//                     summary: "Failed",
//                     detail: element,
//                     life: 3000,
//                   });
//                 });
//               }
//               if (errors.action) {
//                 errors.action.forEach((element) => {
//                   this.$toast.add({
//                     severity: "error",
//                     summary: "Failed",
//                     detail: element,
//                     life: 3000,
//                   });
//                 });
//               }
//             }
//           })

//       }
//     },
//   },
// };
</script>

<style lang="scss" scoped>
.form {
  margin-top: 10px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
}
</style>