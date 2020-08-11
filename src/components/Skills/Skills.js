import React from "react";
import "./Skills.css";

// Import Icons
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNode } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiMongodb } from "react-icons/di";
import { DiNpm } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io";
import { FaRProject } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";

const Skills = (props) => {

    switch (props.name) {
        case "React":
            return (
                <dd className="software-skill-inline">
                    <FaReact className="icon" />
                    <p>{props.name}</p>
                </dd>
            )
            break;
        case "JavaScript":
            return (
                <dd className="software-skill-inline">
                    <IoLogoJavascript className="icon" />
                    <p>{props.name}</p>
                </dd>
            )
            break;
        case "Node":
            return (
                <dd className="software-skill-inline">
                    <FaNode className="icon" />
                    <p>{props.name}</p>
                </dd>
            )
            break;
        case "MySQL":
            return (
                <dd className="software-skill-inline">
                    <GrMysql className="icon" />
                    <p>{props.name}</p>
                </dd>
            )
            break;
        case "PostgreSQL":
            return (
                <dd className="software-skill-inline">
                    <DiPostgresql className="icon" />
                    <p>{props.name}</p>
                </dd>
            )
            break;
        case "MongoDB":
            return (
                <dd className="software-skill-inline">
                    <DiMongodb className="icon" />
                    <p>{props.name}</p>
                </dd>
            )
            break;
        case "npm":
            return (
                <dd className="software-skill-inline">
                    <DiNpm className="icon" />
                    <p>{props.name}</p>
                </dd>
            )
            break;
        case "HTML5":
            return (
                <dd className="software-skill-inline">
                    <DiHtml5 className="icon" />
                    <p>{props.name}</p>
                </dd>
            )
            break;
        case "CSS3":
            return (
                <dd className="software-skill-inline">
                    <DiCss3 className="icon" />
                    <p>{props.name}</p>
                </dd>
            )
            break;
        case "Bootstrap":
            return (
                <dd className="software-skill-inline">
                    <FaBootstrap className="icon" />
                    <p>{props.name}</p>
                </dd>
            )
            break;
        case "Python":
            return (
                <dd className="software-skill-inline">
                    <IoLogoPython className="icon" />
                    <p>{props.name}</p>
                </dd>
            )
            break;
        case "R Project":
            return (
                <dd className="software-skill-inline">
                    <FaRProject className="icon" />
                    <p>{props.name}</p>
                </dd>
            )
            break;
        case "git":
            return (
                <dd className="software-skill-inline">
                    <FaGitAlt className="icon" />
                    <p>{props.name}</p>
                </dd>
            )
            break;
        default:
            return <p>Error rendering software skills icon!</p>
    }
}

export default Skills;