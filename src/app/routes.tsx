import { Route } from '@tanstack/react-location';
import Fooldal from './fooldal/fooldal';
import Idopont from './idopont/idopont';
import Tapasztalat from './tapasztalat/tapasztalat';

export const routes: Route[] = [
  {
    path: '/',
    element: <Fooldal />,
  },
  {
    path: '/tapasztalat',
    element: <Tapasztalat />,
  },
  {
    path: '/idopont',
    element: <Idopont />,
  },
];
