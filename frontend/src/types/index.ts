export interface Survey {
    id: string
    title: string
    description?: string
    questions: Question[]
    createdAt: string
    updatedAt?: string
    status: 'draft' | 'published'
    theme?: SurveyTheme
    responses?: SurveyResponse[]
  }
  
  export interface Question {
    id: string
    type: QuestionType
    title: string
    description?: string
    required: boolean
    options?: string[]
    validation?: ValidationRule[]
    conditionalLogic?: ConditionalLogic
  }
  
  export type QuestionType = 
    | 'text'
    | 'multipleChoice'
    | 'checkbox'
    | 'rating'
    | 'date'
    | 'email'
    | 'number'
  
  export interface ValidationRule {
    type: 'required' | 'email' | 'minLength' | 'maxLength' | 'regex'
    value?: string | number
    message: string
  }
  
  export interface ConditionalLogic {
    questionId: string
    operator: 'equals' | 'notEquals' | 'contains'
    value: string
  }
  
  export interface SurveyTheme {
    primaryColor: string
    backgroundColor: string
    fontFamily: string
  }
  
  export interface SurveyResponse {
    id: string
    surveyId: string
    answers: Record<string, any>
    submittedAt: string
    respondentInfo?: {
      email?: string
      browser?: string
      platform?: string
    }
  }