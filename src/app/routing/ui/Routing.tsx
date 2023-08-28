import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spinner } from 'shared/ui';

import { routesConfig } from 'shared/config';

export const Routing = () => (
  <Suspense fallback={<Spinner />}>
    <Routes>
      {routesConfig.map(({ id, path, content }) => (
        <Route
          key={`${id}`}
          path={path}
          element={content}
        />
      ))}
    </Routes>
  </Suspense>
);
