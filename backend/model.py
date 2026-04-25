import pandas as pd
from sklearn.linear_model import LinearRegression

def train_model(df):
    X = df[["area"]]
    y = df["price"]

    model = LinearRegression()
    model.fit(X, y)

    return model

def calculate_deal_scores(df):
    model = train_model(df)

    df["predicted_price"] = model.predict(df[["area"]])

    df["deal_score"] = (df["predicted_price"] - df["price"]) / df["predicted_price"]

    return df.sort_values(by="deal_score", ascending=False)