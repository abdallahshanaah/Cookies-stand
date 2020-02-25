'use strict';
var hours = [6 + ` am`, 7 + ` am`, 8 + ` am`, 9 + ` am`, 10 + ` am`, 11 + ` am`, 12 + ` am`, 1 + ` pm`, 2 + ` pm`, 3 + ` pm`, 4 + ` pm`, 5 + ` pm`, 6 + ` pm`, 7 + ` pm`, 8 + ` pm`];
function  Location(mincust_hour,maxcust_hour,avgCookies,randomco,avgArray){
this.mincust_hour=mincust_hour;
this.maxcust_hour=maxcust_hour;
this.avgCookies=avgCookies;
this.randomco=randomco;
this.avgArray=avgArray;
}
Location.prototype.getCustomers = function () {
    for (let i = 0; i < hours.length; i++) {
        this.randomco.push(Math.floor(Math.random() * (this.maxcust_hour - this.mincust_hour)) + this.mincust_hour);
        //console.log(this.randomco)
    }
};
    location.prototype.getCoutCookies = function () {
        this.getCustomers();
        for (let i = 0; i < this.randomco.length; i++) {
            var a = Math.floor(this.randomco[i] * this.avgCookies);
            this.avgArray.push(a);
            //console.log("avgArray "+this.avgArray)
        }
    };
        location.prototype.render =  function () {
            //var result=0;
            this.getCoutCookies();
            var divul = document.getElementById('Seattle');
            var ul = document.createElement('ul');
            divul.appendChild(ul);
            console.log(ul);
            for (let i = 0; i < this.avgArray.length; i++) {
                var li = document.createElement('li');
                li.textContent = `${hours[i]} : ${this.avgArray[i]} cookies`;
                ul.appendChild(li);
    
            }
        };
var Seattle = new location(23,65,6.3,[],[]);
Seattle.render();
var Tokyo = new location(3,24,1.2,[],[]); 
Tokyo.render();
var Dubai = new location(11,38,3.7,[],[]);
Dubai.render();
var  Paris= new location(20,38,2.3,[],[]);
Paris.render();
var Lima = new location(2,16,4.6,[],[]);
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