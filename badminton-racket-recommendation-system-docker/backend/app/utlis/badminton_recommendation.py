
import pandas as pd
import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.svm import SVC
import random

from app.models.response import format_response

df = pd.read_csv('app/utlis/dataset/final_data.csv')
global SCALAR, LABEL_ENCODER,CLF

def train_model():
    df = pd.read_csv('app/utlis/dataset/final_data.csv')

    # Encode categorical features

    label_encoders = {}
    for column in ['Racket_type', 'Brand', 'Grip_size', 'Color', 'Material', 'Head_shape', 'Playing_level']:
        label_encoders[column] = LabelEncoder()
        df[column] = label_encoders[column].fit_transform(df[column])

    X = df.drop('Model_name', axis=1)
    y = df['Model_name']

    # Standardize numerical features
    scaler = StandardScaler()
    X[['Weight', 'Tension', 'Price']] = scaler.fit_transform(X[['Weight', 'Tension', 'Price']])

    # Train RandomForestClassifier
    clf = SVC()
    clf.fit(X, y)

    CLF,SCALAR,LABEL_ENCODER = clf,scaler,label_encoders
    return  clf,scaler,label_encoders

clf,scaler,label_encoders=train_model()

def create_test_data(df):
  # df=df.tail(5)
    data = df.drop(columns=['Model_name'], errors='ignore')
    num_combinations=25
    columns = data.columns
    combinations = []

    for _ in range(num_combinations):
        new_combination = {}
        for col in columns:
            unique_values = data[col].unique()
            if len(unique_values) > 0:
                new_combination[col] = random.choice(unique_values)
            else:
                # Handle empty column
                new_combination[col] = None  # or any default value you prefer
        combinations.append(new_combination)

    X_test = pd.DataFrame(combinations)

    # Remove any duplicates and rows that exactly match the original data
    X_test = X_test.drop_duplicates()
    X_test = pd.concat([X_test, data]).drop_duplicates(keep=False)

    return X_test

def inverse_data(scaler,label_encoders,X_test):
  X_test[['Weight', 'Tension', 'Price']] = scaler.inverse_transform(X_test[['Weight', 'Tension', 'Price']])
  for column in ['Racket_type', 'Brand', 'Grip_size', 'Color', 'Material', 'Head_shape', 'Playing_level']:
    X_test[column] = label_encoders[column].inverse_transform(X_test[column])
  return X_test

def grouping_data(badminton_ratings):
  df = pd.read_csv('app/utlis/dataset/final_data.csv')
  # Convert ratings out of 5 and create two separate lists
  high_ratings = []
  low_ratings = []

  for racket in badminton_ratings["badminton_ratings"]:
      racket_name = racket["name"]
      racket_rating = racket["rating"]  # Convert rating out of 5
      if racket_rating >= 2.5:
          high_ratings.append(racket_name)
      else:
          low_ratings.append(racket_name)
  high_ratings_dataset = df[df['Model_name'].isin(high_ratings)]
  high_ratings_dataset.to_csv('highest.csv')
  low_ratings_dataset = df[df['Model_name'].isin(low_ratings)]
  low_ratings_dataset.to_csv('low.csv')
  return high_ratings_dataset,low_ratings_dataset

def run_code(combined_dataset,low_ratings_dataset,high_ratings_dataset):
    combined = create_test_data(combined_dataset)
    low_rating = create_test_data(low_ratings_dataset)
    high_rating = create_test_data(high_ratings_dataset)
    filtered_combined = combined[~combined.isin(low_rating)].dropna()
    return filtered_combined

# Define the JSON-like structure as a dictionary
# badminton_ratings = {
#     "badminton_ratings": [
#         {"name": "Meteor X 80", "rating":5},
#         {"name": "Jetspeed S 10", "rating": 4.2},
#         {"name": "Arcsaber FD", "rating": 3.0},

#     ]
# }

def pred_model(clf,scaler,label_encoders,badminton_ratings):
  high_rating,low_rating=grouping_data(badminton_ratings)
  combined_dataset = pd.concat([high_rating, low_rating])
  X_test=run_code(combined_dataset,low_rating,high_rating)
  for column in ['Racket_type', 'Brand', 'Grip_size', 'Color', 'Material', 'Head_shape', 'Playing_level']:
      X_test[column] = label_encoders[column].transform(X_test[column])
  X_test[['Weight', 'Tension', 'Price']] = scaler.transform(X_test[['Weight', 'Tension', 'Price']])
  y_pred = clf.predict(X_test)
  X_test_inversed=inverse_data(scaler,label_encoders,X_test)
  unique_values = np.unique(pred)
  return unique_values,X_test_inversed

df[df['Model_name'] == 'Meteor X 80']



# pred,result_ds=pred_model(clf,scaler,label_encoders)

import numpy as np

# # Assuming pred is your numpy array
# print(unique_values)

# result_ds

df[df['Playing_level'] == 'Intermediate']['Material'].unique()

df_professional=df[df['Playing_level'] == 'Beginner']

df_professional.head()



df_professional.to_csv('beginner.csv')

def select_dataset(playing_level):
  path=""
  if(playing_level == "Professional"):
    path='app/utlis/dataset/professional_df.csv'
  elif(playing_level == "Advanced"):
    path='app/utlis/dataset/advanced_df.csv'
  elif(playing_level == "Intermediate"):
    path='app/utlis/dataset/intermediate.csv'
  elif(playing_level == "Beginner"):
    path='app/utlis/dataset/beginner.csv'
  df=pd.read_csv(path)
  return df



def select_playingstyle(playing_style):
  racket_type=""
  if(playing_style=="Attacking"):
    racket_type="head heavy"
  elif(playing_style=="Balanced"):
    racket_type="even balance"
  elif(playing_style=="Defence"):
    racket_type="head light"
  return  racket_type

def unexperienced_user(clf,scaler,label_encoders,playing_level,playing_style,price):
  df=select_dataset(playing_level)
  racket_type=select_playingstyle(playing_style)
  data=df[(df['Racket_type'].str.lower() == racket_type) & (df['Price'] <= price)]
  if data.empty:
     raise Exception
  X_test=create_test_data(data)
  X_test = X_test.drop(columns=['Unnamed: 0'])
  for column in ['Racket_type', 'Brand', 'Grip_size', 'Color', 'Material', 'Head_shape', 'Playing_level']:
      X_test[column] = label_encoders[column].transform(X_test[column])
  X_test[['Weight', 'Tension', 'Price']] = scaler.transform(X_test[['Weight', 'Tension', 'Price']])
  y_pred = clf.predict(X_test)
  X_test_inversed=inverse_data(scaler,label_encoders,X_test)
  unique_values = np.unique(y_pred)
  return unique_values,X_test_inversed

pred,test_data=unexperienced_user(clf,scaler,label_encoders,'Professional','Attacking',2200)

unique_values = np.unique(pred)
print(unique_values)

