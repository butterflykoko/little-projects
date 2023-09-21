"use strict";
let up = () => {
    document.querySelector("style").innerHTML = " body { background-color: #91ccfc; \n overflow: hidden; } \n \n  #waterfall { height: 40vh; background: linear-gradient(180deg, #95cdfb, 20%, #aee2ff, #dff3fc, #91ccfc); animation: up 30s linear infinite; } \n \n @keyframes up { 0% { transform: translateY(55vh); } \n \n 100% { transform: translateY(-44vh); } } \n \n nav, #btn-container { z-index: 1; } \n \n #btn-container { position: relative; top: 87vh; display: flex; justify-content: space-evenly; } \n \n .btn { /n border-radius: 20%; } \n \n .btn-pos, .btn-pos:hover { background-color: #fff5e080; border: 1px #66666680 solid; } \n \n .btn-pos:hover { background-color: #e0efff80; }"
}

let down = () => { 
  document.querySelector("style").innerHTML = "body { background-color: #91ccfc; \n overflow: hidden; } \n \n #waterfall { height: 40vh; background: linear-gradient(180deg, #95cdfb, 20%, #aee2ff, #dff3fc, #91ccfc); animation: down 30s linear infinite; } \n \n @keyframes down { 0% { transform: translateY(30vh); } \n \n 100% { transform: translateY(130vh); } } \n \n nav, #btn-container { z-index: 1; } \n \n #btn-container { position: relative; top: 87vh; display: flex; justify-content: space-evenly; } \n \n .btn { border-radius: 20%; } \n \n .btn-pos, .btn-pos:hover { background-color: #fff5e080; border: 1px #66666680 solid; } \n \n .btn-pos:hover { background-color: #e0efff80; }"
}

let reset = () => {
    document.querySelector("style").innerHTML = "body { background-color: #91ccfc; \n overflow: hidden; } \n \n #waterfall { height: 40vh; background: linear-gradient(180deg, #95cdfb, 20%, #aee2ff, #dff3fc, #91ccfc); animation: down 30s linear infinite; } \n \n @keyframes down { 0% { transform: translateY(-44vh); } \n \n 100% { transform: translateY(55vh); } } \n \n nav, #btn-container { z-index: 1; } \n \n #btn-container { position: relative; top: 87vh; display: flex; justify-content: space-evenly; } \n \n .btn { border-radius: 20%; } \n \n .btn-pos, .btn-pos:hover { background-color: #fff5e080; border: 1px #66666680 solid; } \n \n .btn-pos:hover {  background-color: #e0efff80; }"
}

