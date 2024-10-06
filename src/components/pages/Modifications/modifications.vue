<template>
  <div v-if="serverError">
    <p style="color: red">{{ serverError }}</p>
  </div>
  <section id="analysis" class=" w-full px-10" v-if="status">

    <Card class=" bg-black max-w-screen-sm mx-auto mt-24 ">

      <template #content>


        <div class=" w-full">
          <h5 class=" font-Signika font-bold text-font-main-color text-center text-lg">Select modifications</h5>
        </div>
        <form @submit.prevent="submitFilterForm">
          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2 md:col-span-1">
              <div class="flex-auto ">
                <Select fluid @change="submitColumn" v-model="column" placeholder="Filter By..." :options="columns"
                  id="column">
               
                </Select>
              </div>
            </div>
            <div class="col-span-2 md:col-span-1">
              <div class="flex-auto">
                <Select fluid v-model="columnValue" :options='columnValues' id="columnValue">
                
                </Select>
              </div>
            </div>


          </div>
          <div class=" w-full flex justify-center mt-5">
            <Button :disabled="disabled" class=" block" type="submit" label="Submit" severity="success" rounded
              raised />





          </div>
        </form>
      </template>
    </Card>

  </section>
</template>

<script>
import Button from "primevue/button";
import Modifications from "../../../apis/Modifications";
import Card from "primevue/card";


export default {
  data() {
    return {
      column: null,
      columnValue: null,
      columns: null,
      columnValues: null,
      status: null,
      subcontractor: null,
      project: null,
      requester: null,
      serverError: null,
      display: true,
    };
  },
  name: "modifications",
  computed: {
    disabled() {
      if (!this.column || !this.columnValue) {
        return true;
      }
      if (this.column && this.columnValue) {
        return false;
      }
    },


  },
  mounted() {
    this.getModificationAnalysis();
  },

  methods: {
    submitColumn(e) {
      // this.column = e.target.value;

      if (this.column == "status") {
        this.columnValues = this.status;
      } else if (this.column == "subcontractor") {
        this.columnValues = this.subcontractor;
      } else if (this.column == "requester") {
        this.columnValues = this.requester;
      } else if (this.column == "project") {
        this.columnValues = this.project;
      }
    },
    // submitColumnValue(e) {
    //   this.columnValue = e.target.value;
    // },
    getModificationAnalysis() {
      Modifications.getModificationAnalysis()

        .then((response) => {
          this.status = response.data.index.status;
          this.subcontractor = response.data.index.subcontractor;
          this.project = response.data.index.project;
          this.requester = response.data.index.requester;
          this.columns = ["status", "subcontractor", "requester", "project"];
        })
        .catch((error) => {
          if (error.response.status == 500) {
            this.serverError = error.response.data.message;
          }
        });
    },
    submitFilterForm() {

      this.$router.push(
        `/modifications/index/${this.column}/${this.columnValue}`
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>