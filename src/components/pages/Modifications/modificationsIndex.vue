<template>
  <div class=" w-screen-2xl px-8 py-10">



    <Card class=" max-w-screen-xl px-5 mx-auto">
      <template #content>
        <template v-if="thereIsMod">
          <DataTable :value="modifications" scrollable :paginator="true" :rows="5"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[5, 10, 15]" 
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" class="text-sm" stripedRows tableStyle="min-width: 50rem"
            @row-select="onRowSelect" v-model:selection="selectedModification">
            <Column selectionMode="single"></Column>
            <Column field="site_code"  header="Code"></Column>
            <Column field="site_name" header="Name"></Column>
            <Column field="subcontractor" header="Subcontractor"></Column>
            <Column field="requester" header="Requester"></Column>
            <Column field="action" header="Action"></Column>
            <Column field="status" header="Status"></Column>
            <Column field="project" header="Project"></Column>
            <Column field="request_date" sortable header="Request Date"></Column>
            <Column field="finish_date" sortable header="Finish Date"></Column>
            <Column field="cost" header="Cost" sortable></Column>
            <template #footer>
              <div class="d-flex justify-content-end align-items-center">
                Total Cost {{ totalCost }} LE.
              </div>
            </template>
            <template #paginatorstart>
              <Button type="button" icon="pi pi-refresh" class="p-button-text" />
            </template>
            <template #paginatorend>
              <Button type="button" icon="pi pi-cloud" class="p-button-text" />
            </template>
          </DataTable>
          <div class="buttons">
            <div class="my-3">
              <Button label="Download" raised severity="info"  @click="downloadModfications">
                Download
              </Button>
            </div>
            <div class="my-3">
              <Button label="Update" @click="gotToUpdateModification" class="p-button-raised p-button-warning"
                :disabled="!isRowSelected" />
            </div>
            <div class="my-3">
              <Button label="Delete" @click="deleteModification" class="p-button-raised p-button-danger"
                :disabled="!isRowSelected" />
            </div>
          </div>

        </template>

        <template v-if="noModifications">
          <div class="no-modification">
            <p>No Modifications Available</p>
          </div>
        </template>

      </template>

    </Card>



  </div>
</template>

<script>
import Modifications from "../../../apis/Modifications";

export default {
  data() {
    return {
      modifications: [],
      isRowSelected: false,
      selectedModification: null,
      thereIsMod: false,
      noModifications: false,
    };
  },

  computed: {
    totalCost() {
      if (!this.modifications) {
        return 0;
      } else {
        return this.modifications.reduce(function (sum, current) {
          return sum + Number(current.cost);
        }, 0);
      }
    },
    downloadModifications() {
      return this.modifications;
    },

  },
  props: ["columnName", "columnValue"],
  created() {
    this.getModificationsIndex();
  },

  name: "modificationsIndex",
  methods: {
    getModificationsIndex() {

      let data = {
        columnName: this.columnName,
        columnValue: this.columnValue,
      };

      Modifications.getModificationIndex(data)

        .then((response) => {

          this.modifications = response.data.modifications;
          if (this.modifications.length > 0) {
            this.thereIsMod = true;
          }
          else {
            this.noModifications = true;
          }
        })
        .catch((error) => {

          if (error.response.status == 422) {
            let errors = error.response.data.errors;
            if (errors.columnName) {
              errors.columnName.forEach((element) => {
                this.$toast.add({
                  severity: "error",
                  summary: "Error Message",
                  detail: element,
                  life: 3000,
                });
              });
            } else if (errors.columnValue) {
              errors.columnValue.forEach((element) => {
                this.$toast.add({
                  severity: "error",
                  summary: "Error Message",
                  detail: element,
                  life: 3000,
                });
              });
            }
          }
        })
        .finally(() => {

        });
    },

    downloadModfications() {
      let data = {
        column_name: this.columnName,
        column_value: this.columnValue,
      };



      Modifications.downloadModifications(data)
        .then((response) => {
          console.log(response);
          var fileUrl = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");
          fileLink.href = fileUrl;
          fileLink.setAttribute(
            "download",
            `${this.columnValue}Modifications.xlsx`
          );
          document.body.appendChild(fileLink);
          fileLink.click();
        })
        .catch((error) => { });
    },
    onRowSelect() {

      this.isRowSelected = true;

    },
    gotToUpdateModification() {
      this.$router.push(
        `/modifications/update/${this.selectedModification.id}`
      );
    },

    deleteModification() {
      this.$confirm.require({
        message: "Are you sure you want to proceed?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.$confirm.close();
          this.isRowSelected = false;
          this.$store.dispatch("displaySpinnerPage", false);
          let data = {
            id: this.selectedModification.id,
          };

          Modifications.deleteModification(data)

            .then((response) => {
              this.getModificationsIndex();
            })
            .catch((error) => { });
        },
        reject: () => {
          this.$confirm.close();
          this.isRowSelected = false;
          //callback to execute when user rejects the action
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.no-modification {
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  
}
.no-modification p {
    color: red;
  }

.buttons {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>