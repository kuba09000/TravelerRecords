import React, { useEffect, useState, useContext } from "react"
import styles from "../page.module.css"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../../context/userContext"
import api from "../../../api/api"

export default function Travel(props) {
  const { user } = useContext(UserContext)
  const [image, setImage] = useState("")
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/Storage/${user.userId}/${props.tripId}/0/0`)
        setImage(res.data.uri)
        console.log(res.data)
      } catch (e) {
        console.error(e)
      }

      fetchData()
    }
  }, [])

  return (
    <div
      className={styles.travel}
      onClick={() => {
        navigate(`/travel/${props.klucz}`)
      }}
    >
      <img
        src={
          image ||
          props.image ||
          "https://cezim.pl/wp-content/uploads/2021/12/empty.jpg"
        }
      />
      <h1>{props.name ? props.name : "wycieczka"}</h1>

      <div className={styles.down}>{/* <p>{props.description}</p> */}</div>
    </div>
  )
}
