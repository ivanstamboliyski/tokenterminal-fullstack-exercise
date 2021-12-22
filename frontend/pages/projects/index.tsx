import { useEffect, useState } from "react";
import { getAllProjects } from "../../src/services/requests";
import styles from '../../styles/Home.module.css'
import { IProject } from '../../src/common/interfaces';
import { findProject } from "../../src/common/helpers";
import Link from 'next/link'

const AllProjects = () => {

  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    getAllProjects(setProjects);
  }, []);

  return (
    <>
      {
        !projects.length ?
          <h1 className={styles.loader}>Loading projects...</h1> :
          <div>

            <section className={styles.summary}>
              <h2>Projects summary</h2>
              <div>
                Highest price project: {findProject(projects, 'price', 'desc').name}
              </div>
              <div>
                Lowest price project: {findProject(projects, 'price', 'asc').name}
              </div>
              <div>
                Highest TVL project: {findProject(projects, 'tvl', 'desc').name}
              </div>
              <div>
                Lowest TVL project: {findProject(projects, 'tvl', 'asc').name}
              </div>
            </section>
            <h2 className={styles.loader}>Here you can see all the projects</h2>
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
                    <Link key={projectId} href={`/projects/${projectId}`} passHref>
                      <tr className={styles.table}>
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
                    </Link>
                  ))
                }
              </tbody>
            </table >
          </div>
      }
    </>
  );
};

export default AllProjects;