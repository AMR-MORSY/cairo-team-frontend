<template>
  <div class="container mt-5">
    <Card>
         <template #title>
                   <div class="d-flex justify-content-center align-items-center">
          <p style="text-align: center">Cairo South</p>
        </div>
     
      </template>
      <template #content>
         <div class="row mt-5">
        <!-- <div class="col-12 col-md-6 mt-2">
          <TopSites :zoneAlarms="{
                alarms: cairoSouthHieghestPowerAlarmDur,
                alarmsName: 'hieghestPowerAlarmDur',
              }"  @siteCode=" getSiteCode">
            <template #header> Highest Power Alarm Duration </template>
            <template #columns>
              <Column field="siteName" header="Name"></Column>
              <Column field="duration" header="Duration" sortable></Column>
            </template>
          </TopSites>
        </div> -->
        <!-- <div class="col-12 col-md-6 mt-2">
          <TopSites :zoneAlarms="{
                alarms: cairoSouthSitesPowerAlarmMoreThan2Times,
                alarmsName: 'sitesPowerAlarmMoreThan2Times',
              }" @siteCode=" getSiteCode">
            <template #header> Power Alarms per Site </template>
            <template #columns>
              <Column field="siteName" header="Name"></Column>
              <Column field="count" header="Count" sortable></Column>
            </template>
          </TopSites>
        </div> -->
         <div class="col-12 col-md-6 mt-2">
          <TopSites :zoneAlarms="{
                alarms: cairoSouthSitesReportedHTAlarms,
                alarmsName: 'sitesReportedHTAlarms',
              }"  @siteCode=" getSiteCode">
            <template #header> Sites Reported HT Alarms </template>
            <template #columns>
              <Column field="siteName" header="Name"></Column>
              <Column field="count" header="Count" sortable></Column>
              <Column field="highest_duration" header="Highest Dur" sortable=""></Column>
            </template>
          </TopSites>
        </div>
          <div class="col-12 col-md-6 mt-2">
          <TopSites :zoneAlarms="{
                alarms: cairoSouthSitesReportedGenAlarms,
                alarmsName: 'sitesReportedGenAlarms',
              }"  @siteCode=" getSiteCode">
            <template #header> Sites Reported Gen Alarms </template>
            <template #columns>
              <Column field="siteName" header="Name"></Column>
              <Column field="count" header="Count" sortable></Column>
              <Column field="highest_duration" header="Highest Dur" sortable=""></Column>
            </template>
          </TopSites>
        </div>
         <div class="col-12 mt-2">
            <template v-if="countHTAlarms">
              <Button
                type="button"
                class="p-button-help"
                @click="downloadHTSites()"
              >
                <span class="material-symbols-sharp">download</span>
                <span class="font-bold">HT Sites</span>
              </Button>
            </template>
          </div>
          <zoneSitesReportedDownAlarms zone="Cairo South" :week="period_No" :year="year"></zoneSitesReportedDownAlarms>
          <zoneDownSitesAfterPowerAlarm  zone="Cairo South" :week="period_No" :year="year"></zoneDownSitesAfterPowerAlarm>
          <zoneSitesDownWithoutPowerAlarms  zone="Cairo South" :week="period_No" :year="year"></zoneSitesDownWithoutPowerAlarms>
       
      </div>

      </template>
      
    </Card>
  </div>
  
</template>

<script>
import TopSites from "../energySheet/TopSites.vue";
import EnergyHelperFunctions from "./EnergyHelperFunctions";
import SiteAlarmsTable from "../energySheet/SiteAlarmsTable.vue";
import zoneSitesReportedDownAlarms from "../../helpers/Energy/zoneSitesReportedDownAlarms.vue";
import zoneDownSitesAfterPowerAlarm from "../../helpers/Energy/zoneDownSitesAfterPowerAlarm.vue";
import zoneSitesDownWithoutPowerAlarms from"../../helpers/Energy/zoneSitesDownWithoutPowerAlarms.vue";
export default {
  data() {
    return {
       countHTAlarms:false,
        selectedSiteCode: null,
      alarmsName: null,
   
    };
  },
  components:{
    TopSites,
        SiteAlarmsTable,
        zoneSitesReportedDownAlarms,
        zoneDownSitesAfterPowerAlarm,
        zoneSitesDownWithoutPowerAlarms,

  },
  props: [
  "cairoSouthSitesReportedHTAlarms",
  "cairoSouthSitesReportedGenAlarms",
  "period_No",
  "period",
  "zone",
  "year"],
  //  watch: {
  //   siteAlarms(value) {
  //     if (value) {
  //       this.$dialog.open(SiteAlarmsTable, {
  //         props: {
  //           style: {
  //             width: "75vw",
  //           },
  //           breakpoints: {
  //             "960px": "75vw",
  //             "640px": "90vw",
  //           },
  //           modal: true,
  //         },

  //         onClose: (options) => {
  //           this.$store.dispatch("siteAlarms", null);
  //         },
  //       });
  //     }
  //   },
  // },
  //  computed: {
  //   siteAlarms() {
  //     if (this.$store.state.siteAlarms) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },
  beforeUpdate(){
    if(this.cairoSouthSitesReportedHTAlarms!=null &&this.cairoSouthSitesReportedHTAlarms.length>0)
    this.countHTAlarms=true;

  },

  methods:{
    getSiteCode(event) {
   
      this.selectedSiteCode = event.siteCode;
      this.alarmsName = event.alarmsName;
    
      
      if (this.alarmsName == "sitesReportedHTAlarms") {
        EnergyHelperFunctions.getSiteHighTempAlarms(this.selectedSiteCode);
      } else if (this.alarmsName == "sitesReportedGenAlarms") {
         EnergyHelperFunctions.getSiteGenAlarms(this.selectedSiteCode);
      }
    },
       downloadHTSites() {
      EnergyHelperFunctions.downloadZoneHTSites(this.zone,this.period,this.period_No);
      
    },

  },

};
</script>

<style lang="scss" scoped>

</style>