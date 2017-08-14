//严格模式
'use strict';

/**
 * 模拟后台我要留言--业务类型接口
 *
 *
 */


//延迟时长ms
const WAIT_MS = 1000;

module.exports = {
    api: '/api/business_type',
    response: function (req, res) {

            setTimeout(function () {
                res.json({
                    ret_code: '000000',
                    ret_msg: '请求成功',
                    data_entity: [
                            {"BUSINESS_ID":"123456","BUSINESS_NAME":"公积金缴存"},
                            {"BUSINESS_ID":"1234567","BUSINESS_NAME":"公积金提取"},
                            {"BUSINESS_ID":"12345678","BUSINESS_NAME":"公积金贷款"},
                            {"BUSINESS_ID":"123456789","BUSINESS_NAME":"其他"}
                        ],
                });
            }, WAIT_MS);
    }
};
