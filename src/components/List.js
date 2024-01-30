import { formatCurrency, calcPaybackPeriod, convertToYearsMonths } from './../utils/formatters';
import './List.css';

const List = ({segment}) => {
  const totalCost = segment.cost;
  const annualEnergySaving = segment.annualEnergySaving;
  const paybackPeriod = convertToYearsMonths(calcPaybackPeriod(totalCost, annualEnergySaving));

  return (
    <ul className="list">
      <li className="list-item list-header">{segment.name}</li>
      <li className="list-item">
        <span className="list-item-prop">Total cost:</span>
        <span className="list-item-value">£{formatCurrency(segment.cost)}</span>
      </li>
      <li className="list-item">
        <span className="list-item-prop">Annual energy savings:</span>
        <span className="list-item-value">£{formatCurrency(segment.annualEnergySaving)}</span>
      </li>     
      <li className="list-item">
        <span className="list-item-prop">Payback period:</span>
        <span className="list-item-value">{paybackPeriod}</span>
      </li>
    </ul>
  );
}

export default List;
