export interface IData {
    dataA:string;
    dataB: string;
    dataC: string;
}

export type DataContextType = {
    data: IData;
    updateData: (payload: object) => void;
};
