import React from "react"
import { Link } from "react-router-dom"

export default function RepoCard({ repo }) {
  const { name, html_url } = repo

  return (
    <Link className="link" to={{ pathname: html_url }} target="_blank">
      <div className="card mb-2">
        <div className="card-body">
          <h5 className="mb-0">{name}</h5>
        </div>
      </div>
    </Link>
  )
}
