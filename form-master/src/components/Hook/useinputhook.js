import { useState } from "react"

const useInputState = (defaultValue = '') => {
    const [value,setValue] = useState(defaultValue)

    const onChange = val => {
        setValue(val.target.value)
    }

    return {value,onChange}
}

export default useInputState;