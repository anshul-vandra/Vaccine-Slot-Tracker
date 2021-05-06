import axios from 'axios'
import * as ACTION_TYPES from './Types'

export const getState = () => dispatch => {
    return axios
        .get(`http://13.235.242.157:5000/lookup/states`)
        .then((res) => {
            dispatch({ type: ACTION_TYPES.STATE_LIST_SUCCESS, payload: res.data })
            return res.data
        })
        .catch((err) => {
            dispatch({ type: ACTION_TYPES.STATE_LIST_ERROR, payload: err.response })
            throw err
        })
}

export const getDistrict = (data) => dispatch => {
    return axios
        .post(`http://13.235.242.157:5000/lookup/districts`, data)
        .then((res) => {
            dispatch({ type: ACTION_TYPES.DISTRICT_LIST_SUCCESS, payload: res.data })
            return res.data
        })
        .catch((err) => {
            dispatch({ type: ACTION_TYPES.DISTRICT_LIST_ERROR, payload: err.response })
            throw err
        })
}
export const getSlotData = () => dispatch => {
    return axios
        .post(`get_products`)
        .then((res) => {
            dispatch({ type: ACTION_TYPES.SLOT_LIST_INFO_SUCCESS, payload: res.data })
            return res.data
        })
        .catch((err) => {
            dispatch({ type: ACTION_TYPES.SLOT_LIST_INFO_ERROR, payload: err.response })
            throw err
        })
}