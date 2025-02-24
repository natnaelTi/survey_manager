import frappe

def get_context(context):
    context.no_cache = 1
    # Get survey_id from the URL path
    path_parts = frappe.request.path.split('/')
    if len(path_parts) > 2:
        context.survey_id = path_parts[-1]
    return context
