<template>

  <p  class=" text-center text-lg font-Signika font-bold text-font-main-color mb-2">{{ title }}</p>
  <div class="card">
  
    <Chart type="line" :data="yearlyData" :options="chartOptions" class="h-[30rem]" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { inject } from "vue";


const yearlyData = ref(null);
const title = ref(null);
const chartOptions=ref();
const dialogRef = inject('dialogRef');
const getZoneNewValues = (zoneKeys, zoneValues, cairoKeys) => {
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

}

onMounted(() => {
  chartOptions.value=setChartOptions();
  mountChartData();
})
const mountChartData = () => {

  let cairoKeys = Object.keys(dialogRef.value.data.cairo);
  let cairoEastKeys = Object.keys(dialogRef.value.data.zones["CAIRO EAST"]);
  let cairoEastValues = Object.values(dialogRef.value.data.zones["CAIRO EAST"]);
  let cairoSouthKeys = Object.keys(dialogRef.value.data.zones["CAIRO SOUTH"]);
  let cairoSouthValues = Object.values(dialogRef.value.data.zones["CAIRO SOUTH"]);
  let cairoNorthKeys = Object.keys(dialogRef.value.data.zones["CAIRO NORTH"]);
  let cairoNorthValues = Object.values(dialogRef.value.data.zones["CAIRO NORTH"]);
  let gizaKeys = Object.keys(dialogRef.value.data.zones["GIZA"]);
  let gizaValues = Object.values(dialogRef.value.data.zones["GIZA"]);




  let cairoEastNewValues = getZoneNewValues(cairoEastKeys, cairoEastValues, cairoKeys)
  let cairoSouthNewValues = getZoneNewValues(cairoSouthKeys, cairoSouthValues, cairoKeys)
  let cairoNorthNewValues = getZoneNewValues(cairoNorthKeys, cairoNorthValues, cairoKeys)
  let gizaNewValues = getZoneNewValues(gizaKeys, gizaValues, cairoKeys)

  title.value = dialogRef.value.data.title;


    const documentStyle = getComputedStyle(document.documentElement);


    yearlyData.value= {
      labels: dialogRef.value.data.labels,
      datasets: [
        {
          label: "Cairo",
          data: Object.values(dialogRef.value.data.cairo),
          fill: false,
          borderColor: documentStyle.getPropertyValue('--p-orange-600'),
          tension: 0.4
        },
        {
          data: cairoEastNewValues,
          label: "Cairo East",
          fill: false,
          borderColor: documentStyle.getPropertyValue('--p-red-500'),
          tension: 0.4
        },
        {
          data: cairoSouthNewValues,
          label: "Cairo South",

          fill: false,
          borderColor: documentStyle.getPropertyValue('--p-amber-400'),
          tension: 0.4
        },
        {
          data: cairoNorthNewValues,
          label: "Cairo North",
          fill: false,
          borderColor: documentStyle.getPropertyValue('--p-lime-500'),
          tension: 0.4
        },
        {
          data: gizaNewValues,
          label: "Giza",
          fill: false,
          borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
          tension: 0.4
        },
      ]
    
  };

}

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      },
      y: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      }
    }
  };
}




// mounted() {
//   this.mountChartData();
// },
// export default {
//   data() {
//     return {
//       yearlyData: null,
//       title: null,
//       // lightOptions: {
//       //   plugins: {

//       //     legend: {
//       //       labels: {
//       //         color: "red",
//       //       },
//       //     },
//       //     datalabels: {
//       //       anchor: "top",

//       //       labels: {
//       //         value: {
//       //           color: "black",
//       //         },
//       //       },
//       //     },
//       //   },


//       // },
//       // plugins: [ChartDataLabels],
//     };
//   },
//   name: "CairoTxYearlyAnalysis",
//   inject: ["dialogRef.value"],
//   methods: {
//     getZoneNewValues(zoneKeys, zoneValues, cairoKeys) {
//       let zoneNewValus = [];
//       for (var i = 0; i < cairoKeys.length; i++) {

//         let filtered = zoneKeys.filter(key => {
//           return key == cairoKeys[i];

//         });
//         if (filtered.length != 0) {
//           let index = zoneKeys.indexOf(filtered[0]);
//           zoneNewValus[i] = zoneValues[index];

//         }
//         else {
//           zoneNewValus[i] = 0
//         }
//       }
//       return zoneNewValus;

//     },
//     mountChartData() {
//       let cairoKeys = Object.keys(this.dialogRef.data.cairo);
//       let cairoEastKeys = Object.keys(this.dialogRef.data.zones["CAIRO EAST"]);
//       let cairoEastValues = Object.values(this.dialogRef.data.zones["CAIRO EAST"]);
//       let cairoSouthKeys = Object.keys(this.dialogRef.data.zones["CAIRO SOUTH"]);
//       let cairoSouthValues = Object.values(this.dialogRef.data.zones["CAIRO SOUTH"]);
//       let cairoNorthKeys = Object.keys(this.dialogRef.data.zones["CAIRO NORTH"]);
//       let cairoNorthValues = Object.values(this.dialogRef.data.zones["CAIRO NORTH"]);
//       let gizaKeys = Object.keys(this.dialogRef.data.zones["GIZA"]);
//       let gizaValues = Object.values(this.dialogRef.data.zones["GIZA"]);




//       let cairoEastNewValues = this.getZoneNewValues(cairoEastKeys, cairoEastValues, cairoKeys)
//       let cairoSouthNewValues = this.getZoneNewValues(cairoSouthKeys, cairoSouthValues, cairoKeys)
//       let cairoNorthNewValues = this.getZoneNewValues(cairoNorthKeys, cairoNorthValues, cairoKeys)
//       let gizaNewValues = this.getZoneNewValues(gizaKeys, gizaValues, cairoKeys)

//       this.title = this.dialogRef.data.title;

//       this.yearlyData = {
//         labels: this.dialogRef.data.labels,
//         datasets: [
//           {
//             data: Object.values(this.dialogRef.data.cairo),
//             label: "Cairo",
//             borderColor: "black",
//           },
//           {
//             data: cairoEastNewValues,
//             label: "Cairo East",
//             borderColor: "#C3B1E1",
//           },
//           {
//             data: cairoSouthNewValues,
//             label: "Cairo South",
//             borderColor: "red",
//           },
//           {
//             data: cairoNorthNewValues,
//             label: "Cairo North",
//             borderColor: "orange",
//           },
//           {
//             data: gizaNewValues,
//             label: "Giza",
//             borderColor: "green",
//           },
//         ],

//       };
//     },
//   },
// };
</script>

<style scoped></style>