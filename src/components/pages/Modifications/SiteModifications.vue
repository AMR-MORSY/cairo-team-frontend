<template>
  <section id="site-modification" v-if="isModificationsFound">

    <div class="container">
      <Fieldset>

        <template #legend>{{ site_code }}-{{ site_name }} </template>

        <div class="row ">
          <div class="col-12">

            <DataTable :value="modifications" responsiveLayout="scroll"  stripedRows
              selectionMode="single" v-model:selection="selectedModification" @row-select="onRowSelect">

              <Column selectionMode="single"></Column>

              <Column v-for="col in columns" :field="col.field" :header="col.header" :key="col.field"></Column>
            </DataTable>
          </div>
          <div class="col-6 col-md-4 mt-3">
            <Button label="Update" @click="gotToUpdateModification" class="p-button-raised p-button-warning"
              :disabled="!isRowSelected" />
          </div>
          <div class="col-6 col-md-4 mt-3">
            <Button label="New Modification" @click="insertNewModification" class="p-button-raised p-button-secondary" />
          </div>
          <div class="col-6 col-md-4 mt-3">
            <Button label="Delete" @click="deleteModification" class="p-button-raised p-button-danger"
              :disabled="!isRowSelected" />
          </div>
        </div>



      </Fieldset>
    </div>


  </section>

  <section v-if="!isModificationNotFound">
    <transition name="fade-bounce" appear>
      <div class="container">
        <div class="errors card">
          <p>No Modifications</p>
          <div class="buttons">
            <Button label="New Modification" @click="insertNewModification" class="p-button-raised p-button-secondary" />

            <Button label="Back" @click="goBack" class="p-button-raised p-button-danger" />
          </div>
        </div>
      </div>
    </transition>
  </section>
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
      isModificationNotFound:true,
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

      Modifications.getSiteModifications(this.site_code)
        .then((response) => {
          console.log(response);
          this.modifications = response.data.modifications;
          if (this.modifications.length > 0) {
            this.isModificationsFound = true;
            this.isModificationNotFound=true;
          }
          else {
            this.isModificationsFound = false;
            this.isModificationNotFound=false;

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
#site-modification {
  margin-top: 1em;
  margin-bottom: 1em;
}

::v-deep(.p-fieldset) {


  padding-top: 2rem;



  .p-fieldset-legend {
   max-width:  200px;
    margin-left: 20px;
    color: white;
   
    text-align: center;
    background-color: rgba($color: gray, $alpha: 0.9);
  }

  
  .p-datatable {
    width: 100%;
    //  font-size: 1rem;
    
  }
}

.errors {
  margin-top: 4em;
  padding: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  p {
    color: red;
    text-align: center;
  }

  .buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

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

@media (min-width:320px)  { /* smartphones, iPhone, portrait 480x320 phones */ 
  ::v-deep(.p-fieldset) {
    .p-fieldset-legend {
      font-size: 0.7rem;
    }
  .p-datatable {
    
    font-size: 0.7rem;
    
  }

  .p-button{
    font-size: 0.7rem;
  }
}
}
@media (min-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ 
//   ::v-deep(.p-fieldset) {
//   .p-datatable {
    
//     font-size: 0.7em;
    
//   }
// }
}
@media (min-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ 
//   ::v-deep(.p-fieldset) {
//   .p-datatable {
    
//     font-size: 0.7em;
    
//   }
// }
}

@media (min-width:961px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */
//   ::v-deep(.p-fieldset) {
//   .p-datatable {
    
//     font-size: 0.7em;
    
//   }
// }
}
@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */
  ::v-deep(.p-fieldset) {
    .p-fieldset-legend {
      font-size: 0.9rem;
    }
  .p-datatable {
    
    font-size: 0.9rem;
    
  }
  .p-button{
    font-size: 0.9rem;
  }
}
}
</style>