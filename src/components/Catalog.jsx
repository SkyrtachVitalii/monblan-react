import { catalogData } from '../data/mockData.js';
import Card from './Card.jsx';

function Catalog({ viewMode, visibleCount, onLoadMore }) {
  const items = catalogData.slice(0, visibleCount);
  const isLoadMoreHidden = visibleCount >= catalogData.length;

  return (
    <>
      <ul className={`catalog catalog--${viewMode}`} id="catalog">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </ul>

      <button
        type="button"
        className={`button button--load-more${
          isLoadMoreHidden ? ' button--load-more--hidden' : ''
        }`}
        onClick={onLoadMore}
      >
        LOAD MORE
      </button>
    </>
  );
}

export default Catalog;
