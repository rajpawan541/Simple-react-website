import React, { useState, useEffect } from 'react';
import './Projects.css';
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';
import project4 from '../../assets/project4.jpeg';

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject(prev => (prev + 1) % 4); // Loops over the project array
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []); // No dependencies needed here

  return (
    <div className='container'>
      <div className='projects'>
        <div className={`project ${activeProject === 0 ? 'active' : ''}`}>
          <img src={project1} alt='Project 1' />
          <div className='overlay'>
            <h3>Title 1</h3>
            <p>This is a small description.</p>
          </div>
        </div>

        <div className={`project ${activeProject === 1 ? 'active' : ''}`}>
          <img src={project2} alt='Project 2' />
          <div className='overlay'>
            <h3>Title 2</h3>
            <p>This is a small description.</p>
          </div>
        </div>

        <div className={`project ${activeProject === 2 ? 'active' : ''}`}>
          <img src={project3} alt='Project 3' />
          <div className='overlay'>
            <h3>Title 3</h3>
            <p>This is a small description.</p>
          </div>
        </div>

        <div className={`project ${activeProject === 3 ? 'active' : ''}`}>
          <img src={project4} alt='Project 4' />
          <div className='overlay'>
            <h3>Title 4</h3>
            <p>This is a small description.</p>
          </div>
        </div>
      </div>

      <button className='btn'>View More</button>
    </div>
  );
};
