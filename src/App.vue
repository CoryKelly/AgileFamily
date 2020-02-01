<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link to="/" tag="span" style="cursor: pointer;">
        <v-toolbar-title class="hidden-xs-only"
          ><strong>Agile</strong>Family</v-toolbar-title
        >
      </router-link>
      <v-spacer></v-spacer>

      <v-btn
        v-for="item in horizontalNavItems" :key="item.id"
        class="ma-5 ma-md-10" text icon tile small color="blue-grey">
        <v-icon color="white" class="hidden-sm-and-down">{{item.icon }}</v-icon>
        <router-link :to="item.link">
          <span style="color:white">{{ item.title }}</span>
        </router-link>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>



    <!-- Footer -->
    <v-footer app color="primary" class="white--text">
      <span>Made with ❤️ for you!</span>
      <v-spacer />
      <span>AgileFamily &copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  computed: {
    horizontalNavItems() {
      return [
        {id: 1, icon: "mdi-pencil", title: "Add Task", link: "/addTask"}
      ];
    }
  }
}
</script>
