import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function Repositories() {
  const { username } = useParams()
  const [fetchedData, setFetchedData] = useState()

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}/repos`).then(({ data }) => {
      setFetchedData(data)
    })
  }, [username])

  console.log(fetchedData)
  return (
    <div className="Page">
      <h1>Repositories</h1>
    </div>
  )
}
