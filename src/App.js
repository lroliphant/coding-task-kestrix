import { useState } from 'react';
import './index.css';
import 'normalize.css';
import data from './data.json';
import Header from './components/Header';
import SegmentedControl from './components/SegmentedControl';
import List from './components/List';

function App() {
  const [selectedItem, setSelectedItem] = useState(data[0].id);

  const showImprovementData = (improvement, segments) => {
    const matchingSegment = segments.find((segment) => segment.id === improvement);

    if (!matchingSegment) return (
      <div>No matching segment</div>
    );

    return (
      <List segment={matchingSegment}/>
    )
  }

  return (
    <>
      <Header />
      <div className="container">
        <SegmentedControl 
          callback={setSelectedItem}
          segments={data}
          defaultIndex={0}
        />
        <div>
          { showImprovementData(selectedItem, data) }
        </div>
      </div>
    </>
  );
}

export default App;
