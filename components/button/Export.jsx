var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
class ExportExcel extends React.Component {
    constructor(props) {
        super(props);
        this._onClick = () => __awaiter(this, void 0, void 0, function* () {
            const _a = this.props, { onClick, columns, dataSource, filterColumns, filterDataSource } = _a, otherProps = __rest(_a, ["onClick", "columns", "dataSource", "filterColumns", "filterDataSource"]);
            let enable;
            if (onClick) {
                //jian
                enable = yield onClick();
            }
            if (enable !== false) {
                //执行导出excel的方法
            }
        });
        this.exportExcel = this.exportExcel.bind(this);
    }
    toExcel() {
    }
    render() {
        const { children, onClick } = this.props;
        return (<Button onClick={this._onClick}>
                {children}
            </Button>);
    }
}
ExportExcel.propTypes = {
    onClick: PropTypes.func
};
export default ExportExcel;
