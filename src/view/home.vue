<template>
  <div class="flex justify-center h-screen bg-black">
    <img class="max-w-xs max-h-64 m-auto"  :src="logo" />
  </div>
</template>

<script>
// import Header from "../components/layout/header/header";
// import Footer from "../components/layout/footer/footer";
import logo from "../assets/gif/coming-soon.gif";
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
