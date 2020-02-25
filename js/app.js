'use strict';
var hours = [6 + `am  `, 7 + `am  `, 8 + `am  `, 9 + `am  `, 10 + `am  `, 11 + `am  `, 12 + `am  `, 1 + `pm  `, 2 + `pm  `, 3 + `pm  `, 4 + `pm  `, 5 + `pm  `, 6 + `pm  `, 7 + `pm  `, 8 + `pm  `];
function Location(name, mincust_hour, maxcust_hour, avgCookies, randomco, avgArray) {
    this.name = name;
    this.mincust_hour = mincust_hour;
    this.maxcust_hour = maxcust_hour;
    this.avgCookies = avgCookies;
    this.randomco = randomco;
    this.avgArray = avgArray;
}
Location.prototype.getCustomers = function () {
    for (let i = 0; i < hours.length; i++) {
        this.randomco.push(Math.floor(Math.random() * (this.maxcust_hour - this.mincust_hour)) + this.mincust_hour);
        //console.log(this.randomco)
    }
};
Location.prototype.getCoutCookies = function () {
    this.getCustomers();
    for (let i = 0; i < this.randomco.length; i++) {
        var a = Math.floor(this.randomco[i] * this.avgCookies);
        this.avgArray.push(a);
        //console.log("avgArray "+this.avgArray)
    }
};
Location.prototype.render = function () {   
    this.getCoutCookies();
    var divEl = document.getElementById(`${this.name}`);
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
var headertable = document.getElementById("display");
var headertable1 = document.createElement("table");
Location.prototype.tablemain = function () {
    var tabletr = document.createElement("tr");
    headertable1.appendChild(tabletr);
    var tabletd = document.createElement("td");
    tabletd.appendChild(tabletr);
    tabletd.textContent = this.name;
    for (let i = 0; i < this.avgArray.length; i++) {
        tabletd = document.createElement("td");
        tabletd.appendChild(tabletr);
        //console.log (avgArray);
        tabletd.textContent = this.avgArray[i];
    }
};




        var tableheader= function() {
            headertable.appendChild(headertable1);
            // console.log(headertable);
            // console.log(headertable1);
        var tabletr = document.createElement("tr");
            headertable1.appendChild(tabletr);
            var tableth = document.createElement("th");
            tabletr.appendChild(tableth);
            tableth.textContent = '       ';
        for (let i = 0; i < hours.length; i++) {
            tableth = document.createElement("th");
            tabletr.appendChild(tableth);
            tableth.textContent = hours[i];
    }
    }


 tableheader();
var Seattle = new Location('Seattle', 23, 65, 6.3, [], []);
Seattle.tablemain();
Seattle.render();
var Tokyo = new Location('Tokyo', 3, 24, 1.2, [], []);
Tokyo.render();
var Dubai = new Location('Dubai', 11, 38, 3.7, [], []);
Dubai.render();
var Paris = new Location('Paris', 20, 38, 2.3, [], []);
Paris.render();
var Lima = new Location('Lima', 2, 16, 4.6, [], []);
Lima.render();






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