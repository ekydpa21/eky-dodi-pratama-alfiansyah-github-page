import React, { useState } from "react"
import { useHistory } from "react-router"
import Swal from "sweetalert2"

export default function Home() {
  const [username, setUsername] = useState("")
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === "") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please Input Your Correct Username",
        showConfirmButton: false,
        timer: 1500,
      })
    } else {
      history.push(`/repositories/${username}`)
      setUsername("")
    }
  }

  return (
    <div className="Home">
      <form className="form-floating">
        <input type="text" className="form-control" id="floatingInputValue" placeholder="billie21" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="floatingInputValue">Input your github username</label>
        <button type="button" className="btn btn-dark" onClick={handleSubmit}>
          Go to Repositories
        </button>
      </form>
    </div>
  )
}
