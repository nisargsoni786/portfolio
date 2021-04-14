import React from "react";
import "./../cssjs/bootstrap.min.css";

function Portfolio() {
  return (
    <section id="portfolio" class="portfolio section-bg">
      <div class="container">
        <div class="section-title">
          <h2>Projects </h2>
          <p>
            I have done different kind of projects on different skills.
            skills like data science,machine learning,MERN applications etc.
          </p>
        </div>

        <div class="card" data-aos="zoom-in" style={{ width: "100%" }}>
          <div class="card-header card-title">Temperature control smart fan</div>
          <div class="card-body">
            <p class="card-text">
            As part of this Project, We Detected The Temperature using Sensor. Then using raspberry pi we controlled 
            the speed of the fan as per the Temperature.
            </p>
          </div>
        </div>

        <div class="card" data-aos="zoom-in" style={{ width: "100%" }}>
          <div class="card-header card-title">Predict seismic events</div>
          <div class="card-body">
            <p class="card-text">
            As part of this project we have to predict when will the next event seismic happen using the Data and Deep 
            Learning model .
            </p>
          </div>
        </div>

        <div class="card" data-aos="zoom-in" style={{ width: "100%" }}>
          <div class="card-header card-title">Mask Detector</div>
          <div class="card-body">
            <p class="card-text">
            As part of this project, I developed a code to detect if a Person is wearing a Mask or not using Deep 
            Learning Libraries.
            </p>
          </div>
        </div>

        <div class="card" data-aos="zoom-in" style={{ width: "100%" }}>
          <div class="card-header card-title">Amazon Demo</div>
          <div class="card-body">
            <p class="card-text">
            As part of this Project, I developed a e-commerce web app. In building this app I used Reactjs , Redux , 
            Nodejs with MongoDB database..
            </p>
          </div>
        </div>

        <div class="card" data-aos="zoom-in" style={{ width: "100%" }}>
          <div class="card-header card-title">colour identifier with opencv</div>
          <div class="card-body">
            <p class="card-text">
            As part of this project , I developed an algorithm which can identify the colour in the picture which we give 
            as input by clicking at any point in the picture
            </p>
          </div>
        </div>

        <div class="card" data-aos="zoom-in" style={{ width: "100%" }}>
          <div class="card-header card-title">Text-Detection OCR</div>
          <div class="card-body">
            <p class="card-text">
            As part of this project, I Developed an algorithm that detects text from the Image using pytesseract library.
            </p>
          </div>
        </div>

        <div class="card" data-aos="zoom-in" style={{ width: "100%" }}>
          <div class="card-header card-title">Training &amp; placement cell database system</div>
          <div class="card-body">
            <p class="card-text">
            As part of this Database System Project, I made a Database of Students, which maintains Details about 
            Personal Information, Placed in which year , which company etc
            </p>
          </div>
        </div>

        <div class="section-title">
          <h2>Activities </h2>
        </div>


        <div class="card" data-aos="zoom-in" style={{ width: "100%" }}><div class="card-body"><p class="card-text">
        Participated in HACKATHON 2019 and IIC virtual HACKATHON 2020.
        </p></div></div>
        <div class="card" data-aos="zoom-in" style={{ width: "100%" }}><div class="card-body"><p class="card-text">
        Achieved certificate in the Stanford online examination of “SQL”
        </p></div></div>
        <div class="card" data-aos="zoom-in" style={{ width: "100%" }}><div class="card-body"><p class="card-text">
        Got NPTEL elite certificate of “joy of computing using python”
        </p></div></div>
        <div class="card" data-aos="zoom-in" style={{ width: "100%" }}><div class="card-body"><p class="card-text">
        Completed “Deep learning Specialization” and “NLP with python” courses on Coursera
        </p></div></div>
        <div class="card" data-aos="zoom-in" style={{ width: "100%" }}><div class="card-body"><p class="card-text">
        Completed “Data Analysis” and “Data Visualization” courses on Coursera
        </p></div></div>
        <div class="card" data-aos="zoom-in" style={{ width: "100%" }}><div class="card-body"><p class="card-text">
        Earned skill badges on different technologies on google cloud platform
        </p></div></div>

        
      </div>
    </section>
  );
}

export default Portfolio;
