import { useLocation, useParams } from 'react-router-dom';
import NewsList from '../components/main/NewsList';
import { useState, useEffect } from 'react';

function NewsPage() {
  const { cityName, stateName } = useParams();  
  const location = useLocation();               
  const [cityId, setCityId] = useState(null);
  const [stateId, setStateId] = useState(null);
  const [isGlobal, setIsGlobal] = useState(false); 

  useEffect(() => {
    const id = location.state?.id;
    console.log('Parameters:', { cityName, stateName, id, location });

    if (cityName || stateName) {
      if (cityName) {
        setCityId(id);
        setStateId(null); 
        setIsGlobal(false); 
        console.log('Setting cityId:', id);
      } else if (stateName) {
        setStateId(id);
        setCityId(null);  
        setIsGlobal(false);  
        console.log('Setting stateId:', id);
      }
    } else if (location.pathname === '/news/global') {
      setIsGlobal(true);  
      setCityId(null);  
      setStateId(null);  
    } else {
      console.log('Invalid id format or missing id', id, cityId, stateId);
    }
  }, [cityName, stateName, location.state, location.pathname]);

  return (
    <div>
      <NewsList cityId={cityId} stateId={stateId} isGlobal={isGlobal} />  {}
    </div>
  );
}

export default NewsPage;
