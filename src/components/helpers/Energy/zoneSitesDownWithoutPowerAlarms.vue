<template>
    <a @click.prevent="getZoneSitesDownWithoutPowerAlarms">Down Sites Without Power Alarm</a>
  </template>
  
  <script>
  import Energy from '../../../apis/Energy';
  import zoneDownSitesWithoutPowerTable from "../../helpers/Energy/zoneDownSitesWithoutPowerTable.vue";
  export default {
  
    data() {
      return {
  
      };
  
    },
    components:{zoneDownSitesWithoutPowerTable},
    name: "zoneSitesDownWithoutPowerAlarms",
    props: ["zone", "week", "year"],
  
    methods: {
        getZoneSitesDownWithoutPowerAlarms() {
        this.$store.dispatch("displaySpinnerPage", false);
        let data = {
          zone: this.zone,
          week: this.week,
          year: this.year
        }
        Energy.getZoneSitesDownWithoutPowerAlarms(data).then((response) => {
          console.log(response)
          this.$dialog.open(zoneDownSitesWithoutPowerTable, {
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
                sites: response.data.sites,
              
               
              },
            });
        }).catch((error) => {
          console.log(error);
  
        })
          .finally(() => {
            this.$store.dispatch("displaySpinnerPage", true);
          });
      }
    }
  
  
  }
  
  
  
  </script>
  
  <style lang="scss" scoped>
  a {
    font-size: 1rem;
    font-weight: 800;
    color: red !important;
    cursor: pointer;
  }
  </style>