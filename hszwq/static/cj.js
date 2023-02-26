
var keynum = 0;
//定义钥匙数量
const Pgailv = [
    ['M4A1-战神赵云', 0.4, 8],
    ['毁灭-战神张飞', 0.4, 8],
    ['火麒麟-战神关羽',0.4, 8],
    ['黑骑士-战神马超', 0.4, 8],
    ['M200-幻神-黄忠皮肤', 0.3, 10],
    ['M200-幻神', 0.3, 12],
    ['M4A1-雷神', 0.7, 4],
    ['AK47-火麒麟', 0.7, 4],
    ['Barrett-毁灭', 0.7, 4],
    ['M4A1-黑骑士', 0.7, 4],
    ['五虎将玩偶自选', 1, 2],
    ['五虎上将宝箱', 7.3, 0],
    ['疯狂骰子', 30, 0],
    ['五虎币x100', 0.1, 0],
    ['五虎币x50', 2, 0],
    ['五虎币x20', 4.50, 0],
    ['五虎币x10', 50, 0],
    ['五虎币x5', 30, 0]
]

// M4A1-战神赵云	0.40%
// 毁灭-战神张飞	0.40%
// 火麒麟-战神关羽	0.40%
// 黑骑士-战神马超	0.40%
// M200-幻神-黄忠皮肤	0.30%
// M200-幻神	0.30%
// M4A1-雷神	0.70%
// Barrett-毁灭	0.70%
// AK47-火麒麟	0.70%
// M4A1-黑骑士	0.70%
// 五虎将玩偶自选	1.00%
// 五虎上将宝箱	7.30%
// 疯狂骰子	0.10%
// 五虎币x100	0.10%
// 五虎币x50	2.00%
// 五虎币x20	4.50%
// 五虎币x10	50.00%
// 五虎币x5	30.00%
//定义初始概率表
var gailvArr = Pgailv;
//定义可修改概率,且初始化。
var gailvnum = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0],
[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0][0, 0],];
//定义（初始化）概率范围数组
var zjjlt = [];
//定义中奖信息数组
var zcxxz = [];
//定义暂存箱数组
var hzlnum = 0;
//定义徽章令数量
var gjzjcs = 0;
//定义冠军道具中奖次数
var jyz = 0;
// //定义经验值
// var inst = new mdui.Dialog("#dialog", {
// history:false

// });
// inst.open();

SetGailv();
var empsz = [0, 0];
//定义空概率范围数组
function SetGailv() {
    for (i = 0; i < gailvArr.length; i++) {
        $("#Xgname" + i).val(gailvArr[i][0]);
        $("#Xggl" + i).val(gailvArr[i][1]);
        if (i == 0) {
            empsz = [1, gailvArr[0][1] * 100];
            gailvnum[i] = empsz;
        }
        else {
            empsz = [gailvnum[i - 1][1] + 1, gailvnum[i - 1][1] + gailvArr[i][1] * 100];
            gailvnum[i] = empsz;
        }
    }

}
//设置概率方法
Fjkeytable();
function Fjkeytable(){
    for (let index = 0; index < gailvArr.length; index++) {
        $("#gailvtable").prepend("<tr><td>"+gailvArr[gailvArr.length-index-1][0]+"</td><td>"+gailvArr[gailvArr.length-index-1][1]+"%</td></tr>");

        if(gailvArr[gailvArr.length-index-1][2]>0)
        {
            $("#fjystb").prepend("<tr><td class='fjysb1'>"+gailvArr[gailvArr.length-index-1][0]+"</td><td class='fjysb2'>"+gailvArr[gailvArr.length-index-1][2]+"</td></tr>");

        }
        

    }
}
//设置分解钥匙表方法
function KeyAdd(addnum) {

    keynum = keynum + addnum;
    if (addnum > 0) {
        //alert("您已成功添加"+addnum+"把钥匙！");
    }
    Sxsj();
}
// 添加钥匙方法
var jfnum=0;
//定义积分数值
function PTTSendClick1() {
    if (keynum < 1) {
        $("#xtxx").text("抱歉，您的钥匙数量不足。");
        Showwd("#xttc")
    }
    else {
        var sjs = Math.ceil(Math.random() * 10000);
        //生成随机范围` 
        for (j = 0; j < gailvArr.length; j++) {
            var zxs = gailvnum[j][0]
            var zds = gailvnum[j][1]
            if (sjs >= zxs && sjs <= zds) {
                $("#dczjxx").text(gailvArr[j][0]);
                SetjlZcx(j);
                if (j == 12) {
                    tznum = tznum + 1;
                    $("#tznum").text(tznum)
                }
                if (j == 13) {
                    jfnum = jfnum + 100;
                }
                if (j == 14) {
                    jfnum = jfnum + 50;
                }
                if (j == 15) {
                    jfnum = jfnum + 20;
                }
                if (j == 16) {
                    jfnum = jfnum + 10;
                }
                if (j == 17) {
                    jfnum = jfnum + 5;
                }
            }

        }
Sxjf();
        //Sxjyz();
        Showwd("#popdc")
        KeyAdd(-1)

    }
}
//单抽方法

function Sxjf(){
    $("#jftext").text(jfnum);
}

function PTTSendClick10() {
    if (keynum < 10) {
        $("#xtxx").text("抱歉，您的钥匙数量不足。");
        Showwd("#xttc")
    }
    else {
        for (let index = 0; index < 10; index++) {
            var sjs = Math.ceil(Math.random() * 10000);
            //生成随机范围` 
            for (var j = 0; j < gailvArr.length; j++) {
                var zxs = gailvnum[j][0]
                var zds = gailvnum[j][1]
                if (sjs >= zxs && sjs <= zds) {
                    SetjlZcx(j);
                    $("#jlname" + index).text(gailvArr[j][0]);
                    if (j == 12) {
                        tznum = tznum + 1;
                        $("#tznum").text(tznum)
                    }
                    if (j == 13) {
                        jfnum = jfnum + 100;
                    }
                    if (j == 14) {
                        jfnum = jfnum + 50;
                    }
                    if (j == 15) {
                        jfnum = jfnum + 20;
                    }
                    if (j == 16) {
                        jfnum = jfnum + 10;
                    }
                    if (j == 17) {
                        jfnum = jfnum + 5;
                    }
                }

            }



        }



        Showwd("#popJl")
        KeyAdd(-10);
        Sxjf();
    }

}
//十连方法

var hzldh=[
    ["M4A1-战神赵云",888,true],
    ["毁灭-战神张飞",888,true],
    ["火麒麟-战神关羽",888,true],
    ["黑骑士-战神马超",888,true],
    ["M200-幻神-黄忠皮肤",1088,true],
    ["M200-幻神",1688,true],
    ["M4A1-雷神",488,true],
    ["Barrett-毁灭",488,true],
    ["AK47-火麒麟",488,true],
    ["M4A1-黑骑士",488,true],
    ["赵云玩偶（不可交易）",188,true],
    ["张飞玩偶（不可交易）",188,true],
    ["关羽玩偶（不可交易）",188,true],
    ["马超玩偶（不可交易）",188,true],
    ["黄忠玩偶（不可交易）",188,true],
    ["属性变更券x1",5,true],
    ["交易专用钥匙x1",5,true],
]
   // hzlnum=9000;
function amsExchange(pid){
var sb=pid-1;
if(jfnum>=hzldh[sb][1]&&hzldh[sb][2])
{
$("#dhbtn"+pid).addClass("gray");
let time = new Date()
        ksz[0] =
        ksz[1] = "模拟大区一区";
        ksz[2] = hzldh[sb][0];
        zjjlt.push(ksz);
        $("#milo-lotteryRecordContainer1").prepend("<tr><td>" + time.toLocaleString() + "</td><td>" + ksz[1] + "</td><td>" + ksz[2] + "</td></tr>");
        jfnum=jfnum-hzldh[sb][1];
    Sxjf();
        hzldh[sb][2]=true;
        $("#xtxx").text("恭喜获得礼包：" + ksz[2]);
        Showwd("#xttc");
}
else if(hzlnum<hzldh[sb][1]&&hzldh[sb][2]){

$("#xtxx").text("您的徽章令不够。");
        Showwd("#xttc");
}
        

}
//徽章兑换方法

function Sxsj() {
    $("#Keynum").text(keynum);



}
//刷新数据方法

var sjsz = [];
var levelnum = 0;
//定义等级
function Sxjyz() {
    for (let index = 0; index < 300; index++) {
        for (let index2 = 0; index2 < 9; index2++) {
            sjsz.push([10, true])

        }
        sjsz.push([20, true])
        sjsz[0][0] = 50;
    }
var djcome=jyz+"";
var sbjyz=djcome.substring(djcome.length-2,djcome.length);
    $("#jyz").text(sbjyz);
    $(".jdt.progress_width").css("transition-duration", "1s");
  $(".jdt.progress_width").css("width",sbjyz+"%");
    $("#djt").text(Math.trunc(jyz / 100));
    levelnum = Math.trunc(jyz / 100);
for (let index = 0; index < levelnum; index++) {
$(".bp_list2").eq(index).children("a").removeClass("on");
$(".bp_list1").eq(index).children("a").removeClass("on");
}
}
Sxjyz();
//刷新经验值和徽章令的方法
function Showwd(wid) {

    $("#zhezhao").css("display", "block");
    $("#ycrq").css("display", "block");
    $(wid).css("display", "block");
    $(wid).addClass("cjxuanfu");

}
// 打开弹窗方法
function ChangeGailv() {
    for (i = 0; i < Pgailv.length; i++) {
        gailvArr[i][0] = $("#Xgname" + i).val();
        gailvArr[i][1] = $("#Xggl" + i).val() * 1;

    }

    SetGailv();
    ShutWindow();
    $("#xtxx").text("概率和名称已保存");
    Showwd("#xttc")


}
//设置概率的方法

function ResetGailv() {
    gailvArr = [
        ['王者云击（非觉醒版）', 0.1, 20],
        ['雷神-枪娘蕾安娜', 0.2, 12],
        ['火麒麟-枪娘凯萨林',0.2, 12],
        ['毁灭-枪娘格雷姐妹', 0.2, 12],
        ['雷神音效卡 兑换券', 0.3, 10],
        ['火麒麟音效卡 兑换券', 0.3, 10],
        ['毁灭音效卡 兑换券', 0.3, 10],
        ['M4A1-雷神', 0.40, 6],
        ['AK47-火麒麟', 0.4, 6],
        ['Barrett-毁灭', 0.4, 6],
        ['枪娘蕾安娜玩偶', 1, 2],
        ['普通角色通用扩展栏位x1', 1, 1],
        ['王者之石x1', 1.00, 0],
        ['100积分', 0.2, 0],
        ['50积分', 2, 0],
        ['20积分', 20, 0],
        ['10积分', 37, 0],
        ['5积分', 35, 0]
    ]

    SetGailv();
    ShutWindow();
    $("#xtxx").text("概率和名称已重置");
    Showwd("#xttc")

}
//重置概率方法

var zjcs = 0;
var ksz = ["", "", ""]
var ksz2 = ["", 1, false];
function SetjlZcx(pid) {
    let time = new Date()
    ksz[0] = time.toLocaleString();
    ksz[1] = "模拟大区一区";
    ksz[2] = gailvArr[pid][0];
    zjjlt.push(ksz);
    $("#milo-lotteryRecordContainer1").prepend("<tr><td>" + ksz[0] + "</td><td>" + ksz[1] + "</td><td>" + ksz[2] + "</td></tr>");



    if (gailvArr[pid][2] > 0) {
        ksz2[0] = gailvArr[pid][0];
        ksz2[1] = gailvArr[pid][2];

        zcxxz.push(ksz2);

        $("#milo-lotteryRecordContainer2").prepend(" <tr id='zcxid" + zjcs + "'><td>" + ksz2[0] + "</td><td> <a  id='fckid" + zjcs + "'>[发送仓库]</a> </td><td> <a onclick='Fjkey(" + gailvArr[pid][2] + "," + zjcs + ")'  id='fjbtnid" + zjcs + "'>[分解]</a></td></tr>");
        console.log(zcxxz)
        zjcs++;
    }


}


var zcxbcdk = false;
function Fjkey(kn, zcxid) {
    KeyAdd(kn);
                ShutWindow();
                $("#xtxx").text("恭喜获得礼包：分解钥匙*" + kn);
                Showwd("#xttc")
                zcxbcdk = true;
                $("#zcxid" + zcxid).children().css("color", "lightgrey")
                $("#fckid" + zcxid).before("发送仓库")
                $("#fckid" + zcxid).remove();
                $("#fjbtnid" + zcxid).before("已分解")
                $("#fjbtnid" + zcxid).remove();

}
//分解钥匙方法







var yjlq=0;
function getPropByBatch(){
for(i=0;i<levelnum;i++)
{
get_cost_award(i+1, 1);
if(i<20)
{
get_free_award(i+1, 1);
}

}
$("#xtxx").text("一键领取完毕");
}
//一件领取方法

function ShutWindow() {
    $("#zhezhao").css("display", "none");
    $(".pop").css("display", "none");
    $(".dialog").css("display", "none");
    $(".amsdialog_modal").css("display", "none")

}
function closeDialog(){
    $("#zhezhao").css("display", "none");
    $(".pop").css("display", "none");
    $(".dialog").css("display", "none");
    $(".amsdialog_modal").css("display", "none")
    if (zcxbcdk) {
        Showwd('#showMyGiftContent2')
        zcxbcdk = false;
    }
}

// $(".amsdialog_bconfirm").click(
//     function () {
//         ShutWindow()
//         if (zcxbcdk) {
//             Showwd('#showMyGiftContent2')
//             zcxbcdk = false;
//         }
//     })
// $(".dia-close").click(
//     function () {
//         ShutWindow()
//     });
// $(".amsdialog_close").click(
//     function () {
//         ShutWindow()
//         if (zcxbcdk) {
//             Showwd('#showMyGiftContent2')
//             zcxbcdk = false;
//         }
//     })



/*********疯狂骰子部分**** */
var tzgailv = [
    [0, 10, 10],
    [11, 30, 6],
    [31, 60, 4],
    [61, 100, 3]
  ]
  var tznum=0;
  function Crazy(ctype) {
    if (ctype == 1) {
      if (keynum <= 0) {
        // mdui.snackbar({
        //   message: "您当前的钥匙不足1个或者疯狂骰子不足！"
        // });
        $("#xtxx").text("您当前的钥匙不足1个或者疯狂骰子不足！");
        Showwd("#xttc");
      }
      else {
        //钥匙骰子
if(tznum>0)
{
  var sjs = Math.ceil(Math.random() * 100);

for (let index = 0; index < tzgailv.length; index++) {

  if (sjs >= tzgailv[index][0] && sjs <= tzgailv[index][1]) {

    $("#xtxx").text("恭喜获得礼包："+tzgailv[index][2]+"个钥匙！");
    Showwd("#xttc");
KeyAdd(tzgailv[index][2]-1);
tznum = tznum - 1;
    $("#tznum").text(tznum);
  }

}
}
else
{
//   mdui.snackbar({
//           message: "您当前的疯狂骰子不足！"
//         });
$("#xtxx").text("您当前的疯狂骰子不足！");
Showwd("#xttc");
}
      }
    }



    if (ctype == 2) {
      if (jfnum <= 9) {
        // mdui.snackbar({
        //   message: "您当前的五虎币不足10个或者疯狂骰子不足！"
        // });
        $("#xtxx").text("您当前的五虎币不足10个或者疯狂骰子不足！");
        Showwd("#xttc");
      }
      else {
      //钥匙骰子
     
      if(tznum>0)
      {
        var sjs = Math.ceil(Math.random() * 1000);

        for (let index = 0; index < tzgailv.length; index++) {

if (sjs >= tzgailv[index][0] && sjs <= tzgailv[index][1]) {

    $("#xtxx").text("恭喜获得礼包："+tzgailv[index][2]*10+"个五虎币！");
    Showwd("#xttc");
jfnum = jfnum + (tzgailv[index][2]*10)-10;
         Sxjf();
       
            tznum = tznum - 1;
            $("#tznum").text(tznum);
         
          
}

}
      }
      else
      {
        // mdui.snackbar({
        //   message: "您当前的疯狂骰子不足！"
        // });
        $("#xtxx").text("您当前的疯狂骰子不足！");
        Showwd("#xttc");
      }

            
      }
    }

  }
/*********疯狂骰子部分**** */
