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
    <Card className="mx-auto" id="certCard">
      <Card.Img id="certImg" variant="top" alt={props.college} src={imageObj[props.image]} />
      <Card.Body id="certBody">
        <Card.Header as="h5" id="certHead">{props.type}</Card.Header>
        {/* <Card.Title id="certTitle">{props.type}</Card.Title> */}
        <Card.Subtitle id="certSubT">{props.degree}</Card.Subtitle>
        <Card.Text id="certHonor">{props.honors}</Card.Text>
        <Card.Text id="certDate">Completed: {props.date}</Card.Text>
        <Card.Text id="certGPA">GPA: {props.gpa}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CertificationCard;
