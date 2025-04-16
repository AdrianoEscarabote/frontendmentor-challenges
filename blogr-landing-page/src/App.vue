<script setup lang="ts">
import HeaderComponent from './components/Header/HeaderComponent.vue'
import FooterComponent from './components/Footer/FooterComponent.vue'
import InfrastructureSection from './components/InfrastructureSection/InfrastructureSection.vue'
import FeatureWithIllustration from './components/FeatureWithIllustration/FeatureWithIllustration.vue'
import FeatureHighlight from './components/FeatureHighlight/FeatureHighlight.vue'
</script>

<template>
  <HeaderComponent />

  <main>
    <FeatureHighlight />
    <InfrastructureSection />
    <FeatureWithIllustration />
  </main>

  <FooterComponent />
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
