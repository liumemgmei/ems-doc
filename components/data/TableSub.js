import React from 'react';
import withData from './withData';
import {Pagination,Table} from 'antd';
import $ from 'jquery';

class TableSub extends React.Component {
    constructor(props) {
        super(props);
        this.element = React.createRef();
    }
    //请求数据
    componentDidMount() {
        this.$element = $(this.element.current);
        let tbody = this.$element.find('.tablesub');
        let temp = tbody.clone(true);
        temp.find('tbody').remove();
        temp.find('.ant-table-placeholder').remove();
        temp.appendTo($('#head'));
        tbody.find('thead').remove();
        window.addEventListener('resize',this.onWindowResize);
        // this.onWindowResize();
    }

    splitArr1(dataSource,sub) {
        let dlength = dataSource.length;
        let pCount = parseInt(dlength / sub,10);
        let odd = dlength % sub;
        let dataSourcearr = [];
        let i = 0;
        for (let index = 0; index < sub; index++) {
            let temp;
            if (index === 0) {
                temp = pCount - 1 + odd;
            }
            else {
                temp = i + pCount - 1;
            }
            dataSourcearr.push(dataSource.slice(i,temp));
            i = temp;
        }
        return dataSourcearr;
    }
    splitArr(dataSource,sub) {
        let dlength = dataSource.length;
        let pCount = Math.ceil(dlength / sub);
        let odd = dlength - pCount * (sub - 1);
        let dataSourcearr = [];
        let i = 0;
        for (let index = 0; index < sub; index++) {
            let temp;
            if (index === sub - 1) {
                temp = i + odd;
            }
            else {
                temp = i + pCount;
            }
            dataSourcearr.push(dataSource.slice(i,temp));
            i = temp;
        }
        return dataSourcearr;
    }

    pageSizeChange = async (current, size) => {
        let nextSearchData = {
            page: current,
            size
        };
        const { setData, onSubmit } = this.props;
        const _searchData = await setData(nextSearchData);
        onSubmit(_searchData);
    }
    render() {
        let { searchData, pagination,getHeight,...otherProps } = this.props;
        const { dataSource,total } = this.props;
        const { page ,size} = searchData;
        let arr = this.splitArr(dataSource,otherProps.sub);
        const height = getHeight() + 'px';
        return (
            <div ref={this.element}>
                <div className="tableThead">
                    <div
                        style={{paddingRight: '10px'}}
                        id="head"
                    >
                    </div>
                </div>
                <div style={{ height,overflow: 'auto'}} >
                    <div className="tablesub"
                        style={{display: 'flex'}}
                    >
                        {arr.map((single,key)=>{
                            return (
                                <div style={{flexGrow: 1}}
                                    key={key}
                                >
                                    <Table
                                        {...otherProps}
                                        dataSource={single}
                                        style={{width: '100%',...otherProps.style}}
                                        pagination={false}
                                        bordered={false}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                {pagination !== false &&
                        <Pagination
                            showQuickJumper
                            showSizeChanger
                            pageSizeOptions={['10','20','30','100']}
                            onShowSizeChange={this.pageSizeChange}
                            showTotal={(totaltext)=>`共 ${totaltext} 条`}
                            current={page ? page : 1}
                            pageSize={size ? size : 10}
                            total={total ? total : 0}
                            onChange={this.pageSizeChange}
                        />
                    }
            </div>
        );
    }
}
export default withData(TableSub);