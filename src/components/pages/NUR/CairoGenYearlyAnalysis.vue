<template>
  <div>
    <Chart
      type="line"
      :data="yearlyData"
      :options="lightOptions"
     
    ></Chart>
  </div>
</template>

<script>
import ChartDataLabels from "chartjs-plugin-datalabels";

export default {
  data() {
    return {
      yearlyData: null,
      lightOptions: {
        plugins: {
          title: {
            display: true,
            text: "Generator"
          },
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
  name: "CairoGenYearlyAnalysis",
  inject: ["dialogRef"],
  mounted() {
    this.mountChartData();
  },
  methods: {
    mountChartData() {
      this.yearlyData = {
        labels: this.dialogRef.data.labels,
         datasets: [
          {
            data: this.dialogRef.data.NUR_combined,
            label: "Total NUR",
            borderColor: "black",
          },
          {
            data: this.dialogRef.data.NUR_Rented,
            label: "Rented",
            borderColor: "blue",
          },
          {
            data: this.dialogRef.data.NUR_VF,
            label: "VF",
            borderColor: "red",
          },
          {
            data: this.dialogRef.data.NUR_OEG,
            label: "OEG",
            borderColor: "orange",
          },
          {
            data: this.dialogRef.data.NUR_ET,
            label: "ET",
            borderColor: "green",
          },
          {
            data: this.dialogRef.data.NUR_WE,
            label: "WE",
            borderColor: "purple",
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>