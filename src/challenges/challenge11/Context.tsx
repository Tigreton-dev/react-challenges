import * as React from 'react'
import { DataContextType, IData } from './@types.data'


export const DataContext = React.createContext<DataContextType | null>(null)

const defaultState: IData = {
    dataA: 'Global data used in component A',
    dataB: 'Global data used in component B',
    dataC: 'Global data used in component C',
}

interface Props {
    children: React.ReactNode;
}

const DataProvider: React.FC<Props> = ({ children }) => {
    const [data, setData] = React.useState<IData>(defaultState)

    function updateData(payload: object) {
        setData((data) => {
            return {
                ...data,
                ...payload,
            }
        })
    }

    return (
        <DataContext.Provider value={{ data, updateData }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider