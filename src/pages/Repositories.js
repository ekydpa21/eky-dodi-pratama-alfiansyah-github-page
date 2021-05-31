import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import RepoCard from "../components/RepoCard"

export default function Repositories() {
  const { username } = useParams()
  const [fetchedUser, setFetchedUser] = useState()
  const [fetchedRepos, setFetchedRepos] = useState()

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}`).then(({ data }) => {
      setFetchedUser(data)
    })
  }, [username])

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}/repos`).then(({ data }) => {
      setFetchedRepos(data)
    })
  }, [username])

  // const { avatar_url, name, login } = fetchedUser
  return (
    <div className="Repositories">
      <div className="user-info">
        {fetchedUser && (
          <>
            <img src={fetchedUser.avatar_url} alt="user-avatar" />
            <h3>{fetchedUser.name}</h3>
            <h5>{fetchedUser.login}</h5>
          </>
        )}
      </div>
      <div className="repo-list">
        {fetchedRepos &&
          fetchedRepos.map((repo, idx) => {
            return <RepoCard key={idx} repo={repo} />
          })}
      </div>
    </div>
  )
}
