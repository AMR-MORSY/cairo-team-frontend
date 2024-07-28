<template>
  <div v-if="serverError">
    <p style="color: red">{{ serverError }}</p>
  </div>
  <section id="analysis" v-if="status">
    <div class="container">
      <div class="card ">

        <div class="col-12 mb-1">
          <h5>Select modifications:</h5>
        </div>
        <form @submit.prevent="submitFilterForm">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="form-group ">
                <select class="form-select" @change="submitColumn" id="column">
                  <option value="">Filter By:</option>
                  <option v-for="column in columns" :key="column">
                    {{ column }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-group ">
                <select class="form-select" @change="submitColumnValue" id="columnValue">
                  <option value=""></option>
                  <option v-for="value in columnValues" :key="value">
                    {{ value }}
                  </option>
                </select>
              </div>
            </div>

            <div class="col-12 mt-3">
              <div class="button-container">
                <button class="btn" :disabled="disabled" type="submit" style="background-color: #79589f; color: white">
                  submit
                </button>
                <!-- <button class="btn btn-primary"[disabled]='!isDataFound'  (click)="downloadsites()">Excel Export</button> -->
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Modifications from "../../../apis/Modifications";


export default {
  data() {
    return {
      column: null,
      columnValue: null,
      columns: null,
      columnValues: null,
      status: null,
      subcontractor: null,
      project: null,
      requester: null,
      serverError: null,
      display: true,
    };
  },
  name: "modifications",
  computed: {
    disabled() {
      if (!this.column || !this.columnValue) {
        return true;
      }
      if (this.column && this.columnValue) {
        return false;
      }
    },


  },
  mounted() {
    this.getModificationAnalysis();
  },

  methods: {
    submitColumn(e) {
      this.column = e.target.value;

      if (this.column == "status") {
        this.columnValues = this.status;
      } else if (this.column == "subcontractor") {
        this.columnValues = this.subcontractor;
      } else if (this.column == "requester") {
        this.columnValues = this.requester;
      } else if (this.column == "project") {
        this.columnValues = this.project;
      }
    },
    submitColumnValue(e) {
      this.columnValue = e.target.value;
    },
    getModificationAnalysis() {
      Modifications.getModificationAnalysis()

        .then((response) => {
          this.status = response.data.index.status;
          this.subcontractor = response.data.index.subcontractor;
          this.project = response.data.index.project;
          this.requester = response.data.index.requester;
          this.columns = ["status", "subcontractor", "requester", "project"];
        })
        .catch((error) => {
          if (error.response.status == 500) {
            this.serverError = error.response.data.message;
          }
        });
    },
    submitFilterForm() {
     
      this.$router.push(
        `/modifications/index/${this.column}/${this.columnValue}`
      );
    },
  },
};
</script>

<style lang="scss" scoped>
#analysis {
  margin-top: 5rem;

  .card {
    padding: 2rem 2rem;
    width: 60%;
    margin: auto;

    .form-group {
      margin-bottom: 1rem;
    }
  }
}


@media (min-width:320px) {

  /* smartphones, iPhone, portrait 480x320 phones */
  #analysis {

    .card {

      width: 95%;


    }
  }

}

@media (min-width:481px) {

  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
  #analysis {

    .card {

      width: 90%;


    }
  }
}

@media (min-width:641px) {

  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  #analysis {

    .card {

      width: 80%;


    }
  }
}

@media (min-width:961px) {

  /* tablet, landscape iPad, lo-res laptops ands desktops */
  #analysis {

    .card {

      width: 80%;


    }
  }
}

@media (min-width:1025px) {

  /* big landscape tablets, laptops, and desktops */
  #analysis {

    .card {

      width: 75%;


    }
  }
}</style>