import { Dispatch, SetStateAction } from 'react';
import { url } from '../common/constants';
import { IProject, IWarning } from '../common/interfaces';


export const getAllProjects = async (setProjects: Dispatch<SetStateAction<IProject[]>>) => {

  try {
    const response = await fetch(`${url}/projects`);
    const data = await response.json();
    setProjects(data.projects);

  } catch (error) {
    console.log('Cannot fetch projects!'); // TO REFACTOR
  }
};

export const getProject = async (projectId: string, setProject: Dispatch<SetStateAction<IProject>>) => {

  try {
    const response = await fetch(`${url}/projects/${projectId}`);
    const data = await response.json();
    setProject(data);

  } catch (error) {
    console.log('Cannot fetch this project!'); // TO REFACTOR
  }
};

export const createWarning = async (
  projectId: string,
  body: IWarning,
  setOpenForm: Dispatch<SetStateAction<boolean>>
) => {
  try {
    const response = await fetch(`${url}/projects/${projectId}/warnings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    setOpenForm(false);
  } catch (error) {
    console.log('Cannot create warning for this project!'); // TO REFACTOR
  }
};

export const getProjectWarning = async (
  projectId: string,
  setOpenWarning: Dispatch<SetStateAction<boolean>>
) => {
  try {
    const response = await fetch(`${url}/projects/${projectId}/warnings`);
    const data = await response.json();

    if (!data.error) {
      setOpenWarning(true);
    }
  } catch (error) {
    console.log('Cannot create warning for this project!'); // TO REFACTOR
  }
};
