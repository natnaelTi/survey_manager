# survey_manager/api.py
import frappe
from frappe import _

@frappe.whitelist()
def save_survey(name, survey_json):
    if frappe.db.exists("Survey", name):
        survey = frappe.get_doc("Survey", name)
        survey.survey_json = survey_json
        survey.save()
    else:
        survey = frappe.get_doc({
            "doctype": "Survey",
            "title": name,
            "survey_json": survey_json
        })
        survey.insert()

    return "Survey saved successfully!"

@frappe.whitelist()
def get_survey(name):
    if frappe.db.exists("Survey", name):
        survey = frappe.get_doc("Survey", name)
        return {"survey_json": survey.survey_json}
    else:
        return None

@frappe.whitelist()
def create_survey(title):
    survey = frappe.get_doc({
        "doctype": "Survey",
        "title": title,
        "survey_json": {
            "title": title,
            "pages": []
        }
    })
    survey.insert()
    return survey

@frappe.whitelist()
def update_survey(name, survey_json):
    survey = frappe.get_doc("Survey", name)
    survey.survey_json = survey_json
    survey.save()
    return survey

@frappe.whitelist()
def get_survey_list():
    return frappe.get_list("Survey", fields=["name", "title"])
