import * as React from 'react';
import xlsx from 'xlsx';
import PropTypes from 'prop-types';


class ExportExcel extends React.Component {
    constructor(props){
        super(props);
        this.exportExcel = this.exportExcel.bind(this);
    }

    toExcel() {
        
    }

    _onClick = async () =>{
        const {onClick, columns, dataSource, filterColumns, filterDataSource, ...otherProps} = this.props;
        let enable ;
        if (onClick) {
            //jian
            enable = await onClick();
        }
        if (enable !== false) {
            //执行导出excel的方法
            
        }

    }
    render() {
        const {children, onClick} = this.props;
        return (
            <Button onClick={this._onClick}>
                {children}
            </Button>
        );
    }
}

ExportExcel.propTypes = {
    onClick: PropTypes.func
}
export default ExportExcel;