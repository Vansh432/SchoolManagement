<template>
    <div class="about-section">
      <div class="about-text">
        <h1>About Us</h1>
        <p>Our objective is to enhance the elementary school experience by implementing organized, athletic programs in urban-based school districts. Within schools, physical education and sports are essential components of quality education.

Our current sports initiatives are Basketball and Soccer Leagues…we have serviced over 60 schools throughout the boroughs of Brooklyn, Queens, The Bronx & Manhattan.
Our current sports initiatives are Basketball and Soccer Leagues…we have serviced over 60 schools throughout the boroughs of Brooklyn, Queens, The Bronx & Manhattan
Our current sports initiatives are Basketball and Soccer Leagues…we have serviced over 60 schools throughout the boroughs of Brooklyn, Queens, The Bronx & Manhattan
Our current sports initiatives are Basketball and Soccer Leagues…we have serviced over 60 schools throughout the boroughs of Brooklyn,  
</p>
      </div>
      <div class="about-photos">
        <div class="photo" id="photo1" data-aos="fade-up">
            <img src="https://images.pexels.com/photos/2874717/pexels-photo-2874717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="loading" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">
        </div>
        <div class="photo" id="photo2" data-aos="fade-up">
            <img src="https://images.pexels.com/photos/267761/pexels-photo-267761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="loading" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">
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
    align-items: center;
    justify-content: space-between;
    padding: 40px 80px;
   
    height: 400px
  }
  
  .about-text {
    font-size: 36px;
    font-weight: bold;
  }
  .about-text h1{
   font-size: 2.5rem;
   font-weight: 700;
    margin: 10px 0px;
    font-family: sans-serif;
    color: #F47C3C;
  }
  .about-photos {
    display: flex;
    gap: 20px;
  }
  .about-text p{
    font-size: 1.07rem;
    line-height: 33px;
    font-family: sans-serif;
     color: #5c5b5b;
     font-weight: 500;
  }  
  
  .photo {
    width: 250px;
    height: 320px;
    background-color: #004c64;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
   border-radius: 10px;
  }
  
  #photo1 {
    transform: translate(200px, -20px);
  }
  
  #photo2 {
    transform: translate(-250px, 140px);
  }
  </style>
  