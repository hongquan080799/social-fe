import './App.css';
import Navbar from './components/Navbar'
import LeftSideBar from './components/LeftSideBar'
import Storys from './components/Storys'
import UpPost from './components/UpPost'
import RightSideBar from './components/RightSideBar';
import Posts from './components/Posts'
import Login from './components/login/Login';
function App() {
  const checkLogin = () => {
    return localStorage.getItem('jwt')
  }
  return (
    <div className="App">
      {checkLogin() != null ?
      <div>
        <Navbar />
        <div className='body-social'>
            <LeftSideBar />
            <div className='news'>
                <Storys />
                <UpPost />
                <Posts />
            </div>
            <RightSideBar />
        </div>
      </div> : <Login />
    }
    </div>
  );
}

export default App;
