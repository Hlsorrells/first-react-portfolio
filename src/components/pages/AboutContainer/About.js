import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Wrapper from '../../Wrapper/Wrapper';
import Title from '../../Title/Title';
import CertificationCard from '../../CertificationCard/CertificationCard';
import Skills from '../../Skills/Skills';
import Honor from '../../Honors/Honors';

// Import data files
import certifications from '../../../assets/certifications.json';
import skills from '../../../assets/skills.json';
import honors from '../../../assets/honors.json';

// Import CSS styles for component
import './About.css';

class About extends Component {

  // Setting this.state for json arrays
  state = {
    certifications,
    skills,
    honors
  };

  render() {
    return (
      <Wrapper>
        <Title id='about'>About Me</Title>

        <section id='intro'>
          <h3>Hi y'all, I'm Heather</h3>
          <p>A full stack web developer with a background in accounting and office management with a lifelong dedication to learning. My work experience combined with my education and technical training provide me with a unique perspective and approach to business solutions.</p>
          <p> I love building projects in React, JavaScript, Node, MySQL and some other cool libraries and frameworks. Known to my friends as the Queen of Readmes and the Sequel Master, I love to build databases with complex queries and then document my projects to share with others on GitHub.</p>
        </section>

        <section id='Skills'>
          <h2>Technical Skills</h2>
          <h5>Building full stack applications with these tools</h5>
          <div className='software-skills-main-div'>
            <dl className='dev-icons'>
              {/* Map over this.state.skills and render a Tech component for each skill*/}
              {this.state.skills.map(skill => (
                <Skills
                  key={skill.id}
                  name={skill.name}
                />
              ))}
            </dl>
          </div>
        </section>

        <section id='education'>
          <h2>Education and Certifications</h2>
          <h5>Here are my formal educational degrees and certifications</h5>
          <CardDeck id='certification'>
            {/* Map over this.state.certifications and render a CertificationCard component for each certification*/}
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

        <section id='honors'>
          <h2>Achievements and Honors</h2>
          <h5>Achievements, awards and honors, and other cool stuff that I have done</h5>
          <Container fluid >
            {/* Map over this.state.honors and render a Honors component for each award or honor*/}
            {this.state.honors.map(honor => (
              <Honor
                key={honor.id}
                title={honor.title}
                note={honor.note}
                date={honor.date}
              />
            ))}
          </Container>
        </section>

      </Wrapper>
    );
  }
}

export default About;
