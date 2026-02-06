import React from 'react';
import Profile from './Profile';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-orange-600 mb-4">About Us</h1>
          <p className="text-gray-600 text-lg">Discover the story behind BFC</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to BFC</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Welcome to <span className="font-semibold text-orange-600">BFC (Bisht Food Corner)</span>! We are dedicated to providing you with the best dining experiences by offering comprehensive reviews and ratings of restaurants in your area.
          </p>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Team</h2>
            <Profile />
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Our mission is to help food enthusiasts discover new culinary delights and make informed dining choices. Whether you're looking for a cozy cafe or a fine dining restaurant, we've got you covered!
          </p>

          <p className="text-center text-lg text-orange-600 font-semibold">
            Thank you for being a part of our community. Happy dining! 🍽️
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">🍽️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Food</h3>
            <p className="text-gray-600">Fresh ingredients, authentic flavors</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Fast Delivery</h3>
            <p className="text-gray-600">Quick service to your doorstep</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Top Rated</h3>
            <p className="text-gray-600">Trusted by thousands of customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
