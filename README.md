<<<<<<< HEAD
# 🏡 Land Deal Finder

An AI-powered full-stack web application that identifies **undervalued land properties** using machine learning and data analysis.

The system predicts fair market prices and ranks properties based on investment potential.

---

# 🚀 Features

* 🤖 Machine learning price prediction (Linear Regression)
* 📊 Automated deal scoring system
* 🌍 Interactive property table
* ⚡ FastAPI backend REST API
* 🎨 React frontend interface
* 🔄 Real-time data communication between frontend and backend

---

# 🧠 How It Works

1. The backend loads property data
2. A machine learning model predicts the fair price
3. The system compares predicted vs actual price
4. A **deal score** is calculated:

```text
deal_score = (predicted_price - actual_price) / predicted_price
```

5. Results are sent to the frontend and displayed in a table

---

# 🏗️ Tech Stack

## Backend

* Python
* FastAPI
* Pandas
* Scikit-learn

## Frontend

* React
* Axios

---

# 📁 Project Structure

```bash id="xkq2ld"
land-deal-finder/
│
├── backend/
│   ├── main.py
│   ├── model.py
│   ├── requirements.txt
│   └── data/
│       └── land_data.csv
│
├── frontend/
│   └── src/
│       └── App.js
│
└── README.md
```

---

# ⚙️ How to Run

## 🔹 1. Clone the project

```bash
git clone https://github.com/YOUR_USERNAME/land-deal-finder.git
cd land-deal-finder
```

---

## 🔹 2. Run Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

Test API:

```text
http://127.0.0.1:8000/deals
```

---

## 🔹 3. Run Frontend

```bash
cd frontend
npm install
npm install axios
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# 📊 Output Example

The system returns:

* Property price
* Predicted fair price
* Deal score (green = good deal, red = overpriced)

---

# ⚠️ Notes

* This project uses sample data for demonstration
* Real-world MLS data requires licensing
* Built for learning, portfolio, and AI demonstration purposes

---

# 🔮 Future Improvements

* Advanced ML models (Random Forest / Neural Networks)
* Real-time real estate APIs
* Map-based visualization
* User authentication
* Cloud deployment (Vercel / AWS)

---

=======
# land-deal-finder
>>>>>>> f3d34b776287470207b1af4407e069d8dffd9d19
