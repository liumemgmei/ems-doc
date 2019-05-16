import * as React from 'react';
import myAxios from './myAxios';
import { Spin } from 'antd';
function T(Com) {
    return class axiosCon extends React.Component {
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
            this.axios = () => { };
            // this.setState= ()=>{}
            this.axiosList.forEach(element => {
                element();
            });
        }
        axios() {
            this.setState({
                spinning: true
            });
            console.log('true', Object.assign({}, arguments));
            //存储请求的实例对象，并且在组件销毁的时候撤销请求
            return myAxios.call(this, ...arguments)
                .then((res) => {
                this.setState({
                    spinning: false
                });
                console.log('false');
                return res;
            })
                .catch((err) => {
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
            const { Children } = this.state;
            return (<div className="con" style={{ height: '100%', width: '100%' }}>
                    <Spin className='spin' tip="加载中。。。" size="large" spinning={this.state.spinning} delay={1}>
                        <div className={'con-block'} style={{ padding: '1vh' }}>
                        {Children ? (<Children axios={this.axios} showSpin={this.showSpin} hideSpin={this.hideSpin}>
                                {this.props.children}
                            </Children>) : (null)}
                        </div>
                    </Spin>
                </div>);
        }
    };
}
export default T;
