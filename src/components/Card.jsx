function Card({ item }) {
  return (
    <li className="card">
      <img
        className="card__image"
        src={item.image}
        alt=""
        width="203"
        height="203"
        loading="lazy"
      />
      <div className="card__body">
        <div className="card__row card__row--dates">
          <time className="card__date card__date--current" dateTime={item.currentDateISO}>
            {item.currentDateLabel}
          </time>
          <time className="card__date card__date--posted" dateTime={item.postedDateISO}>
            {item.postedDateLabel}
          </time>
        </div>
        <div className="card__row card__row--stats">
          <div className="card__stats card__stats--current">
            <span className="card__stat">
              <span className="card__icon card__icon--heart" aria-hidden="true"></span>
              <span className="card__count">{item.likesCurrent}</span>
            </span>
            <span className="card__stat">
              <span className="card__icon card__icon--comment" aria-hidden="true"></span>
              <span className="card__count">{item.commentsCurrent}</span>
            </span>
          </div>
          <div className="card__stats card__stats--posted">
            <span className="card__stat">
              <span className="card__icon card__icon--heart" aria-hidden="true"></span>
              <span className="card__count">{item.likesPosted}</span>
            </span>
            <span className="card__stat">
              <span className="card__icon card__icon--comment" aria-hidden="true"></span>
              <span className="card__count">{item.commentsPosted}</span>
            </span>
          </div>
        </div>
        <div className="card__row card__row--footer">
          <span className="card__label">Image upload</span>
          <time className="card__date card__date--upload" dateTime={item.uploadDateISO}>
            {item.uploadDateLabel}
          </time>
        </div>
      </div>
    </li>
  );
}

export default Card;
