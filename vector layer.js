
var map = L.map('map').setView([32, 75], 13);

function selectPointSymbol() {
  var selectedSymbol = document.getElementById("card_body_select").value;
 
}


function selectLineSymbol() {
  var selectedSymbol = document.getElementById("card_body_select").value;

}

function selectPolygonSymbol() {
  var selectedSymbol = document.getElementById("card_body_select").value;
 
}

// Event listener for point symbol selection
document.getElementById("pointSymbolSelect").addEventListener("change", selectPointSymbol);

// Event listener for line symbol selection
document.getElementById("lineSymbolSelect").addEventListener("change", selectLineSymbol);

// Event listener for polygon symbol selection
document.getElementById("polygonSymbolSelect").addEventListener("change", selectPolygonSymbol);

function ok() {
    window.location.href = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     });
     document.getElementById('okButton').addEventListener('click', applyLabelSettings);    
  }  
 
 function cancel() {
     window.location.href = "home.html";
     
 }