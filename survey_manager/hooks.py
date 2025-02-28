app_name = "survey_manager"
app_title = "Survey Manager"
app_publisher = "Selfmade Cloud Solutions"
app_description = "Survey Manager"
app_email = "natnael.tilaye@earaldtradinget.com"
app_license = "mit"

# Apps
# ------------------

# required_apps = []

# Each item in the list will be shown as an app in the apps page
# add_to_apps_screen = [
# 	{
# 		"name": "survey_manager",
# 		"logo": "/assets/survey_manager/logo.png",
# 		"title": "Survey Manager",
# 		"route": "/survey_manager",
# 		"has_permission": "survey_manager.api.permission.has_app_permission"
# 	}
# ]

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/public/css/survey.css"
# app_include_js = [
#     "/public/js/survey.core.min.js",
#     "/public/js/survey-creator-core.min.js"
# ]

# include js, css files in header of web template
# web_include_css = "/assets/survey_manager/css/survey_manager.css"
# web_include_js = "/assets/survey_manager/js/survey_manager.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "survey_manager/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Svg Icons
# ------------------
# include app icons in desk
# app_include_icons = "survey_manager/public/icons.svg"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }

# website_route_rules = [
#     {"from_route": "/survey-builder", "to_route": "survey_builder"}
# ]

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "survey_manager.utils.jinja_methods",
# 	"filters": "survey_manager.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "survey_manager.install.before_install"
# after_install = "survey_manager.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "survey_manager.uninstall.before_uninstall"
# after_uninstall = "survey_manager.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "survey_manager.utils.before_app_install"
# after_app_install = "survey_manager.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "survey_manager.utils.before_app_uninstall"
# after_app_uninstall = "survey_manager.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "survey_manager.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
#     "Survey": {
#         "after_insert": "survey_manager.survey_manager.api.survey.after_survey_created",
#         "on_update": "survey_manager.survey_manager.api.survey.after_survey_updated",
#         "on_trash": "survey_manager.survey_manager.api.survey.before_survey_deleted"
#     }
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"survey_manager.tasks.all"
# 	],
# 	"daily": [
# 		"survey_manager.tasks.daily"
# 	],
# 	"hourly": [
# 		"survey_manager.tasks.hourly"
# 	],
# 	"weekly": [
# 		"survey_manager.tasks.weekly"
# 	],
# 	"monthly": [
# 		"survey_manager.tasks.monthly"
# 	],
# }

# Testing
# -------

# before_tests = "survey_manager.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "survey_manager.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "survey_manager.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Fixtures
# --------

fixtures = [
    {
        "dt": "Custom Field",
        "filters": [["dt", "in", ["Survey", "Survey Response"]]]
    },
    {
        "dt": "Client Script",
        "filters": [["module", "in", ["Survey Manager"]]]
    },
    {
        "dt": "Server Script",
        "filters": [["module", "in", ["Survey Manager"]]]
    },
    {
        "dt": "Custom Field",
        "filters": [["module", "in", ["Survey Manager"]]]
    },
    {
        "dt": "Property Setter",
        "filters": [["module", "in", ["Survey Manager"]]]
    },
]

# Request Events
# ----------------
# before_request = ["survey_manager.utils.before_request"]
# after_request = ["survey_manager.utils.after_request"]

# Job Events
# ----------
# before_job = ["survey_manager.utils.before_job"]
# after_job = ["survey_manager.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"survey_manager.auth.validate"
# ]

# Automatically update python controller files with type annotations for this app.
# export_python_type_annotations = True

# default_log_clearing_doctypes = {
# 	"Logging DocType Name": 30  # days to retain logs
# }

