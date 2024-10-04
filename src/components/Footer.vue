<template>
    <footer class="footer">
      <div class="footer-content">
        <!-- <LogoSection /> -->
        <FooterLinks />
        <SocialMediaIcons />
      </div>
    </footer>
  </template>
  
  <script>
  // import LogoSection from './LogoSection.vue';
  import SocialMediaIcons from './SocialMediaIcons.vue';
  import FooterLinks from './FooterLinks.vue';
  
  export default {
    name: 'AppFooter', // Rename the component to AppFooter
    components: {
      // LogoSection,
      SocialMediaIcons,
      FooterLinks
    }
  };
  </script>

<style scoped>
.footer {
    background-color: #f49259;
    padding: 10px 60px;
    color: white;
    font: bold 11px/20px Verdana, Geneva, sans-serif; 
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        align-items: center;
    }
}
</style>