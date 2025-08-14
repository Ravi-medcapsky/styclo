import React, { useState } from 'react';


const Checkout = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    saveInfo: false,
    sameAsShipping: true,
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    paymentMethod: 'creditCard',
    discountCode: ''
  });

  // State for order summary items (hardcoded for this example)
  const orderItems = [
    {
      name: 'Classic White Tee',
      size: 'M',
      image: 'https://placehold.co/80x80/e5e7eb/6b7280?text=Tee'
    },
    {
      name: 'Minimalist Sneakers',
      size: '9',
      image: 'https://placehold.co/80x80/e5e7eb/6b7280?text=Shoes'
    },
    {
      name: 'Leather Belt',
      size: 'One Size',
      image: 'https://placehold.co/80x80/e5e7eb/6b7280?text=Belt'
    },
  ];

  const subtotal = 150.00;
  const shipping = 5.00;
  const tax = 12.38;
  const total = (subtotal + shipping + tax).toFixed(2);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Placing order with data:', formData);
    // You would typically send this data to a backend API here.
    alert('Order placed successfully! Check the console for form data.');
  };

  return (
    <div className="bg-gray-50 font-sans antialiased text-gray-800">
      <div className="container mx-auto p-4 md:p-10">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <div className="flex flex-col-reverse lg:flex-row lg:space-x-10">
          
          {/* Left Side: Checkout Form */}
          <div className="lg:w-3/5 mt-8 lg:mt-0">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Shipping Address Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                      placeholder="Street address, apartment, etc."
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                      placeholder="Enter your city"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <select
                      name="state"
                      id="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                      required
                    >
                      <option value="">Select State</option>
                      <option value="UP">Uttar Pradesh</option>
                      <option value="DL">Delhi</option>
                      <option value="HR">Haryana</option>
                      {/* Add more states as needed */}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                      placeholder="Enter zip code"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <input
                    id="saveInfo"
                    name="saveInfo"
                    type="checkbox"
                    checked={formData.saveInfo}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-900">
                    Save this information for next time
                  </label>
                </div>
              </div>

              {/* Billing Address Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
                <div className="flex items-center">
                  <input
                    id="sameAsShipping"
                    name="sameAsShipping"
                    type="checkbox"
                    checked={formData.sameAsShipping}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor="sameAsShipping" className="ml-2 block text-sm text-gray-900">
                    Same as shipping address
                  </label>
                </div>
              </div>

              {/* Payment Method Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                <div className="space-y-4">
                  <label className="flex items-center cursor-pointer p-4 border border-gray-300 rounded-md shadow-sm transition-all duration-200 hover:bg-gray-100">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="creditCard"
                      checked={formData.paymentMethod === 'creditCard'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className="ml-3 text-sm font-medium text-gray-900">Credit Card</span>
                  </label>
                  <label className="flex items-center cursor-pointer p-4 border border-gray-300 rounded-md shadow-sm transition-all duration-200 hover:bg-gray-100">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Cash"
                      checked={formData.paymentMethod === 'Cash'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className="ml-3 text-sm font-medium text-gray-900">Cash On Delivery</span>
                  </label>
                </div>
                {/* Credit Card fields conditionally rendered */}
                {formData.paymentMethod === 'creditCard' && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        id="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                        placeholder="Enter card number"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                          Expiration Date
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          id="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          id="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                          placeholder="Enter CVV"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        name="nameOnCard"
                        id="nameOnCard"
                        value={formData.nameOnCard}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                        placeholder="Enter name as it appears on card"
                        required
                      />
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Right Side: Order Summary */}
          <div className="lg:w-2/5 p-6 bg-white rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              {orderItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-md object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/e5e7eb/6b7280?text=Item'; }}
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t pt-6">
              <h3 className="text-lg font-medium mb-3">Discount Code</h3>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="discountCode"
                  id="discountCode"
                  value={formData.discountCode}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                  placeholder="Enter code"
                />
              </div>
            </div>

            <div className="mt-6 border-t pt-6">
              <h3 className="text-lg font-medium mb-4">Order Total</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>₹{shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-gray-900 border-t border-gray-200 mt-4 pt-4 text-base">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-8 w-full bg-gray-900 text-white rounded-md py-3 px-4 text-base font-medium shadow-sm hover:bg-gray-700 transition-colors duration-300"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
