# Copyright (c) 2025, Selfmade Cloud Solutions and contributors
# For license information, please see license.txt

# import frappe
import json

def execute(filters=None):
    if not filters:
        filters = {}

    columns = get_columns(filters)
    data = get_data(filters)

    return columns, data

def get_columns(filters):
    """Dynamically generate columns based on survey questions"""
    columns = [
        {"fieldname": "survey_name", "label": "Survey Name", "fieldtype": "Link", "options": "Survey", "width": 200},
        {"fieldname": "participant", "label": "Participant", "fieldtype": "Data", "width": 150}
    ]

    # Fetch a sample response to get dynamic questions
    sample_response = frappe.get_all("Survey Response", filters={"survey": filters.get("survey")}, 
                                     fields=["response_json"], limit=1)

    if sample_response:
        response_data = json.loads(sample_response[0]["response_json"])
        for question in response_data.keys():
            columns.append({
                "fieldname": question.lower().replace(" ", "_"),
                "label": question.replace("_", " ").title(),
                "fieldtype": "Data",
                "width": 200
            })

    return columns

def get_data(filters):
    """Fetch responses and dynamically map JSON values"""
    survey_responses = frappe.get_all("Survey Response", filters={"survey": filters.get("survey")}, 
                                      fields=["survey", "response_json"])
    data = []

    for response in survey_responses:
        row = {
            "survey_name": response["survey"],
        }

        response_data = json.loads(response["response_json"])

        # Assuming first name + last name exist, else default to "Anonymous"
        row["participant"] = f"{response_data.get('FirstName', 'Anonymous')} {response_data.get('LastName', '')}".strip()

        # Dynamically map responses
        for question, answer in response_data.items():
            row[question.lower().replace(" ", "_")] = answer

        data.append(row)

    return data
