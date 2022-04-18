<template>
  <img class="w-full" :src="logo" />
</template>

<script>
// import Header from "../components/layout/header/header";
// import Footer from "../components/layout/footer/footer";
import logo from "../../assets/gif/coming-soon.gif";
export default {
  name: "HomePage",
  components: {
    // Header,
    // Footer,
  },
  data: function () {
    return {
      logo: logo,
    };
  },
};
</script>
