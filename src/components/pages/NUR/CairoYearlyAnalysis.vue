<template>
  <p class=" text-center text-lg font-Signika font-bold text-font-main-color mb-2">NUR-C</p>
  <div class="card">
    <Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />
  </div>
</template>

<script setup>



import { ref, onMounted, inject } from "vue";

const dialogRef = inject('dialogRef');

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  if (this.dialogRef.data.cairo && this.dialogRef.data.zones) {
    return {

      labels: Object.keys(dialogRef.value.data.cairo),
      datasets: [
        {
          data: Object.values(dialogRef.value.data.cairo),
          label: "Cairo",
          fill: false,
          borderColor: documentStyle.getPropertyValue('--p-orange-600'),
          tension: 0.4

        },
        {
          data: Object.values(dialogRef.value.data.zones["CAIRO EAST"]),
          label: "Cairo East",
          fill: false,
          borderColor: documentStyle.getPropertyValue('--p-gray-500'),
          tension: 0.4

        },
        {
          data: Object.values(dialogRef.value.data.zones["GIZA"]),
          label: "Giza",
          fill: false,
          borderColor: documentStyle.getPropertyValue('--p-teal-600'),
          tension: 0.4
        },
        {
          data: Object.values(dialogRef.value.data.zones["CAIRO SOUTH"]),
          label: "Cairo South",
          fill: false,
          borderColor: documentStyle.getPropertyValue('--p-sky-600'),
          tension: 0.4
        },
        {
          data: Object.values(dialogRef.value.data.zones["CAIRO NORTH"]),
          label: "Cairo North",
          fill: false,
          borderColor: documentStyle.getPropertyValue('--p-blue-700'),
          tension: 0.4
        },
      ],


      
    };

  }



};
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


</script>

<style scoped></style>