//严格模式
'use strict';

/**
 * 模拟后台login接口
 *
 *
 */


//延迟时长ms
const WAIT_MS = 1000;

module.exports = {
    api: '/api/aaa/login',
    response: function (req, res) {
        console.log("req=======================" + req.body);
        let reqData = req.body.dataEntity; //请求数据
        let username = reqData.userName; //手机号
        let password = reqData.passWord; //密码
        //此log只能在控制台查看
        console.log("登录接口请求数据：username=" + username + "---password=" + password);
        if (username === '111' && password === '123') {

            setTimeout(function () {
                res.json({
                    ret_code: '000000',
                    ret_msg: '请求成功',
                    data_entity: {
                        username: '用户1',//响应给前端数据
                    }
                });
            }, WAIT_MS);

        } else if (username === '222' && password === '123') {

            setTimeout(function () {
                res.json({
                    ret_code: '000000',
                    ret_msg: '请求成功',
                    data_entity: {
                        username: '用户2',//响应给前端数据
                    }
                });
            }, WAIT_MS);

        } else {
            // 错误响应
            setTimeout(function () {
                res.json({
                    ret_code: '999999',
                    ret_msg: '账号或密码错误',
                    data_entity: {}
                });
            }, WAIT_MS);
        }
    }
};
