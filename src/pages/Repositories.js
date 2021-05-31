import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import RepoCard from "../components/RepoCard"

export default function Repositories() {
  const { username } = useParams()
  const [fetchedRepos, setFetchedRepos] = useState()

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}/repos`).then(({ data }) => {
      setFetchedRepos(data)
    })
  }, [username])

  return (
    <div className="Repositories">
      {fetchedRepos &&
        fetchedRepos.map((repo, idx) => {
          return <RepoCard key={idx} repo={repo} />
        })}
    </div>
  )
}
