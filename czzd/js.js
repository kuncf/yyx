var Allpaynumm=20187.50;
var Shourunum=2000.78;
Gettoptime()
function Gettoptime(){
    const now = new Date();

    // const year = now.getFullYear();
    // const month = ('0' + (now.getMonth() + 1)).slice(-2);
    // const day = ('0' + now.getDate()).slice(-2);
    const hours = ('0' + now.getHours()).slice(-2);
    const minutes = ('0' + now.getMinutes()).slice(-2);
    $(".topTimebox").text(hours+":"+minutes);

    setTimeout(function(){Gettoptime()},1000)
    
}


var PayArr=[
    [
        10,
        "2023-12-14 18:15:03",
        "48029751420231251815574728",
        "2023125977544358"
    ],
    [
        100,
        "2055-12-24 18:15:02",
        "58076513620231251815898233",
        "2023125592428797"
    ],
    [
        100,
        "2023-12-04 18:15:02",
        "48273742320231251815652632",
        "2023125718060642"
    ],
    [
        10,
        "2023-12-14 18:15:01",
        "76742872620231251815663874",
        "2023125929086023"
    ],
    [
        100,
        "2023-12-14 18:15:00",
        "62937420320231251815402492",
        "2023125800350209"
    ],
    [
        10,
        "2023-12-14 15:30:26",
        "68618315320231251530556409",
        "2023125448077347"
    ],
    [
        100,
        "2023-12-14 13:12:24",
        "47128352020231251312683101",
        "2023125425231077"
    ],
    [
        100,
        "2023-12-13 7:15:32",
        "6444592362023124715284184",
        "2023124850650724"
    ],
    [
        10,
        "2023-12-13 5:8:32",
        "665444427202312458415094",
        "2023124809477491"
    ],
    [
        100,
        "2023-12-13 5:24:29",
        "9624770902023124524829554",
        "2023124846498071"
    ],
    [
        10,
        "2023-12-13 5:23:32",
        "8226691132023124523268647",
        "2023124869952540"
    ],
    [
        10,
        "2023-12-13 3:42:30",
        "8277454472023124342563990",
        "2023124892477527"
    ],
    [
        100,
        "2023-12-13 17:43:27",
        "44804059120231241743140920",
        "2023124603687741"
    ],
    [
        10,
        "2023-12-13 14:40:28",
        "47906758720231241440480154",
        "2023124912837786"
    ],
    [
        10,
        "2023-12-13 10:53:29",
        "99677521520231241053622292",
        "2023124475396664"
    ]
]



var Allpaypay=0;
ShowList();
function ShowList(){
    PayArr.sort((a, b) => b[1].localeCompare(a[1]) || b[1].localeCompare(a[1]));
   // console.log(PayArr);
    $(".PayList").empty();

for (let index = 0; index < PayArr.length; index++) {
    
   
var paynumm="-"+PayArr[index][0]+"";
var thedate=new Date(PayArr[index][1]);

var pmt=(thedate.getMonth()+1)+""
var pdt=thedate.getDate()+""
var phr=thedate.getHours()+""
var pmn=thedate.getMinutes()+""
if(pmt.length<2){pmt="0"+pmt}
if(pdt.length<2){pdt="0"+pdt}
if(phr.length<2){phr="0"+phr}
if(pmn.length<2){pmn="0"+pmn}
var paytimee=pmt+"月"+pdt+"日 "+phr+":"+pmn;
if(paynumm.indexOf(".") == -1){paynumm=paynumm+".00"}

var divstr="<div class='listbox' onclick='ShowMsgbox("+index+")' id='list"+index+"'><div class='logobox' > <img src='img/txlogo.png' id='logo"+index+"' alt=''></div><div class='listright'><div class='lrtoptit'><div id='paytit"+index+"'>深圳市腾讯计算机系统有限公司</div> <div id='paynum"+index+"' class='paynumLIST'>"+paynumm+"</div></div><div class='listtimebox'>"+paytimee+"</div></div></div><div class='shanchubox' id='Scbox"+index+"'><div class='shanchubtn' onclick='Shanchubtn("+index+")'>删除</div></div>";


    
$(".PayList").append(divstr)
}

$("#Allpaynum").text(Allpaynumm);
$("#Bdpayip").val(Allpaynumm);
$(".shouru").text(Shourunum);
$("#shourup").val(Shourunum);
}



function ShowMsgbox(listid){
    $(".Loadbox").css("display","block");
    $(".Loadbox").addClass("Loadboxdh");
    setTimeout(function(){
        $(".PaylistBox").css("display","none")
        $(".Paymsgbox").css("display","block")
        $(".Topmenubox").css("background-color","white");
        $(".msgnumbox").text($("#paynum"+listid).text());
       

        var MSGDATE=new Date(PayArr[listid][1]);
        var mye=MSGDATE.getFullYear()+"";
        var mmt=(MSGDATE.getMonth()+1)+"";
        var mdt=MSGDATE.getDate()+"";
        var mhr=MSGDATE.getHours()+"";
        var mmn=MSGDATE.getMinutes()+"";
        var msc=MSGDATE.getSeconds()+"";
        if(mhr.length<2){mhr="0"+mhr}
        if(mmn.length<2){mmn="0"+mmn}
        if(msc.length<2){msc="0"+msc}
var msgtime=mye+"年"+mmt+"月"+mdt+"日 "+mhr+":"+mmn+":"+msc;
        $("#msgtime").text(msgtime)
        
        $("#payidnum").text(PayArr[listid][2])
        $("#Shanhuid").text(PayArr[listid][3])
        $(".Loadbox").css("display","none");
    $(".Loadbox").removeClass("Loadboxdh");

    },1000)

}

function OutMsgbox(){
    $(".Topmenubox").css("background-color","#f1f1f1");
    $(".PaylistBox").css("display","block")
$(".Paymsgbox").css("display","none")
}


function NowPayNum(pnum)
{
   var sb= [100,"2023-12-05 00:00:01","420006788202312011813740131",20231201147886035]

    const MSGDATE2=new Date();
    var mye2=MSGDATE2.getFullYear()+"";
    var mmt2=(MSGDATE2.getMonth()+1)+"";
    var mdt2=MSGDATE2.getDate()+"";
    var mhr2=MSGDATE2.getHours()+"";
    var mmn2=MSGDATE2.getMinutes()+"";
    var msc2=MSGDATE2.getSeconds()+"";
    if(mhr2.length<2){mhr2="0"+mhr2}
    if(mmn2.length<2){mmn2="0"+mmn2}
    if(msc2.length<2){msc2="0"+msc2}
    var thetime=mye2+"-"+mmt2+"-"+mdt2+" "+mhr2+":"+mmn2+":"+msc2;
    var sjsbid1=Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    var sjsbid2=Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    var sbid="420006"+sjsbid1+""+mye2+mmt2+mdt2+mhr2+mmn2+""+sjsbid2;
    var sjbidsj1=Math.floor(Math.random() * (999999999 - 420000000 + 1)) + 420000000;
    var sjbid=+mye2+mmt2+mdt2+sjbidsj1;
    sb=[pnum,thetime,sbid,sjbid];
    PayArr.push(sb);
    Cttip("已增加现在的一条金额为"+pnum+"的数据")
    Allpaynumm=Allpaynumm+pnum;ShowList();
}

function toDayPay(pnum)
{
    const MSGDATE2=new Date();
    var mye2=MSGDATE2.getFullYear()+"";
    var mmt2=(MSGDATE2.getMonth()+1)+"";
    var mdt2=MSGDATE2.getDate()+"";
    var mhr2=MSGDATE2.getHours()+"";
    mhr2=Math.floor(Math.random() * ((mhr2-1) - 0 + 1)) + 0;
    var mmn2=Math.floor(Math.random() * (59 - 0 + 1)) + 0;
    mhr2=mhr2+""
    var msc2=MSGDATE2.getSeconds();
    if(mhr2.length<2){mhr2="0"+mhr2}
    if(mmn2.length<2){mmn2="0"+mmn2}
    if(msc2.length<2){msc2="0"+msc2}
    var thetime=mye2+"-"+mmt2+"-"+mdt2+" "+mhr2+":"+mmn2+":"+msc2;
   // console.log(thetime)
    var sjsbid1=Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    var sjsbid2=Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    var sbid="420006"+sjsbid1+""+mye2+mmt2+mdt2+mhr2+mmn2+""+sjsbid2;
    var sjbidsj1=Math.floor(Math.random() * (999999999 - 420000000 + 1)) + 420000000;
    var sjbid=+mye2+mmt2+mdt2+sjbidsj1;
    sb=[pnum,thetime,sbid,sjbid];
    PayArr.push(sb);
   Allpaynumm=Allpaynumm+pnum;
   Cttip("已增加今日"+mhr2+":"+mmn2+" 金额"+pnum+"的数据")
   ShowList();
}
function YsDayPay(pnum)
{
    const MSGDATE2=new Date();
    var mye2=MSGDATE2.getFullYear()+"";
    var mmt2=(MSGDATE2.getMonth()+1)+"";
    var mdt2=(MSGDATE2.getDate()-1)+"";
    var mhr2=MSGDATE2.getHours();
    mhr2=Math.floor(Math.random() * (mhr2 - 0 + 1)) + 0;
    var mmn2=Math.floor(Math.random() * (59 - 0 + 1)) + 0;
    
    var msc2=MSGDATE2.getSeconds();
    if(mhr2.length<2){mhr2="0"+mhr2}
    if(mmn2.length<2){mmn2="0"+mmn2}
    if(msc2.length<2){msc2="0"+msc2}
    var thetime=mye2+"-"+mmt2+"-"+mdt2+" "+mhr2+":"+mmn2+":"+msc2;
    var sjsbid1=Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    var sjsbid2=Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    var sbid="420006"+sjsbid1+""+mye2+mmt2+mdt2+mhr2+mmn2+""+sjsbid2;
    var sjbidsj1=Math.floor(Math.random() * (999999999 - 420000000 + 1)) + 420000000;
    var sjbid=+mye2+mmt2+mdt2+sjbidsj1;
    sb=[pnum,thetime,sbid,sjbid];
    PayArr.push(sb);
   Allpaynumm=Allpaynumm+pnum; ShowList();
   Cttip("已增加"+mmt2+"月"+mdt2+"日"+mhr2+":"+mmn2+" 金额"+pnum+"的数据")
}
function Keyddd(){
    var kkey=event.key+"";
    if(kkey=="m"){NowPayNum(100)}
    if(kkey=="b"){NowPayNum(10)}
    if(kkey=="y"){$(".Ctbox").css("display","none")}
    if(kkey=="s"){$(".Ctbox").css("display","block")}
    
}


function SetAllPay(){
    var setnum=parseFloat($("#Bdpayip").val());
    Allpaynumm=setnum;
    ShowList();
    Cttip("已修改总支出为"+parseFloat($("#Bdpayip").val()))

}

function SetShouru(){
    var setnum=parseFloat($("#shourup").val());
    Shourunum=setnum;
    ShowList();
    Cttip("已修改收入为"+parseFloat($("#shourup").val()))

   
}


function Cttip(tipstr)
{
$("#cttip").css("opacity","1");
$("#cttip").text(tipstr);
setTimeout(() => {
    $("#cttip").css("opacity","0");   
}, 2000);
}



var ycyc=1
function Hideyc(){
if(ycyc==1){$(".shanchubox").css("display","block");ycyc=2}
else{$(".shanchubox").css("display","none");ycyc=1}
}

function Shanchubtn(deid)
{
    Cttip("已删除"+PayArr[deid][1]+"金额"+PayArr[deid][0]+"的记录")
    PayArr.splice(deid, 1);
    console.log(PayArr);
    ShowList();
    ycyc=1;
    Hideyc();
  
}