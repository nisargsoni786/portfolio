import React from 'react'
import nisarg from './../images/nisarg.png'

function About() {
    return (
            <section id="about" class="about">
      <div class="container">

        <div class="section-title">
          <h2>About</h2>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src={nisarg} class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Machine learning engineer &amp; Web Developer.</h3>
            <p class="font-italic">
              i have done some projects and made some classifiers with deep learning and Developed Web app With MERN Stack apps.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>13 Oct 1999</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <a style={{textDecoration:'none'}} href="tel:+919664709002"> +91 9664709002</a></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Ahmedabad, Gujarat</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bechlors</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <a style={{textDecoration:'none'}} href="mailto:nisargsoni786@gmail.com"> nisargsoni786@gmail.com</a> </li>
                </ul>
              </div>
            </div>
            <p>
                Currently i am in the last year of college and finding job under profile of machine learnig engineer or Web Developer.
                i have a bit more intrest in python and ML field. i am fresher but i have good skills worked in different technologies. 
            </p>
          </div>
        </div>

      </div>
    </section>
    )
}

export default About
