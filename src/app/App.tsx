import { Layout, Spinner } from 'shared/ui';
import { Routing } from './routing';
import './index.css';

export const App = () => {
  return (
    <>
      <Layout>
        <Routing />
      </Layout>
    </>
  );
};
