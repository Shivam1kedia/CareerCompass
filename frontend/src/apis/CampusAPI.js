import api from './configs/axiosConfig';

export const PredictCampusPlacements = async (excelFile) => {
    const response = (await api.post('http://localhost:5000/api/predict-campus-placements', excelFile))
        .data;

    return response;
};
