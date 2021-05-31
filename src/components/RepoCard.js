import React from "react"
import { Link } from "react-router-dom"

export default function RepoCard({ repo }) {
  const { name, language, html_url } = repo
  console.log(repo)
  return (
    <Link className="link" to={{ pathname: html_url }} target="_blank">
      <div className="repo-info">
        <h4>{name}</h4>
        <p>{language}</p>
      </div>
    </Link>
  )
}
