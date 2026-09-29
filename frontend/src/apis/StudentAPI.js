import api from './configs/axiosConfig'

export const ResumeParser = async (file) => {
  const res = await api.post('/resume-parser', file)

  return res.data
}

export const PredictStudent = async (data) => {
  const res = await api.post('http://localhost:5000/api/predict-student-placement', data)
  console.log(res)
  return res.data
}

export const RecommendSkills = async (data) => {
  const res = await api.post('http://localhost:5000/api/recommendSkills', data)
  return res.data
}
