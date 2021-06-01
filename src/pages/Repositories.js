import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import Swal from "sweetalert2"
import LoadingScreen from "../components/LoadingScreen"
import RepoCard from "../components/RepoCard"

export default function Repositories() {
  const history = useHistory()
  const { username } = useParams()
  const [fetchedUser, setFetchedUser] = useState()
  const [fetchedRepos, setFetchedRepos] = useState()

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then(({ data }) => {
        console.log(data)
        setFetchedUser(data)
      })
      .catch(({ response }) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `User ${response.data.message}`,
        })
        history.push("/")
      })
  }, [username, history])

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then(({ data }) => {
        setFetchedRepos(data)
      })
      .catch(({ response }) => console.log(response.data.message))
  }, [username])

  if (!fetchedUser || !fetchedRepos) {
    return <LoadingScreen />
  } else {
    return (
      <div className="Repositories">
        <div className="user-info">
          {fetchedUser && (
            <>
              <img src={fetchedUser.avatar_url} alt="user-avatar" />
              <h3>{fetchedUser.name}</h3>
              <h5>{fetchedUser.login}</h5>
              <p>
                {fetchedUser.followers} Follower . {fetchedUser.following} Following
              </p>
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
}
