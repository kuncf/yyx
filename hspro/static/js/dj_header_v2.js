// 日志组件加载
(function() {
    var dj_report_script = document.createElement('script');
    dj_report_script.src = '//game.gtimg.cn/images/js/milo/daoju/hx/report.js';
    dj_report_script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(dj_report_script);
})();

function Dj_header_loaded() {
    this.curr_step = 0;
    this.all_step = 3;
    this.callbacks = [];
    this.ready = function(callback) {
        this.callbacks.push(callback);
        this.run();
    };
    this.step_ready = function() {
        this.curr_step++;
        this.run();
    };
    this.run = function() {
        if (this.curr_step >= this.all_step) {
            for (var i = 0; i < this.callbacks.length; i++) {
                typeof this.callbacks[i] == 'function' && this.callbacks[i]();
            }
            this.callbacks = [];
        }
    };
};

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

window.dj_header_loaded = new Dj_header_loaded;
window.dj_header_ready = function(callback) {
    window.dj_header_loaded.ready(callback);
};
if (window.location.host == 'act.daoju.qq.com') {
    var dj_header_ping_script = document.createElement('script');
    dj_header_ping_script.src = '//pingjs.qq.com/tcss.ping.https.js?v=1';
    dj_header_ping_script.type = 'text/javascript';
    var dj_header_ping_script_event = typeof(dj_header_ping_script.onload) != 'undefined' ? 'onload' : 'onreadystatechange';
    dj_header_ping_script[dj_header_ping_script_event] = function() {
        if ((!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
            dj_header_ping_script[dj_header_ping_script_event] = null;
            if (typeof(pgvMain) == "function") {
                pgvMain("", {
                    virtualDomain: "daoju.qq.com"
                });
            }
            window.dj_header_loaded.step_ready();
        }
    };
    document.getElementsByTagName('head')[0].appendChild(dj_header_ping_script);
}
dj_header_html = '<style type="text/css">*{margin:0;padding:0}ul{list-style:none}a,a img{border:0;outline:none}.ost_box,.ost_djlogo,.ost_yearlogo,.ost_game .game_menu,.i_centerdown{background:url(//ossweb-img.qq.com/images/daoju/act/common/djtb.png) no-repeat 0 -9999px}.ost_logo,.ost_ul li.ost_line{text-indent:-9999px;overflow:hidden}.ost_box{width:100%;min-width:980px;background-position:0 0;background-repeat:repeat-x;background-color:#ffffff;height:43px;border:1px solid #c9c9c9;border-width:1px 0;-webkit-text-size-adjust:none;position:absolute;left:0;top:0;z-index:10000}.ost_inner{width:980px;height:43px;margin:0 auto;position:relative;z-index:100;font-size:12px;line-height:43px;color:#666}.ost_inner a{color:#666}.ost_inner a:hover{color:#f74a4a}.ost_logo{float:left;margin-top:2px;height:39px;overflow:hidden}.ost_djlogo{background-position:0 -46px;width:140px;height:39px;display:block}.ost_yearlogo{background-position:-138px -46px;width:100px;height:39px;display:block}.ost_ad{float:left}.ost_ad .img{display:block;height:43px}.ost_ul{background-position:0 -100px;width:355px;height:20px;padding:5px 0 0 18px;_height:18px;_padding:7px 0 0 18px;display:block;overflow:hidden;position:absolute;top:9px;left:215px;zoom:1}.ost_ul:after{content:".";display:block;height:0;clear:both;visibility:hidden}.ost_game{float:right;width:80px;height:30px;margin-top:7px;position:relative;margin-left:10px}.ost_game .game_menu{display:block;width:72px;height:21px;line-height:20px;margin-top:5px;padding-left:8px;background-position:0 -89px;color:#666}.ost_game .game_menu:hover{text-decoration:none;color:#666}.ost_pop{width:724px;height:332px;position:absolute;top:28px;right:0;display:none;z-index:9000}.ost_game_hide .ost_pop,.ost_ad_hide .ost_big,.ost_wx_hide .img{display:none!important}.ost_game_show .ost_pop,.ost_ad_show .ost_big,.ost_wx_show .img{display:block!important}.ost_fr{float:right;margin-left:10px}.ost_fr i{font-style:normal;color:#e7e7e7;margin-left:10px}.ost_fr i.fr{float:right}.ost_big{width:980px;height:147px;background:#fff;overflow:hidden;position:absolute;top:44px;left:50%;margin:0 0 0 -490px;z-index:50;display:none}.ost_wx{position:relative}.ost_wx .img{display:none;position:absolute;top:41px;left:-44px}.i_centerdown{display:inline-block;width:17px;height:10px;overflow:hidden;background-position:-58px -94px}.ost_center{position:relative}.ost_center_list{display:none;position:absolute;top:7px;_top:-7px;left:-11px;border:1px solid #e7e7e7;width:85px;background:#fff;padding-bottom:5px}.ost_center_list a{display:block;float:none;padding-left:10px;line-height:26px;height:26px}.ost_center_show .ost_center_list{display:block}.tlogin{float:right} ' +
    '.djmobile{background: url(//js02.daoju.qq.com/common/images/icon.png) no-repeat;float:left;position:relative;left:-10px;top:12px;width:11px;height:16px;background-position:0 0;margin:2px -4px 0 8px;}.djcode{background: url(//js02.daoju.qq.com/common/images/mall/djfsc.png) no-repeat;background-position:0 0;width:133px;height:133px;position:absolute;top:33px;left:750px;z-index:2;display:none;}.ost_inner li a.djm:hover .djcode{display:block;} ' +
    '</style><div class=ost_box><ul class=ost_inner><li class=ost_logo><a href=//daoju.qq.com class=ost_djlogo target=_blank title=道聚城>道聚城</a></li><li class=ost_ad onmouseout="this.className=\'ost_ad ost_ad_hide\'" onmouseover="this.className=\'ost_ad ost_ad_show\'"><img id="dj_header_small_img" class="img" /><div id=ost_d class=ost_big><a id=dj_header_big_link target=_blank /><img id="dj_header_big_img" class=ost_nb /></a></div></li><li class=ost_game onmouseout="this.className=\'ost_game ost_game_hide\'" onmouseover="this.className=\'ost_game ost_game_show\'"><a title=游戏导航 id=game_menu href=javascript:; class=game_menu>游戏导航</a><iframe id=game_area_list scrolling=no frameborder=0 class=ost_pop allowtransparency=true src=//js02.daoju.qq.com/time/big_mall/tpl/game_area.htm></iframe></li><li class="ost_fr"><a class="djm" href=//daoju.qq.com/malldownload/index.html target=_blank><s class="djmobile"></s>手机版<span class="djcode"></span></a><i>|</i></li><li class="ost_fr ost_center" onmouseout="this.className=\'ost_fr ost_center ost_center_hide\'" onmouseover="this.className=\'ost_fr ost_center ost_center_show\'"><a href=javascript:void(0) title=我的订单>我的订单<s class="i_centerdown"></s></a><div class=ost_center_list><a title=我的订单 target=_blank href=//daoju.qq.com/mall/trade2.shtml class=active>我的订单<s class=i_centerdown></s></a><a title=个人中心 target=_blank href=//daoju.qq.com/mall/center.shtml>个人中心</a><a title=我的购物点 target=_blank href=//daoju.qq.com/mall/ticket.shtml>我的购物点</a><a title=我的优惠券 target=_blank href=//daoju.qq.com/mall/coupon.shtml>我的优惠券</a><a title=我的关注 target=_blank href=//daoju.qq.com/mall/attention.shtml>我的关注</a><a title=我的魅力值 target=_blank href=//daoju.qq.com/mall/charm.shtml>我的魅力值</a><a title=我的消息 target=_blank href=//daoju.qq.com/mall/message.shtml>我的消息</a></div><i>|</i></li><li class=ost_fr><a href=//daoju.qq.com/mall/tao.shtml target=_blank title=折扣道具>折扣道具</a><i>|</i></li><li class=ost_fr><a href=//daoju.qq.com/mall/actcenter.shtml target=_blank title=精彩活动>精彩活动</a><i>|</i></li><li class=ost_fr><i class=fr>|</i><span class=tlogin><span id=tunlogin>您还未登录，请<a href=javascript:LoginManager.login(); title=登录>登录</a></span><span style=display:none; id=tlogined>欢迎你，<a href=//daoju.qq.com/mall/center.shtml title=个人中心><span id=tlogin_qq_span>-</span></a>&nbsp;&nbsp;&nbsp;<a href=javascript:loginOut(); title=退出>退出</a></span></span></li></ul></div>' +
    '';
// var headerpanel = document.createElement("div");
// headerpanel.id = "dj_header_panel";
// headerpanel.innerHTML = dj_header_html;
document.write(dj_header_html);
//document.body.appendChild(headerpanel);
addLoadEvent(function() {
    if (typeof(milo) == "undefined") {
        var headerscript = document.createElement("script");
        headerscript.src = "//ossweb-img.qq.com/images/js/milo/milo.js";
        document.body.appendChild(headerscript);
        headerscript.onload = headerscript.onreadystatechange = function() {
            if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
                loginOut = function() {
                    need(['biz.login'], function(LoginManager) {
                        LoginManager.logout(function() {
                            document.getElementById("tlogined").style.display = "none";
                            document.getElementById("tunlogin").style.display = "block";
                        })
                    })
                };
                var tunlogin = document.getElementById("tunlogin");
                var tlogined = document.getElementById("tlogined");
                if (/^mir\.qq\.com/i.test(document.location)) {
                    tunlogin.style.display = "none";
                    tlogined.style.display = "none";
                };
                need(['biz.login'], function(LoginManager) {
                    LoginManager.checkLogin(function(login) {
                        var uin = LoginManager.getUserUin();
                        var tunlogin = document.getElementById("tunlogin");
                        var tlogined = document.getElementById("tlogined");
                        tunlogin.style.display = "none";
                        tlogined.style.display = "block";
                        document.getElementById("tlogin_qq_span").innerHTML = uin;
                    })
                })
            }
        }
    } else {
        loginOut = function() {
            need(['biz.login'], function(LoginManager) {
                LoginManager.logout(function() {
                    document.getElementById("tlogined").style.display = "none";
                    document.getElementById("tunlogin").style.display = "block"
                })
            })
        };
        var tunlogin = document.getElementById("tunlogin");
        var tlogined = document.getElementById("tlogined");
        if (/^mir\.qq\.com/i.test(document.location)) {
            tunlogin.style.display = "none";
            tlogined.style.display = "none";
        };
        need(['biz.login'], function(LoginManager) {
            LoginManager.checkLogin(function(login) {
                var uin = LoginManager.getUserUin();
                var tunlogin = document.getElementById("tunlogin");
                var tlogined = document.getElementById("tlogined");
                tunlogin.style.display = "none";
                tlogined.style.display = "block";
                document.getElementById("tlogin_qq_span").innerHTML = uin;
            })
        })
    }
});
//GPM广告位
var dj_header_img_script = document.createElement('script');
dj_header_img_script.src = '//apps.game.qq.com/daoju/igw/main/?_service=welink.ad.list&_ret_key=result&site_set=1%26daoju_sale_a%7C1%26daoju_sale_b&_jsvar=ads';
// dj_header_img_script.type = 'text/javascript';
var dj_header_img_script_evnet = typeof(dj_header_img_script.onload) != 'undefined' ? 'onload' : 'onreadystatechange';
dj_header_img_script[dj_header_img_script_evnet] = function() {
    if ((!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
        dj_header_img_script[dj_header_img_script_evnet] = null;

        var big_img_href = '';
        if (typeof window.ads.data.siteData != 'undefined')
        {
            var data = window.ads.data.siteData;
            if (typeof data.daoju_sale_a != 'undefined' && typeof data.daoju_sale_b != 'undefined' && data.daoju_sale_a.daoju[0] && data.daoju_sale_b.daoju[0])
            {
                document.getElementById('dj_header_small_img').src = data.daoju_sale_a.daoju[0].image;
                document.getElementById('dj_header_big_img').src = data.daoju_sale_b.daoju[0].image;
                document.getElementById('dj_header_big_link').href = data.daoju_sale_b.daoju[0].url;
                big_img_href = data.daoju_sale_b.daoju[0].url;
            }
        }
        // for (oDaTaNewItem in window.oDaTaNew14843) {
        //     if (window.oDaTaNew14843[oDaTaNewItem][3] == 247) { //小图
        //         document.getElementById('dj_header_small_img').src = '//ossweb-img.qq.com/upload/adw/' + window.oDaTaNew14843[oDaTaNewItem][2];
        //     } else if (window.oDaTaNew14843[oDaTaNewItem][3] == 980) { //大图
        //         document.getElementById('dj_header_big_img').src = '//ossweb-img.qq.com/upload/adw/' + window.oDaTaNew14843[oDaTaNewItem][2];
        //         document.getElementById('dj_header_big_link').href = window.oDaTaNew14843[oDaTaNewItem][1];
        //         big_img_href = window.oDaTaNew14843[oDaTaNewItem][1];
        //     }
        // }
        window.dj_header_loaded.step_ready();
        //EAS广告
        if (window.location.host == 'act.daoju.qq.com') {
            var dj_header_ping_script = document.createElement('script');
            dj_header_ping_script.src = '//ossweb-img.qq.com/images/js/eas/eas.js';
            dj_header_ping_script.type = 'text/javascript';
            var dj_header_ping_script_event = typeof(dj_header_img_script.onload) != 'undefined' ? 'onload' : 'onreadystatechange';
            dj_header_ping_script[dj_header_ping_script_event] = function() {
                if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                    dj_header_ping_script[dj_header_ping_script_event] = null;
                    //if(typeof(pgvMain)=="function"){pgvMain("", {virtualDomain: "daoju.qq.com"});}
                    EAS.ADShow(big_img_href);
                    var clickFunc = function() {
                        EAS.ADClick(big_img_href);
                    };
                    if (/msie/ig.test(window.navigator.userAgent)) {
                        document.getElementById('dj_header_big_link').attachEvent('onclick', clickFunc);
                    } else {
                        document.getElementById('dj_header_big_link').addEventListener('click', clickFunc);
                    }

                    //eas上报
                    EAS.need('mall', function() {
                        EAS.mall({
                            'ec': "",
                            /*动作类型 自定义*/
                            'biz': 'daoju',
                            /*业务名称*/
                            'appid': 1003,
                            /*渠道ID*/
                            'channel': "0",
                            /*来源ID*/
                            'plugid': 7000,
                            /*场景ID*/
                            'actid': 0,
                            /*平台活动ID*/
                            'propid': '',
                            /*道具礼包id*/
                            'catid': '',
                            /*道具分类*/

                            'price': 0,
                            /*道具价格*/
                            'quantity': 0,
                            /*购买数量*/

                            'openid': "",
                            /*openid*/
                            'area': "",
                            /*大区ID*/
                            'plat': "",
                            /*平台ID 对应plat（0：ios 1： andriod， 9:pc)）*/
                            'partition': "",
                            /*小区ID*/
                            'roleid': "",
                            /*角色ID*/
                            'ext': '' /*扩展信息*/
                        });
                    });

                    window.dj_header_loaded.step_ready();
                }
            };
            document.getElementsByTagName('head')[0].appendChild(dj_header_ping_script);
        }

    }
};
document.getElementsByTagName('head')[0].appendChild(dj_header_img_script);

document.domain = "qq.com";



// 引入过期活动下线组件，add by springswang at 2017-04-21
(function() {

    // 禁止gpm的tip
    window.no_webtips_flag = true;

    var load = function() {
        need(['daoju.mall.comm.act_expire_tip.main'], function(actExpireTip) {
            setTimeout(function() {
                actExpireTip.init();
            }, 1000)
        });
    }

    // 因为jd_header.js在milo之前加载，所以这里需要轮询判断等待milo加载
    var intval = setInterval(function() {
        if (typeof milo == 'object' && typeof need == 'function' && typeof define == 'function') {
            clearInterval(intval);
            load();
        }
    }, 100);
})()