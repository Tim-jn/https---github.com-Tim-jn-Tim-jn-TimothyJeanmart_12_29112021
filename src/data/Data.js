import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

/*

Fetch datas from backend NodeJS

*/

// GetUsersData includes the user id, user information (first name, last name and age),
// the current day's score (todayScore) and key data (calorie, macronutrient, etc.).

export default function GetUsersData() {
  const [data, setData] = useState()
  const userId = parseInt(useParams().id)

  useEffect(() => {
    fetch(`http://localhost:3000/user/${userId}`)
      .then((res) => {
        return res.json()
      })
      .then((obj) => {
        setData(obj.data)
      })
  }, [userId])

  return data
}

// GetUsersActivity retrieves a user's activity day by day with kilograms and calories.

export function GetUsersActivity() {
  const [data, setData] = useState()
  const userId = parseInt(useParams().id)

  useEffect(() => {
    fetch(`http://localhost:3000/user/${userId}/activity`)
      .then((res) => {
        return res.json()
      })
      .then((obj) => {
        setData(obj.data)
      })
  }, [userId])

  return data?.sessions
}
