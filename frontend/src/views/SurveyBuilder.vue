<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Survey, Model } from 'survey-core'
import { SurveyCreator } from 'survey-creator-vue'
import { useSurveyStore } from '../stores/survey'

const creator = ref<any>(null)
const surveyStore = useSurveyStore()

onMounted(() => {
  const creatorOptions = {
    showLogicTab: true,
    showTranslationTab: true,
    isAutoSave: true,
    showThemeTab: true
  }

  creator.value = new SurveyCreator(creatorOptions)
  
  // Load existing survey if editing
  if (surveyStore.currentSurvey) {
    creator.value.JSON = surveyStore.currentSurvey
  }

  creator.value.saveSurveyFunc = (saveNo: number, callback: Function) => {
    // Save survey logic here
    const surveyJSON = creator.value.JSON
    surveyStore.createSurvey({
      ...surveyJSON,
      updatedAt: new Date().toISOString()
    })
    callback(saveNo, true)
  }
})
</script>

<template>
  <div class="survey-builder">
    <SurveyCreator v-if="creator" :model="creator" />
  </div>
</template>

<style>
.survey-builder {
  height: 100vh;
  width: 100%;
}
</style>