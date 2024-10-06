import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import modal from "./components/helpers/modal.vue"; ////declared globally

import spinnerButton from "./components/helpers/spinnerButton.vue";
import helperTable from "./components/helpers/helperTable.vue";
import store from "./vuex/store";
import navbar from "./components/navbar.vue";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import "primeicons/primeicons.css";
import Card from "primevue/card";
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Chart from "primevue/chart";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import Checkbox from "primevue/checkbox";
import Tooltip from "primevue/tooltip";
import ProgressSpinner from "primevue/progressspinner";
import DialogService from "primevue/dialogservice";
import DynamicDialog from "primevue/dynamicdialog";
import FileUpload from "primevue/fileupload";
import ProgressBar from "primevue/progressbar";
import Badge from "primevue/badge";
import SpinnerPage from "./components/helpers/SpinnerPage.vue";
import Details from "./components/pages/sites/Details.vue";

import TabPanel from "primevue/tabpanel";
import PickList from "primevue/picklist";
import Fieldset from "primevue/fieldset";
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";
import Calendar from "primevue/calendar";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import Divider from "primevue/divider";
import ConfirmationService from "primevue/confirmationservice";
import ConfirmDialog from "primevue/confirmdialog";
import SpeedDial from "primevue/speeddial";
import OverlayPanel from "primevue/overlaypanel";
import { abilitiesPlugin } from "@casl/vue";
import ability from "./services/ability";
import FloatLabel from "primevue/floatlabel";
import { definePreset } from "@primevue/themes";
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';

import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';




import JsonExcel from "vue-json-excel3";


import "./assets/style.css";
import "../node_modules/flowbite/dist/flowbite.min";


const myPresets = definePreset(Aura, {
  semantic:{
    myButton:{
      warn:{
        background:'white',
        paddigX:'0.75rem',
        paddigY:'0.75rem',
        borderColor:'#673EE6',
        color:'black'

      }
    
    }

  },
  components: {
    inputtext:{
      focusBorderColor:'#673EE6',
      disabledBackground:'white'
      
    },
    button:{
     warnBackground:'{my.button.warn.background}',
      paddigX:'{my.button.padding.x}',
      paddigY:'{my.button.padding.y}',
      borderColor:'{my.button.border.color}',
      color:'{my.button.color}'
          

      
    
    }

  },
});

const app = createApp(App);

app
  .use(router)
  .use(store)
  .use(VueChartkick)
  .use(PrimeVue, {
    theme: {
      preset: myPresets,
    },
  })
  .use(ToastService)
  .use(DialogService)
  .use(ConfirmationService)
  .use(abilitiesPlugin, ability, {
    useGlobalProperties: true,
  })
  .directive("tooltip", Tooltip)
  .component("Datepicker", Datepicker)
  .component("ConfirmDialog", ConfirmDialog)
  .component("Toast", Toast)
  .component("SpinnerPage", SpinnerPage)
  .component("Fieldset", Fieldset)
  .component("DynamicDialog", DynamicDialog)
  .component("modal", modal)
  .component("Dropdown", Dropdown)
  .component("Divider", Divider)
  .component("Calendar", Calendar)
  .component("Textarea", Textarea)
  .component("Details", Details)
  .component("Dialog", Dialog)
  .component("Badge", Badge)
  .component("Tab", Tab)
  .component("TabPanel", TabPanel)
  .component("TabPanels", TabPanels)
  .component("Tabs", Tabs)
  .component("TabList",TabList)
  .component("ProgressBar", ProgressBar)
  .component("FileUpload", FileUpload)
  .component("Card", Card)
  .component("PickList", PickList)
  .component("ProgressSpinner", ProgressSpinner)
  .component("Checkbox", Checkbox)
  .component("Password", Password)
  .component("InputText", InputText)
  .component("InputNumber", InputNumber)
  .component("Select", Select)
  .component("DataTable", DataTable)
  .component("Column", Column)
  .component("Chart", Chart)
  .component("SpeedDial", SpeedDial)
  .component("Button", Button)
  .component("navbar", navbar)
  .component("spinnerButton", spinnerButton)
  .component("helperTable", helperTable)
  .component("OverlayPanel", OverlayPanel)
  .component("downloadExcel", JsonExcel)
  .component("FloatLabel", FloatLabel)

  .mount("#app");
