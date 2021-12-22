import { useEffect, useState } from "react";
import { getProjects } from "../src/services/requests";
import styles from '../styles/Home.module.css'
import { IProject } from '../src/common/interfaces';

const Projects = () => {

  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    getProjects(setProjects);
  }, []);

  return (
    <>
      {
        !projects.length ?
          <h1 className={styles.loader}>Loading projects...</h1> :
          <table className={styles.table} >
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