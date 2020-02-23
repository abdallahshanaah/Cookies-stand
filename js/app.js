 'use strict';


var Seattle ={
    mincust_hour  : 23,
    maxcust_hour  : 65,
    avgCookies : 6.3,
    randomco:[],
    hours:[6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
    getcustomers : function(){
    for (let i=0;i<this.hours.length;i++){
       this.randomco.push(Math.floor(Math.random() * (this.maxcust_hour - this.mincust_hour)) + this.mincust_hour);
         //console.log(this.randomco)
}
},

getcoutCookies : function(){
    this.getcustomers();
var result =0;
var ol = document.getElementById('Seattle');
for (let i=0;i<this.randomco.length;i++){
var allhour = i === 6 ? 'pm' : 'am';
var h= (i+6)%12 === 0 ? 12 :(i+6)%12;
var li = document.createElement('li');
li.textContent = `${h} ${allhour} :${this.randomco[i]}`;
ol.appendChild(li);
result +=this.randomco[i];
}
li = document.createElement('li');
li.textContent = `result ${result}`;
ol.appendChild(li);
}
}
Seattle.getcustomers();
Seattle.getcoutCookies();



var Tokyo ={
         mincust_hour  : 3,
         maxcust_hour  : 24,
         avgCookies : 1.2,
         randomco:[],
         hours:[6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
         getcustomers : function(){
         for (let i=0;i<this.hours.length;i++){
            this.randomco.push(Math.floor(Math.random() * (this.maxcust_hour - this.mincust_hour)) + this.mincust_hour);
              //console.log(this.randomco)
     }
     },
     
     getcoutCookies : function(){
         this.getcustomers();
var result =0;
var ol = document.getElementById('Tokyo');
for (let i=0;i<this.randomco.length;i++){
    var allhour = i === 6 ? 'pm' : 'am';
    var h= (i+6)%12 === 0 ? 12 :(i+6)%12;
    var li = document.createElement('li');
    li.textContent = `${h} ${allhour} :${this.randomco[i]}`;
    ol.appendChild(li);
     result +=this.randomco[i];
}
li = document.createElement('li');
li.textContent = `result ${result}`;
ol.appendChild(li);
     }
    }
    Tokyo.getcustomers();
    Tokyo.getcoutCookies();



    var Dubai ={
        mincust_hour  : 11,
        maxcust_hour  : 38,
        avgCookies : 3.7,
        randomco:[],
        hours:[6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
        getcustomers : function(){
        for (let i=0;i<this.hours.length;i++){
           this.randomco.push(Math.floor(Math.random() * (this.maxcust_hour - this.mincust_hour)) + this.mincust_hour);
             //console.log(this.randomco)
    }
    },
    
    getcoutCookies : function(){
        this.getcustomers();
    var result =0;
    var ol = document.getElementById('Dubai');
    for (let i=0;i<this.randomco.length;i++){
    var allhour = i === 6 ? 'pm' : 'am';
    var h= (i+6)%12 === 0 ? 12 :(i+6)%12;
    var li = document.createElement('li');
    li.textContent = `${h} ${allhour} :${this.randomco[i]}`;
    ol.appendChild(li);
    result +=this.randomco[i];
    }
    li = document.createElement('li');
    li.textContent = `result ${result}`;
    ol.appendChild(li);
    }
    }
    Dubai.getcustomers();
    Dubai.getcoutCookies();
    

    var Paris ={
        mincust_hour  : 20,
        maxcust_hour  : 38,
        avgCookies : 2.3,
        randomco:[],
        hours:[6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
        getcustomers : function(){
        for (let i=0;i<this.hours.length;i++){
           this.randomco.push(Math.floor(Math.random() * (this.maxcust_hour - this.mincust_hour)) + this.mincust_hour);
             //console.log(this.randomco)
    }
    },
    
    getcoutCookies : function(){
        this.getcustomers();
    var result =0;
    var ol = document.getElementById('Paris');
    for (let i=0;i<this.randomco.length;i++){
    var allhour = i === 6 ? 'pm' : 'am';
    var h= (i+6)%12 === 0 ? 12 :(i+6)%12;
    var li = document.createElement('li');
    li.textContent = `${h} ${allhour} :${this.randomco[i]}`;
    ol.appendChild(li);
    result +=this.randomco[i];
    }
    li = document.createElement('li');
    li.textContent = `result ${result}`;
    ol.appendChild(li);
    }
    }
    Paris.getcustomers();
    Paris.getcoutCookies();



    var Lima ={
        mincust_hour  : 2,
        maxcust_hour  : 16,
        avgCookies : 4.6,
        randomco:[],
        hours:[6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
        getcustomers : function(){
        for (let i=0;i<this.hours.length;i++){
           this.randomco.push(Math.floor(Math.random() * (this.maxcust_hour - this.mincust_hour)) + this.mincust_hour);
             //console.log(this.randomco)
    }
    },
    
    getcoutCookies : function(){
        this.getcustomers();
    var result =0;
    var ol = document.getElementById('Lima');
    for (let i=0;i<this.randomco.length;i++){
    var allhour = i === 6 ? 'pm' : 'am';
    var h= (i+6)%12 === 0 ? 12 :(i+6)%12;
    var li = document.createElement('li');
    li.textContent = `${h} ${allhour} :${this.randomco[i]}`;
    ol.appendChild(li);
    result +=this.randomco[i];
    }
    li = document.createElement('li');
    li.textContent = `result ${result}`;
    ol.appendChild(li);
    }
    }
    Lima.getcustomers();
    Lima.getcoutCookies();