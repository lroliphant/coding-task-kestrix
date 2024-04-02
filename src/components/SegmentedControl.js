import { useState } from 'react';
import './SegmentedControl.css';

const SegmentedControl = ({
  segments,
  callback,
  defaultIndex = 0
}) => {

  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  // function responsible for updating the selected index state when each radio is changed passes the value and its index to a parent component
  const onInputChange = (value, index) => {
    setSelectedIndex(index);
    callback(value, index);
  }

  return (
    <div className="segmented-container" >
      <div className="segmented-items">
        {/* iterate over the segments array to output each segment */}
        {segments.map((item, i) => (
          <label
            key={item.id}
            className={`segmented-item ${i === selectedIndex ? 'is-selected' : ''}`}
          >
            <input
              type="radio"
              value={item.name}
              id={item.id}
              className="segmented-item-input"
              onChange={() => onInputChange(item.id, i)}
              checked={i === selectedIndex}
            />
            <div className="segmented-item-label" title={item.name}>{item.name}</div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default SegmentedControl;
