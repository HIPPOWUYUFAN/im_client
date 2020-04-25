
import { useState, useEffect, useCallback } from 'react'

export const LoginSize = function () {
    const [hightSize, setHightSize] = useState(window.innerHeight)

    window.onresize = function () {
        setHightSize(window.innerHeight)
    }
    return hightSize
}


export const formValidator = function () {
    const [validator, setValidator] = useState({
        username: false,
        password: false,
        phone: false
    })
    
    return { validator, setValidator }
}