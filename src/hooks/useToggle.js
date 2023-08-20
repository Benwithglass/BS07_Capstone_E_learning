import { useCallback, useState } from "react"

export default function useToggle() {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle((prevToggle) => !prevToggle)
    }
    return {toggle, handleToggle}
}
