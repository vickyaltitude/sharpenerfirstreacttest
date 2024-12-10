import React from 'react'

const UserRating = ({ratings}) => {


  return (
    <div>
        <h3>OverAll Ratings:</h3>
        <ul style={{listStyleType:'none'}}>
            <li>* {ratings['1']}</li>
            <li>** {ratings['2']}</li>
            <li>*** {ratings['3']}</li>
            <li>**** {ratings['4']}</li>
            <li>***** {ratings['5']}</li>
        </ul>
    </div>
  )
}

export default UserRating