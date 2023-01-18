import {createRoot} from 'react-dom/client';
import Pet from './Pet'

const App = () => {
  return (
    <>
      <h1>Adopt Me!</h1>
      <Pet name="Bunny" animal="Rabbit" breed="Indian" />
      <Pet name="Sona" animal="Bird" breed="greed" />
      <Pet name="Lalu" animal="Dog" breed="Indian" />
    </>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
