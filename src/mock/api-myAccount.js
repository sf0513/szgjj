'use strict';

//延迟时长ms
const WAIT_MS = 1000;
module.exports = {
    api: '/api/account/my_account',
    response: function (req, res) {
        console.log("req=======================" + req.body);
        let reqData = req.body.dataEntity; //请求数据
        let userId = reqData.userId; //用户Id
        //此log只能在控制台查看
        console.log("登录接口请求数据：userId=" + userId);
        if (userId === '10086') {

            setTimeout(function () {
                res.json({
                    ret_code: '000000',
                    ret_msg: '请求成功',
                    data_entity: {
                        ACCOUNT: 'admin',                   //公积金账户
                        ACCOUNT_BALANCE:'10000',            //账户余额
                        DEPOSIT_BASE:'4000',                //缴存基数
                        DEPOSIT_PROPORTION:'0.1',           //缴存比例
                        USER_IMG:'../assets/ic_my_account.png',//用户头像
                        USER_NAME:'小米',
                    }
                });
            }, WAIT_MS);

        } else if (userId === '10010') {

            setTimeout(function () {
                res.json({
                    ret_code: '000000',
                    ret_msg: '请求成功',
                    data_entity: {
                        ACCOUNT: 'admin',                   //公积金账户
                        ACCOUNT_BALANCE:'10000',            //账户余额
                        DEPOSIT_BASE:'4000',                //缴存基数
                        DEPOSIT_PROPORTION:'0.1',           //缴存比例
                        USER_IMG:'http://localhost:8080/WheatInterface/img/favicon.png',//用户头像
                        USER_NAME:'小米',
                    }
                });
            }, WAIT_MS);

        } else {
            // 错误响应
            setTimeout(function () {
                res.json({
                    ret_code: '999999',
                    ret_msg: 'userId错误',
                    data_entity: {}
                });
            }, WAIT_MS);
        }
    }
};
