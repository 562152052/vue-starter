import { GET_DOCS } from './types'

export default {
    [GET_DOCS](store, payload) {
        store.docs = payload
    }
}