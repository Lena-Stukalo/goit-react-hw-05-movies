import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from './Nawigation';

const LayOut = () => {
  return (
    <div>
      <Navigation />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default LayOut;
