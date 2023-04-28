import LeftComponent from './LeftComponent/LeftComponent';
import RightComponent from './RightComponent/RightComponent';
import './HomePage.css';

export function HomePage() {
  return (
    <div className="homePage">
      <LeftComponent />
      <RightComponent />
    </div>
  );
}