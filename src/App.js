// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import ListingDetails from './pages/ListingDetails';
import Reservation from './pages/Reservation';
import Login from './pages/Login';
import Register from './pages/Register';
import MountainHikeBooking from './pages/MountainHikeBooking';
import CookingWorkshopBooking from './pages/CookingWorkshopBooking';
import AddPost from './pages/AddPost.js';
import PostList from './pages/PostList';
import UpdatePost from './pages/UpdatePost';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import CreateListing from './pages/CreateListings'; // Import the CreateListing page

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listing/:id" element={<ListingDetails />} />
          <Route path="/reservation/:id" element={<Reservation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mountain-hike-booking" element={<MountainHikeBooking />} />
          <Route path="/cooking-workshop-booking" element={<CookingWorkshopBooking />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/post-list" element={<PostList />} />
          <Route path="/update-post/:id" element={<UpdatePost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/create-listing" element={<CreateListing />} /> {/* Add the route for creating a listing */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
