function MSitePopUp() {}

MSitePopUp.prototype = {

    dialogCallBack: function (data) {
        var dataObj = $.parseJSON(data);
        console.info("订阅类型为" + dataObj.subscribeType + "的订阅点收到消息，成功调用回调函数，参数值为" + data);
        var msgBody = dataObj.msgBody;
        var content = msgBody.content.replace("${user}", $('._vr_nickname').text().trim());
        var title = msgBody.title;
        var opt = {
            title: title,
            message: content
        };
        showDialog(opt);
    },

    /**
     * 系统公告-公告弹窗
     * @param data
     */
    playerAnnouncementDialogCallBack: function (data) {
        var dataObj = $.parseJSON(data);
        var id = dataObj.msgBody;
        $.ajax({
            url: "/operation/pAnnouncementMessage/announcementMsitePopup.html?searchId=" + id,
            type: 'get',
            dataType: 'json',
            success: function (data) {
                var title = "系统公告";
                if (data.apiId != null && data.apiId != '') {
                    title = "游戏公告"
                }
                var opt = {
                    title: title,
                    message: data.messageContent
                };
                showDialog(opt);
            }
        });
    },
    /**
     * 实时刷新余额
     * @param data
     */
    userBalanceChangeCallBack: function (data) {
        var dataObj = $.parseJSON(data);
        if(dataObj.msgBody && $.parseJSON(dataObj.msgBody).balanceAfter){
            var balanceAfter =  $.parseJSON(dataObj.msgBody).balanceAfter;
            $('._vr_wallet_balance').text(balanceAfter);
        }
    },

    messageCallBack: function (data) {
        var dataObj = $.parseJSON(data);
        console.info("订阅类型为" + dataObj.subscribeType + "的订阅点收到消息，成功调用回调函数，参数值为" + data);
    }
};

/**
 * 弹框消息提示
 * @param msg
 */
function showDialog(opt) {
    layerDialogNormal(opt.message, opt.title, 'layui-layer-brand', ['360px']);
}

