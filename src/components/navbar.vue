<template>
  <div  :class="$route.name == 'home' ? 'nav-cont' : 'nav-uncont'" v-if="!$route.meta.hideNavbar">

    <nav class=" bg-transparent border-gray-200 dark:bg-gray-900 dark:border-gray-700 mb-6">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../assets/icons8-cairo-85.png" class="h-8" alt="Flowbite Logo" />
          <span class="self-center font-Signika text-2xl font-semibold whitespace-nowrap dark:text-white">Cairo
            Team</span>
        </a>


        <div class="flex md:order-2">
          <button type="button" data-collapse-toggle="navbar-dropdown" aria-controls="navbar-dropdown"
            aria-expanded="false"
            class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span class="sr-only">Search</span>
          </button>
          <div class="relative hidden md:block">
            <form @submit.prevent="submitSearch">
              <button type="submit"
                class=" cursor-pointer absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <!-- <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"> -->

                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span class="sr-only cursor-pointer">Search icon</span>
                <!-- </div> -->
              </button>
              <input type="text" id="search-navbar" v-model="v$.search.$model"
                :class="{ 'is-invalid': v$.search.$error }"
                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by site code....">
            </form>
          </div>
          <button data-collapse-toggle="navbar-dropdown" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-dropdown">
          <div class="relative mt-3 md:hidden">
            <form @submit.prevent="submitSearch">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <button type="submit">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </button>
              </div>
              <input type="text" id="search-navbar" v-model="v$.search.$model"
                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by site code">
            </form>
          </div>
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <router-link
                class="py-2 px-3 text-font-main-color font-Signika rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                :class="$route.name == 'home' ? 'display_none' : 'display'" to="/home" Active>Home</router-link>

            </li>
            <li v-if="isLogin">
              <a
                class="block py-2 px-3 text-font-main-color font-Signika rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{{
                  userName }}</a>
            </li>
            <li v-if="isLogin">
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-between w-full font-Signika py-2 px-3 text-font-main-color rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dashboard
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
                </svg></button>
              <!-- Dropdown menu -->
              <div id="dropdownNavbar"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm" aria-labelledby="dropdownLargeButton">

                  <li @click="closeMenu()" class="text-font-main-color font-Signika hover:bg-gray-100">
                    <router-link
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      to="/sites">Sites</router-link>

                  </li>
                  <li v-if="$can('read_NUR_data')" @click="closeMenu()"
                    class="text-font-main-color font-Signika hover:bg-gray-100">
                    <router-link class="block px-4 py-2" to="/nur">NUR</router-link>

                  </li>
                  <li @click="closeMenu()" class="text-font-main-color font-Signika hover:bg-gray-100">
                    <router-link class="block px-4 py-2  " to="/modifications">Modifications</router-link>

                  </li>
                  <li @click="closeMenu()" class="text-font-main-color font-Signika hover:bg-gray-100">
                    <router-link class="block px-4 py-2  " to="/energy">Energy</router-link>

                  </li>
                  <li @click="closeMenu()" class="text-font-main-color font-Signika hover:bg-gray-100"
                    v-if="$can('read_TX_data')">
                    <a class="block px-4 py-2  " role="button" @click="SearchTxIssues()">search Tx issues</a>

                  </li>

                </ul>

              </div>
            </li>
            <li>
              <a class="block py-2 px-3 text-font-main-color font-Signika  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                v-if="isLogin" role="button" @click="logout">Logout</a>

            </li>

          </ul>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
import User from "../apis/User";
import Sites from "../apis/Sites";
import { maxLength, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators';
import SitesTable from "../components/pages/sites/SitesTable.vue";
import SearchTxIssuesForm from "../components/helpers/Transmission/SearchTxIssuesForm.vue";
import { Dropdown } from 'flowbite';
import { initFlowbite } from 'flowbite'


export default {
  data() {
    return {
      search: null,
      targetEl: null,
      collapse: null,
      trigerEl: null
    };
  },
  emits: ["displaySitesTable"],
  name: "navbar",

  components: {
    SitesTable,
    SearchTxIssuesForm
  },

  computed: {
    isLogin() {

      return this.$store.getters.isLogin

    },

    userName() {
      return this.$store.getters.userName;
    },
  },
  mounted() {
    initFlowbite();


  },
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    const nameReg = helpers.regex(/^[a-zA-Z0-9 _-]{3,}$/);

    return {


      search: {
        required: helpers.withMessage('Email is required', required),
        maxLength: helpers.withMessage('Email is required', maxLength(50)),
        nameReg: helpers.withMessage('please enter a valid site name or code', nameReg)
      },



    }
  },
  methods: {
    async submitSearch() {
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) return
      Sites.searchSites(this.search)
        .then((response) => {

          if (response.data.message == "No data Found") {
            this.$toast.add({
              severity: "info",
              summary: "Sorry!!!",
              detail: "No data Found",
              life: 3000,
            });
          } else {
            this.$dialog.open(SitesTable, {
              props: {
                style: {
                  width: '50vw',
                },
                breakpoints: {
                  '960px': '75vw',
                  '640px': '90vw'
                },

                modal: true,
              },

              data: {
                sites: response.data.sites,


              },

            })

          }
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status == 422) {
            this.$toast.add({
              severity: "error",
              summary: "Opes!!!",
              detail: error.response.data.errors.search[0],
              life: 3000,
            });
          }
        })

    },

    SearchTxIssues() {
      this.$dialog.open(SearchTxIssuesForm, {
        props: {
          style: {
            width: "90vw",
          },

          modal: true,
        },


      });

    },



    logout() {

      User.logout().then((data) => {

        this.$store.dispatch("userData", null);
        sessionStorage.removeItem("User");

        this.$router.push({ path: "/welcome" });
      })
        .catch((error) => {

        })

    },

    closeMenu() {

      this.trigerEl = document.getElementById('dropdownNavbarLink')
      this.targetEl = document.getElementById('dropdownNavbar');
      this.collapse = new Dropdown(this.targetEl, this.trigerEl);


      this.collapse.hide();

    },

  }
};
</script>

<style lang="scss" scoped>
.display_none {
  display: none;
}

.display {
  display: block;
}

.navbar-brand {
  color: #673EE6 !important;
  font-weight: bolder;
  font-size: 2rem;
}

.nav-link {
  color: #673EE6;
  font-weight: bolder;

}

.me-auto {
  margin-left: auto !important;
}

.nav-cont {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;

}

.nav-uncont {
  position: unset;
  top: unset;
  left: unset;
  right: unset;
  z-index: unset;
}

@media (max-width: 990px) {
  .navbar-collapse {
    background-color: white;
    padding: 1rem 1rem;
    border-radius: 5px;
    border: 0.5px solid gray;

    .nav-link {
      font-weight: 400;

    }

  }
}

.navbar-toggle.nav-link {
  color: white;
}
</style>