//使用严格模式
'use strict';

var axios = require('axios');
var API = require('./mock-urls'); //本地mock调试
const CODE_INVALIDE_SESSION_TOKEN = '000109'; //无效session的返回码（会话超时）

var ServerAPI = function (app) {
    this.app = app;

    //请求头需要的信息
    this.appVersion = '1';//版本号
    this.appChannel = '49';//渠道号
    this.deviceInfo = '123';//设备信息

    this.fundCode = 'fundCode';//暂写死，需在generateReqPackage方法中作为 参数传入
    /*
     * 生成请求报文 （请求头信息需先定义）
     * @param  {JSON}       dataEntity  请求数据
     * @param  {Function}   callback(error, reqPackage) 回调函数, reqPackage是请求报文，如果处理失败，error不为null
     * @return  无
     * */
    this.generateReqPackage = function (dataEntity, callback) {
        var timestamp = new Date();//时间戳

        //需对数据进行加密，签名

        var reqPackage = {
            fundCode: this.fundCode,//访问接口名(根据后台需求)
            appVersion: this.appVersion,//版本号
            appChannel: this.appChannel,//渠道号
            deviceInfo: this.deviceInfo,//设备信息
            timestamp: timestamp,//时间戳
            dataEntity:dataEntity//接口需要的参数
        }
        // dataEntity.append("fundCode",this.fundCode);
        // dataEntity.append("appVersion",this.appVersion);
        // dataEntity.append("appChannel",this.appChannel);
        // dataEntity.append("deviceInfo",this.deviceInfo);
        // dataEntity.append("timestamp",this.timestamp);

        callback(null, reqPackage);
    }

    /**
     * 检查返回报文
     * @param  {JSON}       resPackage  返回的报文
     * @param  {Function}   callback(error, dataEntity) 回调函数, 返回响应数据
     * @return  无
     */
    this.checkResPackage = function (resPackage, callback) {
        const SUCCESS_CODE = '000000'; //返回码：000000 表示成功
        //先核对签名

        //再解密


        //再把dataEntity提取出来
        var error = null;
        if (resPackage.data) {
            if (resPackage.data.ret_code !== SUCCESS_CODE) {
                error = {
                    code: resPackage.data.ret_code,
                    message: resPackage.data.ret_msg
                }
                console.log(error)
            }
        } else {
            /*网络异常*/
            error = {
                code: 'APP_999999',//需对照接口文档定义
                message: '网络异常'
            }
        }
        callback(error, resPackage.data.data_entity);

    }
}

/**
 * 发送报文
 * @param  {url}        url  请求接口URL地址
 * @param  {reqData}    reqData  请求报文，JSON格式
 * @param  {option}        option 需跳转的页面（如回话超时时保留此接口设置的option，再跳转到登录，登录成功后跳转到option页面）
 * @param  {Function}   callback(error, rspData) 回调函数, 返回响应报文
 *                      error: { code:  错误码  message: 错误信息}
 *                      rspData: 响应报文，JSON格式
 * @return  无
 */
ServerAPI.prototype.send = function (url, reqData, option, callback) {

    //1指向外部this
    var self = this;
    this.generateReqPackage(reqData, function (error, req) {

        if (error) {
            callback(error);
            return;
        }
        //执行post方式请求
        axios.post(url, req, {
                timeout: 15000,
                /*axios配置，超时时间15秒*/
            }
        )
        //请求成功，响应
            .then(res => {
                self.checkResPackage(res, function (error, data) {
                    var wentLogin = false;
                    if (error !== null) {
                        if (error.code === CODE_INVALIDE_SESSION_TOKEN) {
                            console.log("会话失效");
                            var store = self.app.$store;
                            //移除store中sessionToken
                            store.dispatch('removeSession');

                            if (option === null || option === undefined) {
                                option = {
                                    toLoginIfInvalidSession: true
                                }
                            }
                            var toLoginIfInvalidSession = option.toLoginIfInvalidSession || true;

                            if (toLoginIfInvalidSession) {
                                var returnToPage = option.returnToPage || '/home';
                                // self.app.showToast("Invalid session, please login");
                                self.app.$router.push({path: '/login', query: {toPage: returnToPage}});
                                wentLogin = true;
                            }
                        }
                    }
                    callback(error, data, wentLogin);
                });
            })
            //错误处理，进入catch
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response);
                    //请求已发出，但服务器响应的状态码不在 2xx 范围内
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    callback({
                        code: -1001,
                        message: 'The server responded with a status code that falls out of the range of 2xx'
                    });
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log(error);
                    callback({
                        code: -1002,
                        message: 'Something happened in setting up the request that triggered an Error'
                    });
                }
            });

    });

};


/**
 * 登录接口
 * @param  {String}   msisdn 用户名
 * @param  {String}   LoginPassword 密文密码
 * @param {String} code 验证码
 * @param {String} flag 标示 1手机号，2公积金账号
 * @param  {Function} callback(error, dataEntity) 回调函数
 * @return  无
 */
ServerAPI.prototype.login = function (data, callback) {
    // var dataEntity = new URLSearchParams();
    var dataEntity = {
        userName: data.username,
        passWord: data.password,
        code: data.code,
        falg: data.flag
    };
    // dataEntity.append("userName", data.username);
    // dataEntity.append("passWord", data.password);
    // dataEntity.append("code", data.code);
    // dataEntity.append("falg", data.flag);
    this.send(API.login, dataEntity, null, callback);
};

ServerAPI.prototype.login2 = function (data, callback) {
    var dataEntity = {
        userName: data.username,
        passWord: data.password,
        code: data.code,
        falg: data.flag
    };

    this.send(API.login2, dataEntity, null, callback);
};

ServerAPI.prototype.getMyAccount = function (data,callback) {
    var dataEntity = {
        userId:data.userId,
    };
    this.send(API.myAccount,dataEntity,null,callback);
};

// 我的信息接口
ServerAPI.prototype.requestMyInformation = function (data, callback) {
    var dataEntity = {
        userId: data.userId,
    };
    this.send(API.myInformation, dataEntity, null, callback);
};

module.exports = ServerAPI;