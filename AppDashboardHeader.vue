<template>
  <div id="dashboard-header">
    <v-col md="8">
      <AppFilterSearch
        @showHeadwear="navigateToHeadwear"
        @showChestwear="navigateToChestwear"
        @showShoes="navigateToShoes"
      />
    </v-col>
    <v-col md="4">
      <AccountProfile/> </v-col>
  </div>
</template>

<script>
import AppFilterSearch from "@/components/AppFilterSearch.vue";
import AccountProfile from "@/components/dashboard/AccountProfile.vue";
export default {
  name: "AppDashboardHeader",
  components: {
    AppFilterSearch,
    AccountProfile,
  },
  data(){
    return{
    }
  },
  methods:{
    navigateToHeadwear(){
      this.$emit('showHeadwear')
    },
    navigateToChestwear(){
      this.$emit('showChestwear')
    },
    navigateToShoes(){
      this.$emit('showShoes')
    }
  }
};
</script>

<style scoped>
#dashboard-header {
  @apply h-24 top-0 z-50 ;
  @apply flex flex-row w-full items-center;
  background-color: #c5c5c5;
}
</style>
