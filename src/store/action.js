import { getDocs } from '../service'

import { GET_DOCS } from './types'

export default {
    async getDocs({ commit, store }) {
        let { data } = await getDocs()
        commit(GET_DOCS, data)
    },

    getName({ commit, store }) {
        console.log(123)
    }
}