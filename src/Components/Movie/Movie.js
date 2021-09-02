import React from "react";

const Movie = ({ item, handleName }) => {
 
  return (
    <div  onClick={() => handleName(item.name)}>
  
      <div className="wrapper">
        <div className="main_card">
          <div className="card_left">
            <div className="card_datails">
              <h1>{item.name}</h1>
              <div className="card_cat">
                <p className="PG">{item.rating}</p>
                <p className="year">{item.date}</p>
                <p className="genre">{item.type} </p>
                <p className="time">2h 28m</p>
              </div>
              <p className="disc">
                {item.description}
              </p>
              <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
                Read More
              </a>
              <div className="social-btn">
                {/* WATCH TRAILER*/}
                <button>
                  <i className="fas fa-play" /> SEE TRAILER
                </button>
                {/* GET*/}
                <button>
                  <i className="fas fa-download" /> DOWNLOAD
                </button>
                {/*USERS RATINGS*/}
                <button>
                  <i className="fas fa-thumbs-up" /> 97%
                </button>
                {/*BOOKMARK*/}
                <button>
                  <i className="fas fa-star" />
                </button>
              </div>
            </div>
          </div>
          <div className="card_right">
            <div className="img_container">
              <img
                src={item.image}
                alt=""
              />
            </div>
            <div className="play_btn">
              <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
                <i className="fas fa-play-circle" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* FOLLOW */}
      <a
        className="Follow"
        href="https://codepen.io/ZaynAlaoudi/"
        target="blank_"
      />
    </div>
  );
};

export default Movie;