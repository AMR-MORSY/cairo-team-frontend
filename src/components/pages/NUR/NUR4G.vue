<template>
  <div class="container mt-5">
    <div class="card index">
      <div class="header">
        <p>4G</p>
      </div>
      <form
        id="energysheet"
        @submit.prevent="submit4GNurSheet"
        enctype="multipart/form-data"
      >
        <div class="errors"></div>
        <div class="row">
          <div class="col-12" style="color: red; text-align: center">
            <div v-if="serverError">
              {{ serverError }}
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="form-group">
              <label for="weeks">Week:</label>
              <select v-model="week" id="weeks" class="form-select">
                <option value="">select week</option>

                <option v-for="week in weeks" :key="week">{{ week }}</option>
              </select>
              <div v-if="weekErrors">
                <ul>
                  <li
                    v-for="error in weekErrors"
                    style="color: red"
                    :key="error"
                  >
                    {{ error }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label for="year">Year:</label>
              <select v-model="year" id="year" class="form-select">
                <option value="">select year</option>

                <option v-for="year in years" :key="year">{{ year }}</option>
              </select>
              <div v-if="yearErrors">
                <ul>
                  <li
                    v-for="error in yearErrors"
                    style="color: red"
                    :key="error"
                  >
                    {{ error }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="form-group">
              <label for="power">4G Sheet:</label>
              <input
                type="file"
                name="energy_sheet"
                class="form-control"
                id="energy_sheet"
                @change="Nur4GSheetFile"
              />
              <div v-if="Nur4GSheetErrors">
                <ul>
                  <li
                    v-for="error in Nur4GSheetErrors"
                    style="color: red"
                    :key="error"
                  >
                    {{ error }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="form-group">
              <label for="power">4G Cells:</label>
              <input
                type="number"
                class="form-control"
                placeholder="4G Cells"
                v-model="cells"
              />
              <div v-if="cellsErrors">
                <ul>
                  <li
                    v-for="error in cellsErrors"
                    style="color: red"
                    :key="error"
                  >
                    {{ error }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="form-group">
              <label for="power">Total Net.Cells:</label>
              <input
                type="number"
                class="form-control"
                placeholder="Total Net.Cells"
                v-model="total_net_cells"
              />
              <div v-if="total_net_cellsErrors">
                <ul>
                  <li
                    v-for="error in total_net_cellsErrors"
                    style="color: red"
                    :key="error"
                  >
                    {{ error }}
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div class="col-12 mt-2">
            <spinner-button
              type="submit"
              :show-spinner="showSpinner"
              class="btn"
              style="background-color: #79589f; color: white"
            >
              <span> Submit</span>
            </spinner-button>
          </div>
        </div>
      </form>
    </div>
    <div class="helper-table-container">
      <helper-table v-if="sheetValidationErrors">
        <template #header>
          <th scope="col">Row</th>
          <th scope="col">Attribute</th>
          <th scope="col">Errors</th>
          <th scope="col">Values</th>
        </template>
        <template #body>
          <tr
            style="background-color: white; color: red"
            v-for="error in sheetValidationErrors"
            :key="error"
          >
            <td class="text-left align-middle">{{ error.row }}</td>
            <td class="text-left align-middle">{{ error.attribute }}</td>
            <td class="text-left align-middle">
              <ul v-for="rowError in error.errors" :key="rowError">
                <li>{{ rowError }}</li>
              </ul>
            </td>
            <td class="text-left align-middle">
              <ul>
                <li>
                  Site Code:{{ error.values["Problem source site code"] }}
                </li>
                <li>
                  Site Name:{{ error.values["Problem source site name"] }}
                </li>
              </ul>
            </td>
          </tr>
        </template>
      </helper-table>
    </div>
  </div>
</template>

<script>
import NUR from "../../../apis/NUR";

export default {
  data() {
    return {
      weeks: [],
      years: [],
      year: "",
      week: "",
      cells: "",
      total_net_cells:'',
      Nur4GSheet: null,
      cellsErrors: null,
      total_net_cellsErrors:null,

      sheetValidationErrors: null,

      yearErrors: null,

      weekErrors: null,

      Nur4GSheetErrors: null,
      serverError: null,

      successMessage: null,

      showModal: false,
      showSpinner: false,
    };
  },
  name: "NUR4G",
  computed: {
  
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (!vm.isLogin) {
        return vm.$router.push("/user/login");
      }
    });
  },
  methods: {
    submit4GNurSheet() {
      this.weekErrors = null;
      this.serverError = null;
      this.yearErrors = null;
      this.sheetValidationErrors = null;
      this.cellsErrors = null;
      this.total_net_cellsErrors=null
      var data = {
        Nur4G_sheet: this.Nur4GSheet,
        week: this.week,
        year: this.year,
        cells: this.cells,
        total_net_cells:this.total_net_cells
      };
      this.showSpinner = true;
    
        NUR.submit4GNurSheet(data)
        .then((response) => {
          console.log(response.data.message);
          this.successMessage = response.data.message;
          this.$toast.add({
            severity: "success",
            summary: "Success Message",
            detail: "inserted Successfully",
            life: 6000,
          });
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            if (error.response.status == 500) {
              this.serverError = error.response.data.message;
            }
            if (error.response.status == 422) {
              if (error.response.data.errors) {
                var errors = error.response.data.errors;
                if (errors.week) {
                  this.weekErrors = errors.week;
                }
                if (errors.year) {
                  this.yearErrors = errors.year;
                }
                if (errors.Nur4G_sheet) {
                  this.Nur4GSheetErrors = errors.Nur4G_sheet;
                }
                if (errors.cells) {
                  this.cellsErrors = errors.cells;
                }
                if (errors.total_net_cells) {
                  this.total_net_cells = errors.total_net_cells;
                }
              } else if (error.response.data.sheet_errors) {
                this.sheetValidationErrors = error.response.data.sheet_errors;
              } else if (error.response.data.week_year) {
                this.serverError = error.response.data.week_year;
              }
            }
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          //   console.log(error.config);
        })
        .finally(() => {
          this.showSpinner = false;
          this.week = "";
          this.year = "";
          var energy_sheet = document.getElementById("energy_sheet");
          energy_sheet.value = "";
        });
    },
    Nur4GSheetFile(e) {
      return (this.Nur4GSheet = e.target.files[0]);
    },

    closeModal() {
      return (this.showModal = false);
    },
    getNur4GSIndex() {
      this.serverError = null;
      this.yearErrors = null;
      this.weekErrors = null;

       NUR.get4GNurIndex()
   
        .then((response) => {
          this.weeks = response.data.weeks;
          this.years = response.data.years;
        })
        .catch((error) => {
          if (error.response.status == 500) {
            this.serverError = "internal Server Error";
          }
        });
    },
  },
  mounted() {
    this.getNur4GSIndex();
  },
};
</script>

<style lang="scss" scoped>
.index,
.helper-table-container {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
}
.index {
  margin-top: 6em;
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 2rem;
      font-weight: 900;
      color: darkmagenta;
    }
  }
}
</style>