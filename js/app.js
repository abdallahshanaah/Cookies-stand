'use strict';
var hours = [6 + `am  `, 7 + `am  `, 8 + `am  `, 9 + `am  `, 10 + `am  `, 11 + `am  `, 12 + `am  `, 1 + `pm  `, 2 + `pm  `, 3 + `pm  `, 4 + `pm  `, 5 + `pm  `, 6 + `pm  `, 7 + `pm  `, 8 + `pm  `];
var locArry =[];
var tableDiv = document.getElementById("display");
var table = document.createElement("table"); 
 tableDiv.appendChild(table);
function Location(name, mincust_hour, maxcust_hour, avgCookies) {
    this.name = name;
    this.mincust_hour = mincust_hour;
    this.maxcust_hour = maxcust_hour;
    this.avgCookies = avgCookies;
    this.randomco = [];
    this.avgArray = [];
    this.total = 0;
    //console.log(this)
    locArry.push(this);
    this.getCoutCookies();
}
Location.prototype.getCustomers = function () {
    for (let i = 0; i < hours.length; i++) {
        this.randomco.push(Math.floor(Math.random() * (this.maxcust_hour - this.mincust_hour)) + this.mincust_hour);
        // console.log(this.randomco)
    }
};
Location.prototype.getCoutCookies = function () {
    this.getCustomers();
    for (let i = 0; i < this.randomco.length; i++) {
        var a = Math.floor(this.randomco[i] * this.avgCookies);
        this.avgArray.push(a);
        this.total += this.avgArray[i];
        // console.log("avgArray "+this.avgArray)
    }
};


Location.prototype.render = function () {
    var divEl = document.getElementById(`${this.name}`);
    table.appendChild(divEl);
    //console.log(divEl);
    var ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    var li = document.createElement('li');
    li.textContent = `${this.name}`;
    ulEl.appendChild(li);
    //console.log(this.name);
    for (let i = 0; i < this.avgArray.length; i++) {
        li = document.createElement('li');
        li.textContent = `${hours[i]} : ${this.avgArray[i]} cookies`;
        ulEl.appendChild(li);
    }

};
Location.prototype.dataRender = function () {
    var trEL = document.createElement("tr");
    table.appendChild(trEL);
    var tdEL = document.createElement("td");
    trEL.appendChild(tdEL);
    tdEL.textContent = this.name;
    //console.log(this.avgArray)
    for (let i = 0; i < this.avgArray.length; i++) {
        tdEL = document.createElement("td");
        trEL.appendChild(tdEL);
        tdEL.textContent = this.avgArray[i];
        //console.log (this.avgArray);

    }
    tdEL = document.createElement("td");
        trEL.appendChild(tdEL);
        tdEL.textContent = this.total;

};
var locform=document.getElementById('locform');
locform.addEventListener('submit',function(event){
event.preventDefault();
var locname=event.target.name.value;
var min=event.target.mincust_hour.value;
var max=event.target.maxcust_hour.value;
var avg=event.target.avgCookies.value;
new Location(locname,min,max,avg).dataRender();
myDeleteFunction();


})
function myDeleteFunction() {
    document.getElementById("Table").deleteRow(Table.rows.length - 1);
    console.log(document.getElementById("Table").deleteRow(Table.rows.length - 1));
  }

     new Location('Seattle', 23, 65, 6.3);
     new Location('Tokyo', 3, 24, 1.2);
     new Location('Dubai', 11, 38, 3.7);
     new Location('Paris', 20, 38, 2.30);
     new Location('Lima', 2, 16, 4.6);
    
    var headerRender = function () {
        var trEL = document.createElement("tr");
        table.appendChild(trEL);
        var tableth = document.createElement("th");
        trEL.appendChild(tableth);
        tableth.textContent = '       ';
        for (let i = 0; i < hours.length; i++) {
            tableth = document.createElement("th");
            trEL.appendChild(tableth);
            tableth.textContent = hours[i];
        }
        tableth = document.createElement("th");
        trEL.appendChild(tableth);
        tableth.textContent = 'Total ';
    
    }
   
    var footerReander = function () {
    var trEL = document.createElement("tr");
    table.appendChild(trEL);
    var tdEL = document.createElement("td");
    trEL.appendChild(tdEL);
    tdEL.textContent = 'Total';
    var total1_total ;
    var bigtotal=0;
    for (let i = 0; i < hours.length; i++) {
        total1_total=0;
        for (let j = 0; j < locArry.length; j++) {
            total1_total += locArry[j].avgArray[i];
            console.log(locArry[j].avgArray[j]);
        }
        var tdEL = document.createElement("td");
        trEL.appendChild(tdEL);
        tdEL.textContent = total1_total;
        bigtotal += total1_total;
    }
tdEL = document.createElement("td");
    trEL.appendChild(tdEL);
    tdEL.textContent = bigtotal;
}
  headerRender();
 for (let i=0;i<locArry.length;i++){
    //locArry[i].render();
    locArry[i].dataRender();
}
   footerReander();










// var Seattle = {
//     mincust_hour: 23,
//     maxcust_hour: 65,
//     avgCookies: 6.3,
//     randomco: [],
//     avgArray: [],
//     getCustomers: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.randomco.push(Math.floor(Math.random() * (this.maxcust_hour - this.mincust_hour)) + this.mincust_hour);
//             //console.log(this.randomco)
//         }
//     },
//     getCoutCookies: function () {
//         this.getCustomers();
//         for (let i = 0; i < this.randomco.length; i++) {
//             var a = Math.floor(this.randomco[i] * this.avgCookies);
//             this.avgArray.push(a);
//             //console.log("avgArray "+this.avgArray)
//         }
//     },
//     render: function () {
//         //var result=0;
//         this.getCoutCookies();
//         var divul = document.getElementById('Seattle');
//         var ul = document.createElement('ul');
//         divul.appendChild(ul);
//         console.log(ul);
//         for (let i = 0; i < this.avgArray.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = `${hours[i]} : ${this.avgArray[i]} cookies`;
//             ul.appendChild(li);

//         }
//     }
// }
// Seattle.render();

// var Tokyo= {
//     mincust_hour: 3,
//     maxcust_hour: 24,
//     avgCookies: 1.2,
//     randomco: [],
//     avgArray: [],
//     getCustomers: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.randomco.push(Math.floor(Math.random() * (this.maxcust_hour - this.mincust_hour)) + this.mincust_hour);
//             //console.log(this.randomco)
//         }
//     },
//     getCoutCookies: function () {
//         this.getCustomers();
//         for (let i = 0; i < this.randomco.length; i++) {
//             var a = Math.floor(this.randomco[i] * this.avgCookies);
//             this.avgArray.push(a);
//             //console.log("avgArray "+this.avgArray)
//         }
//     },
//     render: function () {
//         //var result=0;
//         this.getCoutCookies();
//         var divul = document.getElementById('Tokyo');
//         var ul = document.createElement('ul');
//         divul.appendChild(ul);
//         console.log(ul);
//         for (let i = 0; i < this.avgArray.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = `${hours[i]} : ${this.avgArray[i]} cookies`;
//             ul.appendChild(li);

//         }
//     }
// }
// Tokyo.render();

// var Dubai = {
//     mincust_hour: 11,
//     maxcust_hour: 38,
//     avgCookies: 3.7,
//     randomco: [],
//     avgArray: [],
//     getCustomers: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.randomco.push(Math.floor(Math.random() * (this.maxcust_hour - this.mincust_hour)) + this.mincust_hour);
//             //console.log(this.randomco)
//         }
//     },
//     getCoutCookies: function () {
//         this.getCustomers();
//         for (let i = 0; i < this.randomco.length; i++) {
//             var a = Math.floor(this.randomco[i] * this.avgCookies);
//             this.avgArray.push(a);
//             //console.log("avgArray "+this.avgArray)
//         }
//     },
//     render: function () {
//         //var result=0;
//         this.getCoutCookies();
//         var divul = document.getElementById('Dubai');
//         var ul = document.createElement('ul');
//         divul.appendChild(ul);
//         console.log(ul);
//         for (let i = 0; i < this.avgArray.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = `${hours[i]} : ${this.avgArray[i]} cookies`;
//             ul.appendChild(li);

//         }
//     }
// }
// Dubai.render();

// var Paris = {
//     mincust_hour: 20,
//     maxcust_hour: 38,
//     avgCookies: 2.3,
//     randomco: [],
//     avgArray: [],
//     getCustomers: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.randomco.push(Math.floor(Math.random() * (this.maxcust_hour - this.mincust_hour)) + this.mincust_hour);
//             //console.log(this.randomco)
//         }
//     },
//     getCoutCookies: function () {
//         this.getCustomers();
//         for (let i = 0; i < this.randomco.length; i++) {
//             var a = Math.floor(this.randomco[i] * this.avgCookies);
//             this.avgArray.push(a);
//             //console.log("avgArray "+this.avgArray)
//         }
//     },
//     render: function () {
//         //var result=0;
//         this.getCoutCookies();
//         var divul = document.getElementById('Paris');
//         var ul = document.createElement('ul');
//         divul.appendChild(ul);
//         console.log(ul);
//         for (let i = 0; i < this.avgArray.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = `${hours[i]} : ${this.avgArray[i]} cookies`;
//             ul.appendChild(li);

//         }
//     }
// }
// Paris.render();


// var Lima = {
//     mincust_hour: 2,
//     maxcust_hour: 16,
//     avgCookies: 4.6,
//     randomco: [],
//     avgArray: [],
//     getCustomers: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.randomco.push(Math.floor(Math.random() * (this.maxcust_hour - this.mincust_hour)) + this.mincust_hour);
//             //console.log(this.randomco)
//         }
//     },
//     getCoutCookies: function () {
//         this.getCustomers();
//         for (let i = 0; i < this.randomco.length; i++) {
//             var a = Math.floor(this.randomco[i] * this.avgCookies);
//             this.avgArray.push(a);
//             //console.log("avgArray "+this.avgArray)
//         }
//     },
//     render: function () {
//         //var result=0;
//         this.getCoutCookies();
//         var divul = document.getElementById('Lima');
//         var ul = document.createElement('ul');
//         divul.appendChild(ul);
//         console.log(ul);
//         for (let i = 0; i < this.avgArray.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = `${hours[i]} : ${this.avgArray[i]} cookies`;
//             ul.appendChild(li);
//         }
//     }
// }
// Lima.render();