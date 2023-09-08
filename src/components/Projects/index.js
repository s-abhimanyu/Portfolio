import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Web App' ?
            <ToggleButton active value="Web App" onClick={() => setToggle('Web App')}>Web App'S</ToggleButton>
            :
            <ToggleButton value="Web App" onClick={() => setToggle('Web App')}>Web App'S</ToggleButton>
          }
          <Divider />
          {toggle === 'Software App' ?
            <ToggleButton active value="Software App" onClick={() => setToggle('Software App')}>Software App'S</ToggleButton>
            :
            <ToggleButton value="Software App" onClick={() => setToggle('Software App')}>Software App'S</ToggleButton>
          }
          <Divider />
          {toggle === 'Cloud App' ?
            <ToggleButton active value="Cloud App" onClick={() => setToggle('Cloud App')}>Cloud App's</ToggleButton>
            :
            <ToggleButton value="Cloud App" onClick={() => setToggle('Cloud App')}>Cloud App's</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects