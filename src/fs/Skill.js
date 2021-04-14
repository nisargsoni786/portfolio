import React,{useEffect} from 'react'

function Skill() {

    // useEffect(() => {
    //   console.log('ppppppppppppp')
    //   const script = document.createElement('script');
    //   script.src = "/../cssjs/swiper-bundle.min.js";
    //   script.async = true;
    //   document.body.appendChild(script);

    // }, [])

    return (
      <section id="skills" class="skills section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Skills</h2>
        </div>

        <div class="row skills-content">

          <div class="col-lg-6">
          <h4>LANGUAGES</h4>

            <div class="progress">
            <span class="skill">Python <i class="val">90%</i></span>
            <div class="progress-bar-wrap">
              <div style={{width:'90%'}} class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div class="progress">
            <span class="skill">Java <i class="val">70%</i></span>
            <div class="progress-bar-wrap">
              <div style={{width:'70%'}} class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div class="progress">
            <span class="skill">JavaScript <i class="val">75%</i></span>
            <div class="progress-bar-wrap">
              <div style={{width:'75%'}} class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          </div>

          <div class="col-lg-6">
          <h4>DATABASES</h4>

            <div class="progress">
              <span class="skill">SQL <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
                <div style={{width:'90%'}} class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="progress">
              <span class="skill">MONGO DB <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
                <div style={{width:'90%'}} class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

        </div>
{/* ---------------------------------------------------------- */}
        <br/>
        <br/>
{/* ------------------------------------------------------------------ */}

        <div class="row skills-content">
          <div class="col-lg-6">
          <h4>FRONTEND DEVELOPING</h4>
            <div class="progress">
              <span class="skill">HTML &amp; CSS <i class="val">85%</i></span>
              <div class="progress-bar-wrap">
                <div style={{width:'85%'}} class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="progress">
              <span class="skill"> REACT.JS <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div style={{width:'80%'}} class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>

          <div class='col-lg-6'>
          <h4>BACKEND DEVELOPING</h4>
            <div class="progress">
              <span class="skill">NODE.JS <i class="val">75%</i></span>
              <div class="progress-bar-wrap">
                <div style={{width:'75%'}} class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="progress">
              <span class="skill"> DJANGO <i class="val">60%</i></span>
              <div class="progress-bar-wrap">
                <div style={{width:'60%'}} class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>
          </div>

{/* ----------------------------------------------------------------------------------------------------------- */}
          <br/><br/>
{/*-------------------------------------------------------------------------------------------------------- */}
        <div class="row skills-content">
          <div class="col-lg-6">
            <h4>MACHINE LEARNING &amp; DEEP LEARNING</h4>
            <div class="progress">
              <span class="skill"> Keras <i class="val">70%</i></span>
              <div class="progress-bar-wrap">
                <div style={{width:'70%'}} class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="progress">
              <span class="skill"> scikit-learn <i class="val">70%</i></span>
              <div class="progress-bar-wrap">
                <div style={{width:'70%'}} class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="progress">
              <span class="skill"> nlp <i class="val">60%</i></span>
              <div class="progress-bar-wrap">
                <div style={{width:'60%'}} class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>
          <div class="col-lg-6">
            <h4>DATA-SCIENCE</h4>
            <div class="progress">
              <span class="skill"> pandas <i class="val">85%</i></span>
              <div class="progress-bar-wrap">
                <div style={{width:'85%'}} class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="progress">
              <span class="skill"> MATplotlib <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div style={{width:'80%'}} class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="progress">
              <span class="skill"> seaborn <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div style={{width:'80%'}} class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

        </div>




      </div>
    </section>
    )
}

export default Skill
