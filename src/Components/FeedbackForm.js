import React from 'react'

const FeedbackForm = ({userInput,handleFormSubmit,handleUserNameInput,handleUserRatingInput,checkEdit,handleEditSubmit}) => {



  return (
    <div>
        <h3>Feedback Form</h3>
        <form onSubmit={(event)=>handleFormSubmit(event)}>
            <label htmlFor='username'>Enter Your Name:</label>
            <input id='username' type='text' value={userInput.userName} onChange={(eve)=> handleUserNameInput(eve)}/>
            <label htmlFor='userrating'>Choose Rating</label>
            <select id='userrating' value={userInput.userRating} onChange={(eve)=>handleUserRatingInput(eve)} >
                <option>Select rating</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            {checkEdit && <button type='button' onClick={handleEditSubmit}>Edit Rating</button> }
            {!checkEdit && <button type='submit'>Submit</button>}
            
        </form>
    </div>
  )
}

export default FeedbackForm