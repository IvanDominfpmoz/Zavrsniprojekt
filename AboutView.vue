<template>
  <div>
    <div class="about-view">
      <NavMenu />
      <div class="about-card">
        <v-card width="500" class="py-5">
          <div class="text-3xl"><strong>About</strong></div>
          <br />
          <div>
            <strong>Phone number: </strong><br />
            665 106 1360
          </div>
          <div>
            <strong>Email: </strong><br />
            dominkovicivan8@gmail.com
          </div>
          <div>
            <strong>Working hours:</strong> <br />
            Mon-Sat <br />
            07:30 AM - 15:30 PM
          </div>

          <strong>Crew:</strong>
          <div class="crew-div">
            <img
              :src="crewPhoto"
              alt="Crew"
              height="700"
              width="300"
              class="rounded-xl"
            />
          </div>
          <div>
            <p class="p-5">
              <strong>Description: {{ description }}</strong>
            </p>
          </div>
        </v-card>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavMenu from "@/components/navigation/NavMenu.vue";
import Footer from "@/components/navigation/Footer.vue";
import crewPhoto from "@/assets/about/crewPhoto.jpg";

export default {
  name: "AboutView",
  components: {
    NavMenu,
    Footer,
  },
  data() {
    return {
      crewPhoto: crewPhoto,
      description:
        "Ivan Dominković-rođen 10.02.2000. godine u Vinkovcima. Osnovnu školu sam završio u Tolisi, a srednju školu sam išao u Orašju te završio 4 godine opće gimnazije. Trenutno pohađam Fakultet prirodoslovnih-matematičkih i odgojnih znanosti, institucija  Sveučilišta u Mostaru.",
    };
  },
};
</script>

<style scoped>
.about-view {
  @apply flex flex-row w-full h-full mb-5;
}
.about-card {
  @apply flex flex-col justify-center items-center w-full h-full pt-16;
}
@media screen and (max-width: 600px) {
  .about-card{
    @apply mt-40;
  }
}
::v-deep .v-sheet.v-card {
  @apply rounded-xl;
}
.crew-div {
  @apply flex justify-center items-center;
}
::v-deep .footer{
  @apply relative;
}
</style>
