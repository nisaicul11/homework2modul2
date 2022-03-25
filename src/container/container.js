const Container = ({name, title, image})=> {
    return (    
    <div className="container">
    <div className="songs">
      <h2>songz</h2>
      <div className="song">
        <img className="album"
          src={image}
          alt="albumImage"
        />
        <div className="songs-cred">
          <p className="song-title">{title}</p>
          <p>{name}</p>
        <input class="listen-submit" type="submit" value="listen"></input>
        </div>
      </div>
    </div>
  </div>);
};

export default Container;