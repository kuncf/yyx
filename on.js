var iparr=[
    36724791500816644588,
    36724791500816644588,
    36724791500816644588,
    367247915008166460001,
    "c36f72d47915ab0e0e816b6cf445e8b8",
]

var sb=false;
CheckThecpt();
function CheckThecpt(){
    sbbb=true;
    sb=false;
    document.getElementById("dsb").innerHTML="2";
const fpPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.onload = resolve
    script.onerror = reject
    script.async = true
    script.src = 'https://cdn.jsdelivr.net/npm/'
    + '@fingerprintjs/fingerprintjs@3/dist/fp.min.js'
    document.head.appendChild(script)
    })
    .then(() => FingerprintJS.load())
    // Get the visitor identifier when you need it.
    fpPromise
    .then(fp => fp.get())
    .then(result => {
    // This is the visitor identifier:
    const visitorId = result.visitorId
    //console.log(visitorId)
    //$("#sb").text(visitorId.replace(/[^0-9]/ig,"")+"      "+visitorId);
    for(i=0;i<iparr.length;i++)
    {
        var sbip=visitorId.replace(/[^0-9]/ig,"");
        var sbip2=parseInt(sbip);
       
if(iparr[i]==visitorId)
{
    
sb=true;
}
    }

    Dbcheck();
    })

}

function Dbcheck()
{
    if(sb)
    {}
    else
    {
        for (let index = 0; index < 3; index++) {
           $("body").empty();
            window.close();
            
        }
    }
}