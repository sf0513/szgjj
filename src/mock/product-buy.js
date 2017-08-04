
module.exports = {
    api: '/product/buy',
    response: function (req, res) {
        var success = true;
        
        res.json({
            success: success
        });
    }

}