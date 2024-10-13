<template>
  <div class="app-container">
    <div class="container mt-5">
      <div class="rowflex">
        <div class="col-lg-6 col-md-12">
          <div class="left-side">
            <!-- Pass logo and sub-logo to schoolImage component -->
            <schoolImage
              :logoSrc="school.logo ? `https://growlotusfintech.in/school-app-backend-main/storage/app/public/schools/${school.logo}` : ''"
              subLogoSrc="path_to_sub_logo_image"
            />
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="right-side">
            <!-- Pass school details to SchoolContent component -->
            <SchoolContent
              :schoolName="school.name"
              :schoolAddress="`${school.address}, ${school.city}, ${school.state}, ${school.zip}`"
              :neighborhood="school.neighborhood"
              :mobileNo="school.principal_phone_number"
              :priName="school.principal_name"
              :fax="'N/A'"  
              :district="school.city" 
              :principalEmail="school.email" 
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-side">
      <SchoolTab />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import schoolImage from "./schoolImage.vue";
import SchoolContent from "./SchoolContent.vue";
import SchoolTab from "./SchoolTab.vue";

export default {
  name: "SchoolPage",
  components: {
    schoolImage,
    SchoolContent,
    SchoolTab,
  },

  data() {
    return {
      schoolId: this.$route.params.id, // Use ID from route params
      school: {}, // To store the school details
    };
  },
  watch: {
    '$route.params.id'(newId) {
      this.schoolId = newId;
      this.fetchSchoolData();
    },
  },
  created() {
    this.fetchSchoolData();
  },
  methods: {
    async fetchSchoolData() {
      try {
        // Log the school ID being used in the API call
        console.log(`Fetching data for school ID: ${this.schoolId}`);

        const response = await axios.get(`https://growlotusfintech.in/school-app-backend-main/api/schools/${this.schoolId}`);
        
        // Log the API response to verify its structure
        console.log('API response:', response.data);

        this.school = response.data;
      } catch (error) {
        console.error('Error fetching school data:', error);
      }
    }
  }
};
</script>

<style scoped>
.app-container {
  padding-top: 109px;
    padding-left: 100px;
    padding-right: 100px;
}

.left-side {
  text-align: center;
}

.bottom-side {
  clear: both;
  width: 100%;
}
.rowflex
{
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 70px
}

.signuplogin a {
  color: #fff !important;
  text-decoration: none;
  position: relative;
}
</style>
