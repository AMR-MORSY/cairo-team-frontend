<template>
  <div class=" w-full flex justify-center overflow-hidden px-5 pb-3 mt-36 mb-5">
    <TransitionGroup class="grid max-w-fit  mx-auto grid-cols-3 gap-4   mt-5" tag="div" name="cards" appear>
      <div class="col-span-3 md:col-span-1 mt-5" v-for="card in cards" :key="card.id">
        <div class="card px-7" @click.self="formatElement(card.id)">
          <span class="material-symbols-rounded"> {{ card.icon }} </span>
          <p>{{ card.path }}</p>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script>
import Sites from '../../../apis/Sites';
export default {
  data() {
    return {
      cards: null,
    };
  },
  created() {
    this.cards = [
      // { id: 1, icon: "add_circle", path: "New sites" },
      // { id: 2, icon: "add_circle", path: "Cascades" },
      // { id: 3, icon: "add_circle", path: "Nodals" },
      { id: 4, icon: "add_circle", path: "New site" },
      { id: 5, icon: "download", path: "Cairo Sites" },
      { id: 6, icon: "download", path: "Download Nodals" },
    ];
  },
  name: "sites",

  methods: {
    formatElement(id) {
      let card = this.cards.filter((element) => {
        return element.id == id;
      });

      if (card[0].path == "New sites") {
        this.$router.push("/sites/storeSites");
      }

      else if (card[0].path == "New site") {


        this.$router.push({ path: "/sites/storeSite" });
      }

      else if (card[0].path == "Cascades") {
        this.$router.push("/sites/cascades");
      }

      else if (card[0].path == "Nodals") {
        this.$router.push("/sites/nodals");
      }

      else if (card[0].path == "Cairo Sites") {
        Sites.downloadAll()
          .then((response) => {

            var fileUrl = window.URL.createObjectURL(new Blob([response.data]));
            var fileLink = document.createElement("a");
            fileLink.href = fileUrl;
            fileLink.setAttribute("download", "AllSites.xlsx");
            document.body.appendChild(fileLink);
            fileLink.click();
          })
          .catch();

      }

      else if (card[0].path == "Download Nodals") {
        Sites.downloadNodals()
          .then((response) => {
            console.log(response);
            var fileUrl = window.URL.createObjectURL(new Blob([response.data]));
            var fileLink = document.createElement("a");
            fileLink.href = fileUrl;
            fileLink.setAttribute(
              "download",
              `Nodals.xlsx`
            );
            document.body.appendChild(fileLink);
            fileLink.click();
          })
          .catch((error) => { });

      }

    },
  },
};
</script>

<style lang="scss" scoped >
.card {
  background-color: white;
  box-shadow: 1px 3px 5px rgba($color: white, $alpha: 0.1);
  height: 250px;
  width: 100%;
  transition: all 0.5s ease;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid gray ;
  border-radius: 5px;


}

.card span {
  text-align: center;
  font-size: 5rem;
  z-index: 1;
  color: gray;
}

.card p {
  text-align: center;
  font-size: 2rem;
  color: gray;
}

.card:hover {
  transform: scale(1.02);
  transition: all 0.5s ease;
}

.cards-enter-from {
  opacity: 0;

  transform: scale(0.7);
}

.cards-enter-active {
  transition: all 1s ease;
}
</style>