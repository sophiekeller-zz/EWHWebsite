import React from "react";

import headerPhotos from "../assets/images/headerImages/headerImages.js";
import projects from "../assets/pageData/projects.json";
import teams from "../assets/pageData/teams.json";

//COMPONENTS
import Header from "../components/Header";
import Project from "../components/Project";
import NavBar from "../components/Navbar.js";
import MobileNavBar from "../components/MobileNavBar.js";
import FilterButton from "../components/FilterButton";

/* Projects Page Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 */
export default class Projects extends React.Component {
  constructor(props, context) {
    super(props, context);
    let current = [];
    let past = [];
    let projectsList = projects.projects;
    for (let i = 0; i < projectsList.length; i++) {
      let project = projectsList[i];
      if (project.isActive) {
        current.push(project);
      } else {
        past.push(project);
      }
    }
    let teamIds = Object.keys(teams);
    teamIds.unshift("all");
    this.state = {
      current_projects: current,
      selected: past,
      filter: "all",
      past_projects: past,
      all_filters: teamIds,
    };
  }

  getProjectsforTeam(team) {
    let allProjects = this.state.past_projects;
    let selectedProjects = [];
    for (let i = 0; i < allProjects.length; i++) {
      let project = allProjects[i];
      if (project.subteams.includes(team)) {
        selectedProjects.push(project);
      }
    }
    if (team === "all") {
      selectedProjects = allProjects;
    }
    console.log(selectedProjects);
    return selectedProjects;
  }

  updateFilter(filter) {
    this.setState({ selected: this.getProjectsforTeam(filter) });
    this.setState({ filter: filter });
  }

  /* renders projects page */
  render() {
    let current = this.state.current_projects;
    let team = "team-blocks-container";
    let cont = "projects-blocks-container";
    let filters = "team-filters-container";
    let teamContent = "team-content";
    let navbar = <NavBar />;
    if (this.props.mobile) {
      filters = "team-filters-container-m";
      navbar = <MobileNavBar />;
      cont = "projects-blocks-container-m";
      team = "team-blocks-container-m";
      teamContent = "team-content-m";
    }
    console.log("render");
    console.log(this.state.selected);
    return (
      <div className="home-container">
        {navbar}
        <Header
          mobile={this.props.mobile}
          photo={headerPhotos.projectHeader}
          title="Projects"
        />
        <div className="sections-container">
          <div className="current-projects-container">
            <div className="projects-title">Current Projects</div>
            <div className={cont}>
              {current.map((project, index) => {
                return (
                  <Project
                    mobile={this.props.mobile}
                    data={project}
                    current={true}
                  />
                );
              })}
            </div>
          </div>
          <div className="projects-title">Past Projects</div>
          <div className={teamContent}>
            <div className={filters}>
              {this.state.all_filters.map((filter, index) => {
                return (
                  <FilterButton
                    mobile={this.props.mobile}
                    title={filter}
                    selected={this.state.filter === filter}
                    updateFilter={() => {
                      this.updateFilter(filter);
                    }}
                  />
                );
              })}
            </div>
            <div className={team}>
              {this.state.selected.map((p, index) => {
                return (
                  <Project
                    key={p.id}
                    mobile={this.props.mobile}
                    data={p}
                    current={false}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
