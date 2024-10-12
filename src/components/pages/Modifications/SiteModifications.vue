<template>
  <div id="site-modification" class=" w-full" v-if="isModificationsFound">

    <div class=" max-w-fit mx-auto">
      <Fieldset>

        <template #legend>
          <p class=" bg-slate-500 text-white font-Signika rounded font-semibold py-1 px-3">
            {{ site_code }}-{{ site_name }}
          </p>

        </template>




        <div class="card  max-w-lg md:max-w-fit">

          <DataTable :value="modifications" tableStyle="min-width: 50rem" stripedRows selectionMode="single"
            v-model:selection="selectedModification" scrollable @row-select="onRowSelect" class=" text-sm">

            <Column selectionMode="single"></Column>

            <Column v-for="col in columns" :field="col.field" :header="col.header" :key="col.field"></Column>
          </DataTable>

          <div class=" mt-5 flex justify-center md:justify-evenly items-center">
            <Button label="Update" @click="gotToUpdateModification" severity="warning" raised class="block"
              :disabled="!isRowSelected" />
            <Button label="New Modification" @click="insertNewModification" severity="secondary" raised
              class="block mx-4" />
            <Button label="Delete" @click="deleteModification" severity="danger" raised class=" block"
              :disabled="!isRowSelected" />
          </div>
        </div>





      </Fieldset>
    </div>


  </div>

  <!-- <section v-if="!isModificationNotFound">
    <transition name="fade-bounce" appear>
      <div class="container">
        <div class="errors card">
          <p>No Modifications</p>
          <div class="buttons">
            <Button label="New Modification" @click="insertNewModification"
              class="p-button-raised p-button-secondary" />

            <Button label="Back" @click="goBack" class="p-button-raised p-button-danger" />
          </div>
        </div>
      </div>
    </transition>
  </section> -->
</template>

<script>
import Modifications from "../../../apis/Modifications";

export default {
  data() {
    return {
      modifications: null,
      selectedModification: null,
      isRowSelected: false,
      isModificationsFound: false,

    };
  },
  name: "SiteModifications",
  props: ["site_code", "site_name"],
  emits: ["displayNoneSpinner"],
  watch: {
    site_code() {
      this.getSiteModifications();
    },
  },
  beforeMount() {
    this.getSiteModifications();
  },

  mounted() {
    this.columns = [
      { field: "subcontractor", header: "Subcontractor" },
      { field: "action", header: "Action" },
      { field: "requester", header: "Requester" },
      { field: "request_date", header: "Request Date" },
      { field: "project", header: "Project" },
      { field: "finish_date", header: "Finish Date" },
      { field: "status", header: "Status" },
      { field: "cost", header: "Cost" },
      { field: "materials", header: "Materials" },
    ];
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getSiteModifications() {
      this.isModificationsFound = false;

      Modifications.getSiteModifications(this.site_code)
        .then((response) => {

          this.modifications = response.data.modifications;
          if (this.modifications.length > 0) {
            this.isModificationsFound = true;

          }
          else {
            // this.isModificationsFound = false;
            // this.isModificationNotFound = false;

            this.$confirm.require({
              message: "There is No modifications, insert new modification?",
              header: "Confirmation",
              icon: "pi pi-exclamation-triangle",
              rejectProps: {

                icon: 'pi pi-times',
                outlined: true,
                size: 'small',
                severity: 'danger'
              },
              acceptProps: {
                severity: 'success',
                icon: 'pi pi-check',
                size: 'small'
              },
              accept: () => {
                this.$confirm.close();

                this.insertNewModification()
              },
              reject: () => {
                this.$confirm.close();
                this.$router.push(`/sites/details/${this.site_code}`);
                //callback to execute when user rejects the action
              },
              onHide: () => {
                this.$router.push(`/sites/details/${this.site_code}`);
              }
            });

          }
        })
        .catch((error) => {

        })
        .finally(() => {

        });
    },
    onRowSelect() {
      this.isRowSelected = true;
    },
    gotToUpdateModification() {
      this.$router.push(
        `/modifications/update/${this.selectedModification.id}`
      );
    },
    insertNewModification() {
      this.$router.push(
        `/modifications/new/${this.site_code}/${this.site_name}`
      );
    },
    deleteModification() {
      this.$confirm.require({
        message: "Are you sure you want to proceed?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.$confirm.close();
          this.$store.dispatch("displaySpinnerPage", false);
          let data = {
            id: this.selectedModification.id,
          };

          Modifications.deleteModification(data)
            .then((response) => {
              this.getSiteModifications();
            })
            .catch((error) => { });
        },
        reject: () => {
          this.$confirm.close();
          //callback to execute when user rejects the action
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-bounce-enter-active {
  animation: woble 1s ease;
}

@keyframes woble {
  0% {
    opacity: 0;
    transform: translateY(-300px);
  }

  50% {
    opacity: 1;
    transform: translateY(0px);
  }

  60% {
    transform: translateY(16px);
  }

  70% {
    transform: translateY(-16px);
  }

  80% {
    transform: translateY(8px);
  }

  90% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>