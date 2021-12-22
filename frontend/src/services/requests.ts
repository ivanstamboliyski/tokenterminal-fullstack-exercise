import { Dispatch, SetStateAction } from 'react';
import { url } from '../common/constants';
import { IProject } from '../common/interfaces';


export const getProjects = async (setProjects: Dispatch<SetStateAction<IProject[]>>) => {

    try {
        const response = await fetch(`${url}/projects`);
        const data = await response.json();
        setProjects(data.projects);

    } catch (error) {
        console.log('Cannot fetch projects!'); // TO REFACTOR
    }
};