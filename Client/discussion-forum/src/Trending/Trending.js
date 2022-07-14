import React from 'react'
import './Trending.css'
function Trending({ show }) {
  console.log(show);
  let temp = 0, trending = show;
  for (let index = 0; index < trending.length - 1; index++) {

    for (let i = index + 1; i < trending.length; i++) {

      if (trending[i].count > trending[index].count) {
        temp = trending[i];
        trending[i] = trending[index];
        trending[index] = temp;
      }

    }
  }

  return (
    <>
      <div className='Outside-main'>
        <div className='Inside-main'>
          <h1>Trending Questions</h1>
          <hr />
          {trending.map((user) => (
            <div key={user._id} className='user'>
              <div >{user.question}? {user.count} views</div>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Answer
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ipsa atque vero consequatur dolores repudiandae eveniet sit cum. Rem velit vitae dolorum. Saepe, ipsum soluta?</a></li>

                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>

  )
}

export default Trending