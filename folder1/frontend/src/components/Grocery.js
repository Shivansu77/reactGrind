import React from 'react';

const Grocery = () => {
  const groceryItems = [
    { id: 1, name: 'Fresh Vegetables', price: '$5.99', img: '🥬' },
    { id: 2, name: 'Fresh Fruits', price: '$7.99', img: '🍎' },
    { id: 3, name: 'Dairy Products', price: '$4.99', img: '🥛' },
    { id: 4, name: 'Bakery Items', price: '$3.99', img: '🍞' },
    { id: 5, name: 'Beverages', price: '$2.99', img: '🥤' },
    { id: 6, name: 'Snacks', price: '$6.99', img: '🍿' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Grocery Store</h1>
        <p className="text-gray-600 mb-8">Fresh products delivered to your doorstep</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groceryItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4 text-center">{item.img}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-2xl font-bold text-red-500 mb-4">{item.price}</p>
              <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Grocery;