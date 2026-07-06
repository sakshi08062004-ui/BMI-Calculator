import tkinter as tk
from tkinter import messagebox

def calculate_bmi():
    try:
        age = int(age_entry.get())
        gender = gender_var.get()
        height = float(height_entry.get()) / 100
        weight = float(weight_entry.get())

        bmi = weight / (height * height)

        if bmi < 16:
            status = "Severe Thinness"
        elif bmi < 17:
            status = "Moderate Thinness"
        elif bmi < 18.5:
            status = "Mild Thinness"
        elif bmi < 25:
            status = "Normal"
        elif bmi < 30:
            status = "Overweight"
        elif bmi < 35:
            status = "Obese Class I"
        elif bmi < 40:
            status = "Obese Class II"
        else:
            status = "Obese Class III"

        result.config(
            text=f"Age: {age}\nGender: {gender}\nBMI = {bmi:.2f}\nClassification: {status}"
        )

    except:
        messagebox.showerror("Error", "Enter valid values")

root = tk.Tk()
root.title("BMI Calculator")
root.geometry("350x350")

tk.Label(root, text="Age").pack()
age_entry = tk.Entry(root)
age_entry.pack()

tk.Label(root, text="Gender").pack()

gender_var = tk.StringVar(value="Male")
tk.Radiobutton(root, text="Male", variable=gender_var, value="Male").pack()
tk.Radiobutton(root, text="Female", variable=gender_var, value="Female").pack()

tk.Label(root, text="Height (cm)").pack()
height_entry = tk.Entry(root)
height_entry.pack()

tk.Label(root, text="Weight (kg)").pack()
weight_entry = tk.Entry(root)
weight_entry.pack()

tk.Button(root, text="Calculate BMI", command=calculate_bmi).pack(pady=10)

result = tk.Label(root, text="")
result.pack()

root.mainloop()