import React from 'react'

    const GameCard = ({ game }) => {
        return (
          <div className="text-white  p-6 lg:mt-20 mt-0 lg:h-[80%] h-[60%] overflow-auto">
          <h2 className="game-title2">{game.title}</h2>
          {game.smallImages && game.smallImages.length > 0 && (
            <div className="screenshot-gallery">
              <hr />
              <div className='scroll-container'>
                <div className="media-section">
                  {game.smallImages.map((img, index) => (
                    <img key={index} src={img} alt={`Screenshot ${index + 1}`} width={400} className="image-item" />
                  ))}
                  {game.extraVideo?.map((video, index) => (
                    <video
                      key={index}
                      src={video}
                      loop
                      controls
                      width={400}
                      className="video-item"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ))}
                </div>
              </div>
              <hr />
            </div>
          )}
        
          <p className="description-text">{game.description}</p>
        
          <div className="info-block">
            <p className="info-label">Release Date: <span className="info-value">{game.releaseDate}</span></p>
            <p className="info-label">Developer: <span className="info-value">{game.developer}</span></p>
            <p className="info-label">Publisher: <span className="info-value">{game.publisher}</span></p>
            <p className="info-label">Reviews: <span className="rating-tag">{game.allReviews.rating} ({game.allReviews.count} reviews)</span></p>
            {game.price && <p className="info-label">Price: <span className="price-tag">{game.price}</span></p>}
            {game.rating && <p className="info-label">Rating: <span className="rating-tag">{game.rating}</span></p>}
            {game.achievements && <p className="info-label">Achievements: <span className="achievement-tag">{game.achievements}</span></p>}
          </div>
        
          {/* Tags */}
          <div className="tag-section">
            <h3 className="tag-header">Tags:</h3>
            <ul className="flex flex-wrap gap-2 mt-2 overflow-auto no-scrollbar">
              {game.userDefinedTags.map((tag, index) => (
                <li key={index} className="tag-item">{tag}</li>
              ))}
            </ul>
          </div>
        
          {/* Platforms */}
          {game.platforms && (
            <div className="platform-section">
              <h3 className="tag-header">Platforms:</h3>
              <ul className="flex gap-2 whitespace-nowrap overflow-auto no-scrollbar">
                {game.platforms.map((platform, index) => (
                  <li key={index} className="platform-tag">{platform}</li>
                ))}
              </ul>
            </div>
          )}
        
          {/* Genres */}
          {game.genres && (
            <div className="genre-section">
              <h3 className="tag-header">Genres:</h3>
              <ul className="flex gap-2 whitespace-nowrap no-scrollbar overflow-auto">
                {game.genres.map((genre, index) => (
                  <li key={index} className="genre-tag">{genre}</li>
                ))}
              </ul>
            </div>
          )}
        
          {/* System Requirements */}
          {game.requirements && (
            <div className="requirement-section">
              <h3 className="system-specs-header">System Requirements:</h3>
              <div className="mt-2">
                <h4 className="system-specs-header">Minimum</h4>
                <ul className="requirements-list">
                  {Object.entries(game.requirements.minimum).map(([key, value]) => (
                    <li key={key} className="requirements-item">{key}: {value}</li>
                  ))}
                </ul>
                <h4 className="system-specs-header mt-2">Recommended</h4>
                <ul className="requirements-list text-gray-400">
                  {Object.entries(game.requirements.recommended).map(([key, value]) => (
                    <li key={key} className="requirements-item">{key}: {value}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        
          {/* Languages */}
          {game.languages && (
            <div className="language-section">
              <h3 className="tag-header">Supported Languages:</h3>
              <ul className="flex gap-2 mt-2 whitespace-nowrap overflow-auto no-scrollbar">
                {game.languages.map((language, index) => (
                  <li key={index} className="language-tag">{language}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        );
      };

export default GameCard