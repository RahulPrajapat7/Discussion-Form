import React from 'react'
import DisplayQuestion from '../DisplayQuestion/DisplayQuestion';
import './Forum.css'
function Forum({ show, setShow, setQuestions, handleSubmit, handleToggleComplete }) {


  return (
    <>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Hey! Here is everything related to your queries.</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="">

                Questions:   <input className="input"
                  type="text"
                  placeholder="Type a question...."
                  onChange={(event) => setQuestions({ ...questions, question: event.target.value })}
                />

              </form>
            </div>
            <div className="modal-footer">
              <button type="button" onClick={handleSubmit} className="btn btn-secondary" data-bs-dismiss="modal">Ask</button>
            </div>
          </div>
        </div>
      </div>


      <div className=' Forum_mainClass container my-3'>
        <div className='setQuestion'>
          <h6>Hey! Here is everything related to your queries. </h6>
          <form action="">

            Questions:   <input className="input"
              type="text"
              placeholder="Type a question...."
              onChange={(event) => setQuestions({ ...questions, question: event.target.value })}
            />
            <button onClick={handleSubmit}>Ask</button>
          </form>
        </div>
        <div className='d-flex justify-content-between'>
          <div>
            <DisplayQuestion show={show} setShow={setShow} handleToggleComplete={handleToggleComplete} />
          </div>
          <div>
            <img width={'500px'} src="think.jpg" alt="" />
          </div>
        </div>
      </div>



    </>
  )
}

export default Forum;