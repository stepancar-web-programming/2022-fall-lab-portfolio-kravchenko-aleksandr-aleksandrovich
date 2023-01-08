import React from 'react';

import Hobbies from '../../Music/Hobbies';
import Profile from '../../Profile/Profile';
import Projects from '../../Projects/Projects';

function Home() {
  return (
    <div>
      <Profile />
      <Projects />
      <Hobbies />
    </div>
  );
}

export default Home;
