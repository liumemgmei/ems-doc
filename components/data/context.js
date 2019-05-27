import React from 'react';
const DataContext = React.createContext({
    searchData: {},
    setData: () => ({}),
    onSubmit: () =>({}),
    resetData: () =>({})
});
export default DataContext;