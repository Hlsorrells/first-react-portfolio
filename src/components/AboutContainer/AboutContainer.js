import React, { Component } from "react";
import CardDeck from 'react-bootstrap/CardDeck'
import Wrapper from "../Wrapper/Wrapper";
import Title from "../Title/Title";
import CertificationCard from "../CertificationCard/CertificationCard";
import certifications from "../../assets/certifications.json";
// import skills from "../../assets/skills.json";
import "./AboutContainer.css";


class About extends Component {
  // Setting this.state.certifications to the certifications json array
  state = {
    certifications
    // skills
  };

  render() {
    return (
      <Wrapper>
        <Title id="about">About Me</Title>

        <section id="intro">
          <h3>Hi y'all, I'm Heather</h3>
          <p>A full stack web developer with a background in accounting and office management with a lifelong dedication to learning. My work experience combined with my education and technical training provide me with a unique perspective and approach to business solutions.</p>
          <p> I love building projects in React, JavaScript, Node, MySQL and some other cool libraries and frameworks. Known to my friends as the Queen of Readmes and the Sequel Master, I love to build databases with complex queries and then document my projects to share with others on GitHub.</p>
        </section>

        <section id="education">
            <h2>Education and Certifications</h2>
            <h5>Here are my formal educational degrees and certifications</h5>
            <CardDeck>
                {/* Map over this.state.certifications and render a Certification component for each section*/}
                {this.state.certifications.map(certificate => (
                  <CertificationCard
                    key={certificate.id}
                    college={certificate.college}
                    type={certificate.type}
                    degree={certificate.degree}
                    date={certificate.date}
                    gpa={certificate.gpa}
                    honors={certificate.honors}
                    image={certificate.image}
                  />
                ))}
              </CardDeck>
        </section>

        {/* <section id="Skills">
            <h2>Technical Skills</h2>
            <h5>Building full stack applications with these tools</h5>
            <div> */}
                {/* Map over this.state.skills and render a Tech component for each skill*/}
                {/* {this.state.skills.map(skill => (
                  <Skill
                    key={skill.id}
                  />
                ))}
            </div>
        </section> */}
        {/*         
        <h3>Achievements and Honors</h3>
            <h5>Achievements, awards and honors, and other cool stuff that I have done</h5> */}
      </Wrapper>
    );
  }
}

export default About;
