import { useState } from 'react';
import Header, { ViewSwitcher } from './components/Header.jsx';
import Catalog from './components/Catalog.jsx';
import { catalogData } from './data/mockData.js';

const BATCH_SIZE = 8;

function App() {
  const [viewMode, setViewMode] = useState('tiles');
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, catalogData.length));
  };

  return (
    <div className="page">
      <div className="page__decor page__decor--tl" aria-hidden="true"></div>
      <div className="page__decor page__decor--br" aria-hidden="true"></div>

      <Header />

      <main className="main">
        <div className="main__container">
          <ViewSwitcher viewMode={viewMode} onViewChange={setViewMode} />
          <Catalog
            viewMode={viewMode}
            visibleCount={visibleCount}
            onLoadMore={handleLoadMore}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
