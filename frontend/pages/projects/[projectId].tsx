import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { IProject } from '../../src/common/interfaces';
import { getProject } from '../../src/services/requests';
import styles from '../../styles/Home.module.css'

const Project = () => {
  const [project, setProject] = useState<IProject>({});

  const router = useRouter();
  const { projectId } = router.query;

  useEffect(() => {
    getProject(projectId as string, setProject);
  }, [projectId]);

  return (
    <>
      {
        !project.name ?
          <h1 className={styles.loader}>Loading projects details...</h1> :
          <div>
            <h3>Project name: {project.name}</h3>
            <h3>Project price: {project.price}</h3>
            <h3>Project TVL: {project.tvl}</h3>
          </div>
      }

    </>
  );
};

export default Project;
