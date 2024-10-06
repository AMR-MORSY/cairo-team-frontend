<template>
    <!-- <div class="toast-container  position-fixed bottom-0 end-0 p-3" >
        <div id="NetworkErrorToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true" >
           
            <div class="toast-body" style="background-color: red; border-radius: 5px;">
               <strong style="color: white;">Network Error......!</strong> 
                
            </div>
          
        </div>
    </div> -->
    <button id="triggerElement" ref="triggerElement" type="button" @click="hideToast"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Hide
        alert</button>

    <div id="targetElement"
        class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-blue-200 dark:text-blue-800" role="alert">
        <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </div>
</template>

<!-- <script>

import { Dismiss } from 'flowbite';
export default {
    data() {


        return {}
    },
    name: "NetwwokErrorToast",


}
</script> -->


<script setup>
import { Dismiss } from 'flowbite';
import { onMounted} from 'vue';
 let $targetEl = document.querySelector('#targetElement');
// let $targetEl = this.$refs.targetElement

// optional trigger element
let $triggerEl = document.getElementById('triggerElement');

// options object
const options = {
    transition: 'transition-opacity',
    duration: 1000,
    timing: 'ease-out',

    // callback functions
    // onHide: (context, targetEl) => {
    //     console.log('element has been dismissed')
    //     console.log(targetEl)
    // }
};

// instance options object
const instanceOptions = {
    id: 'targetElement',
    override: true
};
let dismiss = new Dismiss($targetEl, $triggerEl, options, instanceOptions);
onMounted(()=>{
     $targetEl = document.querySelector('#targetElement');
    $triggerEl = document.getElementById('triggerElement');
    dismiss = new Dismiss($targetEl, $triggerEl, options, instanceOptions);

})
const hideToast = () => {
    // console.log($targetEl)
    dismiss.hide();
}

</script>

<style lang="scss" scoped></style>
