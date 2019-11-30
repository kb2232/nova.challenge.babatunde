import axios from 'axios';
import {BACKEND_SERVER_PORT} from '../constants';

export default axios.create({
  baseURL:`http://localhost:${BACKEND_SERVER_PORT}`
});