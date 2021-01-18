export const fetchData = async (url) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + url)
  const data = await res.json()

  return data
}

export const useApiMedia = (media) => {
  const fullMediaUrl = process.env.NEXT_PUBLIC_API_URL + media.url

  return fullMediaUrl
}
