var d=[" Unicorns are thought to be good and pure creatures with magical powers. ","They are strong, often white in color, and difficult to catch.","The unicorn appears in the art of ancient Mesopotamia","Ancient Indian and Chinese myths also told of unicorns."];
var i=0;
function a(){
    if(i == 4)
    {
        i=0;
    }
    document.getElementById("c").innerHTML=d[i];
    i++;
}