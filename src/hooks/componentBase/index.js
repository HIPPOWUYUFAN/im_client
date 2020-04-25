import { useState, useEffect, useCallback } from 'react'

export const simpleBackdropHooks = function () {
    const [open, setOpen] = useState(false);
    return {open,setOpen}
}