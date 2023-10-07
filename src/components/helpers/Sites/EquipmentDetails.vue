<template>
    <div class="container-fluid ">
        <div class="row site-details gx-1">
            <div class="col-12">
                <h3>{{ topic }}</h3>
            </div>
            <div class="col-12 col-md-6 col-xl-4  " v-for="statestic in statestics" :key="statestic">
                <div class="input-group">
                    <span class="input-group-text w-50" :id="Object.keys(statestic)[0]">{{ Object.keys(statestic)[0]
                    }}</span>
                    <input type="text" class="form-control w-50 " disabled :value="Object.values(statestic)[0]"
                        :aria-describedby="Object.keys(statestic)[0]" />
                </div>
            </div>

            <div class="col-12">

            </div>





        </div>

    </div>
</template>

<script>
export default {
    data() {


        return {
            statestics: null,
            topic: null,
        };
    },
    name: "EquipmentDetails",
    inject: ["dialogRef"],
    mounted() {
        this.mountData()

    },
    methods: {
        mountData() {
            this.statestics = this.dialogRef.data.statestics;
            this.topic = this.dialogRef.data.topic;

        }

    },
}
</script>

<style lang="scss" scoped>
.input-group {
    width: 100%;
    margin-bottom: 1rem;
}

@media screen and (min-width:320px) and (max-width: 480px) {

    /* smartphones, iPhone, portrait 480x320 phones */
   
}

@media screen and (min-width:481px) and (max-width: 640px) {

    /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
 

}

@media screen and (min-width:641px) and (max-width: 960) {

    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  
}
</style>