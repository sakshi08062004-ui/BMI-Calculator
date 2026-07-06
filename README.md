# BMI Calculator

A clean, responsive BMI calculator built with plain HTML, CSS and JavaScript. It collects age, gender, height and weight from the user, calculates BMI and classifies the result into the standard BMI categories.

## Features
- User-friendly form with validation
- Real-time BMI calculation
- Category classification for healthy and unhealthy ranges
- Responsive layout for desktop and mobile
- Docker support for easy deployment

## Project Structure
- index.html: Main page layout
- styles.css: Visual styling and responsive layout
- script.js: BMI calculation and form validation
- Dockerfile: Container definition for serving the app

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd BMI-Calculator
   ```
2. Start a local web server:
   ```bash
   python3 -m http.server 8000
   ```
3. Open the app in your browser:
   ```text
   http://localhost:8000
   ```

## Docker Documentation

### Build the Docker image
```bash
docker build -t bmi-calculator:latest .
```

### Pull the Docker image
```bash
docker pull sakshi08062004-ui/bmi-calculator:latest
```

### Run the image as a container
```bash
docker run -d -p 8080:80 --name bmi-calculator bmi-calculator:latest
```

### Create a container from the image
```bash
docker create -p 8080:80 --name bmi-calculator-created bmi-calculator:latest
```

### Stop a running container
```bash
docker stop bmi-calculator
```

### Access the app
Open your browser and visit:
```text
http://localhost:8080
```

## BMI Formula
```text
BMI = Weight(kg) / Height(m)^2
```

## BMI Classification
- Severe Thinness: < 16
- Moderate Thinness: 16 - 17
- Mild Thinness: 17 - 18.5
- Normal: 18.5 - 25
- Overweight: 25 - 30
- Obese Class I: 30 - 35
- Obese Class II: 35 - 40
- Obese Class III: > 40
