var button , start , box , container , Sidenav , h1 , hr , tr , 
    closebtn , pre , table , input , called = false , there = false,
    clicked , workOn =new Array() , score , Hscore , nbOfGames = 1 , nr = 0 ;
button = document.getElementsByTagName("button");
h1 = document.getElementsByTagName("h1");
hr = document.getElementsByTagName("hr");
input = document.getElementsByTagName("input");
pre = document.getElementsByTagName("pre")[0];
table = document.getElementsByTagName("table")[0];
score = document.getElementById("Score");
Hscore =document.getElementById("HighScore");
score.value = Hscore.value = 0 ;
box = document.getElementsByClassName("Box")[0];
container = document.getElementsByClassName("container")[0];
Sidenav = document.getElementsByClassName("sidenav")[0];
closebtn = document.getElementsByClassName("closebtn")[0];
start = button[0]; 
const image = 
[
    "https://codedesign.fr/wp-content/uploads/2018/08/php-leader1.png",
    "https://www.kindpng.com/picc/m/403-4039227_c-language-logo-png-transparent-png.png",
    "https://img-0.journaldunet.com/doLSdU18xj0z9pRCOvs8yUu1hwM=/1240x/smart/8457705c534f4659b6cf4db19e0fb9d0/ccmcms-jdn/11578126.png",
    "https://www.zendevs.xyz/wp-content/uploads/2019/03/javascript-1200x720.png",
    "https://i.pinimg.com/originals/a8/53/14/a8531424a5fac660e4261f72ca817141.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png",
    "https://www.devtalks.ro/wp-content/uploads/2018/04/poza1-3.png",
    "https://flashweb.be/wp-content/uploads/2016/11/NET-Framework-lhabilit%C3%A9-de-r%C3%A9pondre-aux-besoins-de-d%C3%A9veloppement-Blog-Flashweb-Belgique.png",
    "https://static.javatpoint.com/go/images/go-tutorial.jpg"
];
function close()
{
    Sidenav.style.width = "50px";
    pre.style.display ="none";
    table.style.display ="none";
    for ( i = 2 ; i <= 4 ; i ++ )
    {
        button[i].style.display = "none";
    }
}
function open()
{
    Sidenav.style.width = "200px";
    pre.style.display ="";
    for ( i = 2 ; i <= 5 ; i ++ )
    {
        button[i].style.display = "" ;
    }
}
closebtn.onclick = function tooglenav ()
{
    navSize = Sidenav.style.width;
    if ( navSize == "200px" )
        return close();
    else
        return open();
}
start.onclick = function ()
{
    Sidenav.style.width = "200px" ;
    container.style.display = "none" ;
    for ( i = 0 ; i < h1.length ; i ++ )
    {
        h1[i].style.display = "none";
    }
    for ( i = 0 ; i < hr.length ; i ++ )
    {
        hr[i].style.display = "none";
    }
    var r , c ;
    r = input[0].value ;
    c = input[1].value ;
    if ( r*c % 2 != 0 )
    {
        alert("choose at least an odd dim" );
    }
    else
    {
        var index = new Array();
        // index.length = image.length;
        for (var i = 0, j = 0 ; i < r*c ; i ++ )
        {
            index[i]=j;
            if ( i % 2 == 1 )j ++ ;
        }
        for ( i = 0 ; i < r*c ; i ++ )
        {
            var cell = document.createElement("img") , x ;
            x = Math.floor(Math.random() * (index.length) ) ;
            cell.src = image[index[x]]  ;
            cell.style.width = cell.style.height = "100%";
            cell.style.objectFit = "cover";
            cell.name= index[x];
            box.appendChild(cell);
            index.splice(x, 1);
        }
        box.style.gridTemplateColumns= "repeat("+Math.max(c,r)+",1fr)";
        setTimeout(letsBegin,7000);
    }
}
button[2].onclick= function()
{
    called = false ;
    nr = 0 ;
    var index = new Array();
    r = input[0].value ;
    c = input[1].value ;
    for (var i = 0, j = 0 ; i < r*c ; i ++ )
    {
        index[i]=j;
        if ( i % 2 == 1 )j ++ ;
    }
    while (box.firstChild) 
    {
        box.removeChild(box.lastChild);
    }
    for ( i = 0 ; i < r*c ; i ++ )
    {
        var cell = document.createElement("img") , x ;
        x = Math.floor(Math.random() * (index.length) ) ;
        cell.src = image[index[x]]  ;
        cell.style.width = cell.style.height = "100%";
        cell.style.objectFit = "cover";
        cell.name= index[x];
        box.appendChild(cell);
        index.splice(x, 1);
    }
    box.style.gridTemplateColumns= "repeat("+Math.max(c,r)+",1fr)";
    score.value = 0 ;
    setTimeout(letsBegin,7000);
};
function letsBegin()
{
    var pic = box.children ;
    for ( i = 0 ; i < pic.length ; i ++ )
    {
        var currentPic = pic[i]; 
        currentPic.src="https://image.freepik.com/free-vector/question-mark-symbol-with-blue-lights-background_1017-25229.jpg" ;
    }
    called = true ;
}
button[3].onclick= function()
{
    location.reload();
};
function effect(elem,deg,link)
{
    elem.style.transform= "rotateY("+deg+"deg)";
    elem.style.transition= "transform 0.8s";
    elem.style.transformStyle= "preserve-3d";
    elem.src = link ;
}
box.onclick = function(e){
    e = e.target ;
    r = input[0].value ;
    c = input[1].value ;
    if ( called && e.className == "" )
    {
        e.className = "found" ;
        var link = image[ parseInt(e.name) ] ;
        effect(e,720,link);
    }
    clicked = document.getElementsByClassName("found");
    var y = clicked.length , x = workOn.length ;
    for ( i = 0 ; i < y ; i ++ )
    {
        var img = clicked[i];
        if ( !(img.classList.contains("visited")) && workOn.indexOf(img)  <= -1 )
            workOn.push(img);
    }
    if ( x == 1 )
    {
        var pic1 , pic2 ;
        pic1 = workOn[0];
        pic2 = workOn[1];
        console.log(pic1.name == pic2.name);
        if ( pic1.name == pic2.name )
        {
            pic1.classList.add("visited");
            effect(pic1,720,image[parseInt(pic1.name)]);
            pic2.classList.add("visited");
            effect(pic2,720,image[parseInt(pic2.name)]);
            nr ++ ;
        }
        else
        {
            nr -- ;
            pic1.className = pic2.className = "" ;
            var link ="https://image.freepik.com/free-vector/question-mark-symbol-with-blue-lights-background_1017-25229.jpg" ;
            setTimeout(function(){effect(pic1,0,link);effect(pic2,0,link);},1000) ;
        }
        workOn = new Array();
    }
    if ( y == r*c )
    {
        score.value = parseInt(score.value) + parseInt (nr) ;
        if ( parseInt(score.value) < 0 ) score.value = 0 ;
        setTimeout(button[2].onclick,2000);
    }
};