import { useState, useEffect, useCallback } from 'react'


export const componentBollHooks = function (e) {
    const [open, setOpen] = useState(e)
    useEffect(() => {
        console.log('-----------111')
        if (open.collapse) {
            setTimeout(() => {
                setOpen({ ...open, collapse: false })
            }, 1000);
        }
    }, [open.collapse])
    return { open, setOpen }
}
