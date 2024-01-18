
function applyLabelSettings() {
  // Capture user input from the form elements
  var fontTheme = document.getElementById('fontThemeSelect').value;
  var fontFamily = document.getElementById('fontFamilySelect').value;
  var fontSize = document.getElementById('fontSizeSelect').value;
  var textColor = document.getElementById('textColorSelect').value;
  var labelPlacement = document.getElementById('labelPlacementSelect').value;
  var labelSize = document.getElementById('labelSizeSelect').value;
  var labelDensity = document.getElementById('labelDensitySelect').value;
  var offset = document.getElementById('offsetSelect').value;
  var rotationalAngle = document.getElementById('rotationalAngleSelect').value;
  var haloPattern = document.getElementById('haloPatternSelect').value;
  var haloColor = document.getElementById('haloColorInput').value;
  var haloRadius = document.getElementById('haloRadiusInput').value;
  var haloTransparency = document.getElementById('haloTransparencyInput').value;

  console.log('Font Theme:', fontTheme);
  console.log('Font Family:', fontFamily);
  console.log('Font Size:', fontSize);
  console.log('Text Color:', textColor);
  console.log('Label Placement:', labelPlacement);
  console.log('Label Size:', labelSize);
  console.log('Label Density:', labelDensity);
  console.log('Offset:', offset);
  console.log('Rotational Angle:', rotationalAngle);
  console.log('Halo Pattern:', haloPattern);
  console.log('Halo Color:', haloColor);
  console.log('Halo Radius:', haloRadius);
  console.log('Halo Transparency:', haloTransparency);
}

// Event listener for form submission
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('card_body_span'); // Replace with the actual form ID
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission behavior
    applyLabelSettings();
  });
});


  //button
function ok() {
  window.location.href = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   });
   document.getElementById('okButton').addEventListener('click', applyLabelSettings);    
}

function cancel() {
    window.location.href = "home.html";
  }
