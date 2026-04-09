const BASE_URL = import.meta.env.VITE_API_URL

export const sendContact = async (data) => {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  const result = await res.json()

  if (!res.ok) {
    throw new Error(result.error || "Something went wrong")
  }

  return result
}