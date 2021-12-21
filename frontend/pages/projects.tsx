import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    const getProjects = async () => {

      const projectsUrl = 'http://localhost:3001/projects';

      try {
        const response = await fetch(projectsUrl);
        const data = await response.json();
        setProjects(data.projects);

      } catch (error) {

      }
    };

    getProjects();

  }, []);

  return (
    <>
      {
        !projects.length ?
          <h3>Loading projects...</h3> :
          projects.length &&
          < table className={styles.table} >
            <thead className={styles.table}>
              <th className={styles.table}>
                Project
              </th>
              <th className={styles.table}>
                Price
              </th>
              <th className={styles.table}>
                TVL
              </th>
            </thead>
            <tbody>
              {
                projects.map(({ name, projectId, price, tvl }) => (
                  <tr key={projectId} className={styles.table}>
                    <td className={styles.table}>
                      {name}
                    </td>
                    <td className={styles.table}>
                      {price}
                    </td>
                    <td className={styles.table}>
                      {tvl ? tvl : 'not available'}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table >
      }
    </>
  );
};

export default Projects;