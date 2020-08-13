import React from 'react';
import Card from 'react-bootstrap/Card';

// Import CSS styles for component
import './ProjectCard.css';

// Import Images
import megabitesImage from '../../assets/images/megabites.gif';
import schoolSpotImage from '../../assets/images/SchoolSpot.gif';
import drinkinBadImage from '../../assets/images/drinkin-bad.gif';

function ProjectCard(props) {

  // Bring image in as a variable
  let imageObj = {
    'megabites': megabitesImage,
    'schoolSpot': schoolSpotImage,
    'drinkinBad': drinkinBadImage
  }

  return (
    <Card id='projCard'>
      <Card.Img id='projImg' variant='top' alt={props.name} src={imageObj[props.image]} />
      <Card.Body id='projBody'>
        <Card.Title id='projTitle'><strong>{props.name}</strong></Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          {props.subtitle}
        </Card.Subtitle>
        <Card.Link href={props.deployed}>Live App</Card.Link>
        <Card.Link href={props.repo} id='repo'>Code Repo</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
