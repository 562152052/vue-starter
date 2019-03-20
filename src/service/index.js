import axios from 'axios'

export const getDocs = () => axios('/news/index')