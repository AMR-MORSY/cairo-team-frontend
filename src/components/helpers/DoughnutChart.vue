<template>
    <div>

        <Chart type="doughnut" id="doughnutchart" :data="yearlyData" :plugins='plugins' :options="chartOptions" class="w-full md:w-[20rem] lg:w-[25rem]" />
        <Button label="Download Image" class=" block" raised severity="success" @click="downloadImage()" />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import ChartDataLabels from "chartjs-plugin-datalabels";
import { computed } from 'vue';


const plugins = [ChartDataLabels]

const props = defineProps([
    "chartDataSets", "chartTitle"
])


const yearlyData = computed(() => props.chartDataSets)


const chartOptions = ref();

onMounted(() => {

    chartOptions.value = setChartOptions();

})


  

const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');

    return {
        plugins: {
            legend: {
                labels: {
                    cutout: '60%',
                    color: textColor
                }
            },
            title: {
                display: true,
                text: `${props.chartTitle}`
            },
        }
    };
};



const downloadImage = () => {
    const imageLinlk = document.createElement('a');
    var chart = document.getElementById('doughnutchart').children[0];
    imageLinlk.href = chart.toDataURL('image/png', 1);
    imageLinlk.download = `${props.chartTitle}.png`
    imageLinlk.click()

}


</script>

<style lang="scss" scoped></style>