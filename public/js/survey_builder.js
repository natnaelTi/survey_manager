import { SurveyCreator } from "survey-creator-core";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

document.addEventListener("DOMContentLoaded", function() {
    // Check if SurveyCreator is available
    if (typeof SurveyCreator === "undefined") {
    console.error("SurveyCreator is not defined. Check if the SurveyJS library is loaded correctly.");
    return;
    }
    
    const creatorOptions = {
    showLogicTab: true,
    isAutoSave: true
    };
    const creator = new SurveyCreator.SurveyCreator(creatorOptions);
    // Load survey JSON from Frappe backend
    frappe.call({
        method: "survey_manager.survey_manager.api.survey.get_survey",
        args: { name: "Survey-0001" },
        callback: function(response) {
        if (response.message) {
            creator.text = response.message.survey_json;
        }
        }
    });

    // Save survey JSON to Frappe backend
    creator.saveSurveyFunc = function() {
        frappe.call({
        method: "survey_manager.survey_manager.api.survey.save_survey",
        args: {
            name: "Survey-0001",
            survey_json: creator.text
        },
        callback: function(response) {
            frappe.msgprint("Survey saved successfully!");
        }
        });
    };

    creator.render("surveyCreator");
});