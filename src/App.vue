<template>
  <Loader v-if="!componentsReady" />
  <div v-else>
    <router-view />
  </div>
</template>

<script>
// import Header from "./components/layout/header";
// import Footer from "./components/layout/footer";
import Loader from "./components/loader";

export default {
  name: "App",
  components: {
    // Header,
    // Footer,
    Loader,
  },
  data() {
    return {
      componentsReady: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.componentsReady = true;
    });
  },
};
</script>
