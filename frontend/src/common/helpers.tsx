import { orderDirection } from "./constants";
import { IOrder, IProject } from "./interfaces";

export const findProject = (projects: IProject[], prop: keyof IProject, order: keyof IOrder) => {

    const filteredProjects = projects.filter(p => p[prop]);

    return filteredProjects.sort((a, b) => (a[prop] as number - b[prop] as number) * orderDirection[order])[0];
};
