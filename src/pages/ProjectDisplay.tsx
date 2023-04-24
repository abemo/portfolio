import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import GitHubIcon from '@material-ui/icons/GitHub'
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
    const { id } = useParams() 
    if (id === undefined) return (<div>404: Project not found.</div>)
    const project = ProjectList[parseInt(id)]

    return (
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} />
            <GitHubIcon />
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectDisplay