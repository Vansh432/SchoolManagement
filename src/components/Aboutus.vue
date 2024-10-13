<template>
  <div class="about-section">
    <div class="about-text">
      <h1>About Us</h1>
      <p>
        Our objective is to enhance the elementary school experience by implementing organized, athletic programs in urban-based school districts. Within schools, physical education and sports are essential components of quality education.
        <br /><br />
        Our current sports initiatives are Basketball and Soccer Leagues…we have serviced over 60 schools throughout the boroughs of Brooklyn, Queens, The Bronx & Manhattan.
      </p>
    </div>
    <div class="about-photos">
      <div class="photo" id="photo1" data-aos="fade-up">
        <img src="https://images.pexels.com/photos/2874717/pexels-photo-2874717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="loading" />
      </div>
      <div class="photo" id="photo2" data-aos="fade-up">
        <img src="https://images.pexels.com/photos/267761/pexels-photo-267761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="loading" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUsSection",
};
</script>

<style scoped>
.about-section {
  display: flex;
  align-items: flex-start; /* Align text at the top */
  justify-content: space-between;
  padding: 40px;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

.about-text {
  flex: 1 1 60%; /* Allow text to take 60% of the width */
  padding: 20px; /* Padding around text */
}

.about-text h1 {
  font-size: 2.5rem; /* Heading size */
  font-weight: 700;
  margin: 10px 0;
  font-family: sans-serif;
  color: #F47C3C;
}

.about-text p {
  font-size: 1.07rem; /* Paragraph size */
  line-height: 1.5; /* Line height for readability */
  font-family: sans-serif;
  color: #5c5b5b;
  font-weight: 500;
}

.about-photos {
  display: flex;
  gap: 20px;
  flex: 1 1 35%; /* Allow photos to take 35% of the width */
}

.photo {
  width: 100%; /* Make photo take full width */
  height: auto; /* Maintain aspect ratio */
  max-width: 250px; /* Limit max width */
  border-radius: 10px;
  overflow: hidden; /* Ensure images don't overflow */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.photo img {
  width: 100%; /* Image responsive */
  height: auto; /* Maintain aspect ratio */
}

@media (max-width: 768px) {
  .about-section {
    padding: 20px; /* Less padding on smaller screens */
    flex-direction: column; /* Stack content vertically */
    align-items: center; /* Center content */
  }

  .about-text {
    flex: 1 1 100%; /* Allow text to take full width */
    text-align: center; /* Center text */
  }

  .about-photos {
    justify-content: center; /* Center photos */
    flex-wrap: wrap; /* Wrap photos */
  }

  .photo {
    max-width: 200px; /* Reduce photo size */
    margin-bottom: 20px; /* Add spacing below photos */
  }
}

@media (max-width: 480px) {
  .about-text h1 {
    font-size: 2rem; /* Reduce heading size */
  }

  .about-text p {
    font-size: 0.9rem; /* Reduce paragraph size */
  }

  .photo {
    max-width: 150px; /* Further reduce photo size */
  }
}
</style>
