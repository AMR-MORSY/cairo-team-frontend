<template>
  <div :class="$route.name == 'home' ? 'nav-cont' : 'nav-uncont'" v-if="!$route.meta.hideNavbar">
    <nav class="navbar bg-transparent  navbar-expand-lg  border-bottom">
      <div class="container">
        <a class="navbar-brand font-weight-bolder" href="#">Cairo Team</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex flex-grow-1 " role="search" @submit.prevent="submitSearch">
            <input class="form-control me-2" @focusout="closeMenu()" v-model="v$.search.$model" type="search"
              placeholder="Search by site code" :class="{ 'is-invalid': v$.search.$error }" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>

         

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" @click.prevent="closeMenu()">
              <router-link class="nav-link" :class="$route.name == 'home' ? 'display_none' : 'display'" to="/home"
                Active>Home</router-link>
            </li>
            <li class="nav-item" v-if="isLogin">
              <a class="nav-link">{{ userName }}</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                v-if="isLogin">Dashboard</a>

              <ul class="dropdown-menu">
                <li @click.prevent="closeMenu()">
                  <router-link class="dropdown-item" to="/sites">Sites</router-link>
                </li>
                <li @click.prevent="closeMenu()" v-if="$can('read_NUR_data')">

                  <router-link class="dropdown-item" to="/nur">NUR</router-link>

                </li>
                <li @click.prevent="closeMenu()">
                  <router-link class="dropdown-item" to="/modifications">Modifications</router-link>
                </li>
                <li @click.prevent="closeMenu()">
                  <router-link class="dropdown-item" to="/energy">Energy</router-link>
                </li>
                <li @click.prevent="closeMenu()" v-if="$can('read_TX_data')">
                  <a class="dropdown-item" role="button" @click="SearchTxIssues()">search Tx issues</a>
                </li>



              </ul>
            </li>
            <li class="nav-item" @click.prevent="closeMenu()">
              <a class="nav-link" v-if="isLogin" role="button" @click="logout">Logout</a>
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


export default {
  data() {
    return {
      search: null,
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
          console.log(response);
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
                  width: "90vw",
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

    SearchTxIssues()
    {
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
      const menuToggle = document.getElementById('navbarSupportedContent')
      const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
      if (menuToggle.classList.contains('show')) {
        bsCollapse.toggle();

      }

    }
  }
};
</script>

<style lang="scss"  scoped>
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