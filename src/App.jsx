import Devbar from '@/components/Devbar/Devbar.jsx';
import HomePage from '@/pages/HomePage.jsx';

const App = () => {
  return (
    <>
      <div className='fixed bottom-0 left-0 top-0'>
        <Devbar />
      </div>
      <div className='ml-[700px]'>
        <HomePage />
      </div>
    </>
  );
};

export default App;
