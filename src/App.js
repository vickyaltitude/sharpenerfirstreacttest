import React,{useState} from 'react'
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackLists from "./Components/FeedbackLists";
import UserRating from "./Components/UserRating";

function App() {
   
  const [ratings,setRatings] = useState({
    1:0,
    2:0,
    3:0,
    4:0,
    5:0
  })
  const [users,setUsers] = useState([{id: 1 ,name:'vicky',rating:4}])
  const [userInput,setUserInput] = useState({
      userName:'',
      userRating:''
  })
  const [checkEdit,setCheckEdit] = useState(false);
  const [editUser,setEditUser] = useState(0)

  function handleFormSubmit(event){
    
event.preventDefault()
if(userInput.userName === "" || userInput.userRating === "") return
    let userId = users.length === 0 ? 1 : users.length + 1
    setRatings({
      ...ratings,
      [userInput.userRating]: ratings[userInput.userRating] + 1
    })
    setUsers([...users,{id: userId,name: userInput.userName, rating: userInput.userRating,}])
    setUserInput({
      userName:'',
      userRating:''
  })
       
  }

  function handleUserNameInput(event){
     setUserInput({
      ...userInput,
       userName: event.target.value
     })
  }

  function handleUserRatingInput(event){
    setUserInput({
      ...userInput,
       userRating: Number(event.target.value)
     })
  }

 function handleEdit(id){
  let getUser = users.filter(user=> user.id === id)
  setCheckEdit(true)
  setEditUser(id)
     setUserInput({
      userName:getUser[0].name,
      userRating:getUser[0].rating
  })
 }

 function handleEditSubmit(){

  let getUser = users.map(user=> user.id === editUser ? {id: editUser,name: userInput.userName, rating: userInput.userRating} : user)
  
    setUsers(getUser)
    setUserInput({
      userName:'',
      userRating:''
  })
 }

 function handleDelete(id){

    let newUserSet = users.filter(user=> user.id !== id)
    let getUser = users.filter(user=> user.id === id)
    console.log(getUser)
    setUsers(newUserSet)
    setRatings({
      ...ratings,
      [getUser[0].rating]: ratings[getUser[0].rating] === 0 ? 0 : ratings[getUser[0].rating] - 1
    })
 }

  return (
    <div >
      <h1>Feedback System</h1>
      <UserRating ratings={ratings} />
      <FeedbackForm checkEdit={checkEdit} handleUserNameInput={handleUserNameInput} handleUserRatingInput={handleUserRatingInput} userInput={userInput} setUserInput={setUserInput} handleFormSubmit={handleFormSubmit} handleEditSubmit={handleEditSubmit}/>
      <FeedbackLists  users={users} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  );
}

export default App;
