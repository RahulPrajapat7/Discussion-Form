import React from 'react'
import './DisplayQuestion.css'
function DisplayQuestion({ show, handleToggleComplete }) {

  return (

    <div className='main '>
      <h2 >Asked Question</h2>
      <hr />
      {show.map((user) => (
        <div key={user._id} className="user display-ques" >
          <h5 style={{ color: 'white' }}>{user.question}?</h5>
          <div className="dropdown">
            <p onClick={() => handleToggleComplete(user)} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Answer
            </p>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ipsa atque vero consequatur dolores repudiandae eveniet sit cum. Rem velit vitae dolorum. Saepe, ipsum soluta?</a></li>
            </ul>
          </div>
        </div>
      ))}

    </div>
  )
}

export default DisplayQuestion