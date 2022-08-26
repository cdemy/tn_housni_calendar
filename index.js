//  variable that are neaded for several function thats why they are over all
let now = new Date(); 
let todaysInfo = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // This is the date from today
let date = todaysInfo;                                                       // this is the active date in calender
let yearsMonthes=[" Jenuar "," Februar "," März "," Aprill "," May "," Juni "," Juli "," August "," September "," October "," November "," Dezember "]; // this is s array with it can i know the german monthes 

drawCalendar(); 

drawInfobox(); 

function monthDown(){ 
       date = new Date(date.getFullYear(), date.getMonth() - 1, 15);  // this how i creat the last month
       drawCalendar();
}

function monthUp(){
       date = new Date(date.getFullYear(), date.getMonth() +1, 15);   // this how i creat the next month
       drawCalendar();
}

function yearDown(){
       date = new Date(date.getFullYear() - 1, date.getMonth(), 15);  // this how i creat the last year
       drawCalendar();
}

function yearUp() {
       date = new Date(date.getFullYear() + 1, date.getMonth(), 15); // this how i creat the next year
       drawCalendar();
}

       
function setToday(dateFromHtml) {
       todaysInfo = new Date(dateFromHtml);
       drawInfobox();
}
       
       

//################## end of the main steps   ###########################

function drawInfobox() {
       let thisDay = todaysInfo.getDate() ;
       let thisMonth = todaysInfo.getMonth() +1 ;
       let thisYear = todaysInfo.getFullYear() ;
       let thisWeakDay = todaysInfo.getDay() ;
       let dateString = (thisDay + "." + thisMonth + "." + thisYear);
       let dayMonthString = (thisDay + "." + thisMonth) ;

       // date define
       let headerDateString = "Kalender vom " + dateString ;
       document.getElementById('heutigesstringk').innerHTML=headerDateString;
       document.getElementById('heutigesstring').innerHTML=dateString;
       document.getElementById('heutigesstring1').innerHTML=dateString;      // id can used just one time but we nead several datestrings thats why i made several datestrings

       document.getElementById('heutigerTagMonat').innerHTML=dayMonthString;       
       document.getElementById('heutigesnahme').innerHTML= weakDaysName(thisWeakDay); 
       document.getElementById('heutigesnahme1').innerHTML= weakDaysName(thisWeakDay);       
       document.getElementById('heutigesnahmenummer').innerHTML= weakPosition(thisDay);

       let monthName ;
       monthName=yearsMonthes[thisMonth-1] ;                        // define the german monthes
       
       document.getElementById('heutigesmonatsnahme').innerHTML= monthName;
       document.getElementById('heutigesjahr').innerHTML= thisYear;

       // define hollydays

       let hollydayCheck = "nicht"
       let neujahr = new Date(thisYear,0,1) ;
       let heiligedreikönig = new Date(thisYear,0,6) ;
       let karfreitag = new Date(thisYear,3,15) ;
       let osternmontag =new Date(thisYear,3,18) ;
       let tagderarbeit =new Date(thisYear,4,1) ;
       let christihimmelfart =new Date(thisYear,4,26) ;
       let pfingstmontag =new Date(thisYear,5,6) ;
       let fronleichnam =new Date(thisYear,5,16) ;
       let tagderdeutscheneinheit =new Date(thisYear,9,3) ;
       let allerheiligen =new Date(thisYear,10,1) ;
       let weinachtsfeiertag =new Date(thisYear,11,26) ;
       let lastYear = thisYear - 1 ;
       let nextYear = thisYear + 1 ;
       let nexthollyday ;
       let lastHollyday ;

       // define last and next hollydays
       if(todaysInfo > neujahr) {
              lastHollyday =("01.01.") + thisYear + "(Neujahr)";
              nexthollyday=("06.01.") + thisYear + "(Heiligedreikönig)";
       } else if(holliday(todaysInfo))
       {      hollydayCheck="doch"
              lastHollyday=("26.12.") + lastYear + "(Weinachtsfeiertag2)";
              nexthollyday=("06.01.") + thisYear + "(Heiligedreikönig)";
       }    

       if(todaysInfo > heiligedreikönig) {
              lastHollyday =("06.01.") + thisYear + "(Heiligedreikönig)";
              nexthollyday=("15.04.") + thisYear + "(Karfreitag)";
       } else if(holliday(todaysInfo))
       {      hollydayCheck="doch"
              lastHollyday=("01.01.") + thisYear + "(Neujahr)";
              nexthollyday=("15.04.") + thisYear + "(Karfreitag)";
       }    

       if(date > karfreitag) {
              lastHollyday =("15.04.") + thisYear + "(Karfreitag)";
              nexthollyday =("18.04.") + thisYear + "(Osternmontag)";
       } else if(holliday(todaysInfo))
       {      hollydayCheck ="doch"
              lastHollyday =("06.01.") + thisYear + "(Heiligedreikönig)";
              nexthollyday =("18.04.") + thisYear + "(Osternmontag)";
       }   

       if(date > osternmontag) {
              lastHollyday =("18.04.") + thisYear + "(Osternmontag)";
              nexthollyday =("01.05.") + thisYear + "(Tagderarbeit)";
       } else if(holliday(todaysInfo))
       {      hollydayCheck ="doch"
              lastHollyday =("15.04.") + thisYear + "(Karfreitag)";
              nexthollyday =("01.05.") + thisYear + "(Tagderarbeit)";
       }   

       if(date > tagderarbeit) {
              lastHollyday =("01.05.") + thisYear + "(Tagderarbeit)";
              nexthollyday =("26.05.") + thisYear + "(Christihimmelfart)";
       } else if(holliday(todaysInfo))
       {      hollydayCheck ="doch"
              lastHollyday =("18.04.") + thisYear + "(Osternmontag)";
              nexthollyday =("26.05.") + thisYear + "(Christihimmelfart)";
       }   

       if(date > christihimmelfart) {
              lastHollyday =("26.05.") + thisYear + "(Christihimmelfart)";
              nexthollyday =("06.06.") + thisYear + "(Pfingstmontag)";
       } else if(holliday(todaysInfo))
       {      hollydayCheck ="doch"
              lastHollyday =("01.05.") + thisYear + "(Tagderarbeit)";
              nexthollyday =("06.06.") + thisYear + "(Pfingstmontag)";
       }   

       if(date > pfingstmontag) {
              lastHollyday =("06.06.") + thisYear + "(Pfingstmontag)";
              nexthollyday =("16.06.") + thisYear + "(Fronleichnam)";
       } else if(holliday(todaysInfo))
       {      hollydayCheck ="doch"
              lastHollyday =("26.05.") + thisYear + "(Christihimmelfart)";
              nexthollyday =("16.06.") + thisYear + "(Fronleichnam)";
       }   

       if(date > fronleichnam) {
              lastHollyday =("16.06.") + thisYear + "(Fronleichnam)";
              nexthollyday =("03.10.") + thisYear + "(Tagderdeutscheneinheit)";
       } else if(holliday(todaysInfo))
       {      hollydayCheck ="doch"
              lastHollyday =("06.06") + thisYear + "(Pfingstmontag)";
              nexthollyday =("03.10.") + thisYear + "(Tagderdeutscheneinheit)";
       }   

       if(date > tagderdeutscheneinheit) {
              lastHollyday =("03.10.") + thisYear + "(Tagderdeutscheneinheit)";
              nexthollyday =("01.11.") + thisYear + "(Allerheiligen)";
       } else if(holliday(todaysInfo))
       {      hollydayCheck ="doch"
              lastHollyday =("16.06.") + thisYear + "(Fronleichnam)";
              nexthollyday =("10.11.") + thisYear + "(Allerheiligen)";
       }   


       if(date > allerheiligen) {
              lastHollyday =("01.11.") + thisYear + "(Allerheiligen)";
              nexthollyday =("25.12.") + thisYear + "(Weinachtsfeiertag1)";
       } else if(holliday(todaysInfo))
       {      hollydayCheck ="doch"
              lastHollyday =("03.10.") + thisYear + "(Tagderdeutscheneinheit)";
              nexthollyday =("25.12.") + thisYear + "(Weinachtsfeiertag1)";
       }   


       if(holliday(todaysInfo))
       {      hollydayCheck ="doch"
              lastHollyday =("01.11.") + thisYear + "(Allerheiligen)";
              nexthollyday =("26.12.") + thisYear + "(Weinachtsfeiertag2)";
       }   

       if(date > weinachtsfeiertag) {
              lastHollyday =("26.12.") + thisYear + "(Weinachtsfeiertag2)";
              nexthollyday =("01.01.") + nextYear + "(Neujahr)";
       } else if(holliday(todaysInfo))
       {      hollydayCheck ="doch"
              lastHollyday =("26.12.") + thisYear + "(Allerheiligen)";
              nexthollyday =("01.01.") + nextYear + "(Neujahr)";
       }   



       document.getElementById('Feiertagrichtigkeit').innerHTML= hollydayCheck;
       document.getElementById("vorherigerfeiertag").innerHTML=lastHollyday ;
       document.getElementById("nächsterfeirtag").innerHTML=nexthollyday ;
}
function drawCalendar() {
       let monthStart= new Date(date.getFullYear(),date.getMonth(),1) ;
       let firstMonthDay=monthStart.getDay() ;
       let lastMonthDay = new Date(monthStart.getFullYear(),monthStart.getMonth()+1,0) ; // when we give the day number 0 understand it the PC as the last day of the last month
       let monthLength = lastMonthDay.getDate() ;

       let calenderMonth= date.getMonth() ; 
       let outDays ;                                  // days that exist in the calender monthpage but belong to another month
      
       if (firstMonthDay == 0 ) {            //calculate the out days that bleong to the last month
              outDays = 6;
       } else {
              outDays = firstMonthDay - 1;
       }

       // calculate the number of cellen for each calender page
       let tableCellNumber = (Math.floor((monthLength + outDays - 1) / 7) + 1) * 7;
       // define date for the first cell (monday)
       let firstDayTowrite= new Date(date.getFullYear(), date.getMonth(), 1 - outDays);

       let j=weakCalculate(date)
       if (j==2){j--;}
       // drawing the const table (weakdays)
       let table ='<tr class=kw><td>KW<td>Monntag<td>Dienstag<td>Mittwoch<td>Donnerstag<td>Freitag<td class=we>Samstag<td class=we> Sonntag';

       // drawing the active table

       for(var i=0; i < tableCellNumber; i++){
              let cellDate = new Date(firstDayTowrite.getFullYear(),firstDayTowrite.getMonth(), firstDayTowrite.getDate() + i) ;
              
              if(i%7==0){              
                     table = table + '<tr>';
                     table = table + '<td class=kw>' + j;
                    j++ ;
              }
              if(holliday(cellDate)){
                     table = table + '<td><button class=hollyday onclick="setToday(\'' + cellDate + '\')">' + cellDate.getDate() ;

              }
                else if (cellDate.getFullYear()== todaysInfo.getFullYear()                                                  //define today
                  && cellDate.getMonth() == todaysInfo.getMonth()
                  && cellDate.getDate() == todaysInfo.getDate() 
              ){
                     table = table + '<td class=heute><button class=today onclick="setToday(\'' + cellDate + '\')">' + "Guten Tag";
              } else if ((i %7 ==5 || i %7 ==6) && date.getMonth() ==cellDate.getMonth()) {                                //define the weakends
                     table =table + '<td><button class=weakend onclick="setToday(\'' + cellDate + '\')">' + cellDate.getDate(); 
              } else if(date.getMonth() != cellDate.getMonth()) {                                                          // define the outdays
                     table = table + '<td class=AndererMonat><button class=outdays onclick="setToday(\'' + cellDate + '\')">' + cellDate.getDate(); 
              } else {
                     table = table + '<td ><button class=usualdays onclick="setToday(\'' + cellDate + '\')">' + cellDate.getDate() ;
              }
       }

       document.getElementById("dynamictable").innerHTML=table;
       let calenderMonthName;
       calenderMonthName=yearsMonthes[calenderMonth];                     //define the german monthes
       let calendereYear =date.getFullYear();
       document.getElementById("kalendermonat").innerHTML=calenderMonthName;
       document.getElementById("kalenderjahr").innerHTML=calendereYear;     
}
function weakDaysName(thisWeakDay){
       let heutigesnahme ;
       let wochentagen=["Sonntag","Monntag","Dienstag","Mittwich","Donnerstag","Freitag","Samstag"] ;
       heutigesnahme=wochentagen[thisWeakDay] ;
       return heutigesnahme ;
}

function holliday(cellDate){
       let Hollydaysday=[1,6,15,18,1,26,6,16,3,1,25,26] ;        // the hollydays check by creating days array and monthes array 
       let Hollydaysmonth=[0,0,3,3,4,4,5,5,9,10,11,11] ;
       for(let k=0;k<12;k=k+1){
              if (cellDate.getMonth() == Hollydaysmonth[k] && cellDate.getDate() == Hollydaysday[k]){
                     return true;
              }    
       }
}

function weakPosition(thisDay){
       let weakDay ;
       if ( thisDay <=7 ) { 
              weakDay = "Erste" ;
        } 
       else if ( thisDay < 14 ) {
              weakDay = "Zweite" ;
        } 
       else if ( thisDay <21  ){
              weakDay = "Dritte" ;
       } 
       else if ( thisDay < 28 ){ 
              weakDay = "Vierte" ;
       } 
       else if ( thisDay > 28 ){
              weakDay = "Fünfte" ;
       }   
       return  weakDay ;
}








function weakCalculate(date) {
       let kw
       let kwBasic
   
       let differenceTo = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 12));
   
       let theFirstJanuar =  new Date(Date.UTC(date.getFullYear(),00,01,12));// Set the 1.january
   
       let firstMonday = theFirstJanuar;
   
       while( firstMonday.getDay() != 1) { //Runs until the first Monday is reached
   
           firstMonday = new Date(Date.UTC(firstMonday.getFullYear(),firstMonday.getMonth(),firstMonday.getDate() + 1,12));
   
       }
   
       kwBasic= differenceTo - firstMonday; //Calculates the difference from 1.January to today
   
       kw = kwBasic/1000/60/60/24/7
   
       let kwRounded = Math.floor(kw);
       
       return kwRounded;
   
   
   }
// function weakCalculate(date){
// let februar=28
// if (date.getFullYear()%4==0){februar=29}
// let yeardays=[31,februar,31,30,31,30,31,31,30,31,30,31]
// let u=date.getMonth()
// let weaks=1
// while(u>0){
// weaks +=yeardays[u]/7
// u--
// }
// weaks=Math.ceil(weaks)
// console.log(weaks);
// return weaks
// }
