import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {AddRoom, AuthPage, BookRoom, Catalog, HomePage, Login, NotFound, Profile, Registration, RoomInfo} from './index'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}>
            <Route path='catalog' element={<Catalog/>}/>
            <Route path='room_info' element={<RoomInfo/>}/>
            <Route path='book_room' element={<BookRoom/>}/>
            <Route path='add_room' element={<AddRoom/>}/>
            <Route path='profile' element={<Profile/>}/>
          </Route>

          <Route path='/auth' element={<AuthPage/>}>
              <Route path='registration' element={<Registration/>}/>
              <Route path='login' element={<Login/>}/>
          </Route>

          <Route path='not_found' element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
