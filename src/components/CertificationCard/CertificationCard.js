import React from "react";
import Card from 'react-bootstrap/Card';
import "./CertificationCard.css";
import unccImg from "../../assets/images/uncc.jpeg";
import csugImg from "../../assets/images/csug.png";
import ccImg from "../../assets/images/casper-college.jpg";

const CertificationCard = (props) => {

  let imageObj = {
    "uncc": unccImg,
    "csug": csugImg,
    "cc": ccImg
  }

  return (
    <Card id="certCard">
      <Card.Img variant="top" alt={props.college} src={imageObj[props.image]} />
      <Card.Body>
        <Card.Header as="h5">{props.college}</Card.Header>
        <Card.Title>{props.type}</Card.Title>
        <Card.Subtitle>{props.degree}</Card.Subtitle>
        <Card.Text>Completed: {props.date}</Card.Text>
        <Card.Text>GPA: {props.gpa}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CertificationCard;
