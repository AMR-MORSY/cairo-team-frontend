<template >
  <navbar v-if="!$route.meta.hideNavbar" @displaySitesTable="displaySitesTable"></navbar>
  <router-view></router-view>

  <DynamicDialog />
  <ConfirmDialog></ConfirmDialog>

  <SpinnerPage :displayNone="displaySpinnerPage" style="z-index: 10000000000;"></SpinnerPage>

  <UnauthenticatedToast></UnauthenticatedToast>
<NetworkErrorToast></NetworkErrorToast> 


  <Toast position="bottom-right" :breakpoints="{ '480px': { 'width': '80%', 'margin': 'auto' } }" />
</template>

<script >
import SpinnerPage from "../src/components/helpers/SpinnerPage.vue";
import navbar from "../src/components/navbar.vue";
import SitesTable from "../src/components/pages/sites/SitesTable.vue";
import UnauthenticatedToast from "../src/components/helpers/UnauthenticatedToast.vue";

import NetworkErrorToast from "./components/helpers/NetworkErrorToast.vue";
import User from "./apis/User";




export default {
  components: { SpinnerPage, navbar, SitesTable, UnauthenticatedToast, NetworkErrorToast },
  data() {
    return {
      showModal: false,

      data: "session will end after 2 minutes, renew session",
    };
  },
  watch: {
    $route() {
     
      if (this.$store.getters.isLogin) {
        User.userAbilities().then((response) => {
       
          let rules=[];

          if(response.data.permissions.length>0)
          {
            response.data.permissions.forEach((element)=>{
              let rule={
                action:element
              };
              rules.push(rule)
            })

          }
        
          this.$ability.update(rules)
       
        })

      }

    }

  },
  

  computed: {
    displaySpinnerPage() {
      return this.$store.state.displaySpinnerPage;
    },
    displayDialog() {
      return this.$store.state.displayDialog;
    },
    dialogMessage() {
      return this.$store.state.dialogMessage;
    },


  },
  name: "app",


  methods: {
    displaySitesTable(event) {
      this.$dialog.open(SitesTable, {
        props: {
          header: "Sites",
          style: {
            width: "75vw",
          },
          breakpoints: {
            "960px": "75vw",
            "640px": "90vw",
          },
          modal: true,
        },

        data: {
          sites: event,
        },
      });
    },
    displayTheSpinner(event) {
      this.displaySpinnerPage = event;
    },

    updateAbility(user) {
      const { can, rules } = new AbilityBuilder(Ability);

      if (user.role === 'admin') {
        can('manage', 'all');
      } else {
        can('read', 'all');
      }

      this.$ability.update(rules);
    }


  },


};
</script>

<style lang="scss" ></style>