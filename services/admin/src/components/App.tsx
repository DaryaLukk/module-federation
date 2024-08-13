import { Link, Outlet } from 'react-router-dom';
// import png from '@/assets/png.png';
// import Svg from '@/assets/svg.svg';

export type Todo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export function App() {
  return (
    <div>
      <h1>ADMIN MODULE</h1>
      <Outlet />
    </div>
  );
}
