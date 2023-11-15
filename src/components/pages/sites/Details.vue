<template>
  <div class="container ">
    <div class="row ">
      <div class="col-1"></div>
      <div class="col-12 col-md-10 mt-5 mb-3">
        <div class="card">
          <TabView class="myTabView" ref="tabview4">
            <TabPanel>
              <template #header>
                <span class="header">{{ siteName }}</span>
              </template>

              <div class="row site-details">
                <div class="col-12 col-sm-6 col-lg-4 ">
                  <div class="input-group">
                    <span class="input-group-text" id="siteCode">Site code</span>
                    <input type="text" class="form-control" disabled v-model="siteCode" aria-describedby="siteCode" />
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4  ">
                  <div class="input-group" id="siteCode">
                    <span class="input-group-text" id="siteName">Site Name</span>
                    <input type="text" disabled class="form-control" v-model="siteName" aria-describedby="siteName" />
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4  ">
                  <div class="input-group">
                    <span class="input-group-text" id="BSC">BSC</span>
                    <input type="text" disabled class="form-control" v-model="BSC" aria-describedby="BSC" />
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4  ">
                  <div class="input-group">
                    <span class="input-group-text" id="RNC">RNC</span>
                    <input type="text" disabled class="form-control" v-model="RNC" aria-describedby="RNC" />
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-lg-4  ">
                  <div class="input-group">
                    <span class="input-group-text" id="oz">OZ</span>
                    <input type="text" disabled class="form-control" v-model="operationZone" aria-describedby="oz" />
                  </div>
                </div>


                <div class="col-12 col-sm-6 col-lg-4  ">
                  <div class="input-group">
                    <span class="input-group-text" id="severity">Severity</span>
                    <input type="text" disabled class="form-control" v-model="severity" aria-describedby="severity" />
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4  ">
                  <div class="input-group">
                    <span class="input-group-text" id="office">Office</span>
                    <input type="text" disabled class="form-control" v-model="office" aria-describedby="office" />
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-lg-4  ">
                  <div class="input-group">
                    <span class="input-group-text" id="nodalCode">Nodal Code</span>
                    <input type="text" disabled class="form-control" v-model="nodalCode" aria-describedby="nodalCode" />
                  </div>
                </div>
                <div class="col-12 col-sm-6  col-lg-4 ">
                  <div class="input-group">
                    <span class="input-group-text" id="nodal">Nodal Name</span>
                    <input type="text" disabled class="form-control" v-model="nodalName" aria-describedby="nodal" />
                  </div>
                </div>


                <div class="col-11 m-auto my-5" style="height: 1px; border: 2px dashed #79589f;"></div>


                <div class="col-12 col-sm-6 col-lg-3  ">
                  <div class="input-group">
                    <span class="input-group-text" id="2g">2G</span>
                    <input type="text" disabled class="form-control" aria-describedby="2g" v-model="cell2G" />
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3  ">
                  <div class="input-group">
                    <span class="input-group-text" id="3g">3G</span>
                    <input type="text" disabled class="form-control" v-model="cell3G" aria-describedby="3g" />
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3  ">
                  <div class="input-group">
                    <span class="input-group-text" id="4g">4G</span>
                    <input type="text" disabled class="form-control" v-model="cell4G" aria-describedby="4g" />
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3  ">
                  <div class="input-group">
                    <span class="input-group-text" id="category">Category</span>
                    <input type="text" disabled class="form-control" v-model="category" aria-describedby="category" />
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3  ">
                  <div class="input-group">
                    <span class="input-group-text" id="sharing">Sharing</span>
                    <input type="text" disabled class="form-control" v-model="sharing" aria-describedby="sharing" />
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3  ">
                  <div class="input-group">
                    <span class="input-group-text" id="host">Host</span>
                    <input type="text" disabled class="form-control" v-model="host" aria-describedby="host" />
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3  ">
                  <div class="input-group">
                    <span class="input-group-text" id="guest">Gest</span>
                    <input type="text" disabled class="form-control" v-model="gest" aria-describedby="guest" />
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3  ">
                  <div class="input-group">
                    <span class="input-group-text" id="status">Status</span>
                    <input type="text" disabled class="form-control" v-model="status" aria-describedby="status" />
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-lg-3  ">
                  <div class="input-group">
                    <span class="input-group-text" id="type">Type</span>
                    <input type="text" disabled class="form-control" v-model="type" aria-describedby="type" />
                  </div>
                </div>





              </div>


              <div class="row mt-5 py-5 buttons">
                <div class="col-6 col-md-3  my-3">
                  <Button label="Modifications" @click="gotToSiteModifications"
                    class="p-button-raised p-button-warning" />
                </div>
                <div class="col-6 col-md-3  my-3">
                  <Button label="NUR" @click="getSiteNUR" class="p-button-raised p-button-secondary" />
                </div>
                <div class="col-6 col-md-3 my-3">
                  <Button label="Batteries Health" @click="getSiteBatteriesHealth"
                    class="p-button-raised p-button-secondary" />
                </div>
                <div class="col-6 col-md-3 my-3">
                  <Button label="Update" @click="goToSiteUpdate" class="p-button-raised p-button-help" />
                </div>
                <div class="col-6 col-md-3 my-3">
                  <Button label="Batteries Data" @click="getBatteriesData" class="p-button-raised p-button-help" />
                </div>
                <div class="col-6 col-md-3 my-3">
                  <Button label="Rectifier Data" @click="getRectifierData" class="p-button-raised p-button-secondary" />
                </div>
                <div class="col-6 col-md-3 my-3">
                  <Button label="Site Data" @click="getSiteData" class="p-button-raised p-button-secondary" />
                </div>
                <div class="col-6 col-md-3 my-3">
                  <Button label="MW Data" @click="getMWData" class="p-button-raised p-button-secondary" />
                </div>
                <div class="col-6 col-md-3 my-3">
                  <Button label="BTS Data" @click="getBTSData" class="p-button-raised p-button-secondary" />
                </div>
                <div class="col-6 col-md-3 my-3">
                  <Button label="Power Data" @click="getPowerData" class="p-button-raised p-button-secondary" />
                </div>
                <div class="col-6 col-md-3 my-3">
                  <Button label="Tx.issues" @click="getSiteWANSData" class="p-button-raised p-button-secondary" />
                </div>
                <div class="col-6 col-md-3 my-3">
                  <Button icon="pi pi-search" label="Tx issues" @click="SearchTxIssues()" />
                </div>
            
                <div class="col-12   my-3 ">
                  <div class="speed-dial">
                    <SpeedDial :model="items" direction="right" :tooltipOptions="{ position: 'right' }"
                      :transitionDelay="80" showIcon="pi pi-bell" hideIcon="pi pi-times" buttonClass="p-button-outlined">

                    </SpeedDial>
                  </div>
                </div>
              </div>




            </TabPanel>
            <TabPanel>
              <template #header>
                <div class="d-flex justify-content-center">
                  <span class="header">Cascades</span>

                  <Badge :value="countCascades" v-if="countCascades"></Badge>
                </div>


              </template>
              <template v-if="countCascades">
                <DataTable :value="cascades" responsiveLayout="scroll" class="p-datatable-sm" :paginator="true" :rows="5"
                  stripedRows v-model:selection="selectedSite" selectionMode="single" dataKey="cascade_code"
                  @row-select="onRowSelect">
                  <Column selectionMode="single"></Column>
                  <Column field="cascade_code" header="Site Code"></Column>
                  <Column field="cascade_name" header="Site Name"></Column>
                  <Column field="category" header="Site Category"></Column>
                  <Column field="countCascades" header="Cascades"></Column>
                </DataTable>
              </template>
              <template v-else>
                <div>
                  <p>No Cascades</p>
                </div>
              </template>

              <Button label="Update" @click="goToUpdateCascadesPage" class="p-button-rounded p-button-help" />
            </TabPanel>
            <TabPanel>
              <template #header>
                <span class="header">Indirect Cascades</span>
                <template v-if="countIndirectCascades">
                  <Badge :value="countIndirectCascades"></Badge>
                </template>
              </template>
              <template v-if="countIndirectCascades">
                <DataTable :value="indirectCascades" responsiveLayout="scroll" class="p-datatable-sm" :paginator="true"
                  :rows="5" stripedRows v-model:selection="selectedSite" selectionMode="single" dataKey="cascade_code"
                  @row-select="onRowSelect">
                  <Column selectionMode="single"></Column>
                  <Column field="cascade_code" header="Site Code"></Column>
                  <Column field="cascade_name" header="Site Name"></Column>
                  <Column field="category" header="Site Category"></Column>
                </DataTable>
              </template>
              <template v-else>
                <div>
                  <p>No Cascades</p>
                </div>
              </template>
            </TabPanel>
          </TabView>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import Sites from "../../../apis/Sites";
import siteNURTable from "../NUR/siteNURTable.vue";
import NUR from "../../../apis/NUR";
import Energy from "../../../apis/Energy";
import SiteAlarmsTable from "../../helpers/Sites/SiteAlarmsTable.vue";
import siteBatteriesHealth from "../../helpers/Sites/siteBatteriesHealth.vue";
import SiteDownAlarmsGroupedByWeek from "../../helpers/Sites/SiteDownAlarmsGroupedByWeek.vue";
import EquipmentDetails from "../../helpers/Sites/EquipmentDetails.vue";
import TransmissionDetails from "../../helpers/Transmission/TransmissionDetails.vue";
import SearchTxIssuesForm from "../../helpers/Transmission/SearchTxIssuesForm.vue";
export default {
  data() {
    return {
      siteName: null,
      siteCode: null,
      cell2G: null,
      cell3G: null,
      cell4G: null,
      BSC: null,
      RNC: null,
      operationZone: null,
      type: null,
      category: null,
      office: null,
      sharing: null,
      host: null,
      severity: null,
      status: null,
      gest: null,
      cascades: null,
      indirectCascades: null,
      selectedSite: null,
      nodalCode: null,
      nodalName: null,
      data: null,
      NUR2G: [],
      NUR3G: [],
      NUR4G: [],
      items: [
        {
          label: "Power Alarms",
          icon: 'pi pi-bolt',
          command: () => {
            this.getSitePowerAlarms();
          },
        },
        {
          label: "Gen Alarms",
          icon: 'pi pi-exclamation-circle',
          command: () => {
            this.getSiteGenAlarms();
          },
        },
        {
          label: "HT Alarms",
          icon: 'pi pi-power-off',
          command: () => {
            this.getSiteHTAlarms();
          },
        },
        {
          label: "Down Alarms",
          icon: 'pi pi-power-off',
          command: () => {
            this.getSiteDownAlarmsGroupedByWeek();
          },
        },
      ],
    };
  },
  props: ["site_code"],
  emits: ["displayNoneSpinner"],
  name: "Details",
  components: {
    siteNURTable,
    SiteAlarmsTable,
    siteBatteriesHealth,
    SiteDownAlarmsGroupedByWeek,
    EquipmentDetails,
    TransmissionDetails,
    SearchTxIssuesForm,
  },
  watch: {
    site_code() {
      this.getSiteDetails();
    },
  },

  computed: {
    countCascades() {
      if (this.cascades == null || this.cascades.length == 0) {
        return null;
      } else {
        return this.cascades.length;
      }
    },
    countIndirectCascades() {
      if (this.indirectCascades == null || this.indirectCascades.length == 0) {
        return null;
      } else {
        return this.indirectCascades.length;
      }
    },
  },
  mounted() {
    this.getSiteDetails();
  },
  methods: {
    getSiteNUR() {
      this.$store.dispatch("displaySpinnerPage", false);
      let data = {
        site_code: this.site_code,
      };
      NUR.getSiteNUR(data)
        .then((response) => {
          console.log(response);

          this.NUR2G = response.data.NUR2G;
          this.NUR3G = response.data.NUR3G;
          this.NUR4G = response.data.NUR4G;

          if (
            this.NUR2G.length == 0 &&
            this.NUR3G.length == 0 &&
            this.NUR4G.length == 0
          ) {
            this.$confirm.require({
              message: "This site did not make NUR",
              header: "Confirmation",
              icon: "pi pi-exclamation-triangle",
              position: "top",
              rejectIcon: "",
            });
          } else {
            this.$dialog.open(siteNURTable, {
              props: {
                header: this.siteName,
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
                NUR3G: this.NUR3G,
                NUR2G: this.NUR2G,
                NUR4G: this.NUR4G,
                site_code: this.siteCode,
                site_name: this.siteName,
              },
            });
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.$store.dispatch("displaySpinnerPage", true);
        });
    },
    getSiteDetails() {
      this.$store.dispatch("displaySpinnerPage", false);

      Sites.getSiteDetails(this.site_code)
        .then((response) => {
          console.log(response);
          this.siteName = response.data.site.site_name;
          this.siteCode = response.data.site.site_code;
          this.type = response.data.site.type;
          this.severity = response.data.site.severity;
          this.sharing = response.data.site.sharing;
          this.status = response.data.site.status;
          this.host = response.data.site.host;
          this.gest = response.data.site.gest;
          this.cell2G = response.data.site["2G_cells"];
          this.cell3G = response.data.site["3G_cells"];
          this.cell4G = response.data.site["4G_cells"];
          this.BSC = response.data.site.BSC;
          this.RNC = response.data.site.RNC;
          this.office = response.data.site.office;
          this.operationZone = response.data.site.oz;
          this.category = response.data.site.category;
          this.cascades = response.data.cascades;
          this.indirectCascades = response.data.indirectCascades;
          this.nodalCode = response.data.site.nodal_code;
          this.nodalName = response.data.site.nodal_name
          this.data = {
            site_code: this.siteCode,
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.$store.dispatch("displaySpinnerPage", true);
        });
    },
    openDialog() {
      this.$dialog.open(SiteAlarmsTable, {
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

        onClose: (options) => {
          this.$store.dispatch("siteAlarms", null);
        },
      });


    },
    onRowSelect() {
      this.$router.push(`/sites/details/${this.selectedSite.cascade_code}`);
    },
    gotToSiteModifications() {
      this.$router.push(
        `/modifications/sitemodifications/${this.siteCode}/${this.siteName}`
      );
    },
    goToSiteUpdate() {
      this.$router.push(`/sites/update/${this.siteCode}`);
    },

    goToUpdateCascadesPage() {
      this.$router.push(`/sites/cascades/update/${this.siteCode}`);
    },
    getSitePowerAlarms() {
      this.$store.dispatch("displaySpinnerPage", false);
      Energy.getSitePowerAlarms(this.data).then((response) => {

        if (response.data.alarms.length > 0) {
          this.$store.dispatch("siteAlarms", { "alarmName": "power", "alarmData": response.data.alarms });
          this.openDialog();

        }
        else {
          this.$toast.add({ severity: 'error', summary: 'Opps.....', detail: `No Alarms`, life: 3000 });

        }


        console.log(response)
      }).catch((error) => {

        if (error.response.status == 422) {
          if (error.response.data.errors.site_code) {
            let site_codeErrors = error.response.data.errors.site_code;
            site_codeErrors.forEach(element => {
              this.$toast.add({ severity: 'error', summary: 'Invalid Code', detail: `${element}`, life: 3000 });

            });
          }
        }

      }).finally(() => {
        this.$store.dispatch("displaySpinnerPage", true);

      })

    },
    getSiteHTAlarms() {
      this.$store.dispatch("displaySpinnerPage", false);
      Energy.getSiteHighTempAlarms(this.data).then((response) => {
        if (response.data.alarms.length > 0) {
          this.$store.dispatch("siteAlarms", { "alarmName": "highTemp", "alarmData": response.data.alarms });
          this.openDialog();

        }
        else {
          this.$toast.add({ severity: 'error', summary: 'Opps.....', detail: `No Alarms`, life: 3000 });

        }



      }).catch((error) => {
        if (error.response.status == 422) {
          if (error.response.data.errors.site_code) {
            let site_codeErrors = error.response.data.errors.site_code;
            site_codeErrors.forEach(element => {
              this.$toast.add({ severity: 'error', summary: 'Invalid Code', detail: `${element}`, life: 3000 });

            });
          }
        }

      }).finally(() => {
        this.$store.dispatch("displaySpinnerPage", true);

      })


    },
    getSiteGenAlarms() {

      Energy.getSiteGenAlarms(this.data).then((response) => {
        if (response.data.alarms.length > 0) {
          this.$store.dispatch("siteAlarms", { "alarmName": "gen", "alarmData": response.data.alarms });
          this.openDialog();
        }
        else {
          this.$toast.add({ severity: 'error', summary: 'No Data Found', detail: `No Alarms`, life: 3000 });

        }




      }).catch((error) => {
        if (error.response.status == 422) {
          if (error.response.data.errors.site_code) {
            let site_codeErrors = error.response.data.errors.site_code;
            site_codeErrors.forEach(element => {
              this.$toast.add({ severity: 'error', summary: 'Invalid Code', detail: `${element}`, life: 3000 });

            });
          }
        }
      })

    },
    getSiteDownAlarmsGroupedByWeek() {
      this.$store.dispatch("displaySpinnerPage", false);
      Energy.getSiteDownAlarmsGroupedByWeek(this.data).then((response) => {
        if (response.data.statestics.alarms == "exist") {
          this.$dialog.open(SiteDownAlarmsGroupedByWeek, {
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
              downAlarms: response.data.statestics,
              site_code: this.data.site_code
            }


          });


        }
        else {
          this.$toast.add({ severity: 'error', summary: 'No Data Found', detail: `No Alarms`, life: 3000 });

        }




      }).catch((error) => {
        if (error.response.status == 422) {
          if (error.response.data.errors.site_code) {
            let site_codeErrors = error.response.data.errors.site_code;
            site_codeErrors.forEach(element => {
              this.$toast.add({ severity: 'error', summary: 'Invalid Code', detail: `${element}`, life: 3000 });

            });
          }
        }
      }).finally(() => {
        this.$store.dispatch("displaySpinnerPage", true);

      })


    },
    getSiteBatteriesHealth() {
    
      Energy.getSiteBatteriesHealth(this.data).then((response) => {

        if (response.data.statestics.powerAlarms == "exist") {
          this.$dialog.open(siteBatteriesHealth, {
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
              powerAlarms: response.data.statestics
            }


          });




        }
        else {
          this.$toast.add({ severity: 'error', summary: 'Opps.....', detail: `No power Alarms recorded/Dead Batteries`, life: 3000 });

        }

      }).catch((error) => {

      })

    },

    getBatteriesData() {
      Sites.getBatteriesDetails(this.data).then((response) => {

        let batteriesData = [];
        if (response.data.data == "found data") {
          let battery = {
            "Battery Brand": response.data.battery_brand
          }
          batteriesData.push(battery);
          battery = {
            "Battery Volt": response.data.battery_volt
          };
          batteriesData.push(battery);
          battery = {
            "Battery Amp Hr": response.data.battery_amp_hr
          };
          batteriesData.push(battery);
          battery = {
            "No. Strings": response.data.no_strings
          };
          batteriesData.push(battery);
          battery = {
            "No. Batteries": response.data.no_batteries
          };
          batteriesData.push(battery);
          battery = {
            "Batteries Status": response.data.batteries_status
          };
          batteriesData.push(battery);

          this.$dialog.open(EquipmentDetails, {
            props: {
              style: {
                width: "90vw",
              },

              modal: true,
            },

            data: {
              statestics: batteriesData,
              id: response.data.id,
              topic: "Batteries",
              rowData:response.data

            },
          });



        }
        else {
          this.$toast.add({
            severity: "error",
            summary: "Error Message",
            detail: "No Data Found",
            life: 3000,
          });
        }
      }).catch((error) => {

      })
    },
    getSiteData() {
      Sites.getSiteDeepDetails(this.data).then((response) => {

        let siteData = [];
        if (response.data.data == "found data") {
          let site = {
            "On Air Date": response.data.on_air_date
          }
          siteData.push(site);
          site = {
            "Topology": response.data.topology
          };
          siteData.push(site);
          site = {
            "NTRA Cluster": response.data.ntra_cluster
          };
          siteData.push(site);
          site = {
            "Care CEO": response.data.care_ceo
          };
          siteData.push(site);
          site = {
            "Axis": response.data.axsees
          };
          siteData.push(site);
          site = {
            "Serve Compound": response.data.serve_compound
          };
          siteData.push(site);
          site = {
            "No. LDN Accounts": response.data.no_ldn_accounts
          };
          siteData.push(site);
          site = {
            "No. Tp Accounts": response.data.no_tp_accounts
          };
          siteData.push(site);
          site = {
            "AC1 Type": response.data.ac1_type
          };
          siteData.push(site);
          site = {
            "AC1 HP": response.data.ac1_hp
          };
          siteData.push(site);
          site = {
            "AC2 Type": response.data.ac2_type
          };
          siteData.push(site);
          site = {
            "AC2 HP": response.data.ac2_hp
          };
          siteData.push(site);
          site = {
            "Network Type": response.data.network_type
          };
          siteData.push(site);
          site = {
            "Last PM Date": response.data.last_pm_date
          };
          siteData.push(site);
          site = {
            "Access Permission": response.data.need_access_permission
          };
          siteData.push(site);
          site = {
            "Permission Type": response.data.permission_type
          };
          siteData.push(site);

          this.$dialog.open(EquipmentDetails, {
            props: {
              style: {
                width: "90vw",
              },

              modal: true,
            },

            data: {
              statestics: siteData,
              id: response.data.id,
              topic: "Site Data",
              rowData:response.data

            },
          });



        }
        else {
          this.$toast.add({
            severity: "error",
            summary: "Error Message",
            detail: "No Data Found",
            life: 3000,
          });
        }
      }).catch((error) => {

      })

    },
    getRectifierData() {
      Sites.getRectifierDetails(this.data).then((response) => {

        let rectifierData = [];
        if (response.data.data == "found data") {
          let rectifier = {
            "Rectifier Brand": response.data.rec_brand
          }
          rectifierData.push(rectifier);
          rectifier = {
            "Module Capacity": response.data.module_capacity
          };
          rectifierData.push(rectifier);
          rectifier = {
            "No. Module": response.data.no_module
          };
          rectifierData.push(rectifier);
          rectifier = {
            "PLVD Value": response.data.pld_value
          };
          rectifierData.push(rectifier);
          rectifier = {
            "Net ECO": response.data.net_eco
          };
          rectifierData.push(rectifier);
          rectifier = {
            "Net ECO Activation": response.data.net_eco_activation
          };
          rectifierData.push(rectifier);

          this.$dialog.open(EquipmentDetails, {
            props: {
              style: {
                width: "90vw",
              },

              modal: true,
            },

            data: {
              statestics: rectifierData,
              id: response.data.id,
              topic: "Rectifier Data",
              rowData:response.data

            },
          });



        }
        else {
          this.$toast.add({
            severity: "error",
            summary: "Error Message",
            detail: "No Data Found",
            life: 3000,
          });
        }
      }).catch((error) => {

      })

    },
    getMWData() {
      Sites.getSiteMWDetails(this.data).then((response) => {

        let MWData = [];
        if (response.data.data == "found data") {
          let MW = {
            "No MW": response.data.no_mw
          };
          MWData.push(MW);
          MW = {
            "MW Type": response.data.mw_type
          };
          MWData.push(MW);
          MW = {
            "Eband": response.data.eband
          };

          MWData.push(MW);
          this.$dialog.open(EquipmentDetails, {
            props: {
              style: {
                width: "90vw",
              },

              modal: true,
            },

            data: {
              statestics: MWData,
              id: response.data.id,
              topic: "MW Data",
              rowData:response.data,

            },
          });



        }
        else {
          this.$toast.add({
            severity: "error",
            summary: "Error Message",
            detail: "No Data Found",
            life: 3000,
          });
        }
      }).catch((error) => {

      })


    },
    getBTSData() {
      Sites.getSiteBTSDetails(this.data).then((response) => {

        let BTSData = [];
        if (response.data.data == "found data") {
          let BTS = {
            "No BTS": response.data.no_bts
          };
          BTSData.push(BTS);
          BTS = {
            "MRFU 2G": response.data.mrfu_2G
          };
          BTSData.push(BTS);
          BTS = {
            "MRFU 3G": response.data.mrfu_3G
          };
          BTSData.push(BTS);
          BTS = {
            "MRFU 4G": response.data.mrfu_4G
          };
          BTSData.push(BTS);
          BTS = {
            "TDD": response.data.tdd
          };

          BTSData.push(BTS);
          this.$dialog.open(EquipmentDetails, {
            props: {
              style: {
                width: "90vw",
              },

              modal: true,
            },

            data: {
              statestics: BTSData,
              id: response.data.id,
              topic: "BTS Data",
              rowData:response.data,

            },
          });



        }
        else {
          this.$toast.add({
            severity: "error",
            summary: "Error Message",
            detail: "No Data Found",
            life: 3000,
          });
        }
      }).catch((error) => {

      })



    },
    getPowerData() {
      Sites.getSitePowerDetails(this.data).then((response) => {

        let powerData = [];
        if (response.data.data == "found data") {
          let power = {
            "Power Source": response.data.power_source
          };
          powerData.push(power);
          power = {
            "PM Type": response.data.power_meter_type
          };
          powerData.push(power);
          power = {
            "Power Cable Cross Sec": response.data.power_cable_cross_sec
          };
          powerData.push(power);
          power = {
            "Power Cable Length": response.data.power_cable_length
          };
          powerData.push(power);
          power = {
            "Gen Capacity": response.data.gen_capacity
          };

          powerData.push(power);
          power = {
            "Overhaul Power Consump": response.data.overhaul_power_consumption
          };

          powerData.push(power);
          this.$dialog.open(EquipmentDetails, {
            props: {
              style: {
                width: "90vw",
              },

              modal: true,
            },

            data: {
              statestics: powerData,
              id: response.data.id,
              topic: "Power Data",
              rowData:response.data

            },
          });



        }
        else {
          this.$toast.add({
            severity: "error",
            summary: "Error Message",
            detail: "No Data Found",
            life: 3000,
          });
        }
      }).catch((error) => {

      })


    },
    getSiteWANSData(){
      this.$router.push({path:`/siteTxIssues/${this.site_code}`});
     

    },
    SearchTxIssues()
    {
      this.$dialog.open(SearchTxIssuesForm, {
            props: {
              style: {
                width: "90vw",
              },

              modal: true,
            },

           
          });

    }


  },
};
</script>

<style lang="scss" scoped>
::v-deep.myTabView {
  .p-tabview-panel {
    color: #79589f;


  }

  .p-badge {
    background-color: #79589f;
    margin-left: 5px;


    .header {
      color: #79589f;

    }
  }
}

Button {
  min-width: 150px;
  display: block;
  margin: auto;
}

.site-details,
.buttons {
  border: 1px solid #79589f;
  border-radius: 5px;
  padding: 3rem 0;
}



.display-none {
  display: none;
}

::v-deep.speed-dial {


  .p-speeddial-direction-right {

    .p-speeddial-button {

      bottom: 5px;
      width: 55px;
      height: 55px;
      left: 30px;
    }

  }
}

.input-group {

  margin-bottom: 1rem;
}

@media screen and (min-width:320px) and (max-width: 480px) {

  /* smartphones, iPhone, portrait 480x320 phones */
  .input-group {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    input,span{
      font-size: 0.7rem;
    }
    span{
      font-weight: 500;
    }



  }
  Button {
    font-size: 0.7rem;
  }
  .header {
    font-size: 0.7rem;
    min-width: 80px;
    

  }
}

@media screen and (min-width:481px) and (max-width: 640px) {

  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
  .input-group {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    input,span{
      font-size: 0.7rem;
    }
    span{
      font-weight: 500;
    }



  }
  Button {
    font-size: 0.7rem;
  }
  .header {
    font-size: 0.7rem;
    min-width: 80px;
    

  }

}

@media screen and (min-width:641px) and (max-width: 960) {

  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  .input-group {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    input,span{
      font-size: 0.7rem;
    }
    span{
      font-weight: 500;
    }



  }
  Button {
    font-size: 0.7rem;
  }
  .header {
    font-size: 0.7rem;
    min-width: 80px;
    

  }
}


@media screen and (min-width:961px)and (max-width: 1024px) {
  .input-group {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    input,span{
      font-size:0.7rem;
    }
    span{
      font-weight: 500;
    }



  }
  Button {
    font-size:0.7rem;
  }
  .header {
    font-size:0.7rem;
    min-width: 80px;
    

  }
  /* tablet, landscape iPad, lo-res laptops ands desktops */

}

@media (min-width:1025px) {
  /* big landscape tablets, laptops, and desktops */
  .input-group {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    input,span{
      font-size: 0.9rem;
    }
    span{
      font-weight: 500;
    }



  }
  Button {
    font-size: 1rem;
  }
  .header {
    font-size: 0.9rem;
    min-width: 80px;
    

  }

}
</style>