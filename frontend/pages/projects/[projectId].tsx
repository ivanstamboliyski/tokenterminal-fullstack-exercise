import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { IProject } from '../../src/common/interfaces';
import { getProject } from '../../src/services/requests';
import styles from '../../styles/Home.module.css'

const Project = () => {
  const [project, setProject] = useState<IProject>({
    name: '',
    projectId: '',
    price: null,
    tvl: null,
  });

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
            <h1 className={styles.loader}>{project.name}</h1>
            <div className={styles.project}>
              <h3 style={{ textAlign: 'center' }}>Project info</h3>
              <hr />
              <h3>Name: {project.name}</h3>
              <h3>Price: {project.price}</h3>
              <h3>TVL: {project.tvl}</h3>
            </div>
            <button style={{ width: 150, height: 50, margin: 'auto' }}>Create warning</button>
            <form action="/action_page.php">
              <label htmlFor="title">First name:</label>
              <input type="text" id="title" name="title" value="" /><br></br>
              <label htmlFor="content">Last name:</label>
              <input type="text" id="content" name="content" value="" /><br></br>
              <input type="submit" value="Submit" />
            </form>
          </div>
      }
    </>
  );
};

export default Project;
