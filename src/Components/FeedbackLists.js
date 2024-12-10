import React from 'react'

const FeedbackLists = ({users,handleDelete,handleEdit}) => {
  return (
    <div>
        <h2>All Feedbacks</h2>
        <ul>
            {users.map(user=>{
                return <li key={user.id}>
                    {user.name} {user.rating} <button onClick={()=>handleDelete(user.id)}>Delete</button> <button onClick={()=>handleEdit(user.id)}>Edit</button>
                </li>
            })}
        </ul>
    </div>
  )
}

export default FeedbackLists