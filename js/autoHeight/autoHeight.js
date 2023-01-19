const autoHeight = (attr = '') => {
    const elements = [...document.querySelectorAll(`[data-auto-height=${attr}]`)]
    let elementsHeight = elements.map(element => element.offsetHeight)
    let height = Math.max.apply(null, elementsHeight)

    elements.forEach(element => element.style.height = `${height}px`)
}

const autoHeightArray = (attrs = ['']) => attrs.forEach(attr => autoHeight(attr))

export { autoHeight, autoHeightArray }