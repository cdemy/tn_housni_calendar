# Anmerkungen

Du hast, sicherlich aufgrund der Sprache, Schwierigkeiten mit der Benennung von Funktionen, Variablen, etc. Ich würde Dir raten, dass Du Dich einmal festlegst, was Dir lieber ist, ob Deutsch oder Englisch, und dann dort wirklich, wenn notwendig, auch Google benutzt, um wirklich gute Variablennamen zu finden.

Einrückungen bitte konsistenter halten, zum Beispiel:

```html
    <body>
        <div id="Alles">
            <div id="Kopf">
                <h1 id="heutigesstringk"> </h1>
            </div>
            <div id="Links" class="backfoto">
                <div class="monatujahrvater">
                    
                        <div  class="monat">
                           &nbsp;  <button class="pfeil" onclick="monthDown()"> <i class="fa-solid fa-caret-left"></i></i> </button> &nbsp; 
                           <span id="kalendermonat" class="monatsname">März</span> 
                        </div>
                        <div class="monthup">
                            &nbsp;  <button  class="pfeil" onclick="monthUp()"> <i class="fa-solid fa-caret-right"></i> </button> &nbsp; 
                        </div>
                        <div colspan="2" class="jahr">
                            &nbsp; &nbsp; <button  class="pfeil" onclick="yearDown()"> <i class="fa-solid fa-caret-left"></i> </button> &nbsp; 
                            <span id="kalenderjahr" class="monatsname" >2022</span> 
                            <button  class="pfeil" onclick="yearUp()"> <i class="fa-solid fa-caret-right"></i> </button>  
                        </div>
                   
                </div>
```

könnte auch so aussehen:

```html
    <body>
        <div id="Alles">
            <div id="Kopf">
                <h1 id="heutigesstringk"> </h1>
            </div>
            <div id="Links" class="backfoto">
                <div class="monatujahrvater">
                    <div  class="monat">
                        &nbsp;
                        <button class="pfeil" onclick="monthDown()">
                          <i class="fa-solid fa-caret-left"></i>
                        </button>
                        &nbsp; 
                        <span id="kalendermonat" class="monatsname">März</span> 
                    </div>
                    <div class="monthup">
                        &nbsp;
                        <button  class="pfeil" onclick="monthUp()">
                            <i class="fa-solid fa-caret-right"></i>
                        </button>
                        &nbsp; 
                    </div>
                    <div colspan="2" class="jahr">
                        &nbsp;&nbsp;
                        <button class="pfeil" onclick="yearDown()">
                            <i class="fa-solid fa-caret-left"></i>
                        </button>
                        &nbsp;
                        <span id="kalenderjahr" class="monatsname" >2022</span> 
                        <button  class="pfeil" onclick="yearUp()">
                            <i class="fa-solid fa-caret-right"></i>
                        </button>  
                    </div>
                </div>
```

Entferne Kommentare, die Du nicht wirklich brauchst, oder mach sie sinnvoll.

```html
                <table class=kt  id="dynamictable">
                <!-- lkihlkloki -->
                    
                </table>
```

Beispiel:


```html
                <table class=kt  id="dynamictable">
                    <!-- Table will be filled dynamically -->
                </table>
```

Es ist relativ üblich, die html-Datei `index.html` zu nennen, aber die JS-Datei würde ich einfach anders nennen.

## Javascript

In Zukunft bitte den Ansatz mit der main-Funktion verwenden, weil das ist schöner lesbar.

Bis auf die sprachlichen Probleme gefallen mir Deine Kommentare gut, auch die Versuche, durch Kommentare und Leerzeilen den Code lesbar zu machen. Weiter so!

Auch die IDs in HTML bitte schöner benennen.

```js
       document.getElementById('heutigesstringk').innerHTML=headerDateString;
       document.getElementById('heutigesstring').innerHTML=dateString;
       document.getElementById('heutigesstring1').innerHTML=dateString;      // id can used just one time but we nead
```

Im Folgenden ist klar zu sehen, dass der Code nicht wirklich im nächsten Jahr funktionieren kann:

```js
       if(date > karfreitag) {
              lastHollyday =("15.04.") + thisYear + "(Karfreitag)";
              nexthollyday =("18.04.") + thisYear + "(Osternmontag)";
```

Die *holiday*-Funktion ist ein neter Ansatz, es fehlen aber die beweglichen Feiertage. Den Versuch mit der Schleife finde ich interessant, auch wenn das sicherlich Optimierungsbedarf hat.

Gewöhne Dir auch bitte die Semikolons an.

Ganz generell gefällt mir gut, wie Du selbständig neue Ansätze erarbeitest und auch ganz gut recherchierst.

Außerdem gefällt mir Dein Einsatz von Kommentaren.

# Bewertung

Schwierig. Der Teil mit den Feiertagen ist nicht wirklich funktionierend, aber oft gefällt mir der Ansatz. Ich sage mal: Wäre das mit den Namen besser, wäre es ganz klar eine gute Leistung. So sage ich mal ... es ist eine schwache 2, also 2- sozusagen.