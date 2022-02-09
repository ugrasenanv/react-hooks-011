import React, { useState } from 'react';
import ResourceList from './components/ResourceList';
import UserList from './components/UserList';
import './style.css';
const App = () => {
  // Array destruction
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <div class="btn-wrapper">
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
        <button onClick={() => setResource('users')}>Users</button>
      </div>
      <ResourceList resource={resource}></ResourceList>
    </div>
  );
};

export default App;

// import React from "react";
// import "./style.css";

// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }
