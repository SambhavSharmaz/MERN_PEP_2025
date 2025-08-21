import React from 'react';
import {Header} from './components/Header.jsx';
import {Body} from './components/Body.jsx';
import {Sidebar} from './components/Sidebar.jsx';
const App = () => {
  return (
    <div className='p-2 m-2 bg-gray-100 h-max w-max rounded-lg'>
      <Header/>
      <div className='flex flex-row h-max w-max p-2 m-2'>
        <Sidebar/>
        <Body/>
      </div>
    </div>
  );
}
export {App};