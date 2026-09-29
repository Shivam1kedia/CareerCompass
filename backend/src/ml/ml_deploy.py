import requests
import os
import pickle
import pandas as pd
def generate_access_token():
    API_KEY = os.getenv('ML_DEPLOYMENT_API_KEY')
    # NOTE: you must manually set API_KEY below using information retrieved from your IBM Cloud account.
    token_response = requests.post('https://iam.cloud.ibm.com/identity/token', data={"apikey":
                                                                                     API_KEY, "grant_type": 'urn:ibm:params:oauth:grant-type:apikey'})
    mltoken = token_response.json()["access_token"]
    return mltoken


"""
input_fields - array of fields
 [
          "tier",
          "cgpa",
          "inter_gpa",
          "ssc_gpa",
          "internships",
          "no_of_projects",
          "is_participate_hackathon",
          "is_participated_extracurricular",
          "no_of_programming_languages",
          "dsa",
          "mobile_dev",
          "web_dev",
          "Machine Learning",
          "cloud",
          "CSE",
          "ECE",
          "IT",
          "MECH"
  ]

  feature_values - array of arrays. Each array in the array contains features.
"""


def predict_salary_api(feature_values):
    model=pickle.load(open('D:/campus-placement-analysis-main/backend/src/ml/models/sal_model.pkl', 'rb'))
    # mltoken = generate_access_token()

    # header = {'Content-Type': 'application/json',
    #           'Authorization': 'Bearer ' + mltoken}

    # NOTE: manually define and pass the array(s) of values to be scored in the next line
    # payload_scoring = {
    #     "input_data": [
    #         {
    #             "fields": [
    #                 "tier",
    #                 "cgpa",
    #                 "internships",
    #                 "no_of_projects",
    #                 "is_participate_hackathon",
    #                 "is_participated_extracurricular",
    #                 "no_of_programming_languages",
    #                 "dsa",
    #                 "mobile_dev",
    #                 "web_dev",
    #                 "Machine Learning",
    #                 "cloud",
    #                 "CSE",
    #                 "ECE",
    #                 "IT",
    #                 "MECH"
    #             ],
    #             "values": feature_values
    #         }
    #     ]
    # }
    features=[
                    "tier",
                    "cgpa",
                    "internships",
                    "no_of_projects",
                    "is_participate_hackathon",
                    "is_participated_extracurricular",
                    "no_of_programming_languages",
                    "dsa",
                    "mobile_dev",
                    "web_dev",
                    "Machine Learning",
                    "cloud",
                    "CSE",
                    "ECE",
                    "IT",
                    "MECH"
    ]
    _features=[
                    "tier",
                    "cgpa",
                    "internships",
                    "no_of_projects",
                    "is_participate_hackathon",
                    "is_participated_extracurricular",
                    "no_of_programming_languages",
                    "dsa",
                    "mobile_dev",
                    "web_dev",
                    "Machine Learning",
                    "cloud",
                    "is_placed",
                    "CSE",
                    "ECE",
                    "IT",
                    "MECH"
    ]
    df=pd.DataFrame(data=feature_values,columns=features)
    df['is_placed']=1
    df=df[_features]
    # response_scoring = requests.post('https://eu-gb.ml.cloud.ibm.com/ml/v4/deployments/98b08fa0-f51c-4818-9a79-66acf66c2f55/predictions?version=2021-05-01', json=payload_scoring,
    #                                  headers={'Authorization': 'Bearer ' + mltoken})
    # data = response_scoring.json()['predictions'][0]['values']
    try:
        prediction=model.predict(df)
        predictions = []

        for pred in prediction:
            predictions.append(pred)

        return predictions
    except Exception as e:
        print(e)


def predict_isplaced_api(feature_values):
    model=pickle.load(open('D:/campus-placement-analysis-main/backend/src/ml/models/Placed_model.pkl', 'rb'))
    # print(feature_values)
    # print("feature values",feature_values)
    # prediction=model.predict(feature_values)
    # print("predictions-> ",predictions)
    # mltoken = generate_access_token()

    # header = {'Content-Type': 'application/json',
    #           'Authorization': 'Bearer ' + mltoken}

    # # NOTE: manually define and pass the array(s) of values to be scored in the next line
    # payload_scoring = {"input_data": [{"fields": [
    #     "tier",
    #     "cgpa",
    #     "inter_gpa",
    #     "ssc_gpa",
    #     "internships",
    #     "no_of_projects",
    #     "is_participate_hackathon",
    #     "is_participated_extracurricular",
    #     "no_of_programming_languages",
    #     "dsa",
    #     "mobile_dev",
    #     "web_dev",
    #     "Machine Learning",
    #     "cloud",
    #     "CSE",
    #     "ECE",
    #     "IT",
    #     "MECH"
    # ], "values":feature_values}]}
    features=[
        "tier",
        "cgpa",
        "inter_gpa",
        "ssc_gpa",
        "internships",
        "no_of_projects",
        "is_participate_hackathon",
        "is_participated_extracurricular",
        "no_of_programming_languages",
        "dsa",
        "mobile_dev",
        "web_dev",
        "Machine Learning",
        "cloud",
        "CSE",
        "ECE",
        "IT",
        "MECH"
    ]
    df=pd.DataFrame(data=feature_values,columns=features)
    # feature_values=feature_values[features]
    predictions,probability=model.predict(df),model.predict_proba(df)
    preds=[]
    probabilities=[]
    # print("data",type(preds))
    for i in range(len(predictions)):
        preds.append(predictions[i])
        probabilities.append(probability[i][1]*100)
    # response_scoring = requests.post('https://eu-gb.ml.cloud.ibm.com/ml/v4/deployments/f266280b-2055-4112-8ad6-3facb3934342/predictions?version=2021-05-01', json=payload_scoring,

    #                                  headers={'Authorization': 'Bearer ' + mltoken})

    #data = response_scoring.json()['predictions'][0]['values']
    return preds,probabilities
