import { useState, useEffect, useCallback } from 'react'


export const componentBollHooks = function (e) {
    const [open, setOpen] = useState(e);
    return {open,setOpen}
}
