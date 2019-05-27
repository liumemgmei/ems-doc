import React from 'react';
import DataContext from './context';
export default function withData(Component) {
    return React.forwardRef((props, ref) => {
        return (
            <DataContext.Consumer>
                {
                    ({searchData, setData, onSubmit, resetData}) => {
                        return (
                            <Component
                                {...props}
                                searchData={searchData}
                                setData={setData}
                                onSubmit={onSubmit}
                                resetData={resetData}
                                forwardref={ref}
                            />
                        );
                    }
                }
            </DataContext.Consumer>
        );
    });
}