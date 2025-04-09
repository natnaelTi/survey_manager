// Copyright (c) 2025, Selfmade Cloud Solutions and contributors
// For license information, please see license.txt

frappe.query_reports["Survey Report"] = {
    "filters": [
        {
            "fieldname": "survey",
            "label": "Survey",
            "fieldtype": "Link",
            "options": "Survey",
            "mandatory": 1
        }
    ]
};
