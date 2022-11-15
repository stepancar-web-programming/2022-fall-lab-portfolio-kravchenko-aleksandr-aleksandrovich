import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hobbies from './Music/Hobbies';
import Profile from './Profile/Profile';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Projects />
      <Hobbies />
      <Footer />
    </div>
  );
}

export default App;
