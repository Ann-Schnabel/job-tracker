import axios from "axios";

export const GET_JOBS = "GET_JOBS";

const ROOT_URL = 'http://localhost:8000'

export function getJobs() {
  const url = `${ROOT_URL}/api/jobs`;
  const request = axios.get(url);

  return {
    type: GET_JOBS,
    payload: request,
  };
}