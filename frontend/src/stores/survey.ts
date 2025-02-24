import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Survey } from '../types'

export const useSurveyStore = defineStore('survey', () => {
  const surveys = ref<Survey[]>([])
  const currentSurvey = ref<Survey | null>(null)
  const isLoading = ref(false)

  const fetchSurveys = async () => {
    isLoading.value = true
    try {
      const response = await frappe.call({
        method: 'survey_manager.api.survey.get_surveys'
      })
      surveys.value = response.message
    } catch (error) {
      console.error('Error fetching surveys:', error)
    } finally {
      isLoading.value = false
    }
  }

  const createSurvey = async (survey: Survey) => {
    try {
      const response = await frappe.call({
        method: 'survey_manager.api.survey.create_survey',
        args: {
          title: survey.title,
          description: survey.description,
          questions: survey.questions,
          theme: survey.theme
        }
      })
      surveys.value.push(response.message)
    } catch (error) {
      console.error('Error creating survey:', error)
      throw error
    }
  }

  const updateSurvey = async (id: string, survey: Partial<Survey>) => {
    try {
      const response = await frappe.call({
        method: 'survey_manager.api.survey.update_survey',
        args: {
          name: id,
          ...survey
        }
      })
      const index = surveys.value.findIndex(s => s.id === id)
      if (index !== -1) {
        surveys.value[index] = response.message
      }
    } catch (error) {
      console.error('Error updating survey:', error)
      throw error
    }
  }

  const deleteSurvey = async (id: string) => {
    try {
      await frappe.call({
        method: 'frappe.client.delete',
        args: {
          doctype: 'Survey',
          name: id
        }
      })
      surveys.value = surveys.value.filter(s => s.id !== id)
    } catch (error) {
      console.error('Error deleting survey:', error)
      throw error
    }
  }

  const getSurvey = async (id: string) => {
    try {
      const response = await frappe.call({
        method: 'survey_manager.api.survey.get_survey',
        args: { name: id }
      })
      return response.message
    } catch (error) {
      console.error('Error fetching survey:', error)
      throw error
    }
  }

  return {
    surveys,
    currentSurvey,
    isLoading,
    fetchSurveys,
    createSurvey,
    updateSurvey,
    deleteSurvey,
    getSurvey
  }
})