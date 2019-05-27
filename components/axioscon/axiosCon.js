import * as React from 'react';
import myAxios from './myAxios';
import {Spin} from 'antd';
import utils from 'utils';
import './style/index.less';
function T(Com) {
    return class AxiosCon extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                spinning: false,
                Children: null
            };
            this.axios = this.axios.bind(this);
            this.showSpin = this.showSpin.bind(this);
            this.hideSpin = this.hideSpin.bind(this);
            this.axiosList = [];
        }

        componentDidMount() {
            this.setState({
                Children: Com
            });
        }

        componentWillUnmount() {
            //撤销请求
            this.axios = ()=>{};
            // this.setState= ()=>{}
            utils.each(this.axiosList, (elem)=>{
                elem();
            });
        }
        axios() {
            this.setState({
                spinning: true
            });
            //存储请求的实例对象，并且在组件销毁的时候撤销请求
           return myAxios.call(this,...arguments)
            .then((res)=>{
                this.setState({
                    spinning: false
                });
                return res;
            })
            .catch((err)=>{
                this.setState({
                    spinning: false
                });
				return Promise.reject('The request was error');
            });
        }

        showSpin() {
            if (!this.state.spinning) {
                this.setState({
                    spinning: true
                });
            }
        }

        hideSpin() {
            if (this.state.spinning) {
                this.setState({
                    spinning: false
                });
            }
        }

        render() {
            const {Children} = this.state;
            return (
                <div className="con"
                    style={{position: 'absolute',top: 0,bottom: 0,left: 0,right: 0,overflow: 'auto'}}
                >
                    <Spin
                        className='spin'
                        tip="加载中。。。"
                        size="large"
                        spinning={this.state.spinning}
                        delay={1}
                        // style={{width: '100%', height: '100%'}}
                    >
                        <div className={'con-block'}
                            style={{padding: '1vh'}}
                        >
                        {
                            Children ? (
                            <Children
                                axios={this.axios}
                                showSpin={this.showSpin}
                                hideSpin={this.hideSpin}
                            >
                                {this.props.children}
                            </Children>
                            ) : (
                                null
                            )
                        }
                        </div>
                    </Spin>
                </div>
             );
        }
    };
}
export default T;