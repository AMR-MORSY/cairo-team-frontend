<template>
  <p style="text-align: center;">{{ title }}</p>
  <div>
    <Chart type="line" :data="yearlyData" :options="lightOptions" :plugins="plugins"></Chart>
  </div>
</template>

<script>
import ChartDataLabels from "chartjs-plugin-datalabels";
export default {
  data() {
    return {
      yearlyData: null,
      title: null,
      lightOptions: {
        plugins: {
          // title: {
          //   display: true,
          //   text: "Transmission",
          // },
          legend: {
            labels: {
              color: "red",
            },
          },
          datalabels: {
            anchor: "top",

            labels: {
              value: {
                color: "black",
              },
            },
          },
        },

        scales: {
          y: {
            suggestedMin: 0,
          },
        },
      },
      plugins: [ChartDataLabels],
    };
  },
  name: "CairoTxYearlyAnalysis",
  inject: ["dialogRef"],
  mounted() {
    this.mountChartData();
  },
  methods: {
    getZoneNewValues(zoneKeys, zoneValues, cairoKeys) {
      let zoneNewValus = [];
      for (var i = 0; i < cairoKeys.length; i++) {

        let filtered = zoneKeys.filter(key => {
          return key == cairoKeys[i];

        });
        if (filtered.length != 0) {
          let index = zoneKeys.indexOf(filtered[0]);
          zoneNewValus[i] = zoneValues[index];

        }
        else {
          zoneNewValus[i] = 0
        }
      }
      return zoneNewValus;

    },
    mountChartData() {
      let cairoKeys = Object.keys(this.dialogRef.data.cairo);
      let cairoEastKeys = Object.keys(this.dialogRef.data.zones["CAIRO EAST"]);
      let cairoEastValues = Object.values(this.dialogRef.data.zones["CAIRO EAST"]);
      let cairoSouthKeys = Object.keys(this.dialogRef.data.zones["CAIRO SOUTH"]);
      let cairoSouthValues = Object.values(this.dialogRef.data.zones["CAIRO SOUTH"]);
      let cairoNorthKeys = Object.keys(this.dialogRef.data.zones["CAIRO NORTH"]);
      let cairoNorthValues = Object.values(this.dialogRef.data.zones["CAIRO NORTH"]);
      let gizaKeys = Object.keys(this.dialogRef.data.zones["GIZA"]);
      let gizaValues = Object.values(this.dialogRef.data.zones["GIZA"]);




      let cairoEastNewValues = this.getZoneNewValues(cairoEastKeys, cairoEastValues, cairoKeys)
      let cairoSouthNewValues = this.getZoneNewValues(cairoSouthKeys, cairoSouthValues, cairoKeys)
      let cairoNorthNewValues = this.getZoneNewValues(cairoNorthKeys, cairoNorthValues, cairoKeys)
      let gizaNewValues = this.getZoneNewValues(gizaKeys, gizaValues, cairoKeys)
      
      this.title = this.dialogRef.data.title;

      this.yearlyData = {
        labels: this.dialogRef.data.labels,
        datasets: [
          {
            data: Object.values(this.dialogRef.data.cairo),
            label: "Cairo",
            borderColor: "black",
          },
          {
            data: cairoEastNewValues,
            label: "Cairo East",
            borderColor: "#C3B1E1",
          },
          {
            data: cairoSouthNewValues,
            label: "Cairo South",
            borderColor: "red",
          },
          {
            data: cairoNorthNewValues,
            label: "Cairo North",
            borderColor: "orange",
          },
          {
            data: gizaNewValues,
            label: "Giza",
            borderColor: "green",
          },
        ],

      };
    },
  },
};
</script>

<style lang="scss" scoped></style>