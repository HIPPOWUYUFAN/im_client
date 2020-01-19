import React, { PureComponent, Component } from 'react';
import ReactDOM from 'react-dom';
import calc from '../../public/utils';
import 'assets/index.css';
import sure from 'assets/sure.svg'
// const calc = require('../../public/utils')
export default class CardId extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            // event: null,
            isMySelfInfo: true,
            dataInfo: {
                username: '', //姓名
                cardId: '', //身份证号
                cardFileFront: null, //正面照
                cardFileBack: null, //反面照
                userId: null,
                cardType: 'ID', //身份证 ID 护照 PP
                itemFlag: 0, //1为身份证校验，0位图片校验
            }
        }
        console.log(this.props)
    }
    changeInfo(e) {
        console.log(e)
        this.setState({
            isMySelfInfo: e
        })
        console.log(this.state.dataInfo)
    }
    handleChange(type,event) {
        const updatedInfo = {...this.state.dataInfo}
        updatedInfo[type] = event.target.value
        this.setState({
            dataInfo:updatedInfo
        })
        console.log(this.state.dataInfo)
       
    }
    render() {
        let infoComponent = this.state.isMySelfInfo
            ? {
                mySelfInfo: <img src={sure} className="radio" style={{ border: 0 }}></img>,
                othersInfo: <div className="radio"></div>
            }
            : {
                mySelfInfo: <div className="radio"></div>,
                othersInfo: <img src={sure} className="radio" style={{ border: 0 }}></img>
            }

        return (
            <div className="container">
                <div className="message">
                    <div className="username">
                        <span className="user-title" >选择类型</span>
                        <div className="idcard-radio">
                            <div className="radio_" onClick={this.changeInfo.bind(this, true)}>
                                {infoComponent.mySelfInfo}
                                <span>自己信息</span>
                            </div>
                            <div className="radio_" onClick={this.changeInfo.bind(this, false)} >
                                {infoComponent.othersInfo}
                                <span>他人信息</span>
                            </div>
                        </div>
                    </div>
                    <div className="username">
                        <span className="user-title">真实姓名</span>
                        <input type="text"  maxLength="10" placeholder="请填写真实姓名" className="idcard" value={this.state.dataInfo.username} onChange={this.handleChange.bind(this,'username')} />
                    </div>
                    <div className="username">
                        <span className="user-title">身份证号</span>
                        <input type="text"  maxLength="18" placeholder="与身份证号一致" className="idcard" value={this.state.dataInfo.cardId} onChange={this.handleChange.bind(this,'cardId')} />
                    </div>
                </div>
                <div className="id-message">
                    <div className="mess-tip">应海关194号要求：需确保订购人的身份信息，真实有效，并且与支付人一致，否则会退单哦！</div>
                    <div className="positive" >
                        <div className="positive-title">
                            <span>身份证正面</span>
                            <span>请保证姓名、身份证号等信息清新可见</span>
                        </div>
                        <div className="positive-img">
                            <img mode='widthFix' src="https://antspace-prod-img-1.oss-cn-shenzhen.aliyuncs.com/c6a53ddc81314ef0b0cd4c03455a88e9.png" />
                            <div className="afresh">
                                <img mode='widthFix' src="https://antspace-prod-img-1.oss-cn-shenzhen.aliyuncs.com/502320b640d04f6ba4d099983d638262.svg" />
                                <span>重新上传</span>
                            </div>
                        </div>
                    </div>
                    <div className="positive">
                        <div className="positive-title">
                            <span>身份证反面</span>
                            <span>请保证签发机关、有效日期等信息清晰可见</span>
                        </div>
                        <div className="positive-img">
                            <img mode='widthFix' src="https://antspace-prod-img-1.oss-cn-shenzhen.aliyuncs.com/628a5c4c0fdd4ab699109cab4c41e286.png" />
                            <div className="afresh" >
                                <img mode='widthFix' src="https://antspace-prod-img-1.oss-cn-shenzhen.aliyuncs.com/502320b640d04f6ba4d099983d638262.svg" />
                                <span>重新上传</span>
                            </div>
                        </div>
                    </div >
                    <div className="save-btn">保存</div>
                </div >
                <input type="file" accept="image/*" capture="camera"></input>
            </div >
        )
    }
}
