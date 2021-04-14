import React from 'react'

function Resume() {
    return (
        <section id="resume" class="resume">
      <div class="container">

        <div class="section-title">
          <h2>Resume</h2>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>Nisarg Soni</h4>
              <p><em>fresher with some good skills. like to do code in python more than any other language :p </em></p>
              <ul>
                <li>Ahmedabad , india</li>
                <li>+91 9664709002</li>
                <li>nisargsoni786@gmail.com</li>
              </ul>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>bachelors of information &amp; communication Technology</h4>
              <h5>2017 - 2021</h5>
              <p><em>pandit deendayal petroleum university, raysan</em></p>
              <p>cleared my bachelors with CPI 8.88 .</p>
            </div>
            <div class="resume-item">
              <h4>High school</h4>
              <h5>2015 - 2017</h5>
              <p><em>Sharda vidhya mandir</em></p>
              <p>cleared my high-school with 88% (PCM).</p>
            </div>
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title">Internship</h3>
            <div class="resume-item">
              <h4>ML based project</h4>
              <h5>2020</h5>
              <p><em>Gandhinagar </em></p>
              <ul>
                <li> Artificial-intelligence based Detection of unconscious person on road , street or roadside.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>DATA science Task</h4>
              <h5>2020</h5>
              <p><em> WFH </em></p>
              <ul>
                <li> Completed the tasks on “explorative data analysis” and “predictive analytics”</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
    )
}

export default Resume
