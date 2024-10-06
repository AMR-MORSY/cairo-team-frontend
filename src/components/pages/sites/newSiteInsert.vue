<template>
  <div class="w-full flex justify-center">

    <div class="max-w-3xl   mx-auto">
      <Fieldset>
        <template #legend>
          <div class=" flex">
            <span class="material-symbols-rounded mx-1">add_circle</span>
            <span class="text-sm font-bold text-font-main-color">New Site</span>
          </div>

        </template>
        <div class="form">
          <form @submit.prevent="insertNewSite">
            <div class="grid grid-cols-2 gap-4  p-5">
              <div class="col-span-2 md:col-span-1">
                <div class=" flex-auto">

                  <label for="siteCode" class=" block font-bold">Site Code:</label>
                  <InputText type="text" id="siteCode" v-model.trim="site_code" :invalid="siteCodeError" fluid />

                </div>
              </div>
              <div class="col-span-2 md:col-span-1">
                <div class=" flex-auto">
                  <label for="siteName" class=" block font-bold">Site Name:</label>
                  <InputText type="text" id="siteName" v-model.trim="site_name" :invalid="siteNameError" fluid />
                </div>
              </div>
              <div class="col-span-2 md:col-span-1">
                <div class=" flex-auto">
                  <label for="BSC" class=" block font-bold">BSC:</label>
                  <InputText type="text" id="BSC" v-model="BSC" fluid />
                </div>
              </div>
              <div class="col-span-2 md:col-span-1">
                <div class=" flex-auto">
                  <label for="RNC" class=" block font-bold">RNC:</label>
                  <InputText type="text" id="RNC" v-model="RNC" fluid />
                </div>
              </div>

              <div class="col-span-2 md:col-span-1">
                <div class=" flex-auto">
                  <label for="office" class=" block font-bold">Office:</label>
                  <InputText type="text" id="office" v-model="office" fluid />
                </div>
              </div>
              <div class="col-span-2 md:col-span-1">
                <div class=" flex-auto">
                  <label for="category" class=" block font-bold">Category:</label>
                  <Select id="category" v-model="category" :options="categoryOptions" fluid>
                    <!-- <option></option>
                    <option :value="category" v-for="category in categoryOptions" :key="category">
                      {{ category }}
                    </option> -->
                  </Select>
                </div>
              </div>

              <div class="col-span-2 md:col-span-1">
                <div class=" flex-auto">
                  <label for="type" class=" block font-bold">Type:</label>
                  <Select id="type" v-model="type" :options="typeOptions" fluid>
                    <!-- <option></option>
                    <option :value="type" v-for="type in typeOptions" :key="type">
                      {{ type }}
                    </option> -->
                  </Select>
                </div>
              </div>
              <div class="col-span-2 md:col-span-1">
                <div class=" flex-auto">
                  <label for="severity" class=" block font-bold">severity:</label>
                  <Select id="severity" v-model="severity" :options="severityOptions" fluid>
                    <option></option>
                    <!-- <option :value="severity" v-for="severity in severityOptions" :key="severity">
                      {{ severity }}
                    </option> -->
                  </Select>
                </div>
              </div>
              <div class="col-span-2 md:col-span-1">
                <div class=" flex-auto">
                  <label for="sharing" class=" block font-bold">sharing:</label>
                  <Select id="sharing" v-model="sharing" :options="sharingOptions" fluid>

                    <!-- <option :value="shar" v-for="shar in sharingOptions" :key="shar">
                      {{ shar }}
                    </option> -->
                  </Select>
                </div>
              </div>
              <div class="col-span-2 md:col-span-1">
                <div class=" flex-auto">
                  <label for="host" class=" block font-bold">host:</label>
                  <Select id="host" v-model="host" :options="hostOptions" :invalid="hostError" fluid>
                    <option></option>
                    <!-- <option :value="host" v-for="host in hostOptions" :key="host">
                      {{ host }}
                    </option> -->
                  </Select>
                </div>
              </div>
              <div class="col-span-2 md:col-span-1">
                <div class=" flex-auto">
                  <label for="gest" class=" block font-bold">gest:</label>
                  <Select id="gest" v-model="gest" :options="gestOptions" fluid :invalid="gestError">
                    <!-- <option></option>
                    <option :value="gest" v-for="gest in gestOptions" :key="gest">
                      {{ gest }}
                    </option> -->
                  </Select>
                </div>
              </div>
              <div class="col-span-2 md:col-span-1">
                <div class=" flex-auto">
                  <label for="oz" class=" block font-bold">Operation Zone:</label>
                  <Select id="oz" v-model="oz" :options="ozOptions" fluid>
                    <!-- <option></option>
                    <option :value="oz" v-for="oz in ozOptions" :key="oz">
                      {{ oz }}
                    </option> -->
                  </Select>
                </div>
              </div>
              <div class="col-span-2 md:col-span-1">
                <div class=" flex-auto">

                  <label for="2G" class="font-bold block "> 2G Cells </label>

                  <InputNumber fluid showButtons :min="0" :max="50" id="2G" v-model="cells2G" />
                </div>

              </div>
              <div class="col-span-2 md:col-span-1">
                <div class=" flex-auto">
                  <label for="3G" class="font-bold block">3G Cells:</label>
                  <InputNumber id="3G" fluid v-model="cells3G" showButtons :min="0" :max="50" />

                </div>
              </div>
              <div class="col-span-2 md:col-span-1">
                <div class=" flex-auto">
                  <label for="4G" class="font-bold block">4G Cells</label>
                  <InputNumber id="4G" fluid v-model="cells4G" showButtons :min="0" :max="50" />

                </div>
              </div>



            </div>
            <div class="flex justify-evenly py-4">
              <div>
                <Button label="back" type="button" class="p-button-raised p-button-help" @click="goBack" />
              </div>
              <div>
                <Button label="insert" type="submit" class="p-button-raised p-button-warning" style="color: white" />
              </div>
            </div>
          </form>
        </div>

      </Fieldset>
    </div>

  </div>

</template>

<script>
import InputText from "primevue/inputtext";
import Sites from "../../../apis/Sites";
import InputNumber from "primevue/inputnumber";
import SelectButton from "primevue/selectbutton";

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

      typeOptions: ["Macro", "Micro", "Indoor", "Pico", "Mobile Station"],
      category: null,

      categoryOptions: ["Normal", "BSC", "NDL", "LDN", "VIP+NDL", "VIP"],
      severity: null,

      severityOptions: ["Bronze", "Silver", "Golden"],
      sharing: "No",
      sharingError: false,
      sharingOptions: ["Yes", "No"],
      host: null,
      hostError: false,
      hostOptions: ["VF", "OG", "ET", "WE"],
      gest: null,
      gestError: false,
      gestOptions: ["VF", "OG", "ET", "WE", "ET+VF", "ET+VF+WE", "VF+WE", "ET+WE"],
      oz: null,
      ozOptions: ["Cairo South", "Cairo East", "Cairo North", "Giza", "North Upper", "Red Sea", "South Upper", "Sinai", "ALEX", "NORTH COAST", "Delta South", "Delta North"],
      cells2G: null,
      cells3G: null,
      cells4G: null,
    };
  },
  name: "NewSiteInsert",

  emits: ["displayNoneSpinner"],

  mounted() { },
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
      this.sharingError = false;
      this.hostError = false;
      this.gestError = false;

      if (!this.site_code) {
        this.siteCodeError = true;
      }

      if (!this.site_name) {
        this.siteNameError = true;
      }

      if (this.sharing == "Yes" && !this.host) {
        this.hostError = true;
        this.sharingError = true;

      }
      if (this.sharing == "Yes" && !this.gest) {
        this.gestError = true;
        this.sharingError = true;

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
          category: this.category,
          type: this.type,
          sharing: this.sharing,
          oz: this.oz,
          host: this.host,
          gest: this.gest,
          "2G_cells": this.cells2G,
          "3G_cells": this.cells3G,
          "4G_cells": this.cells4G,
        };


        Sites.createNewSite(data)
          .then((response) => {
            console.log(response);
            this.site_code = null;
            this.site_name = null;
            this.BSC = null;
            this.RNC = null;
            this.office = null;
            this.type = null;
            this.severity = null;
            this.category = null;
            this.oz = null;
            this.host = null;
            this.gest = null;
            this.sharing = null;
            this.cells2G = null;
            this.cells3G = null;
            this.cells4G = null;
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
.form {
  margin-top: 10px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
}
</style>