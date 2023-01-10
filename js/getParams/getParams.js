const getParams = (search = [''] || '') => {

    const params = new URLSearchParams(window.location.search)

    const param = typeof search == 'string' ? params.get(search) : search.map(searched => {
        return {
            'param': searched,
            'value': params.get(searched)
        }
    })

    return param
}

export default getParams