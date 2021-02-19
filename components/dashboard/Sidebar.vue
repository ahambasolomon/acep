<template>
  <div>
    <div class="sidebar">
      <div class="sidebar--logo">
        <img src="@/static/assets/logo.png" class="mt-2 text-center mb-3" width="150" height="50" alt="">
      </div>
      <div class="sidebar--navigation">

        <NuxtLink class="sidebar--navigation--container" to="/dashboard">
          <div class="sidebar--navigation--container--icons">
            <b-icon-columns class="h4 mr-3"></b-icon-columns>
          </div>
          <span class="h6 sidebar--navigation--container--links">
            DASHBOARD
          </span>
        </NuxtLink>

        <NuxtLink class="sidebar--navigation--container" to="/dashboard/exams">
          <div class="sidebar--navigation--container--icons">
            <b-icon-columns-gap class="h4 mr-3"></b-icon-columns-gap>
          </div>
          <span class="h6 sidebar--navigation--container--links">
            EXAM
          </span>
        </NuxtLink>

        <NuxtLink class="sidebar--navigation--container" to="/dashboard">
          <div class="sidebar--navigation--container--icons">
            <b-icon-person-fill class="h4 mr-3"></b-icon-person-fill>
          </div>
          <span class="h6 sidebar--navigation--container--links">
            PROFILE
          </span>
        </NuxtLink>

      </div>
      <div class="sidebar--sidebarquick">
        <div class="quick-box">
          Start preping for your test right now
        </div>
        <div class="quick-button">
          <b-button type="submit" block  variant="primary">Start an exam</b-button>
        </div>
    </div>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert';
export default {
   methods: {
    logout() {
      swal({
        title: "Confirm",
        text: "Are you sure you want to Log out ?",
        icon: "warning",
        button: "Aww yiss!",
      }).then((res) => {
        if (res == true) {
          this.$auth.logout()
        }
      });
    },
  },
}
</script>
