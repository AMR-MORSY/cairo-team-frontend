<template>
  <div class="d-flex justify-content-center align-items-center">
    <p>
      <span style="color: Black; font-weight: 500">NUR: </span
      ><span style="color: red; font-weight: 500">{{ NUR }}</span>
    </p>
   
  </div>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-4">
        <Chart
          type="doughnut"
          :data="statestics"
          :options="lightOptions"
          :plugins="plugins"
        />
      </div>
      <div class="col"></div>
    </div>
  </div>
  <div class="table-container">
  
    <div style="display: flex; align-items: center; justify-content: space-between">
      <h3>Sites</h3>
      <div  style=" display: flex; align-items: center; justify-content: flex-end">
        <img src="../../logos/week-icon.aba4072e.svg"   @click="getCairoGenYearlyNUR" style="cursor: pointer;width: 15%; margin-bottom: 20px;" 
        v-tooltip.right="'Weekly Analysis'" />

      </div>
      
    </div>
  
    <DataTable
      :value="sites"
      responsiveLayout="scroll"
      class="p-datatable-sm"
      stripedRows
      :rows="5"
      :paginator="true"
      v-model:selection="selectedSite"
      selectionMode="single"
      dataKey="site_code"
      @row-select="onRowSelect"
    >
      <Column selectionMode="single"></Column>
      <Column field="site_name" header="Name"></Column>
      <Column field="site_code" header="Code"></Column>
      <Column field="NUR_2G_sum" header="NUR-2G" sortable></Column>
      <Column field="NUR_3G_sum" header="NUR-3G" sortable></Column>
      <Column field="NUR_4G_sum" header="NUR-4G" sortable></Column>
      <Column field="NUR_C" header="NUR-C" sortable></Column>
      <Column field="oz" header="oz" sortable></Column>
    </DataTable>

    <button class="btn btn-danger" @click="downloadGenTickets">Download</button>
  </div>
</template>

<script>
import NURTickets from "./NURTickets.vue";
import ChartDataLabels from "chartjs-plugin-datalabels";
import NUR from "../../../apis/NUR";
import CairoGenYearlyAnalysis from "./CairoGenYearlyAnalysis.vue";
import exportFromJSON from "export-from-json";


export default {
  data() {
    return {
      selectedSite: null,
      NUR: null,
      statestics: null,
      sites: [],
      tickets: [],
      lightOptions: {
        plugins: {
          legend: {
            labels: {
              color: "red",
            },
          },
          datalabels: {
            anchor: "center",
            color: "red",
          },
        },
      },
      plugins: [ChartDataLabels],
    };
  },
  name: "CairoGen",
  components: {
    NURTickets,
    CairoGenYearlyAnalysis,
  },
   computed: {
    token() {
      return this.$store.getters.token;
    },
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
 
  inject: ["dialogRef"],
  mounted() {
    this.mountChartData();
    this.mountTableData();
  },
  methods: {
    mountChartData() {
      let statestics = {
        ET: this.dialogRef.data.statestics.NUR_ET_combined,
        VF: this.dialogRef.data.statestics.NUR_VF_combined,
        OEG: this.dialogRef.data.statestics.NUR_Org_combined,
        Rented: this.dialogRef.data.statestics.NUR_Rented_combined,
        WE:this.dialogRef.data.statestics.NUR_WE_combined
      };
      this.statestics = {
        labels: Object.keys(statestics),
        datasets: [
          {
            data: Object.values(statestics),

            backgroundColor: [ "green", "red", "orange",'blue',"purple"],
          },
        ],
      };
      this.NUR = this.dialogRef.data.statestics.NUR_combined;
    },
    mountTableData() {
      this.sites = this.dialogRef.data.sites;
      this.tickets = this.dialogRef.data.tickets;
    },

    onRowSelect() {
      let siteCode = this.selectedSite.site_code;
      console.log(this.selectedSite.site_code);
      let tickets_2G = this.tickets.filter((ticket) => {
        return (
          ticket.problem_site_code == siteCode && ticket.technology == "2G"
        );
      });
      let tickets_3G = this.tickets.filter((ticket) => {
        return (
          ticket.problem_site_code == siteCode && ticket.technology == "3G"
        );
      });
      let tickets_4G = this.tickets.filter((ticket) => {
        return (
          ticket.problem_site_code == siteCode && ticket.technology == "4G"
        );
      });

      this.$dialog.open(NURTickets, {
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
          NUR_2G_tickets: tickets_2G,
          NUR_3G_tickets: tickets_3G,
          NUR_4G_tickets: tickets_4G,
        },
      });
    },
    downloadGenTickets() {
      const data = this.tickets;
      const fileName = "TxTickets";
      const exportType = exportFromJSON.types.xls;

      if (data) exportFromJSON({ data, fileName, exportType });
    },
    getCairoGenYearlyNUR() {
      this.$store.dispatch("displaySpinnerPage", false);
      NUR.cairoGenYearlyAnalysis(this.tickets[0].year)
     
        .then((response) => {
          console.log(response);
     
          let data = Object.values(response.data.NUR_C_yearly);
          let keys = Object.keys(response.data.NUR_C_yearly);
          let NUR_combined = [];
          let NUR_ET = [];
          let NUR_OEG = [];
          let NUR_VF = [];
          let NUR_Rented = [];
          let NUR_WE=[];
          for (var i = 0; i < keys.length; i++) {
            NUR_combined.push(data[i].NUR_combined);
            NUR_Rented.push(data[i].NUR_Rented_combined);
            NUR_VF.push(data[i].NUR_VF_combined);
            NUR_OEG.push(data[i].NUR_Org_combined);
            NUR_ET.push(data[i].NUR_ET_combined);
            NUR_WE.push(data[i].NUR_WE_combined)
          }
         
          this.$dialog.open(CairoGenYearlyAnalysis, {
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
              NUR_combined: NUR_combined,
              NUR_Rented: NUR_Rented,
              NUR_VF: NUR_VF,
              NUR_OEG: NUR_OEG,
              NUR_ET: NUR_ET,
              NUR_WE:NUR_WE,
              labels:keys
            },
          });

       
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.$store.dispatch("displaySpinnerPage", true);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>