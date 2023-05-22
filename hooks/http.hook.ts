import { useState, useCallback } from 'react'

const useHttp = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState(null)

    const request = useCallback(
        async (
            url: string,
            method: string = 'GET',
            body: any = null,
            headers: any = {}
        ) => {
            setLoading(true)
            try {
                // Создаём заголовок и тело запроса
                if (body) {
                    headers['Content-Type'] = 'application/json'
                    body = JSON.stringify(body)
                }

                // Отправляем запрос и здём ответа
                const response = await fetch(url, {
                    method,
                    headers,
                    body,
                })

                // Расшифровываем запрос
                const data = await response.json()

                // Если что-то не так, бросаем ошибку
                if (!response.ok) {
                    throw new Error(data.message || 'Что-то пошло не так')
                }

                setLoading(false)

                return data
            } catch (e: any) {
                setLoading(false)
                setError(e.message)
                throw e
            }
        },
        []
    )

    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
}

export default useHttp
