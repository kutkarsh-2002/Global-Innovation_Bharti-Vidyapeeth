import React from 'react';

import './Cards.css';
const Card = (props) => {
  const id = props.id;
  return (
    <div>
      {
        id === 1 ?
          <div className="card shadow-5 grow" style={{ width: "15 rem", margin: "15px" }}>
            <img src={'https://coara.co/assets/posts/best-incubators-for-startups/featured-image-post.webp'} class="card-img-top cm" alt=""></img>
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#inc" className="rdm" style={{ textAlign: 'center' }}>Read more</a>
              
            </div>
          </div>
          :
          id === 2 ?
            <div className="card shadow-5 grow" style={{ width: "15 rem", margin: "15px" }}>
              <img src={'https://thumbs.dreamstime.com/b/coaching-mentoring-education-business-training-development-e-learning-concept-98056663.jpg'} class="card-img-top cm" alt=""></img>
              <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#ment" className="rdm" style={{ textAlign: 'center' }}>Read more</a>
              </div>
            </div>
            :
            id===3?
            <div className="card shadow-5 grow" style={{ width: "15 rem", margin: "15px" }}>
              <img src={'https://thumbs.dreamstime.com/b/writing-note-showing-fund-raising-business-photo-showcasing-act-seeking-to-generate-financial-support-charity-woman-160827512.jpg'} class="card-img-top cm" alt=""></img>
              <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#fnd" className="rdm" style={{ textAlign: 'center' }}>Read more</a>
              </div>
            </div>
            :
            <div className="card shadow-5 grow" style={{ width: "15 rem", margin: "15px" }}>
              <img src={'https://thumbs.dreamstime.com/b/webinar-e-learning-training-business-internet-technology-concept-114936841.jpg'} class="card-img-top cm" alt=""></img>
              <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href={props.to} className="rdm" style={{ textAlign: 'center' }}>Read more</a>
              </div>
            </div>


      }
    </div>
  );
}
export default Card;