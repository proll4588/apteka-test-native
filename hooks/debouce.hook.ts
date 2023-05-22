import { useEffect, useState } from 'react'

// Хук задержки изменения стейта
const useDebounce = (value: string, delay = 500): string => {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebounced(value), delay)
        return () => clearTimeout(handler)
    }, [value, delay])

    return debounced
}

export default useDebounce
