export const fetchData = async (url) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + url)
  const data = await res.json()

  return data
}

export const useApiMedia = () => {
  const makeMediaUrl = (media) => process.env.NEXT_PUBLIC_API_URL + media.url

  return makeMediaUrl
}
