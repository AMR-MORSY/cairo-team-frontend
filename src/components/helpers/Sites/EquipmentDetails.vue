<template>
    <div class="container">
        <div class="row site-details gx-1">
            <div class="col-12 col-md-6 col-xl-4 " v-for="statestic in statestics" :key="statestic">
                <div class="input-group">
                    <span class="input-group-text" :id="Object.keys(statestic)[0]">{{ Object.keys(statestic)[0] }}</span>
                    <input type="text" class="form-control" disabled :value="Object.values(statestic)[0]"  :aria-describedby="Object.keys(statestic)[0]" />
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
            statestics:null,
        };
    },
    name: "EquipmentDetails",
    inject: ["dialogRef"],
    mounted(){
        this.mountData()

    },
    methods:{
        mountData()
        {
            this.statestics=this.dialogRef.data.statestics;

        }

    },
}
</script>

<style lang="scss" scoped>
.input-group {

    margin-bottom: 1rem;
}

@media screen and (min-width:320px) and (max-width: 480px) {

    /* smartphones, iPhone, portrait 480x320 phones */
    .input-group {
        width: 80%;
        margin-left: auto;
        margin-right: auto;


    }
}

@media screen and (min-width:481px) and (max-width: 640px) {

    /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
    .input-group {
        width: 80%;
        margin-left: auto;
        margin-right: auto;


    }

}

@media screen and (min-width:641px) and (max-width: 960) {

    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
    .input-group {
        width: 80%;
        margin-left: auto;
        margin-right: auto;


    }
}
</style>