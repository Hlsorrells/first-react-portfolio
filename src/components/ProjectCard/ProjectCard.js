import React from "react";
import Card from 'react-bootstrap/Card';
import "./ProjectCard.css";
import megabitesImage from '../../assets/images/megabites.gif';
import schoolSpotImage from '../../assets/images/SchoolSpot.gif';
import drinkinBadImage from '../../assets/images/drinkin-bad.gif';

const ProjectCard = (props) => {
  let imageObj = {
    "megabites": megabitesImage,
    "schoolSpot": schoolSpotImage,
    "drinkinBad": drinkinBadImage
  }

  return (
    <Card>
      <Card.Img variant="top" alt={props.name} src={imageObj[props.image]} />
      <Card.Body>
        <Card.Title><strong>{props.name}</strong></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.subtitle}
        </Card.Subtitle>
        {/* <Card.Text>{props.description}</Card.Text> */}
        <Card.Link href={props.deployed}>Live App</Card.Link>
        <Card.Link href={props.repo} id="repo">Code Repo</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
