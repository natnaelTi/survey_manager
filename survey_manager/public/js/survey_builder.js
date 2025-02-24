let creator;
const creatorOptions = {
    showLogicTab: true,
    isAutoSave: true
};

function initializeSurveyCreator(surveyData) {
    creator = new SurveyCreator.SurveyCreator(creatorOptions);
    creator.text = surveyData;
    creator.saveSurveyFunc = (saveNo, callback) => { 
        saveSurveyJson(creator.JSON, saveNo, callback);
    };
    creator.render(document.getElementById("surveyCreator"));
}

function loadSurveyBuilder(surveyId) {
    frappe.call({
        method: "survey_manager.survey_manager.api.survey.get_survey",
        args: { name: surveyId },
        callback: function(response) {
            if (response.message) {
                document.getElementById("survey-selector").style.display = "none";
                document.getElementById("create-survey-form").style.display = "none";
                document.getElementById("surveyCreator").style.display = "block";
                
                initializeSurveyCreator(response.message.survey_json);
                // Update URL without page reload
                window.history.pushState({}, "", `/survey-builder/${surveyId}`);
            }
        }
    });
}

function saveSurveyJson(json, saveNo, callback) {
    const surveyId = window.location.pathname.split('/').pop();
    
    frappe.call({
        method: 'survey_manager.survey_manager.api.survey.update_survey',
        args: {
            'name': surveyId,
            'survey_json': json
        },
        callback: function(response) {
            if (response.message) {
                callback(saveNo, true);
                frappe.show_alert("Survey saved successfully", 3);
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const pathParts = window.location.pathname.split('/');
    const surveyId = pathParts[pathParts.length - 1];
    
    if (surveyId && surveyId !== 'survey-builder') {
        loadSurveyBuilder(surveyId);
    } else {
        // Show survey selector
        document.getElementById("survey-selector").style.display = "block";
        
        // Load existing surveys
        frappe.call({
            method: "survey_manager.survey_manager.api.survey.get_survey_list",
            callback: function(response) {
                const surveyList = document.getElementById("survey-list");
                response.message.forEach(survey => {
                    const link = document.createElement("a");
                    link.href = `/survey-builder/${survey.name}`;
                    link.textContent = survey.title;
                    link.className = "d-block mb-2";
                    surveyList.appendChild(link);
                });
            }
        });
    }
    
    // Create new survey handlers
    document.getElementById("create-new-survey").addEventListener("click", function() {
        document.getElementById("survey-selector").style.display = "none";
        document.getElementById("create-survey-form").style.display = "block";
    });
    
    document.getElementById("submit-survey-title").addEventListener("click", function() {
        const title = document.getElementById("survey-title").value;
        if (!title) return;
        
        frappe.call({
            method: "survey_manager.survey_manager.api.survey.create_survey",
            args: { title: title },
            callback: function(response) {
                if (response.message) {
                    loadSurveyBuilder(response.message.name);
                }
            }
        });
    });
});
