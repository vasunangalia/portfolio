import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
//import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://i.pinimg.com/originals/a7/0e/16/a70e1675c7bc001f1578aa76bb0a7819.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Vasu Nangalia</h2>
            <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am a full stack web developer with primary focus on JavaScript and frameworks. Previously i have worked on an IoT Healthcare project . I have worked with MySql, ReactJS, NodeJs. I am looking to work on project using latest technologies .I am interested in web development, AI and game development. I am willing to learn new technologies. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Bangalore</p>
            <h5>Phone</h5>
            <p>9741662741</p>
            <h5>Email</h5>
            <p>vasunangalia789@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2013}
              endYear={2018}
              schoolName="R.V College of Engineering"
              schoolDescription="Information Science Engineering"
               />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
                      <Skills
                      skill="C programing"
                      progress={80}
                      />
              <Skills
                skill="Javascript"
                progress={75}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={60}
                    />
                    <Skills
                      skill="React"
                      progress={50}
                      />
                      <Skills
                      skill="MySql"
                      progress={70}
                      />
                      <Skills
                      skill="PHP"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
