<template>
  <div class="page-wrapper">
    <!-- Navbar -->
    <nav class="navbar" :class="{ scrolled: isScrolled }">
      <div class="navbar-container">
        <div class="logo" @click="redirectToHome">
          <img src="../assets/image/logo.png" alt="ESSL Logo" />
        </div>
        <div class="menu-icon" @click="toggleMenu">
          <span :class="{ 'open': isMenuOpen }"></span>
          <span :class="{ 'open': isMenuOpen }"></span>
          <span :class="{ 'open': isMenuOpen }"></span>
        </div>
        <ul class="nav-links" :class="{ 'active': isMenuOpen }">
          <li v-for="(item, index) in navItems" :key="index">
            <a
              href="#"
              @click="setActiveNav(index, item); toggleMenu"
              :class="{ active: activeNavIndex === index }"
            >
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
    <div class="event-section" :class="{ scrolled: isScrolled }">
      <div
        class="event-item"
        v-for="(event, index) in events"
        :key="index"
        @click="redirectToSchool(event)"
        :class="{ active: activeEventIndex === index }"
      >
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
      isMenuOpen: false, // State to control menu visibility
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll); // Add scroll event listener
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll); // Clean up event listener
  },
  methods: {
    setActiveNav(index, item) {
      this.activeNavIndex = index;
      this.$router.push({ path: `/${item}` });
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle the menu state
    },
    redirectToSchool(event) {
      this.$router.push({ path: `/${event === 'SCHOOLS' ? 'statpage' : event === 'EVENTS' ? 'event' : 'not fund'}` });
    },
    redirectToHome() {
      this.$router.push({ path: `/` });
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50; // Check if scroll position is greater than 50px
    },
    async fetchSchools(region) {
      try {
        const response = await axios.get(`https://growlotusfintech.in/school-app-backend-main/api/schools`);
        this.schools = response.data || []; // Adjust according to your response structure
        this.filteredSchools = this.schools.filter(school => school.city.toLowerCase() === region);
      } catch (error) {
        console.error("Error fetching schools:", error);
      }
    }
  }
};
</script>

<style scoped>
/* Page Wrapper */
.register-btn {
  background-color: #f47c3c;
  color: #fff;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-family: sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  transition: 0.4s;
}
.register-btn:hover {
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
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.navbar.scrolled {
  background-color: white; /* Change background color when scrolled */
  color: black; /* Change text color when scrolled */
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%; /* Adjust width as needed */
}

.logo img {
  width: 70px;
  height: 70px;
  cursor: pointer;
}

.menu-icon {
  display: none; /* Hidden by default */
  flex-direction: column;
  cursor: pointer;
}

.menu-icon span {
  height: 3px;
  width: 25px;
  background-color: #f47c3c;
  margin: 3px;
  transition: all 0.3s ease;
}

/* Toggle Menu Open */
.menu-icon span.open {
  background-color: #cd4b13; /* Change color when open */
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
  color: #fff; /* Default color */
  font-weight: 500;
  padding: 5px 0;
  position: relative;
  transition: color 0.3s ease;
}

.navbar.scrolled .nav-links li a {
  color: #000; /* Change link color when scrolled */
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

/* Responsive Styles */
@media (max-width: 768px) {
  .menu-icon {
    display: flex; /* Show menu icon on smaller screens */
  }

  .nav-links {
    display: none; /* Hide nav links by default */
    flex-direction: column;
    position: absolute;
    top: 70px; /* Adjust based on your navbar height */
    left: 0;
    width: 100%;
    background-color: white; /* Change background color */
    padding: 10px;
    z-index: 100;
  }

  .nav-links.active {
    display: flex; /* Show when active */
  }

  .register-btn {
    width: 100%; /* Full-width on small screens */
    margin-top: 10px; /* Space between button and links */
  }

  .event-section {
    flex-direction: column;
    align-items: center;
  }

  .event-item {
    width: 100%; /* Full-width event items */
    text-align: center; /* Center text */
  }
}
</style>
