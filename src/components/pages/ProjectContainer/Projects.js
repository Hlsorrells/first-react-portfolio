import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import ProjectCard from '../../ProjectCard/ProjectCard';
import Wrapper from '../../Wrapper/Wrapper';
import Title from '../../Title/Title';

// Import data files
import projects from '../../../assets/projects.json';

class Projects extends Component {

    // Setting this.state.projects to the projects json array
    state = {
        projects
    };

    render() {
        return (
            <Wrapper>
                <Title id='projects'>My Projects</Title>
                <CardDeck>
                    {/* Map over this.state.projects and render a ProjectCard component for each project object */}
                    {this.state.projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            name={project.name}
                            deployed={project.deployed}
                            repo={project.repo}
                            image={project.image}
                            stack={project.stack}
                            subtitle={project.subtitle}
                            description={project.description}
                        />
                    ))}
                </CardDeck>
            </Wrapper>
        );
    }
}

export default Projects;
