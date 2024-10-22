<template>

  <div class=" w-full flex justify-center py-5">


    <Card class=" max-w-4xl">
      <template #content>
        <Tabs value="0" >
          <TabList>
            <Tab value="0"><span class="  text-font-main-color font-Signika font-extrabold uppercase">{{ siteName }}</span>
            </Tab>
            <Tab value="1"> <span class="  text-font-main-color font-Signika font-extrabold uppercase">Cascades</span>
              <Badge :value="countCascades" v-if="countCascades"></Badge>
            </Tab>
            <Tab value="2"><span class="  text-font-main-color font-Signika font-extrabold uppercase">Indirect Cascades</span>
              <template v-if="countIndirectCascades">
                <Badge :value="countIndirectCascades"></Badge>
              </template>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
          

              <div class="grid grid-cols-4 px-4 py-4 gap-4 rounded-md border border-spacing-2 border-font-main-color">
                <div class="col-span-2 md:col-span-1 ">
                  <div class="flex-auto">
                    <span class="block  font-Signika text-font-main-color" id="siteCode">Site code</span>
                    <InputText type="text" class=" text-sm" disabled fluid v-model="siteCode" aria-describedby="siteCode" />
                  </div>
                </div>
                <div class="col-span-2 md:col-span-1 ">
                  <div class="flex-auto" id="siteCode">
                    <span class="block  font-Signika text-font-main-color" id="siteName">Site Name</span>
                    <InputText type="text" class=" text-sm" disabled fluid v-model="siteName" aria-describedby="siteName" />
                  </div>
                </div>
                <div class="col-span-2 md:col-span-1 ">
                  <div class="flex-auto">
                    <span class="block font-Signika text-font-main-color" id="BSC">BSC</span>
                    <InputText type="text" class=" text-sm" disabled fluid v-model="BSC" aria-describedby="BSC" />
                  </div>
                </div>
                <div class="col-span-2 md:col-span-1 ">
                  <div class="flex-auto">
                    <span class="block  font-Signika text-font-main-color" id="RNC">RNC</span>
                    <InputText type="text" class=" text-sm" disabled fluid v-model="RNC" aria-describedby="RNC" />
                  </div>
                </div>

                <div class="col-span-2 md:col-span-1 ">
                  <div class="flex-auto">
                    <span class="block  font-Signika text-font-main-color" id="oz">OZ</span>
                    <InputText type="text" class=" text-sm" disabled fluid v-model="operationZone" aria-describedby="oz" />
                  </div>
                </div>


                <div class="col-span-2 md:col-span-1 ">
                  <div class="flex-auto">
                    <span class="block  font-Signika text-font-main-color" id="severity">Severity</span>
                    <InputText type="text" class=" text-sm" disabled fluid v-model="severity" aria-describedby="severity" />
                  </div>
                </div>
                <div class="col-span-2 md:col-span-1 ">
                  <div class="flex-auto">
                    <span class="block  font-Signika text-font-main-color" id="office">Office</span>
                    <InputText type="text" class=" text-sm" disabled fluid v-model="office" aria-describedby="office" />
                  </div>
                </div>

                <div class="col-span-2 md:col-span-1 ">
                  <div class="flex-auto">
                    <span class="block  font-Signika text-font-main-color" id="nodalCode">Nodal Code</span>
                    <InputText type="text" disabled fluid v-model="nodalCode" aria-describedby="nodalCode" />
                  </div>
                </div>
                <div class="col-span-2 md:col-span-1 ">
                  <div class="flex-auto">
                    <span class="block  font-Signika text-font-main-color" id="nodal">Nodal Name</span>
                    <InputText type="text" class=" text-sm" disabled fluid v-model="nodalName" aria-describedby="nodal" />
                  </div>
                </div>


                <div class="col-span-2 md:col-span-1  ">
                  <div class="flex-auto">
                    <span class="block  font-Signika text-font-main-color" id="2g">2G</span>
                    <InputText type="text" class=" text-sm" disabled fluid aria-describedby="2g" v-model="cell2G" />
                  </div>
                </div>
                <div class="col-span-2 md:col-span-1 ">
                  <div class="flex-auto">
                    <span class="block  font-Signika text-font-main-color" id="3g">3G</span>
                    <InputText type="text" class=" text-sm" disabled fluid v-model="cell3G" aria-describedby="3g" />
                  </div>
                </div>
                <div class="col-span-2 md:col-span-1 ">
                  <div class="flex-auto">
                    <span class="block  font-Signika text-font-main-color" id="4g">4G</span>
                    <InputText type="text" disabled fluid v-model="cell4G" aria-describedby="4g" />
                  </div>
                </div>
                <div class="col-span-2 md:col-span-1 ">
                  <div class="flex-auto">
                    <span class="block  font-Signika text-font-main-color" id="category">Category</span>
                    <InputText type="text" class=" text-sm" disabled fluid v-model="category" aria-describedby="category" />
                  </div>
                </div>
                <div class="col-span-2 md:col-span-1 ">
                  <div class="flex-auto">
                    <span class="block  font-Signika text-font-main-color" id="sharing">Sharing</span>
                    <InputText type="text" class=" text-sm" disabled fluid v-model="sharing" aria-describedby="sharing" />
                  </div>
                </div>
                <div class="col-span-2 md:col-span-1 ">
                  <div class="flex-auto">
                    <span class="block  font-Signika text-font-main-color" id="host">Host</span>
                    <InputText type="text" class=" text-sm" disabled fluid v-model="host" aria-describedby="host" />
                  </div>
                </div>
                <div class="col-span-2 md:col-span-1 ">
                  <div class="flex-auto">
                    <span class="block  font-Signika text-font-main-color" id="guest">Gest</span>
                    <InputText type="text" class=" text-sm" disabled fluid v-model="gest" aria-describedby="guest" />
                  </div>
                </div>
                <div class="col-span-2 md:col-span-1 ">
                  <div class="flex-auto">
                    <span class="block  font-Signika text-font-main-color" id="status">Status</span>
                    <InputText type="text" class=" text-sm" disabled fluid v-model="status" aria-describedby="status" />
                  </div>
                </div>

                <div class="col-span-2 md:col-span-1 ">
                  <div class="flex-auto">
                    <span class="block  font-Signika text-font-main-color" id="type">Type</span>
                    <InputText type="text" class=" text-sm" disabled fluid v-model="type" aria-describedby="type" />
                  </div>
                </div>





              </div>

              <div class=" w-full border border-spacing-2 border-font-main-color my-5"></div>


              <div class="grid grid-cols-6 gap-4 px-4 py-4  rounded-md border border-spacing-2 border-font-main-color">
                <div class="col-span-2 md:col-span-1  my-3">
                  <Button label="Modifications" @click="gotToSiteModifications" severity="secondary" raised
                    class="block w-full" />
                </div>
                <div class="col-span-2 md:col-span-1 my-3">
                  <Button label="NUR" @click="getSiteNUR" severity="success" raised class=" block w-full" />
                </div>
                <div class="col-span-2 md:col-span-1 my-3">
                  <Button label="Batteries Health" @click="getSiteBatteriesHealth" severity="info" raised
                    class=" text-xs block w-full" />
                </div>
                <div class="col-span-2 md:col-span-1 my-3">
                  <Button label="Update" @click="goToSiteUpdate" severity="warn" raised class=" block w-full" />
                </div>
                <div class="col-span-2 md:col-span-1 my-3">
                  <Button label="Batteries Data" @click="getBatteriesData" severity="help" raised
                    class=" text-xs block w-full" />
                </div>
                <div class="col-span-2 md:col-span-1 my-3">
                  <Button label="Rectifier Data" @click="getRectifierData" severity="danger" raised
                    class=" text-xs block w-full" />
                </div>
                <div class="col-span-2 md:col-span-1 my-3">
                  <Button label="Site Data" @click="getSiteData" severity="contrast" raised class=" block w-full" />
                </div>
                <div class="col-span-2 md:col-span-1 my-3">
                  <Button label="MW Data" @click="getMWData" severity="danger" raised class=" block w-full" />
                </div>
                <div class="col-span-2 md:col-span-1 my-3">
                  <Button label="BTS Data" @click="getBTSData" severity="info" raised class=" block w-full" />
                </div>
                <div class="col-span-2 md:col-span-1 my-3">
                  <Button label="Power Data" @click="getPowerData" severity="contrast" raised class=" block w-full" />
                </div>
                <div class="col-span-2 md:col-span-1 my-3">
                  <Button label="Tx.issues" @click="getSiteWANSData" severity="warn" raised class=" block w-full" />
                </div>
                <div class="col-span-2 md:col-span-1 my-3">
                  <Button icon="pi pi-search" label="Tx issues" severity="success" raised @click="SearchTxIssues()"
                    v-if="$can('read_TX_data')" />
                </div>

              </div>


              <div class="my-3 ">
                <div class="speed-dial">
                  <SpeedDial :model="items" direction="right" :tooltipOptions="{ position: 'right' }"
                    :transitionDelay="80" showIcon="pi pi-bell" hideIcon="pi pi-times" buttonClass="p-button-outlined">

                  </SpeedDial>
                </div>
              </div>




            </TabPanel>
            <TabPanel value="1">
            
              <template v-if="countCascades">
                <DataTable :value="cascades" scrollable class="text-xs" :paginator="true"
                  :rows="5" stripedRows v-model:selection="selectedSite" selectionMode="single" dataKey="cascade_code"
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

              <Button label="Update" @click="goToUpdateCascadesPage" severity="success" raised  />
            </TabPanel>
            <TabPanel value="2">
           
              <template v-if="countIndirectCascades">
                <DataTable :value="indirectCascades" scrollable class="text-sm" :paginator="true"
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

          </TabPanels>

        </Tabs>
      </template>
    </Card>


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
import SiteBatteriesTable from "../../helpers/Sites/SiteBatteriesTable.vue";
import BatteriesUpdate from "../../helpers/Sites/BatteriesUpdate.vue";
import Card from "primevue/card";
import Tabs from "primevue/tabs";
import TabPanels from "primevue/tabpanels";

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
      id: null,
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
      // dialogVisible: false,
      // dialogMessage: "",
      insertionDataField: '',
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
    SiteBatteriesTable
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
           this.$toast.add({ severity: 'success', summary: 'Success Message', detail: "This site didn't make NUR", life: 3000 });
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
          this.id = response.data.site.id;
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
      Sites.getBatteriesDetails(this.id).then((response) => {

        if (response.data.success == true) {
          this.$dialog.open(SiteBatteriesTable, {
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
              batteries: response.data.batteries,
              site_code: this.site_code
            }


          });

        }
        else {
          this.$confirm.require({
            group:"yesNo",
              message: "There is No Batteries data, insert new data?",
              header: "Confirmation",
              icon: "pi pi-exclamation-triangle",
              rejectProps: {

                icon: 'pi pi-times',
               label:'No',
                size: 'small',
                severity: 'danger',
              },
              acceptProps: {
                severity: 'success',
                icon: 'pi pi-check',
                size: 'small',
                label:'Yes'
              },
              accept: () => {
                this.$confirm.close();

                this.insertNewBatteiesData()
              },
              reject: () => {
                this.$confirm.close();
               
              },
             
            });

        }


      }).catch((error) => {

      })
    },
    getSiteData() {
      let siteData = [];

      let site = {
        "On Air Date": null
      }
      siteData.push(site);
      site = {
        "Topology": null
      };
      siteData.push(site);
      site = {
        "NTRA Cluster": null
      };
      siteData.push(site);
      site = {
        "Care CEO": null
      };
      siteData.push(site);
      site = {
        "Axis": null
      };
      siteData.push(site);
      site = {
        "Serve Compound": null
      };
      siteData.push(site);
      site = {
        "No. LDN Accounts": null
      };
      siteData.push(site);
      site = {
        "No. Tp Accounts": null
      };
      siteData.push(site);
      site = {
        "AC1 Type": null
      };
      siteData.push(site);
      site = {
        "AC1 HP": null
      };
      siteData.push(site);
      site = {
        "AC2 Type": null
      };
      siteData.push(site);
      site = {
        "AC2 HP": null
      };
      siteData.push(site);
      site = {
        "Network Type": null
      };
      siteData.push(site);
      site = {
        "Last PM Date": null
      };
      siteData.push(site);
      site = {
        "Access Permission": null
      };
      siteData.push(site);
      site = {
        "Permission Type": null
      };
      siteData.push(site);
      Sites.getSiteDeepDetails(this.data).then((response) => {


        if (response.data.data == "found data") {
          let siteData = [];
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
              rowData: response.data,
              action: 'Update',

            },
          });



        }
        else {
          this.$dialog.open(EquipmentDetails, {
            props: {
              style: {
                width: "90vw",
              },

              modal: true,
            },

            data: {
              statestics: siteData,
              id: null,
              topic: "Site Data",
              action: 'Insert',
              site_code: this.siteCode,
              rowData: null,
            },
          });



        }
      })

    },
    getRectifierData() {

      let rectifierData = []; ////////array of input field names
      let rectifier = {
        "Rectifier Brand": null
      }
      rectifierData.push(rectifier);
      rectifier = {
        "Module Capacity": null
      };
      rectifierData.push(rectifier);
      rectifier = {
        "No. Module": null
      };
      rectifierData.push(rectifier);
      rectifier = {
        "PLVD Value": null
      };
      rectifierData.push(rectifier);
      rectifier = {
        "Net ECO": null
      };
      rectifierData.push(rectifier);
      rectifier = {
        "Net ECO Activation": null
      };
      rectifierData.push(rectifier);
      Sites.getRectifierDetails(this.data).then((response) => {

        if (response.data.data == "found data") {
          let rectifierData = [];
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
                width: "75vw",
              },

              modal: true,
            },

            data: {
              statestics: rectifierData,
              id: response.data.id,
              topic: "Rectifier Data",
              rowData: response.data,
              action: "Update",
              site_code: this.siteCode

            },
          });


        }
        else {
          this.$dialog.open(EquipmentDetails, {
            props: {
              style: {
                width: "75vw",
              },

              modal: true,
            },

            data: {
              statestics: rectifierData,
              id: null,
              topic: "Rectifier Data",
              rowData: null,
              action: 'Insert',
              site_code: this.siteCode


            },
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
              rowData: response.data,

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
              rowData: response.data,

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
              rowData: response.data

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
    getSiteWANSData() {
      this.$router.push({ path: `/siteTxIssues/${this.site_code}` });


    },
    SearchTxIssues() {
      this.$dialog.open(SearchTxIssuesForm, {
        props: {
          style: {
            width: "90vw",
          },

          modal: true,
        },


      });

    },
  
    insertNewBatteiesData() {
    


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
          site_code: this.siteCode
        }


      });







    },




  },
};
</script>

<style lang="scss" scoped>
.display-none {
  display: none;
}
</style>