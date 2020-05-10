/**
 * 存储localStorage
 */
export const setLocalStorage = (name, content) => {
    if (!name) return
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getLocalStorage = name => {
    if (!name) return
    return JSON.parse(window.localStorage.getItem(name))
}

/**
 * 删除localStorage
 */
export const removeLocalStorage = name => {
    if (!name) return
    window.localStorage.removeItem(name)
}




/**
 * key value
 */
export const duplicate = (list, data) => {
    Object.keys(data).map(key => {
        list[key] = data[key]
    })
    return list
}

/**
 * 
 * @param {*} str 
 * 去前后空格
 */
export const trim = (str) => (
    str.replace(/(^\s*)|(\s*$)/g, "")
)