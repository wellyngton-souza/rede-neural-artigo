import { Route, Routes } from 'react-router-dom';
import Intro from '../content/Intro';
import DescidaGradiente from '../content/descidaGradiente';

const RouteContent = () =>{
  return (
    <Routes>
      <Route index path="intro" element={<Intro />} />
      <Route index path="gradiente" element={<DescidaGradiente />} />
    </Routes>
  );
}

export default RouteContent;