
export interface IProject {
    name: string,
    projectId: string,
    price: number | null,
    tvl: number | null,
}

// export interface IFilteredProject {
//     name: string,
//     projectId: string,
//     price: number,
//     tvl: number,
// }

export interface IOrder {
    asc: number,
    desc: number,
}