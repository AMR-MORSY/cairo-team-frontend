<template>
    <div class="container-fluid ">
        <div class="row site-details gx-1">
            <div class="col-6"></div>
            <div class="col-6">
                <div class="button-container">
                    <Button label="Update"  icon="pi pi-external-link" @click="openOverlayUpdate(event)"
                        severity="success" text raised />

                </div>
            </div>
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








        </div>

    </div>
</template>

<script>
import BatteriesUpdate from './BatteriesUpdate.vue';
import SiteDataUpdate from './SiteDataUpdate.vue';
import RectifierDataUpdate from "./RectifierDataUpdate.vue";
import MWDataUpdate from './MWDataUpdate.vue';
import BTSDataUpdate from "./BTSDataUpdate.vue";
import PowerDataUpdate from './PowerDataUpdate.vue';
export default {
    data() {


        return {
            statestics: null,
            topic: null,
            id:null,
        };
    },
    name: "EquipmentDetails",
    inject: ["dialogRef"],
    components: {
        BatteriesUpdate,
        SiteDataUpdate,
        RectifierDataUpdate,
        MWDataUpdate,
        BTSDataUpdate,
        PowerDataUpdate,

    },
    

    mounted() {
        this.mountData()

    },
    methods: {
        mountData() {
            this.statestics = this.dialogRef.data.statestics;
            this.topic = this.dialogRef.data.topic;
            this.id=this.dialogRef.data.id;

        },
        openOverlayUpdate() {
            this.dialogRef.close();
            if (this.topic == "Site Data") {
                this.$dialog.open( SiteDataUpdate, {
                    props: {
                        style: {
                            width: "90vw",
                        },

                        modal: true,
                    },

                    data: {
                        rowData: this.dialogRef.data.rowData,
                        id:this.id,
                        topic: this.topic

                    },
                });

            }
            else if (this.topic == "Batteries") {
                this.$dialog.open(BatteriesUpdate, {
                    props: {
                        style: {
                            width: "90vw",
                        },

                        modal: true,
                    },

                    data: {
                        rowData: this.dialogRef.data.rowData,
                        id:this.id,
                        topic: this.topic

                    },
                });

            }
            else if(this.topic=="Rectifier Data")
            {
                this.$dialog.open(RectifierDataUpdate, {
                    props: {
                        style: {
                            width: "90vw",
                        },

                        modal: true,
                    },

                    data: {
                        rowData: this.dialogRef.data.rowData,
                        id:this.id,
                        topic: this.topic

                    },
                });

            }
            else if(this.topic=="MW Data")
            {
                this.$dialog.open(MWDataUpdate, {
                    props: {
                        style: {
                            width: "90vw",
                        },

                        modal: true,
                    },

                    data: {
                        rowData: this.dialogRef.data.rowData,
                        id:this.id,
                        topic: this.topic

                    },
                });

            }
            else if(this.topic=="BTS Data")
            {
                this.$dialog.open(BTSDataUpdate, {
                    props: {
                        style: {
                            width: "90vw",
                        },

                        modal: true,
                    },

                    data: {
                        rowData: this.dialogRef.data.rowData,
                        id:this.id,
                        topic: this.topic

                    },
                });

            }
            else if(this.topic=="Power Data")
            {
                this.$dialog.open(PowerDataUpdate, {
                    props: {
                        style: {
                            width: "90vw",
                        },

                        modal: true,
                    },

                    data: {
                        rowData: this.dialogRef.data.rowData,
                        id:this.id,
                        topic: this.topic

                    },
                });

            }





        }

    },
}
</script>

<style lang="scss" scoped>
.input-group {
    width: 100%;
    margin-bottom: 1rem;
}

.button-container {

    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 1em;

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