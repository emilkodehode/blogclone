import { useEffect, useState } from "react"

//i need to be better at preparing for error handling. just accepting that it is working is not good

async function fetchAsync(url: string) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export function fetchFunc(url: string) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    useEffect(
        () => {
            fetchAsync(url)
            .then((data) => setData(data))
            .finally(() => setLoading(false))
        },
        []
    )
    return {
        loading,
        data,
    }
}