<template>
  <Header />
  <main> The main page </main>
  <Footer />
</template>

<script>
import Header from "../components/layout/header/header";
import Footer from "../components/layout/footer/footer";
export default {
  name: "HomePage",
  components: {
    Header,
    Footer,
  },
};
</script>
