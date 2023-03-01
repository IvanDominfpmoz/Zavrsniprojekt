<template>
  <div class="account-profile">
    
        <v-btn
          @click="isActiveDropdown = !isActiveDropdown"
        >
          Profile
        </v-btn>

      <AccountProfileDropdown v-if="isActiveDropdown"/>
  </div>
</template>

<script>
import AccountProfileDropdown from "@/components/dashboard/AccountProfileDropdown.vue"
  export default {
    name:"AccountProfile",
    components:{
      AccountProfileDropdown,
    },
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      isActiveDropdown: false
    }),
  }
</script>
<style scoped>
.account-profile{
  @apply flex justify-center
}
</style>