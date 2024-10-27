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


</script>

<style lang="scss" scoped>
.form {
  margin-top: 10px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
}
</style>