import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserPage = () => {

  // * to make the page dynamic, 
  // * we have to get the ID that we store in the URL

  // ^ 1) useParams hook helps us access the parameters we hold inside our URL, so this is our way to TRANSFER BACK the information(id) that we stored by clicking on a link.

  // ^ So in a sense, parameters are like a way of communication between our webpages

  const { id } = useParams();

  const [currentUser, setCurrentUser] = useState(null)

  // 2) we use the recently got user id to fetch the values of the actual current user that we are visiting the profile of
  useEffect(() => {

    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res)=>setCurrentUser(res.data))
      .catch((err)=>console.error(err))

  }, [])


  // ^ GENERAL TIMELINE

  // 1) Get all users from db.json (axios request)
  // 2) Display a link of each user on the page
  // 3) When a user clicks on the link lead them to /users page BUT WITH THE ID OF THE USER THEY CLICKED ON
  // because this is the only way the users page can know which user you are searching for
  // 4) On users page, useParams to retrieve the ID you stored in the URL
  // 5) Then, to get all the data regarding the user, send API request to db.json
  // 6) Then from the response that you get, useState to store your user's values for late use.
  // 7) Finally, use the data in your state to display the details about your user on the page.


  return (
    <div className='user-wrapper'>
      <div className='user-details'>
        <img src="https://picsum.photos/200" alt="" />
        <div className="detail">
          <h3>Username</h3>
          <h3>{currentUser?.username}</h3>
        </div>
        <div className="detail">
          <h3>Location</h3>
          <h3>{currentUser?.location}</h3>
        </div>
        <div className="detail">
          <h3>Awards</h3>
          <h3>{currentUser?.awards}</h3>
        </div>
      </div>
      <div className='user-description'>
        <h1>About This User</h1>
        <p>
          {
            currentUser?.description
          }
        </p>
      </div>
    </div>
  )
}

export default UserPage