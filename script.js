const form = document.getElementById('bmi-form');
const result = document.getElementById('result');

function getCategory(bmi) {
  if (bmi < 16) return 'Severe Thinness';
  if (bmi < 17) return 'Moderate Thinness';
  if (bmi < 18.5) return 'Mild Thinness';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  if (bmi < 35) return 'Obese Class I';
  if (bmi < 40) return 'Obese Class II';
  return 'Obese Class III';
}

function showResult(message, tone = 'info') {
  result.innerHTML = `<p>${message}</p>`;
  result.style.borderColor = tone === 'error' ? '#fda4af' : '#c7d2fe';
  result.style.background = tone === 'error' ? '#fef2f2' : '#f8faff';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const age = Number(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const heightCm = Number(document.getElementById('height').value);
  const weightKg = Number(document.getElementById('weight').value);

  if (!age || !heightCm || !weightKg) {
    showResult('Please fill in all fields before calculating your BMI.', 'error');
    return;
  }

  if (age < 1 || age > 120) {
    showResult('Please enter a realistic age between 1 and 120.', 'error');
    return;
  }

  if (heightCm < 50 || heightCm > 250) {
    showResult('Please enter a height between 50 and 250 cm.', 'error');
    return;
  }

  if (weightKg < 20 || weightKg > 300) {
    showResult('Please enter a weight between 20 and 300 kg.', 'error');
    return;
  }

  const heightMeters = heightCm / 100;
  const bmi = (weightKg / (heightMeters * heightMeters)).toFixed(2);
  const category = getCategory(Number(bmi));

  result.innerHTML = `
    <strong>Your BMI result</strong>
    <p>Age: ${age}</p>
    <p>Gender: ${gender}</p>
    <p>BMI: <strong>${bmi} kg/m²</strong></p>
    <span class="status">Category: ${category}</span>
  `;
});

form.addEventListener('reset', () => {
  result.innerHTML = '';
  result.removeAttribute('style');
});
