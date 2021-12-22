import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { IProject, IWarning } from '../../src/common/interfaces';
import { createWarning, getProject, getProjectWarning } from '../../src/services/requests';
import styles from '../../styles/Home.module.css'

const Project = () => {
  const [project, setProject] = useState<IProject>({
    name: '',
    projectId: '',
    price: null,
    tvl: null,
  });
  const [openForm, setOpenForm] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [warning, setWarning] = useState<IWarning>({
    title: '',
    text: '',
  });

  const router = useRouter();
  const { projectId } = router.query;

  useEffect(() => {
    getProject(projectId as string, setProject);
  }, [projectId]);

  useEffect(() => {
    getProjectWarning(projectId as string, setOpenWarning);
  }, [projectId]);

  useEffect(() => {
    if (warning.title.length > 0) {
      createWarning(projectId as string, warning, setOpenForm);
    }
  }, [warning]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const warnTitle = formData.get('title');
    const warnText = formData.get('content');

    setWarning({
      title: warnTitle as string,
      text: warnText as string,
    });

  };

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
            <div
              className={styles.warning}
              style={{ display: openWarning ? 'block' : 'none' }}
            >
              <h3 style={{ textAlign: 'center' }}>Warning</h3>
              <p
                style={{ textAlign: 'center' }}
              >
                This project has missing fields: {Object.entries(project).filter(x => !x[1]).map(x => x[0]).join(', ')}
              </p>
            </div>
            <button
              style={{ width: 150, height: 50, margin: 'auto' }}
              onClick={() => setOpenForm(true)}
            >Create warning
            </button>
            <form
              action=""
              style={{ display: openForm ? 'block' : 'none' }}
              onSubmit={(e) => handleFormSubmit(e)}
            >
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" /><br></br>
              <label htmlFor="content">Content:</label>
              <input type="text" id="content" name="content" /><br></br>
              <input type="submit" value="Submit" />
            </form>
          </div>
      }
    </>
  );
};

export default Project;
