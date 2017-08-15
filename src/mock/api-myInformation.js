//严格模式
'use strict';

/**
 * 模拟后台myInformation接口
 *
 *
 */


//延迟时长ms
const WAIT_MS = 1000;

module.exports = {
    api: '/api/account/myInformation',
    response: function (req, res) {
        console.log("req=======================" + req.body);
        let reqData = req.body.dataEntity; //请求数据
        let userId = reqData.userId; // 用户id

        //此log只能在控制台查看
        console.log("我的信息接口请求数据：userId=" + userId);
        if (userId === '10012') {

            setTimeout(function () {
                res.json({
                    ret_code: '000000',
                    ret_msg: '请求成功',
                    data_entity: {
                        //响应给前端数据
                        "DEPOSIT_UNIT":"联龙博通",
                        "E_MAIL":"123456@qq.com",
                        "ID_NUMBER":"412826951126851",
                        "MARITAL_STATUS":"2",
                        "SPOUSE_NAME":"小红","SPOUSE_NUMBER":"412826155311237615",
                        "USER_NAME":"小明",
                        "USER_PHONE":"15036939650"
                    },
            });
            }, WAIT_MS);

        } else {
            // 错误响应
            setTimeout(function () {
                res.json({
                    ret_code: '999999',
                    ret_msg: '用户错误',
                    data_entity: {}
                });
            }, WAIT_MS);
        }
    }
};
