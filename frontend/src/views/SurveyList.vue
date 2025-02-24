<script setup lang="ts">
import { computed } from 'vue'
import { useSurveyStore } from '../stores/survey'
import { useRouter } from 'vue-router'
import { Button, Card } from 'frappe-ui'

const surveyStore = useSurveyStore()
const router = useRouter()

const surveys = computed(() => surveyStore.surveys)

const createNewSurvey = () => {
  router.push('/builder')
}

const editSurvey = (id: string) => {
  const survey = surveyStore.getSurvey(id)
  if (survey) {
    surveyStore.currentSurvey = survey
    router.push('/builder')
  }
}

const deleteSurvey = (id: string) => {
  if (confirm('Are you sure you want to delete this survey?')) {
    surveyStore.deleteSurvey(id)
  }
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-2xl font-bold">My Surveys</h1>
      <Button
        @click="createNewSurvey"
        variant="solid"
        color="blue"
      >
        Create New Survey
      </Button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        v-for="survey in surveys"
        :key="survey.id"
        class="p-4"
      >
        <template #header>
          <h2 class="text-lg font-semibold">{{ survey.title }}</h2>
        </template>
        
        <p class="text-gray-600 mb-4">{{ survey.description }}</p>
        
        <template #footer>
          <div class="flex justify-between items-center">
            <Badge
              :variant="survey.status === 'draft' ? 'warning' : 'success'"
              class="capitalize"
            >
              {{ survey.status }}
            </Badge>
            <div class="space-x-2">
              <Button
                @click="editSurvey(survey.id)"
                variant="outline"
                color="blue"
                size="sm"
              >
                Edit
              </Button>
              <Button
                @click="deleteSurvey(survey.id)"
                variant="outline"
                color="red"
                size="sm"
              >
                Delete
              </Button>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>