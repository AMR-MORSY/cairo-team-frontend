<template>



  <ModificationCreationForm :siteCode="site_code" :siteName="site_name" needed_action="new" :modificationData="[]" :site_id="site_name" />
</template>

<script>

import ModificationCreationForm from "../../helpers/Modification/ModificationCreationForm.vue";

export default {
 
  name: "NewModification",
  props: ["site_code", "site_name"],
  emits: ["displayNoneSpinner"],
  
  components: {
    ModificationCreationForm
  },
  


 
};
</script>

<style lang="scss" scoped></style>