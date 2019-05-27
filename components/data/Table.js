import React from 'react';
import PropTypes from 'prop-types';
import withData from './withData';
import {Table} from 'ems';
class Section extends React.Component {
    //请求数据

    pageSizeChange = async (current, size) =>{
        let nextSearchData = {
            page: current,
            size
        };
        const { setData, onSubmit } = this.props;
        const _searchData = await setData(nextSearchData);
        onSubmit(_searchData);
    }

    render() {
        const { total, setData,onSubmit, searchData, resetData, ...otherProps } = this.props;
        // console.log('columns', otherProps.columns);
        const { page ,size} = searchData;
        return (
            <Table
                pagination={{
                showQuickJumper: true,
                showSizeChanger: true,
                pageSizeOptions: ['10','20','30','100'],
                onShowSizeChange: this.pageSizeChange,
                showTotal: (totaltext)=>`共 ${totaltext} 条`,
                current: page,
                pageSize: size,
                total: total,
                onChange: this.pageSizeChange
            }}
                {...otherProps}
            />
        );
    }
}

export default withData(Section);
