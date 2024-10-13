<template>
  <div class="page-wrapper">
    <!-- Navbar -->
    <nav class="navbar" :class="{ scrolled: isScrolled }">
      <div style="display: flex; justify-content: space-between; align-items: center; width: 90%; margin: auto;">
  <div class="logo" style="width: 70px; height: 70px;">
    <img src="../assets/image/logo.png" alt="ESSL Logo" style="width: 100%; height: 100%; object-fit: cover;" />
  </div>
  <ul class="nav-links">
    <li v-for="(item, index) in navItems" :key="index"   >
      <a 
      
        href="#" 
        @click="setActiveNav(index,item)" 
        :class="{ active: activeNavIndex === index }">
        {{ item }}
      </a>
    </li>
    <li>
      <button class="register-btn">Register</button>
    </li>
  </ul>
</div>
</nav>

    <!-- Event Section -->
    <div class="event-section"  :class="{ scrolled: isScrolled }" >
      <div 
        class="event-item" 
        v-for="(event, index) in events" 
        :key="index" 
        @click="redirectToSchool(event)" 
        :class="{ active: activeEventIndex === index }">
         {{ event }}
      </div>
    </div>

    <!-- Full-Screen Overlay for Schools -->
  
    <!-- District Screen for Each Region -->
    <!-- District Screen for Each Region -->


  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "NavbarEvents",
  data() {
    return {
      events: ["EVENTS", "STANDINGS", "RESOURCES", "SCHOOLS", "VIDEO'S/MEDIA", "SPONSORS"],
      navItems: ['About Us', 'Sponsors', 'Contact'],
      activeNavIndex: 0,
      activeEventIndex: null,
      isFullScreen: false,
      isDistrictScreenVisible: false,
      currentRegion: "",
      districts: {
        brooklyn: ["DISTRICT 13", "DISTRICT 14", "DISTRICT 15"],
        manhattan: ["DISTRICT 1", "DISTRICT 2", "DISTRICT 3"],
        "staten-island": ["DISTRICT 31"],
        queens: ["DISTRICT 24", "DISTRICT 25", "DISTRICT 26"],
        bronx: ["DISTRICT 7", "DISTRICT 8", "DISTRICT 9"]
      },
      schools: [], // Holds the schools fetched from the API
      filteredSchools: [], // Holds the filtered schools based on selected region
      selectedDistrict: [],
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll); // Add scroll event listener
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll); // Clean up event listener
  },
  methods: {
    setActiveNav(index,item) {
     
      this.activeNavIndex = index;
      this.$router.push({ path: `/${item}` });
    },
    setActiveEvent(index) {
      this.activeEventIndex = index;
    },
    openFullScreen() {
      this.isFullScreen = true;
    },
    closeFullScreen() {
      this.isFullScreen = false;
    },
    async openRegion(region) {
      this.isFullScreen = false;
      this.currentRegion = region;
      this.isDistrictScreenVisible = true;

      // Fetch schools based on the current region
      await this.fetchSchools(region);
    },
    async opendistrict(region) {
      this.isFullScreen = false;
      this.currentRegion = region;
      this.isDistrictScreenVisible = true;

      // Fetch schools based on the current region
      await this.fetchSchools(region);
    },
    closeDistrictScreen() {
      this.isDistrictScreenVisible = false;
      this.filteredSchools = []; // Clear filtered schools when closing the district screen
    },
    redirectToSchool(event) {
      // Use Vue Router to navigate to the school-specific page
      this.$router.push({ path: `/${event=='SCHOOLS'?'statpage':event}` });
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50; // Check if scroll position is greater than 50px
    },
    async fetchSchools(region) {
  console.log(region);
  try {
    const response = await axios.get(`https://growlotusfintech.in/school-app-backend-main/api/schools`);
    
    // Ensure you're accessing the right structure in the API response
    this.schools = response.data || []; // Adjust according to your response structure
    console.log("All Schools:", this.schools);
    
    // Check if the region matches the school.city property
    this.filteredSchools = this.schools.filter(school => {
       

               
          if(school.city.toLowerCase() === region ){
          
         return school
          }
        });

  
    console.log("Selected District:", this.selectedDistrict); // Check the selected district
    console.log("Filtered Schools:", this.filteredSchools); // Check the filtered schools
  } catch (error) {
    console.error("Error fetching schools:", error);
  }
    }
  }
};
</script>

<style scoped>
/* Page Wrapper */
.register-btn{
  background-color: #f47c3c;
  color: #fff;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  cursor: pointer;
  font-family: sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  transition: 0.4s;
}
.register-btn:hover{
  background-color: #cd4b13;
}
.page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  position: fixed;
  width: 100%;
  z-index: 100;
}

/* Navbar */
/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 88%;
  margin: auto;
  padding: 5px;
  background-color: transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.navbar.scrolled {
  background-color: white; /* Change background color when scrolled */
  color: black; /* Change text color when scrolled */
}

.nav-links li a {
  text-decoration: none;
  color: #fff; /* Default color */
  font-weight: 500;
  padding: 5px 0;
  position: relative;
  transition: color 0.3s ease;
}

.navbar.scrolled .nav-links li a {
  color: #000; /* Change link color when scrolled */
}

.register-btn {
  background-color: #f47c3c;
  color: #fff;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}



.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: auto;
  padding: 5px 0px;
  background-color: transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.event-section.scrolled{
  background-color: #ffff;
  color: #000;
  box-shadow: 0 5px 5px rgba(0,0,0,0.1);
}
.event-section.scrolled .event-item{
  color: #000;

}


.nav-links {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 32px;
  margin: 12px;
}

.nav-links li a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  padding: 5px 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #f47c3c;
}

/* Active class for the navbar items */
.nav-links li a.active {
  color: #f47c3c;
  font-weight: bold;
}

.nav-links li a.active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 3px;
  background-color: #f47c3c;
}

/* Event Section */
.event-section {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px;
  border-top: 1px solid #d3d3d3;
  z-index: 1000;
}

.event-item {
  padding: 10px 20px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 1px;
  cursor: pointer;
  transition: color 0.3s ease;
}

/* Full-Screen Overlay */
.fullscreen-overlay {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: slideIn 0.4s ease-in-out forwards;
}

/* Animation for the full-screen to slide in from bottom-left */
@keyframes slideIn {
  0% {
    transform: translate(-100%, 100%);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}

/* Close icon in top-right */
.close-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  color: white;
  cursor: pointer;
  z-index: 1000;
}

/* School content layout and text */
.school-content {
  position: relative;
  width: 100%;
  height: 100%;
  color: white;
}

.school-item {
  position: absolute;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}
.school-item::after{
  content: '';
  position: absolute;
  
  left: 0;
  bottom: 0;
  width: 0%;
  height: 3px;
  background: rgba(255, 255, 255, 1);
  transition: 0.4s;
}
.school-item:hover::after{
  width: 100%;
}
.brooklyn {
  top: 10%;
  left: 10%;
}

.manhattan {
  top: 10%;
  right: 10%;
}

.staten-island {
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
}

.queens {
  bottom: 10%;
  left: 10%;
}

.bronx {
  bottom: 10%;
  right: 10%;
}

/* District Screen Layout */
.district-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000000;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
}
.district-screen h1{
  font-size: 4rem;
  font-weight: 100;
  margin-bottom: 70px;
}

.districts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  grid-row-gap: 100px;
  width: 90%;
  margin: 0 auto;
}

.district-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
}

.district-circle {
 display:flex;
 flex-direction: column;
 text-align: center
}

select.district-circle{
  /* height: 40px;
  width: 200px;
  margin-top: 10px;
  font-size: 1.1rem;
  background-color: #000;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px; */
 padding: 10px 20px;
 font-size: 1.2rem;
 background-color: transparent;
 color: #fff;
 border-radius:5px ;
}
</style>
