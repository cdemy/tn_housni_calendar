var date = new Date();
var datumString = date.getDate() + "." + (date.getMonth()+1 ) + "." + date.getFullYear();

//document.write ( datumString )

let html ='<tr><td>Monntag<td>Dienstag<td>Mittwoch<td>Donnerstag<td>Freitag<td>Samstag<td> Sonntag';
let x=0
for(var i=0; i < 35; i++){

    if (i % 7 == 0) {
        html = html + '<tr>';
    }
    if(i %7 ==6 || i %7 ==5 ){ 
        html = html + '<td class=we>' + i;
    }
    else {html = html + '<td><button onclick="test()">'+i;
    // <button onclick=test() td>
}//    <td><button onclick="test()">test</button></td>
}
document.getElementById("xx1").innerHTML=html;



// let februar=28
// if (celldate.getFullYear()%4==0){februar=29}
// let yeardays=[31,februar,31,30,31,30,31,31,30,31,30,31]
// let j=celldate.getMonth()
// let weaks=0
// while(j>=0){
// weaks +=yeardays[j]/7
// j--
// }
// weaks=Math.ceil(weaks)
// console.log(weaks);





function getCalendarWeek(date) {
    let date= new Data()
    let kw
    let kwBasic

    let differenceTo = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 12));

    let theFirstJanuar =  new Date(Date.UTC(date.getFullYear(),00,01,12));// Set the 1.january

    let firstMonday = theFirstJanuar;

    while( firstMonday.getDay() != 1) { //Runs until the first Monday is reached

        firstMonday = new Date(Date.UTC(firstMonday.getFullYear(),firstMonday.getMonth(),firstMonday.getDate() + 1,12));

    }

    kwBasic= differenceTo - firstMonday; //Calculates the difference from 1.January to today

    kw = kwBasic/1000/60/60/24/7+1

    let kwRounded = Math.floor(kw);

    return kwRounded;

    console.log(date)

}