<template>
  <div class="table-container" v-tooltip.right="'Get Tickets'" v-if="batteries">
    <DataTable :value="batteries" responsiveLayout="scroll" class="p-datatable-sm" stripedRows selectionMode="single"
      dataKey="id" @row-select="onRowSelect" v-model:selection="selectedBattery">
      <Column selectionMode="single"></Column>
      <Column field="batteries_brand" header="Batteries Brand"></Column>
      <Column field="battery_amp_hr" header="Battery Amp Hr"></Column>
      <Column field="battery_volt" header="Battery Volt"></Column>
      <Column field="no_strings" header="No. Strings"></Column>
      <Column field="stock" header="Stock"></Column>
      <Column field="batteries_status" header="Batteries Status"></Column>
      <Column field="theft_case" header="Theft Case"></Column>
      <Column field="installation_date" header="Installation Date" sortable></Column>
      <Column field="category" header="Category"></Column>
      <Column field="comment" header="Comment"></Column>
    </DataTable>
  </div>
  <div class="d-flex justify-content-between align-items-center px-5 py-3 " style="border-top: 1px solid gray;">
    <button class="btn btn-success" :disabled="disableButton"  @click="updateBattery()" v-if="$can('update_Batteries_data')">Update</button>
    <button class="btn btn-danger" :disabled="disableButton" @click="openDeleteBattRecordConfirmation()" v-if="$can('delete_Batteries_data')">Delete</button>
    <button class="btn btn-info" @click="insertNewBatteryData" v-if="$can('create_Batteries_data')">Add</button>

  </div>

  <Dialog v-model:visible="visible" modal :showHeader="false" :style="{ width: '50vw' }"
    :breakpoints="{ '700px': '70vw' }">

    <p class="m-0">
      <span class="confirmation">Confirmation</span>
    <p style="margin-top: 20px; font-size: clamp(14px,2vw,18px); ">{{ message }} </p>
    </p>
    <template #footer>
      <div class="d-flex justify-content-around align-items-center">
        <Button label="No" class="btn btn-info" icon="pi " @click="closeConfirmation()" />
        <Button label="Yes" icon="pi pi-check" class=" btn btn-danger" @click="delteBatteryRecord()"  />

      </div>


    </template>
  </Dialog>

</template>

<script>

import BatteriesUpdate from './BatteriesUpdate.vue';
import Sites from "../../../apis/Sites";
export default {
  data() {
    return {

      batteries: null,
      selectedBattery: null,
      disableButton: true,
      site_code: null,
      visible: false,
      message: "",
    };
  },
  inject: ["dialogRef"],
  components: {
    BatteriesUpdate,

  },

  mounted() {
    this.mountTableData();
  },
  watch: {
    $route(to, from) {
      if (to.path == "/user/login") {
        this.dialogRef.close();
      }

    }

  },

  name: "SiteBatteriesTable",
  methods: {
    // downloadSiteAlarms(siteCode, alarmName, siteName) {
    //     let data = {
    //         siteCode: siteCode,
    //     };

    //     if (alarmName == "power") {
    //         Energy.downloadSitePowerAlarms(data)
    //             .then((response) => {
    //                 console.log(response);
    //                 var fileUrl = window.URL.createObjectURL(new Blob([response.data]));
    //                 var fileLink = document.createElement("a");
    //                 fileLink.href = fileUrl;
    //                 fileLink.setAttribute("download", `${siteName}PowerAlarms.xlsx`);
    //                 document.body.appendChild(fileLink);
    //                 fileLink.click();
    //             })
    //             .catch((error) => { });
    //     } else if (alarmName == "highTemp") {
    //         Energy.downloadSiteHighTempAlarms(data)
    //             .then((response) => {
    //                 console.log(response);
    //                 var fileUrl = window.URL.createObjectURL(new Blob([response.data]));
    //                 var fileLink = document.createElement("a");
    //                 fileLink.href = fileUrl;
    //                 fileLink.setAttribute("download", `${siteName}HighTempAlarms.xlsx`);
    //                 document.body.appendChild(fileLink);
    //                 fileLink.click();
    //             })
    //             .catch((error) => { });
    //     } else if (alarmName == "gen") {
    //         Energy.downloadSiteGenAlarms(data)
    //             .then((response) => {
    //                 console.log(response);
    //                 var fileUrl = window.URL.createObjectURL(new Blob([response.data]));
    //                 var fileLink = document.createElement("a");
    //                 fileLink.href = fileUrl;
    //                 fileLink.setAttribute("download", `${siteName}GenAlarms.xlsx`);
    //                 document.body.appendChild(fileLink);
    //                 fileLink.click();
    //             })
    //             .catch((error) => { });
    //     }
    // },

    mountTableData() {
      this.batteries = this.dialogRef.data.batteries
      this.site_code = this.dialogRef.data.site_code;


    },
    insertNewBatteryData() {
      this.dialogRef.close();
      this.$dialog.open(BatteriesUpdate, {
        props: {
          style: {
            width: "75vw",
          },
          breakpoints: {
            "960px": "75vw",
            "640px": "90vw",
          },
          modal: true,

        },
        data: {
          battery: null,
          action: "create",
          site_code: this.site_code
        }


      });


    },
    updateBattery() {
      this.dialogRef.close();
      this.$dialog.open(BatteriesUpdate, {
        props: {
          style: {
            width: "75vw",
          },
          breakpoints: {
            "960px": "75vw",
            "640px": "90vw",
          },
          modal: true,

        },
        data: {
          battery: this.selectedBattery,
          action: "update",
          site_code: this.site_code
        }


      });

    },
    onRowSelect() {
      this.disableButton = false;


    },
    delteBatteryRecord() {
      this.message = '';
      this.visible = false;
      Sites.deleteBatteryRecord(this.selectedBattery.id).then((response) => {
        if (response.data.message == 'success') {
          this.$toast.add({
            severity: "success",
            summary: "Success Message",
            detail: "Deleted Successfully",
            life: 3000,
          });

          this.dialogRef.close();

        }

      })

    },
    closeConfirmation() {
      this.message = '';
      this.visible = false;
    },
    openDeleteBattRecordConfirmation() {
      this.message = "This will delete this battery record, Are you Sure?";
      this.visible = true;
    }
  },
};
</script>

<style lang="scss" scoped></style>