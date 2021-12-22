
export interface IProject {
    name: string,
    projectId: string,
    price: number | null,
    tvl: number | null,
}

export interface IWarning {
    title: string,
    text: string,
}

export interface IOrder {
    asc: number,
    desc: number,
}