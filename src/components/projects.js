import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Portfolio website</CardTitle>
            <CardText>
              My portfolio websie using reactjs
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button href="https://morning-castle-65250.herokuapp.com/" colored >Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://blog.arcoptimizer.com/wp-content/uploads/2018/05/1526887184_comment-reparer-les-problemes-de-connexion-magento-avec-des-cookies-et-des-sessions.png) center / cover'}} >Procurement process</CardTitle>
            <CardText>
              A database management system for procurement process
            </CardText>
            <CardActions border>
            <a href="https://github.com/vasunangalia/procurement_process" rel="noopener noreferrer" target="_blank">
            Github
           </a>
            <a href="https://vast-falls-46293.herokuapp.com/" rel="noopener noreferrer" target="_blank">
            Heroku 
           </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }  

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>PHP</Tab>
          {/* for new project */}
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
