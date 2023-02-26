isParams = {
    //暂存箱分解钥匙数
    'chouGoods': {
        3851950: [8],//M4A1-战神赵云
        3851960: [8],//毁灭-战神张飞
        3852066: [8],//火麒麟-战神关羽
        3852070: [8],//黑骑士-战神马超
        3852071: [10],//M200-幻神-黄忠皮肤
        3852075: [12],//M200-幻神
        3852076: [4],//M4A1-雷神
        3852079: [4],//Barrett-毁灭
        3852081: [4],//AK47-火麒麟
        3852085: [4],//M4A1-黑骑士
        3875964: [2],//赵云玩偶（不可交易）
        3875965: [2],//张飞玩偶（不可交易）
        3875967: [2],//关羽玩偶（不可交易）
        3875968: [2],//马超玩偶（不可交易）
        3875969: [2],//黄忠玩偶（不可交易）
    },
    /*
     兑换道具,五虎币，五虎上将令牌
     */
    'exchangeGoods': {
        '1': ['M4A1-战神赵云', 888],
        '2': ['毁灭-战神张飞', 888],
        '3': ['火麒麟-战神关羽', 888],
        '4': ['黑骑士-战神马超', 888],
        '5': ['M200-幻神-黄忠皮肤', 1088],
        '6': ['M200-幻神', 1688],
        '7': ['M4A1-雷神', 488],
        '8': ['Barrett-毁灭', 488],
        '9': ['AK47-火麒麟', 488],
        '10': ['M4A1-黑骑士', 488],
        '11': ['赵云玩偶（不可交易）', 188],
        '12': ['张飞玩偶（不可交易）', 188],
        '13': ['关羽玩偶（不可交易）', 188],
        '14': ['马超玩偶（不可交易）', 188],
        '15': ['黄忠玩偶（不可交易）', 188],
        '16': ['属性变更券x1', 5],
        '17': ['交易专用钥匙x1', 5],
    },
    'exchangeLpGoods': {
        '1': ['M4A1-战神赵云', 3],
        '2': ['毁灭-战神张飞', 3],
        '3': ['火麒麟-战神关羽', 3],
        '4': ['黑骑士-战神马超', 3],
        '5': ['M200-幻神-黄忠皮肤', 3],
        '6': ['M200-幻神', 5],
        '7': ['M4A1-雷神', 1],
        '8': ['Barrett-毁灭', 1],
        '9': ['AK47-火麒麟', 1],
        '10': ['M4A1-黑骑士', 1],
    },
    /*
    玩偶自选5选1
     */
    'exchangeSelectGoods': {
        '1': '赵云玩偶（不可交易）',
        '2': '张飞玩偶（不可交易）',
        '3': '关羽玩偶（不可交易）',
        '4': '马超玩偶（不可交易）',
        '5': '黄忠玩偶（不可交易）',
    },
    /*
    选择令牌
     */
    'selectLp': {
        '1': {'name': '赵云令牌', 'img': 'ling1.png'},
        '2': {'name': '张飞令牌', 'img': 'ling2.png'},
        '3': {'name': '关羽令牌', 'img': 'ling3.png'},
        '4': {'name': '马超令牌', 'img': 'ling4.png'},
        '5': {'name': '黄忠令牌', 'img': 'ling5.png'},
    },
    /*
    礼包对应骰子点数
     */
    'tzNum': {
        3852207: 10,
        3852208: 6,
        3852210: 4,
        3852212: 3,

        3874982: 10,
        3874983: 6,
        3874984: 4,
        3874985: 3,
    },
    djcActId: 28066,
    amsId: 533800,
    //大区信息
    bindinfo: '',
    //抽奖锁定
    lockCj: false,
    lockCjTz: false,
    //当前定制的类型
    _select_num: -1,
    //好友链接信息
    encrypt_info: {
        'encrypt': '',
        'item': '',
        'num': '',
        'user': '',
    },
    jfnum: [],
    shareLp: ['赵云', '张飞', '关羽', '马超', '黄忠']
}

//======================= login =======================================================
milo.ready(function () {
    isH5 = location.hostname == "app.daoju.qq.com" ? true : false;
    isNei = milo.request('neiqian') != '' ? true : false;

    //检查是否登录
    Milo.checkLogin({
        iUseQQConnect: false, //如果当前活动使用的互联登录,请将改参数设置true
        success: function (user) {
            console.log('已登录：');
            console.log(user);
            $('#unlogin').hide();
            $('#logined').show();
            $("#userinfo").text(user.userInfo.userUin);
            //查询绑定
            queryBindArea();
        },
        fail: function (res) {
            console.log('未登录：', res);
            toLogin()
        }
    });

    $("#dologin").on("click", function () {
        toLogin()
    });
    $("#dologout").on("click", function () {
        Milo.logout({
            callback: function () {
                location.reload();
            }
        });
    });

    // 支付上报
    // if (isH5) {
    need(["ams.daoju_buy_v2.appid"], function (autoappid) {
        autoappid.init('cf', isParams.djcActId, function (final_appid) {
            //特权
            $(".foot-tq").hide();
            if (final_appid == 1101) {
                $(".foot-tq").show();
            }
            //final_appid为自动判断得到的道聚城渠道号
            //本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
        });
    });
    // }

    //轮播
    queryBroadcast()
    //初始化节点操作
    initDom()
});

//登录
function toLogin() {
    if (Milo.isMobile()) {
        Milo.mobileLoginByQQ();
    } else {
        Milo.loginByQQ();
    }
}

// 查询绑定大区
function queryBindArea() {
    var flow_query = {
        actId: isParams.amsId,
        token: '06e7aa',
        loading: true, // 开启loading浮层,默认不开启
        sData: {
            query: true
        },
        success: function (res) {
            if (res.data) {
                isParams.bindinfo = {
                    sArea: res.data.area,
                    sPartition: res.data.partition,
                    sPlatId: res.data.platId,
                    sRole: res.data.roleId,
                    sAreaName: res.data.areaName,
                    roleName: res.data.roleName
                };

                $("#userinfo").text(res.data.roleId);
                $('#spanNotBind').hide();
                $('#spanBind').show();
                $('#area_info').text(res.data.areaName);
                $('#role_info').text(res.data.roleName);

                enter(1);
                // get_support_list(1)
                if (milo.request("encrypt") != "") {
                    amsShare();
                }
            } else {
                commitBindArea()
            }
        },
        fail: function (res) {
            commitBindArea()
        },
    };
    Milo.emit(flow_query);
}

// 提交绑定大区
function commitBindArea() {
    var flow_commit = {
        actId: isParams.amsId,
        token: 'd6fc92',
        loading: true, // 开启loading浮层,默认不开启
        sData: {
            query: false
        },
        success: function (res) {
            //已绑定时的扩展处理
            location.reload();
        },
        fail: function (res) {
            commitBindArea();
        }
    };
    Milo.emit(flow_commit);
}

//轮播
function queryBroadcast() {
    var flow = {
        actId: isParams.amsId,
        token: '77f5af',
        // loading: true, // 开启loading浮层,默认不开启
        time: 50, // 轮播时间
        sData: {
            // query: false
        },
        success: function (res) {
            console.log('查询轮播success', res);
        },
        fail: function (res) {
            console.log('查询轮播fail', res);
        }
    }
    Milo.emit(flow);
}

//======================= 绑定 end ==========================================================

//======================= 查询 start ==========================================================
// 查询五虎币
function get_support_list(a,isButton = 0) {
    setTimeout(function () {
        var flow = {
            actId: isParams.amsId,
            token: '8edb67',
            loading: false, // 开启loading浮层,默认不开启
            sData: {},
            success: function (res) {
                console.log(res);
                res = res.details.jData
                var _html = ''
                if (res.data.length > 0) {
                    $.each(res.data, function (k, v) {
                        v.sRoleName = decodeURIComponent(v.sRoleName)
                        var lp = isParams.shareLp[v.iShareNum - 1]
                        _html += '<tr>\n' +
                            '<td>' + v.sUin + '</td>\n' +
                            '<td>' + v.sRoleName + '</td>' +
                            '<td>' + lp + '</td>' +
                            '<td>\n'
                        if (v.iType == 1) {
                            _html += '<a class="btnrequest sp db" href="javascript:amsSupport(' + v.id + ',' + v.iType + ',' + v.iShareNum + ',\'' + v.sRoleName + '\',\'' + v.encrypt + '\');"\n' +
                                'onclick="PTTSendClick(\'btn\',\'btnrequest1\',\'我要索取\');">我要索要</a>\n'
                        } else {
                            _html += '<a class="btngive sp db" href="javascript:amsSupport(' + v.id + ',' + v.iType + ',' + v.iShareNum + ',\'' + v.sRoleName + '\',\'' + v.encrypt + '\');"\n' +
                                'onclick="PTTSendClick(\'btn\',\'btnrequest1\',\'我要索取\');">我要赠送</a>\n'
                        }
                        _html += '</td></tr>\n' +
                            '<tr>'
                    })
                }
                $('.support_list').html(_html)
                if(isButton == 1){
                    alert('刷新成功~')
                }
            },
            fail: function (res) {
                failShow(res, function () {
                    alert(res.sMsg)
                })
            }
        }

        Milo.emit(flow);
    }, a || 2000);
}

// 查询五虎币
function enter(a) {
    setTimeout(function () {
        var flow = {
            actId: isParams.amsId,
            token: 'e4f583',
            loading: false, // 开启loading浮层,默认不开启
            sData: {},
            success: function (res) {
                console.log(res);
                //五虎币值处理
                var data = res.details.jData;
                //1.积分值处理
                var vals = {};
                vals["_2327"] = data.sOutValue1; //余额
                $.each(data.sOutValue2.split("|"), function (k, v) {
                    if (k > 0) {
                        v = v.split(" ");
                        vals["_" + v[2]] = parseInt(v[4]); //余额
                    }
                });
                isParams.jfnum = vals;
                //2.五虎币值类名直接显示
                var tmp = [2327, 5445, 5447, 5448, 5449, 5450, 5451, 5452, 5454, 5456, 5457, 5458, 5472, 5473, 5474, 5475, 5476];
                $.each(tmp, function (k, v) {
                    $(".jf_" + v + "").html(parseInt(vals["_" + v + ""]));
                });

                //3.当前是否有未领取的
                $hold_num = data.sOutValue3.split(',');
                $('.btndhcard').removeClass('gray')
                $.each($hold_num, function (k, v) {
                    if (v > 0) {
                        $('.exchangelp' + parseInt(k + 1)).addClass('gray')
                    }
                })

                isParams.lockCj = false
                isParams.lockCjTz = false

                //4.五虎宝箱
                if (vals['_5448'] > 0) {
                    amsChouBox()
                }
                //5.五虎自选
                if (vals['_5447'] > 0) {
                    TGDialogS('popSelect')
                }

                return;
            },
            fail: function (res) {
                failShow(res, function () {
                    alert(res.sMsg);
                })
            }
        }
        //刷新五虎币操作
        Milo.emit(flow);
    }, a || 2000);
}

//======================= 查询 end ==========================================================
//======================= 购买 start ==========================================================
// 普通购买
function amsBuy(item) {
    var flow = {
        actId: isParams.amsId,
        token: '8ab200',
        loading: true,
        sData: {
            item: item,
            gameId: "cf", // 业务简称
            djcActId: isParams.djcActId, // 道聚城活动id
            paytype: 2, // 1：点券 2：人民币 3：金币 4：点券+金币 5：金币2
        },
        // 支付弹框关闭回调
        onPayClose: function () {
        },
        success: function (res) {
            console.log(res);
            enter(2000)
        },
        fail: function (res) {
            failShow(res, function () {
                alert(res.sMsg);
            })
        }
    }
    Milo.emit(flow);
}

// 代金劵折扣购买
function amsBuyDi() {
    var flow = {
        actId: isParams.amsId,
        token: 'eb1194',
        loading: true,
        sData: {
            gameId: "cf", // 业务简称
            djcActId: isParams.djcActId, // 道聚城活动id
            paytype: 2, // 1：点券 2：人民币 3：金币 4：点券+金币 5：金币2
        },
        // 支付弹框关闭回调
        onPayClose: function () {
            enter(2000);
        },
        success: function (res) {
            console.log(res);
            enter(2000)
        },
        fail: function (res) {
            failShow(res, function () {
                alert(res.sMsg);
            })
        }
    }
    Milo.emit(flow);
}

//======================= 购买 end ==========================================================
//======================= 抽奖 start ==========================================================
//普通抽奖
function amsChou(item) {
    var flow = {
        actId: isParams.amsId,
        token: '3bfbbb',
        loading: true, // 开启loading浮层,默认不开启
        sData: {
            item: item
        },
        success: function (res) {
            console.log(res);
            var callbackObj = res.details.jData

            if (item == 1) {
                $('#jlname').html('');
                $('#jlname').html(callbackObj.sPackageName)
                TGDialogS('popdc');
            } else {
                var obj = tenResult(callbackObj.iPackageIdCnt, callbackObj.sPackageName);
                $('#choulist').html('');
                $.each(obj, function (k, v) {
                    $('#choulist').append('<p>' + v.name + '</p>');
                })
                TGDialogS('popJl');
            }
            isParams.lockCj = false
        },
        fail: function (res) {
            failShow(res, function () {
                alert(res.sMsg, function () {
                    isParams.lockCj = false
                });
            })
        }
    }

    if (typeof (isParams.bindinfo.sAreaName) != 'undefined' && isParams.bindinfo.sAreaName != '') {
        if (!isParams.lockCj) {
            isParams.lockCj = true
            Milo.emit(flow);
        }
    } else {
        commitBindArea()
    }
}

// 【暂存箱】领取
function amsZanQu(item, name) {
    var flow = {
        actId: isParams.amsId,
        token: 'b7009f',
        loading: true, // 开启loading浮层,默认不开启
        sData: {
            item: item
        },
        success: function (res) {
            console.log(res);
            var callbackObj = res.details.jData
            alert(callbackObj.sMsg);
            amsHistoryList(2, isParams.pageNow)
        },
        fail: function (res) {
            failShow(res, function () {
                alert(res.sMsg)
            })
        }
    }
    var msg = "确定领取 " + name + " 到【" + isParams.bindinfo.sAreaName + "】吗？【唯一性道具在同一大区内，游戏仓库无法重复到账，请谨慎选择】";
    confirm(msg, function () {
        Milo.emit(flow);
    });
}

// 【暂存箱】分解钥匙
function amsZanFen(item, name, key) {
    var flow = {
        actId: isParams.amsId,
        token: 'a261b4',
        loading: true, // 开启loading浮层,默认不开启
        sData: {
            item: item
        },
        success: function (res) {
            console.log(res);
            var callbackObj = res.details.jData
            var msg = callbackObj.sMsg
            alert(msg, function () {
                amsHistoryList(2, isParams.pageNow)
                enter(2000);
            });
        },
        fail: function (res) {
            failShow(res, function () {
                alert(res.sMsg)
            })
        }
    }
    confirm("确定分解 " + name + " 获得 " + key + " 钥匙吗？", function () {
        Milo.emit(flow);
    });
}

//个人五虎币兑换道具
function amsExchange(item) {
    var flow = {
        actId: isParams.amsId,
        token: '8e4fde',
        loading: true, // 开启loading浮层,默认不开启
        sData: {
            item: item
        },
        success: function (res) {
            console.log(res);
            callbackObj = res.details.jData
            alert(callbackObj.sMsg, function () {
                enter(2000);
            });
        },
        fail: function (res) {
            failShow(res, function () {
                alert(res.sMsg)
            })
        }
    }
    //'1': ['雷神-杨戬皮肤（永久）', 1800],
    var msg = "确定使用 " + isParams.exchangeGoods[item][1] + " 个五虎币兑换 " + isParams.exchangeGoods[item][0] + " 吗？当前大区【" + isParams.bindinfo.sAreaName + "】【唯一性道具或角色在同一大区内，游戏仓库无法重复到账，请谨慎选择】";
    confirm(msg, function () {
        Milo.emit(flow);
    });
}

//个人五虎将令牌兑换道具
function amsExchangeLp(item) {
    var flow = {
        actId: isParams.amsId,
        token: 'efe83f',
        loading: true, // 开启loading浮层,默认不开启
        sData: {
            item: item
        },
        success: function (res) {
            console.log(res);
            callbackObj = res.details.jData
            alert(callbackObj.sMsg, function () {
                enter(2000);
            });
        },
        fail: function (res) {
            failShow(res, function () {
                alert(res.sMsg)
            })
        }
    }
    //'1': ['雷神-杨戬皮肤（永久）', 1800],
    var msg = "确定使用 " + isParams.exchangeLpGoods[item][1] + " 个五虎将令牌兑换 " + isParams.exchangeGoods[item][0] + " 吗？当前大区【" + isParams.bindinfo.sAreaName + "】【唯一性道具或角色在同一大区内，游戏仓库无法重复到账，请谨慎选择】";
    confirm(msg, function () {
        Milo.emit(flow);
    });
}

//自选道具兑换
function amsSelectExchange() {
    var item = $("#popSelect a.on").attr('item');
    if (item) {
        var flow = {
            actId: isParams.amsId,
            token: '411bc7',
            loading: true, // 开启loading浮层,默认不开启
            sData: {
                item: item
            },
            success: function (res) {
                console.log(res);
                callbackObj = res.details.jData
                alert(callbackObj.sMsg, function () {
                    closeDialog()
                    enter(2000);
                });
            },
            fail: function (res) {
                failShow(res, function () {
                    closeDialog()
                    alert(res.sMsg)
                })
            }
        }
        confirm("确定选择 " + isParams.exchangeSelectGoods[item] + " 吗？", function () {
            Milo.emit(flow);
        });
    } else {
        alert('请选择要领取的道具~')
    }
}

//疯狂的骰子
function amsChouTz(item) {
    var flow = {
        actId: isParams.amsId,
        token: 'c8e06c',
        loading: true, // 开启loading浮层,默认不开启
        sData: {
            item: item
        },
        success: function (res) {
            console.log(res);
            var callbackObj = res.details.jData
            var tz = isParams.tzNum[callbackObj.iPackageId]
            if (isH5) {
                $('.tz_img').attr('src', '//game.gtimg.cn/images/appdaoju/act/a20230207fivetigers/popsz' + tz + '.png')
            } else {
                $('.tz_img').attr('src', '//game.gtimg.cn/images/actdaoju/act/a20230207fivetigers/popsz' + tz + '.png')
            }
            $('#popTz p').html(callbackObj.sMsg)

            TGDialogS('popTz');
            isParams.lockCjTz = false
        },
        fail: function (res) {
            failShow(res, function () {
                alert(res.sMsg, function () {
                    isParams.lockCjTz = false
                });
            })
        }
    }

    if (typeof (isParams.bindinfo.sAreaName) != 'undefined' && isParams.bindinfo.sAreaName != '') {
        if (!isParams.lockCjTz) {
            isParams.lockCjTz = true
            Milo.emit(flow);
        }
    } else {
        commitBindArea()
    }
}

//五虎上将宝箱自动抽奖
function amsChouBox() {
    var flow = {
        actId: isParams.amsId,
        token: '119161',
        loading: true, // 开启loading浮层,默认不开启
        sData: {},
        success: function (res) {
            console.log(res);
            var callbackObj = res.details.jData
            alert(callbackObj.sMsg, function () {
                enter(2000)
            });
        },
        fail: function (res) {
            failShow(res, function () {
                alert(res.sMsg);
            })
        }
    }

    Milo.emit(flow);
}

//5种令牌
function amsExchangeFive() {
    var flow = {
        actId: isParams.amsId,
        token: '61c65c',
        loading: true, // 开启loading浮层,默认不开启
        sData: {},
        success: function (res) {
            console.log(res);
            var callbackObj = res.details.jData
            alert(callbackObj.sMsg, function () {
                enter(2000)
            });
        },
        fail: function (res) {
            failShow(res, function () {
                alert(res.sMsg);
            })
        }
    }

    var msg = "确定消耗【赵云，张飞，关羽，马超，黄忠令牌各1】兑换【五虎上将令牌x1】吗？";
    confirm(msg, function () {
        Milo.emit(flow);
    });
}

// 特权
function amsTeQ() {
    if (isH5) {
        var flow = {
            actId: isParams.amsId,
            token: '5bbf7d',
            loading: true, // 开启loading浮层,默认不开启
            sData: {},
            success: function (res) {
                console.log(res);
                callbackObj = res.details.jData
                alert(callbackObj.sMsg, function () {
                    enter(2000);
                });
            },
            fail: function (res) {
                failShow(res, function () {
                    alert(res.sMsg)
                })
            }
        }

        Milo.emit(flow);
    }
}

//福利
function amsLqFl() {
    var flow = {
        actId: isParams.amsId,
        token: 'dca1ba',
        loading: true, // 开启loading浮层,默认不开启
        sData: {},
        success: function (res) {
            console.log(res);
            callbackObj = res.details.jData
            alert(callbackObj.sMsg);
        },
        fail: function (res) {
            failShow(res, function () {
                alert(res.sMsg)
            })
        }
    }
    Milo.emit(flow);
}

//查询福利
function amsSelectFl() {
    $('.fldj').removeClass('on')
    var flow = {
        actId: isParams.amsId,
        token: '6b8317',
        loading: true, // 开启loading浮层,默认不开启
        sData: {},
        success: function (res) {
            console.log(res);
            alert('查询成功~')
            callbackObj = res.details.jData
            if (callbackObj.num > 0) {
                $.each(callbackObj.items, function (k, v) {
                    $('.fl_' + v).addClass('on')
                })
            }
        },
        fail: function (res) {
            failShow(res, function () {
                alert(res.sMsg)
            })
        }
    }
    Milo.emit(flow);
}

//================================抽奖 end ===========================================

//======================= 记录 start ========================================================
// 个人获奖记录
function amsHistoryList(item, pageNow) {
    isParams.pageNow = pageNow;
    var flow = {
        actId: isParams.amsId,
        token: 'b791e3',
        loading: true, // 开启loading浮层,默认不开启
        sData: {},
        success: function (res) {
            //渲染数据
            $("#milo-lotteryRecordContainer" + item).html('');
            let tpl_html = $("#milo-lotteryRecordTpl" + item).html();
            // 渲染数据
            const _html = Milo.tpl().compile(tpl_html, res.data);
            $("#milo-lotteryRecordContainer" + item).html(_html);

            //如果查询第一页就没有数据
            $('#milo-paginator' + item).show()
            if (res.total == 0) {
                $('#milo-paginator' + item).hide()
            } else {
                // 分页初始化
                Milo.pagination({
                    pages: res.total, // 总页数
                    currentPage: flow.sData.pageNow, // 当前页
                    element: '#milo-paginator' + item, // 分页容器id，用于渲染分页控件
                    // 切换页数时触发回调
                    callback: function (page) {
                        if (page !== flow.sData.pageNow) {
                            amsHistoryList(item, page);
                        }
                    }
                });
            }

            //如果是查询的最后一页
            $("#milo-paginator" + item + " .my-page-next").show()
            if (res.total == flow.sData.pageNow) {
                $("#milo-paginator" + item + " .my-page-next").hide()
            }

            TGDialogS('showMyGiftContent' + item)
        },
        fail: function (res) {
            failShow(res)
        }
    }
    // 用于处理分页的变化
    if (pageNow) {
        flow.sData.pageNow = pageNow;
    } else {
        flow.sData.pageNow = 1;
    }
    //尺寸
    if (isH5) {
        if (item == 1) {
            flow.sData.pageSize = 5;
        } else {
            flow.sData.pageSize = 5;
        }
    } else {
        if (item == 1) {
            flow.sData.pageSize = 8;
        } else {
            flow.sData.pageSize = 8;
        }
    }
    flow.sData.item = item;

    Milo.emit(flow)
}

//================================令牌 start =============================================
//定制
function amsSelectNum(num) {
    if (isH5) {
        var img = '//game.gtimg.cn/images/appdaoju/act/a20230207fivetigers/'
    } else {
        var img = '//game.gtimg.cn/images/actdaoju/act/a20230207fivetigers/'
    }
    isParams._select_num = num;
    $('.bglingyxz img').attr('src', img + isParams.selectLp[num]['img']);
    $('.bglingyxz p').html(isParams.selectLp[num]['name'])
}

function common_givef(callback = '') {
    if (isParams._select_num == -1) {
        alert('请先选择分享的令牌');
        return false;
    }

    var id = ['5451', '5452', '5454', '5456', '5457'][isParams._select_num - 1];
    if (isParams.jfnum['_' + id] <= 0) {
        alert('当前令牌剩余量不足');
        return false;
    }

    var id = ['5472','5473','5474','5475','5476'][isParams._select_num - 1];
    if (isParams.jfnum['_' + id] <= 0) {
        alert('当前令牌剩余可赠送次数不足');
        return false;
    }
    $.isFunction(callback) && callback();
}


function giveF() {
    common_givef(function () {
        flow_928428.sData.item = 1;
        flow_928428.sData.num = isParams._select_num;
        $('.poptitsha').html('赠送好友令牌')
        Milo.emit(flow_928428);
    })
}

function getF() {
    if (isParams._select_num == -1) {
        alert('请先选择索要的令牌');
        return false;
    }
    $('.poptitsha').html('索要好友令牌')
    flow_928428.sData.item = 2;
    flow_928428.sData.num = isParams._select_num;
    Milo.emit(flow_928428);
}

var flow_928428 = {
    actId: isParams.amsId,
    token: '485e76',
    loading: true, // 开启loading浮层,默认不开启
    sData: {},
    success: function (res) {
        console.log(res);
        res = res.details.jData
        var str = 'encrypt=' + res.str + '&item=' + res.item + '&num=' + res.num
        // https://app.daoju.qq.com/act/a20230207fivetigers/index.html?encrypt={条件.1858013.result}&item={条件.1858010.value}&num={条件.1858011.value}&uin={iUin}
        // shareUrl: location.href
        // shareUrl: location.href.split('?')[0]+'?'+res.sOutValue1+'&uin='+isParams.bindinfo.FroleName  //好友分享是qq号，其他是角色名
        if (isParams.bindinfo.roleName) {
            _share.shareUrl = str + '&shareu=' + encodeURIComponent(isParams.bindinfo.roleName)
        } else {
            _share.shareUrl = str + '&shareu=' + res.user
        }

        qrCode(_share.shareUrl);
        if (!isH5) {
            TGDialogS('popshare');
        }
    },
    fail: function (res) {
        failShow(res, function () {
            alert(res.sMsg)
        })
    }
}

//授权推荐
function supportGiveF() {
    common_givef(function () {
        flow_927577.sData.item = 1;
        flow_927577.sData.num = isParams._select_num;
        Milo.emit(flow_927577);
    })
}

function supportGetF() {
    if (isParams._select_num == -1) {
        alert('请先选择索要的令牌');
        return false;
    }
    flow_927577.sData.item = 2;
    flow_927577.sData.num = isParams._select_num;
    Milo.emit(flow_927577);
}

var flow_927577 = {
    actId: isParams.amsId,
    token: 'e22fc0',
    loading: true, // 开启loading浮层,默认不开启
    sData: {},
    success: function (res) {
        console.log(res);
        res = res.details.jData
        alert('您成功授权推荐栏【' + ['赠送', '索要'][res.item - 1] + ' ' + isParams.shareLp[res.num - 1] + '令牌1张】', function () {
            get_support_list(1)
        })
    },
    fail: function (res) {
        failShow(res, function () {
            alert(res.sMsg)
        })
    }
}


// https://connect.qq.com/widget/shareqq/index.html?url=https%3A%2F%2Fapp.daoju.qq.com%2Fact%2Fa20220810makewish%2Findex.html%3Fencrypt%3DbpNyaZWbZ21rk2PAasGUmmJqmZtrbGJuaJqXmppkkWZskw%253D%253D%26item%3D1%26num%3D8%26uin%3D619%E4%B8%8A%E6%B5%B71%26plat_support%3Dmqq&flash=&site=&style=201&width=32&height=32
// https://connect.qq.com/widget/shareqq/index.html?url=https%3A%2F%2Fapp.daoju.qq.com%2Fact%2Fa20220810makewish%2Findex.html%3Fencrypt%3DbpNyaZWbZ21rk2PAasGYnGuZmsc%253D%26item%3D1%26num%3D8%26uin%3D619%E4%B8%8A%E6%B5%B71%26plat_support%3Dmqq&desc=%E7%A9%BF%E8%B6%8A%E7%81%AB%E7%BA%BF%E4%BC%A0%E8%AF%B4%E5%85%89%E8%80%80%E5%BA%8F%E5%88%97%E5%8F%B7%E5%AE%9A%E5%88%B6%E5%A5%BD%E5%8F%8B%E4%BA%92%E8%B5%A0%EF%BC%81&title=%E7%A9%BF%E8%B6%8A%E7%81%AB%E7%BA%BF%E4%BC%A0%E8%AF%B4%E5%85%89%E8%80%80%E5%BA%8F%E5%88%97%E5%8F%B7%E5%AE%9A%E5%88%B6&summary=%E7%A9%BF%E8%B6%8A%E7%81%AB%E7%BA%BF%E4%BC%A0%E8%AF%B4%E5%85%89%E8%80%80%E5%BA%8F%E5%88%97%E5%8F%B7%E5%AE%9A%E5%88%B6%E5%A5%BD%E5%8F%8B%E4%BA%92%E8%B5%A0%EF%BC%81&pics=https%3A%2F%2Fgame.gtimg.cn%2Fimages%2Factdaoju%2Fact%2Fa20220810makewish%2Fshare.jpg&flash=&site=&style=201&width=32&height=32
//抽令牌
//普通抽奖

// 流程失败回调
function failShow(res, callback = '') {
    console.log(res)
    if (res.iRet === 101 || res.iRet === '101') {
        // 登录态失效，需要重新调登录方法
        toLogin()
    } else if (res.iRet === 99998 || res.iRet === '99998') {
// 调用提交绑定大区方法
        commitBindArea();
    } else {
        $.isFunction(callback) && callback(res);
    }
}

//================================幸运签 end =============================================
var _share = {
    title: "穿越火线五虎将集齐",
    pic: "https://game.gtimg.cn/images/actdaoju/act/a20230207fivetigers/share.jpg",// 这里需要修改
    content: "穿越火线五虎将集齐，好友互赠令牌，快来参与！",// 这里需要修改
    shareUrl: location.href,
    h5_url: ''
};
//================================序列号 end =============================================
var $inp = $("#inp");

function qrCode(id) {
    // _share.h5_url = 'https://app.daoju.qq.com/act/a20230207fivetigers/index.html?' + id + '&plat_support=mqq';
    _share.h5_url = 'https://app.daoju.qq.com/act/a20230207fivetigers/index.html?' + id;
    _share.shareUrl = 'https://act.daoju.qq.com/act/a20230207fivetigers/index.html?' + id;
    console.log('_share.h5_url = ' + _share.h5_url)
    console.log(' _share.shareUrl = ' + _share.shareUrl)
    $("#qrcode").html("");
    if (isH5) {
        _share.shareUrl = _share.h5_url + "&ADTAG=" + milo.request("ADTAG");
        console.log(' qrCode  _share.shareUrl = ' + _share.shareUrl)
        setShare();
    } else {
        if (isNei) {
            need("util.jquery.qrcode", function ($a) {
                $("#qrcode").qrcode({
                    width: 180,
                    height: 180,
                    render: 'canvas',
                    text: _share.shareUrl
                });
            });
        } else {
            need("util.jquery.qrcode", function ($a) {
                $("#qrcode").qrcode({
                    width: 180,
                    height: 180,
                    render: 'canvas',
                    text: _share.h5_url
                });
            });
        }
    }
    $inp.val(_share.shareUrl);
    if (isH5) {
        sendShare()
    }
}

//复制功能
$('.copyUrl').click(function () {
    if ($inp.val() != "") {
        var inp = document.getElementById('inp');
        inp.select();
        if (document.execCommand("copy")) {
            alert('已复制好，可贴粘');
        } else {
            alert('请手动复制到剪贴板')
        }
    } else {
        alert("未生成链接地址");
    }
});

//分享给qq好友
function send_friend() {
    if ($inp.val() == "") {
        alert("分享链接生成中，请稍后~");
        return false;
    }
    var p = {
        url: _share.h5_url, /*获取URL，可加上来自分享到QQ标识，方便统计*/
        // url: 'https://app.daoju.qq.com/act/a20230207fivetigers/index.html?encrypt=bpNyaZWbZ21rk2PAasGUmGZnm5pra2ZtaJqXmppkkWtskw%3&item=1&num=8&uin=&plat_support=mqq', /*获取URL，可加上来自分享到QQ标识，方便统计*/
        desc: _share.content, /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
        title: _share.title, /*分享标题(可选)*/
        summary: _share.content,
        pics: _share.pic, /*分享图片(可选)*/
        flash: '',
        site: '',
        style: '201',
        width: 32,
        height: 32
    };
    var s = [];
    for (var i in p) {
        s.push(i + '=' + encodeURIComponent(p[i] || ''));
    }
    window.open('//connect.qq.com/widget/shareqq/index.html?' + s.join('&'), '');
}

//分享链接至QQ空间
function send_qzone() {
    if ($inp.val() == "") {
        alert("分享链接生成中，请稍后~");
        return false;
    }
    need("biz.qzoneShare", function (share) {
        //if (isNei) {
        //    //setInterval(function () {
        //    //    $(".lz_act_pop").parent().css("zoom", "1");
        //    //}, 10);
        //}

        share.share({
            url: $inp.val(),//分享链接[可选，不传则取页面url]
            title: _share.title,
            desc: _share.content,//
            pics: _share.pic,
            summary: _share.content,
            showcount: '0',//1默认显示  0不显示
            md: '1',//1默认不允许更改  0允许更改
            callback: function (shareId) {
                alert("分享成功！");
            }
        });
    });
}

//拉起分享
if ((new RegExp('cfapp').test(navigator.userAgent)) || /GameHelper/.test(navigator.userAgent) || /cfapp/.test(navigator.userAgent)) {
    $('#shequ').attr("href", "javascript:GameHelper.shareWebPageWithFuntion(_share.title, _share.content, _share.pic, _share.shareUrl, '8', 1)");
}

function sendShare() {
    if ((new RegExp('cfapp').test(navigator.userAgent)) || /GameHelper/.test(navigator.userAgent) || /cfapp/.test(navigator.userAgent)) {
        launchShareWindow();
    } else {
        need("daoju.ui.share", function (share) {
            share.sendShare({
                title: _share.title,
                icon: _share.pic,
                desc: _share.content,
                link: _share.shareUrl
            });
        });
    }
}

//掌火
function launchShareWindow() {
    var title = _share.title,
        desc = _share.content,
        icon = _share.pic,
        url = _share.shareUrl;
    if (typeof (GameHelper) != 'undefined') {
        //掌火分享给qq,weix好友
        // url = 'https://app.daoju.qq.com/act/a20230207fivetigers/index.html?scode=1&encrypt=' + encodeURIComponent(window.isParam.LoginShareCode) + "&ADTAG=" + milo.request("ADTAG") + "&plat_support=mqq";
        url = _share.h5_url + "&scode=1&ADTAG=" + milo.request("ADTAG");
        GameHelper.shareWebPageWithFuntion(title, desc, icon, url, '1,2,3,4,5,6,8', 1)
    } else {
        zhtc();
    }
}

function zhtc() {
    var share_url = _share.shareUrl;
    var title = _share.title;
    var summary = _share.content;
    var icon = _share.pic;
    var collect_state = 1;

    //掌上cf分享ios需要的函数
    var sendIosMessage = function (src) {
        var oIFrame = document.getElementById("__MessageIframe__");
        if (!oIFrame) {
            oIFrame = document.createElement("iframe");
            oIFrame.id = "__MessageIframe__";
            oIFrame.frameborder = "0";
            oIFrame.scrolling = "no";
            oIFrame.width = "0px";
            oIFrame.height = "0px";
            oIFrame.frameBorder = "0";
            oIFrame.style.display = "none";
            oIFrame.src = src;
            document.body.appendChild(oIFrame);
        } else {
            oIFrame.src = src;
        }
    };
    //掌上cf分享安卓需要的函数
    var sendAndroidMessage = function (src) {
        window.location.href = src;
    };
    var data = {
        "title": encodeURIComponent(title),
        "summary": encodeURIComponent(summary),
        "icon": encodeURIComponent(icon),
        "is_act": encodeURIComponent("1"),
        "url": encodeURIComponent(share_url),
        "collect_state": encodeURIComponent(collect_state)
    };
    var src = "requestapp://sharenew?param=" + encodeURIComponent(JSON.stringify(data));
    if (new RegExp('cfapp').test(navigator.userAgent)) {
        if (new RegExp('Android').test(navigator.userAgent)) {
            sendAndroidMessage(src);
        } else {
            sendIosMessage(src);
        }
    }
}

// 初始化分享
function setShare() {
    setTimeout(function () {
        need("daoju.ui.share", function (share) {
            if (typeof ek != "undefined") {
                //是腾讯动漫
                ek.share.setShare({
                    title: _share.title,
                    img_url: _share.pic,
                    desc: _share.content,
                    link: _share.shareUrl,
                    callback: function () {
                        alert("分享成功！");
                    }
                });
            } else {
                //不是腾讯动漫
                share.setShare({
                    title: _share.title,
                    icon: _share.pic,
                    desc: _share.content,
                    link: _share.shareUrl
                });
            }
        });
    }, 500);
}

function amsShare() {
    var encrypt = milo.request('encrypt');
    if (milo.request('scode') != '' && milo.request('scode') == 1) {
        encrypt = decodeURIComponent(decodeURIComponent(encrypt));
    }
    if (encrypt.indexOf("+") != -1) {
        encrypt = encodeURIComponent(encrypt);
    }

    isParams.encrypt_info['encrypt'] = encrypt
    isParams.encrypt_info['item'] = milo.request('item')
    isParams.encrypt_info['num'] = milo.request('num')
    isParams.encrypt_info['user'] = decodeURIComponent(milo.request('shareu'))

    if (isParams.encrypt_info['encrypt'] && isParams.encrypt_info['item'] && isParams.encrypt_info['num']) {
        $('.share_item').html('【' + isParams.encrypt_info['user'] + '】' + ['赠送', '索要'][isParams.encrypt_info['item'] - 1])
        $('.share_num').html(isParams.shareLp[isParams.encrypt_info['num'] - 1])
        if (isH5) {
            $('.share_num_img').attr('src', '//game.gtimg.cn/images/appdaoju/act/a20230207fivetigers/ling' + isParams.encrypt_info['num'] + '.png')
        } else {
            $('.share_num_img').attr('src', '//game.gtimg.cn/images/actdaoju/act/a20230207fivetigers/ling' + isParams.encrypt_info['num'] + '.png')
        }

        TGDialogS('popYq')
    }
}

//url分享链接同意分享
function agreeShare() {
    var flow = {
        actId: isParams.amsId,
        token: 'a9d14f',
        loading: true, // 开启loading浮层,默认不开启
        sData: {
            encrypt: isParams.encrypt_info['encrypt'],
            item: isParams.encrypt_info['item'],
            num: isParams.encrypt_info['num'],
        },
        success: function (res) {
            console.log(res);
            var callbackObj = res.details.jData
            var msg = callbackObj.sMsg;
            if (isParams.encrypt_info['item'] == 2) {
                msg = '赠送成功'
            }
            alert(msg, function () {
                enter(1500)
            });
        },
        fail: function (res) {
            failShow(res, function () {
                alert(res.sMsg)
            })
        }
    }
    Milo.emit(flow);
}

//从授权框同意使用
function amsSupport(id, item, num, sRoleName, encrypt) {
    var flow = {
        actId: isParams.amsId,
        token: 'ebfdf0',
        loading: true, // 开启loading浮层,默认不开启
        sData: {
            id: id,
            item: item,
            num: num,
            encrypt: encrypt,
        },
        success: function (res) {
            console.log(res);
            var callbackObj = res.details.jData
            var msg = callbackObj.sMsg;
            if (item == 2) {
                msg = '赠送成功'
            }
            alert(msg, function () {
                enter(1500)
                get_support_list(1)
            });
        },
        fail: function (res) {
            failShow(res, function () {
                alert(res.sMsg)
            })
        }
    }
    confirm('用户【' + sRoleName + ' ' + ['赠送', '索要'][item - 1] + '】您1个【' + isParams.shareLp[num - 1] + '】令牌，您确认接受吗？', function () {
        Milo.emit(flow);
    })
}

function initDom() {
    if (isZhApp()) {
        $('#dologout').css('display', 'none');
    }

    //弹窗奖池切换
    $('.popbtnnav a').each(function (i) {
        $(this).click(function () {
            $(this).addClass('on').siblings().removeClass('on');
            $('.tablegl').eq(i).show().siblings().hide();
        })
    })

    //弹窗人物选择
    $('.popbtnrw').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
    })
}
