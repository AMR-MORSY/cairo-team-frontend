<template>
  <!-- <div class="container">
    <div class="row mt-3">
      <div class="col-12 my-2 ">
        <Fieldset>
          <template #legend>{{ site_code }}-{{ site_name }} </template>
          <div class="form">
            <form @submit.prevent="insertNewModification">
              <div class="row p-5">
                <div class="col-12 col-sm-6 col-lg-3">
                  <label for="Subcontrator">Subcontrator:</label>
                  <select class="form-select" id="Subcontrator" v-model="subcontractor"
                    :class="{ 'is-invalid': subcontractorError }">
                    <option :value="subcontractor" v-for="subcontractor in subcontractors" :key="subcontractor">
                      {{ subcontractor }}
                    </option>
                  </select>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <label for="status">Status:</label>

                  <select class="form-select" id="status" v-model="status" :class="{ 'is-invalid': statusError }">
                    <option :value="status" v-for="status in status_options" :key="status">
                      {{ status }}
                    </option>
                  </select>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <label for="Requesters">Requesters:</label>
                  <select v-model="requester" id="Requesters" class="form-select"
                    :class="{ 'is-invalid': requesterError }">
                    <option :value="requester" v-for="requester in requester_options" :key="requester">
                      {{ requester }}
                    </option>
                  </select>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <label for="Projects">Projects:</label>

                  <select class="form-select" aria-label="Default select example" v-model="project" id="Projects"
                    :class="{ 'is-invalid': projectError }">
                    <option v-for="project in project_options" :value="project" :key="project">
                      {{ project }}
                    </option>
                  </select>
                </div>

                <div class="col-12 col-sm-6 col-lg-3">
                  <label for="request">Request Date:</label>

                  <Datepicker v-model="request_date" placeholder="Request Date" required id="request"
                    :autoPosition="false" />
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <label for="finish">Finish Date:</label>

                  <Datepicker v-model="finish_date" placeholder="Finish Date:" id="finish" :autoPosition="false" />
                </div>

                <div class="col-12 col-sm-6 col-lg-3">
                  <label for="materials">Cost</label>
                  <input type="number" v-model="cost" class="form-control" id="materials" />
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <label for="materials">Materials:</label>
                  <textarea v-model="materials" class="form-control" id="materials" cols="3" rows="3"></textarea>
                </div>
                <div class="col-12 col-lg-6">
                  <label id="Action">Action:</label>
                  <textarea v-model="action" id="Action" rows="5" cols="60" class="form-control"
                    :class="{ 'is-invalid': actionError }">
                  </textarea>
                </div>
                <div class="col-6 col-lg-3 mt-5">
                  <Button label="back" type="button" class="p-button-raised p-button-secondary" @click="goBack" />
                </div>
                <div class="col-6 col-lg-3 mt-5">
                  <Button label="insert" type="submit" class="p-button-raised p-button-help" style="color: white" />
                </div>
              </div>
            </form>
          </div>
        </Fieldset>
      </div>
    </div>
  </div> -->


<ModificationCreationForm :siteCode="site_code" :siteName="site_name" needed_action="new" :modificationData="[]" :site_id="site_name" />
</template>

<script>
import Modifications from "../../../apis/Modifications";
import ModificationCreationForm from "../../helpers/Modification/ModificationCreationForm.vue";

export default {
  data() {
    return {
      subcontractor: null,
      subcontractorError: false,
      cost: null,

      subcontractors: [
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

      ],
      request_date: null,
      request_dateError: false,
      requester: null,
      requesterError: false,
      requester_options: [
        "Acquisition",
        "Civil Team",
        "Maintenance",
        "Radio",
        "Transmission",
        "rollout",
        "GA",
        "Sharing team",
      ],
      project: null,
      projectError: false,
      project_options: [
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
      ],
      status: null,
      statusError: false,
      status_options: ["waiting D6", "done", "in progress"],
      finish_date: null,

      action: null,
      actionError: false,
      materials: null,
    };
  },
  name: "NewModification",
  props: ["site_code", "site_name"],
  emits: ["displayNoneSpinner"],
  // watch: {
  //   site_code() {
  //     this.getSiteModifications();
  //   },
  // },
  computed: {

  },
  components:{
    ModificationCreationForm
  },
  mounted() { },


  methods: {
    // goBack() {
    //   this.$router.go(-1);
    // },
    insertNewModification() {
      this.subcontractorError = false;
      this.request_dateError = false;
      this.requesterError = false;
      this.statusError = false;
      this.projectError = false;
      this.actionError = false;
      if (!this.subcontractor) {
        this.subcontractorError = true;
      }

      if (!this.project) {
        this.projectError = true;
      }
      if (!this.status) {
        this.statusError = true;
      }
      if (!this.action) {
        this.actionError = true;
      }
      if (!this.request_date) {
        this.request_dateError = true;
      }
      if (!this.requester) {
        this.requesterError = true;
      }
      if (
        this.requester &&
        this.subcontractor &&
        this.action &&
        this.request_date &&
        this.project &&
        this.status
      ) {
      
        let data = {
          site_code: this.site_code,
          site_name: this.site_name,
          subcontractor: this.subcontractor,
          requester: this.requester,
          request_date: this.request_date,
          finish_date: this.finish_date,
          cost: this.cost,
          project: this.project,
          status: this.status,
          action: this.action,
          materials: this.materials,
        };
        console.log(data);
        Modifications.insertNewModification(data)

          .then((response) => {
            console.log(response);
            this.subcontractor = null;
            this.requester = null;
            this.request_date = null;
            this.finish_date = null;
            this.cost = null;
            this.project = null;
            this.status = null;
            this.action = null;
            this.materials = null;
            this.$toast.add({
              severity: "success",
              summary: "Success Message",
              detail: "inserted Successfully",
              life: 3000,
            });
          })
          .catch((error) => {
            console.log(error);
            if (error.response.status == 422) {
              let errors = error.response.data.errors;

              if (errors.siteCode) {
                errors.siteCode.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.siteName) {
                errors.siteName.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.subcontractor) {
                errors.subcontractor.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.project) {
                errors.project.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.status) {
                errors.status.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.requester) {
                errors.requester.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.request_date) {
                errors.request_date.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.finish_date) {
                errors.finish_date.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.cost) {
                errors.cost.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.materials) {
                errors.materials.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.action) {
                errors.action.forEach((element) => {
                  this.$toast.add({
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
    },
  },
};
</script>

<style lang="scss" scoped>

</style>