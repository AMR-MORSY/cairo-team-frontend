<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-12 my-2 ">
        <Fieldset>
          <template #legend>{{ site_code }}-{{ site_name }} </template>
          <div class="form">
            <form @submit.prevent="updateModification">
              <div class="row  p-5">
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

                  <Datepicker v-model="request_date" placeholder="Request Date" required id="request" />
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <label for="finish">Finish Date:</label>

                  <Datepicker v-model="finish_date" placeholder="Finish Date:" id="finish" />
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
                  <Button label="Back" type="submit" @click.prevent="goBack" class="p-button-raised p-button-warning"
                    style="color: white" />
                </div>
                <div class="col-6 col-lg-3 mt-5">
                  <Button label="Update" type="submit" class="p-button-raised p-button-help" style="color: white" />
                </div>
              </div>
            </form>
          </div>
        </Fieldset>
      </div>
    </div>
  </div>
 
</template>

<script>
import Modifications from "../../../apis/Modifications";

export default {
  data() {
    return {
      site_name: null,
      site_code: null,
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
        "MERG",
        "HAS",
        "H-PLUS",
        "STEPS",
        "Red Tech",
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
  name: "UpdateModification",
  props: ["id"],
  emits: ["displayNoneSpinner"],
  watch: {
    id() {
      this.getModificationDetails();
    },
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },

  },
  mounted() {
    this.getModificationDetails();
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },

    getModificationDetails() {


      Modifications.getModificationDetails(this.id)

        .then((response) => {
          console.log(response);
          this.site_code = response.data.details.site_code;
          this.subcontractor = response.data.details.subcontractor;

          this.site_name = response.data.details.site_name;

          this.request_date = response.data.details.request_date;
          this.requester = response.data.details.requester;

          this.project = response.data.details.project;

          this.status = response.data.details.status;

          this.finish_date = response.data.details.finish_date;
          this.action = response.data.details.action;
          this.cost = response.data.details.cost;
          this.materials = response.data.details.materials;
        })
        .catch((error) => {
          console.log(error);
        })

    },
    updateModification() {
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
          id: this.id,
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

        Modifications.updateModification(data)

          .then((response) => {


            this.$toast.add({
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
::v-deep(.p-fieldset) {
  position: relative;
 

  .p-fieldset-legend {
    max-width: 200px;
    color: white;
    text-align: center;
    position: absolute;
    top: 0px;
    left: 50px;
    z-index: 2;
    background-color: rgba($color: gray, $alpha: 1);
  }



  select:focus {
    box-shadow: 0px 0px 3px 2px #79589f !important;
    border: unset;

  }


  .dp__theme_light {
    --dp-text-color: #79589f;

    --dp-icon-color: #79589f;

    --dp-border-color: #79589f;
  }
}

.form {
  margin-top: 10px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
}

@media (min-width:320px) {

  /* smartphones, iPhone, portrait 480x320 phones */
  ::v-deep(.p-fieldset) {


    .p-fieldset-legend {
      font-size: 0.7rem;


    }

    .p-button {
      font-size: 0.7rem;
    }

    select,input,label,textarea {
      font-size: 0.7rem;
    }
    .dp__theme_light {
      font-size: 0.7rem;
  }


  }

}

@media (min-width:481px) {
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
  ::v-deep(.p-fieldset) {


.p-fieldset-legend {
  font-size: 0.7rem;


}

.p-button {
  font-size: 0.7rem;
}

select,input,label,textarea {
  font-size: 0.7rem;
}


}
}

@media (min-width:641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  ::v-deep(.p-fieldset) {


.p-fieldset-legend {
  font-size: 0.7rem;


}

.p-button {
  font-size: 0.7rem;
}

select,input,label,textarea {
  font-size: 0.7rem;
}


}
}

@media (min-width:961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
  ::v-deep(.p-fieldset) {


.p-fieldset-legend {
  font-size: 0.9rem;


}

.p-button {
  font-size: 0.9rem;
}

select,input,label,textarea {
  font-size: 0.9rem;
}


}
}

@media (min-width:1025px) {

  /* big landscape tablets, laptops, and desktops */
  ::v-deep(.p-fieldset) {


    .p-fieldset-legend {
      font-size: 0.9rem;


    }

    .p-button {
      font-size: 0.9rem;
    }

    select,input {
      font-size: 0.9rem;
    }


  }

}
</style>