<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-5 mb-5">
        <Fieldset>
          <template #legend> <span class="material-symbols-rounded mx-1">add_circle</span><span>New Site</span>  </template>
            <div class="form">
              <form @submit.prevent="insertNewSite">
                <div class="row  p-5">
                  <div class="col-12 col-sm-6 col-lg-3">
                    <label for="siteCode">Site Code:</label>
                    <input
                      type="text"
                      id="siteCode"
                      v-model="site_code"
                      class="form-control"
                      :class="{ 'is-invalid': siteCodeError }"
                    />
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3">
                    <label for="siteName">Site Name:</label>
                    <input
                      type="text"
                      id="siteName"
                      v-model="site_name"
                      class="form-control"
                      :class="{ 'is-invalid': siteNameError }"
                    />
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3">
                    <label for="BSC">BSC:</label>
                    <input
                      type="text"
                      id="BSC"
                      v-model="BSC"
                      class="form-control"
                 
                    />
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3">
                    <label for="RNC">RNC:</label>
                    <input
                      type="text"
                      id="RNC"
                      v-model="RNC"
                      class="form-control"
                    
                    />
                  </div>

                  <div class="col-12 col-sm-6 col-lg-3">
                    <label for="office">Office:</label>
                    <input
                      type="text"
                      id="office"
                      v-model="office"
                      class="form-control"
                   
                    />
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3">
                    <label for="category">Category:</label>
                    <select
                      id="category"
                      v-model="category"
                      class="form-select"
                   
                    >
                    <option ></option>
                      <option
                        :value="category"
                        v-for="category in categoryOptions"
                        :key="category"
                      >
                        {{ category }}
                      </option>
                    </select>
                  </div>

                  <div class="col-12 col-sm-6 col-lg-3">
                    <label for="type">Type:</label>
                    <select
                      id="type"
                      v-model="type"
                      class="form-select"
                 
                    >
                      <option ></option>
                      <option
                        :value="type"
                        v-for="type in typeOptions"
                        :key="type"
                      >
                        {{ type }}
                      </option>
                    </select>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3">
                    <label for="severity">severity:</label>
                    <select
                      id="severity"
                      v-model="severity"
                      class="form-select"
                 
                    >
                      <option ></option>
                      <option
                        :value="severity"
                        v-for="severity in severityOptions"
                        :key="severity"
                      >
                        {{ severity }}
                      </option>
                    </select>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3">
                    <label for="sharing">sharing:</label>
                    <select id="sharing" v-model="sharing" class="form-select">
                   
                      <option
                        :value= "shar"
                        v-for="shar in sharingOptions"
                        :key="shar"
                        >
                        {{ shar }}
                      </option>
                    </select>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3">
                    <label for="host">host:</label>
                    <select id="host" v-model="host" class="form-select" :class="{'is-invalid':hostError}">
                        <option ></option>
                      <option
                        :value="host"
                        v-for="host in hostOptions"
                        :key="host"
                      >
                        {{ host }}
                      </option>
                    </select>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3">
                    <label for="gest">gest:</label>
                    <select id="gest" v-model="gest" class="form-select" :class="{'is-invalid':gestError}">
                        <option ></option>
                      <option
                        :value="gest"
                        v-for="gest in gestOptions"
                        :key="gest"
                      >
                        {{ gest }}
                      </option>
                    </select>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3">
                    <label for="oz">Operation Zone:</label>
                    <select id="oz" v-model="oz" class="form-select">
                        <option ></option>
                      <option :value="oz" v-for="oz in ozOptions" :key="oz">
                        {{ oz }}
                      </option>
                    </select>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3">
                    <label for="2G">2G Cells:</label>
                    <input
                      type="number"
                      id="2G"
                      class="form-control"
                      v-model="cells2G"
                    />
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3">
                    <label for="3G">3G Cells:</label>
                    <input
                      type="number"
                      id="3G"
                      class="form-control"
                      v-model="cells3G"
                    />
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3">
                    <label for="4G">4G Cells:</label>
                    <input
                      type="number"
                      id="4G"
                      class="form-control"
                      v-model="cells4G"
                    />
                  </div>
                  <div class="col-12">
                    <div class="row mt-5">
                      <div class="col-6 col-lg-4">
                        <Button
                          label="back"
                          type="button"
                          class="p-button-raised p-button-help"
                          @click="goBack"
                        />
                      </div>
                      <div class="col-6 col-lg-4">
                        <Button
                          label="insert"
                          type="submit"
                          class="p-button-raised p-button-warning"
                          style="color: white"
                        />
                      </div>
                    </div>
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
import Sites from "../../../apis/Sites";

export default {
  data() {
    return {
      site_code: null,
      siteCodeError: false,
      site_name: null,
      siteNameError: false,
      BSC: null,
   
      RNC: null,
     
      office: null,
     
      type: null,
    
      typeOptions: ["Shelter", "Micro", "Outdoor"],
      category: null,
     
      categoryOptions: ["Normal", "BSC", "NDL", "LDN", "VIP+NDL", "VIP"],
      severity: null,
    
      severityOptions: ["Bronze", "Silver", "Golden"],
      sharing: "No",
      sharingError:false,
      sharingOptions: ["Yes", "No"],
      host: null,
      hostError:false,
      hostOptions: ["VF", "OG", "ET", "WE"],
      gest: null,
      gestError:false,
      gestOptions: ["VF", "OG", "ET", "WE","ET+VF","ET+VF+WE","VF+WE","ET+WE"],
      oz: null,
      ozOptions: ["Cairo South", "Cairo East", "Cairo North", "Giza"],
      cells2G: null,
      cells3G: null,
      cells4G: null,
    };
  },
  name: "NewSiteInsert",

  emits: ["displayNoneSpinner"],

  mounted() {},
  computed: {
    token() {
      return this.$store.getters.token;
    },
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    insertNewSite() {
      this.siteCodeError = false;
      this.siteNameError = false;
      this.sharingError=false;
       this.hostError=false;
       this.gestError=false;
      
      if (!this.site_code) {
        this.siteCodeError = true;
      }

      if (!this.site_name) {
        this.siteNameError = true;
      }

      if(this.sharing=="Yes"&&!this.host)
      {
        this.hostError=true;
        this.sharingError=true;

      }
       if(this.sharing=="Yes"&&!this.gest)
      {
        this.gestError=true;
        this.sharingError=true;

      }
      
      
     
      if (
        this.site_code &&
        this.site_name &&
        !this.sharingError
       
      ) {
       
        let data = {
          site_code: this.site_code,
          site_name: this.site_name,
          BSC: this.BSC,
          RNC: this.RNC,
          office: this.office,
          severity: this.severity,
          category:this.category,
          type: this.type,
          sharing: this.sharing,
          oz: this.oz,
          host: this.host,
          gest: this.gest,
          "2G_cells":this.cells2G,
          "3G_cells":this.cells3G,
          "4G_cells":this.cells4G,
        };
      
   
       Sites.createNewSite(data)
          .then((response) => {
            console.log(response);
            this.site_code = null;
            this.site_name = null;
            this.BSC=null;
            this.RNC=null;
            this.office = null;
            this.type = null;
            this.severity = null;
            this.category = null;
            this.oz = null;
            this.host = null;
            this.gest = null;
            this.sharing=null;
            this.cells2G=null;
            this.cells3G=null;
            this.cells4G=null;
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

              if (errors.site_code) {
                errors.site_code.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.site_name) {
                errors.site_name.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.BSC) {
                errors.BSC.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.RNC) {
                errors.RNC.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.office) {
                errors.office.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.type) {
                errors.type.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.category) {
                errors.category.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.host) {
                errors.host.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.gest) {
                errors.gest.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.sharing) {
                errors.sharing.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.severity) {
                errors.severity.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors.oz) {
                errors.oz.forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
              if (errors["2G_cells"]) {
                errors["2G_cells"].forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
               if (errors["3G_cells"]) {
                errors["3G_cells"].forEach((element) => {
                  this.$toast.add({
                    severity: "error",
                    summary: "Failed",
                    detail: element,
                    life: 3000,
                  });
                });
              }
               if (errors["4G_cells"]) {
                errors["4G_cells"].forEach((element) => {
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
   display: flex;
   justify-content: center;
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
      font-size: 1rem;


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