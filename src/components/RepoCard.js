import moment from "moment"
import React from "react"
import { Link } from "react-router-dom"

export default function RepoCard({ repo }) {
  const { name, language, html_url, updated_at } = repo
  const updatedTime = moment(updated_at).format("YYYYMMDD")

  return (
    <Link className="link" to={{ pathname: html_url }} target="_blank">
      <div className="repo-info">
        <h4>{name}</h4>
        <div className="project-info">
          {language && <p className="me-4">{language}</p>}
          <p>Updated {moment(updatedTime, "YYYYMMDD").fromNow()}</p>
        </div>
      </div>
    </Link>
  )
}
