import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const Reviewsection = () => {
    const reviews = [
        {
          id: 1,
          name: "Kodu miya",
          photo: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          feedback: "Discount pro  is amazing! It exceeded my expectations and the quality is top-notch. Highly recommended!"
        },
        {
          id: 2,
          name: "hasu afa",
          photo: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          feedback: "Very good offer provide us . The only thing that could be improved is the direct shop , but otherwise, it's great!"
        },
        {
          id: 3,
          name: "Judo miya",
          photo: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          feedback: "discount pro website ui is very userfriendly. there coupon offer is amazing.its 100 out of 100."
        },
        {
          id: 4,
          name: "pori moni",
          photo: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          feedback: "Absolutely fantastic! I’ve been using this for a few weeks, and I’m really satisfied with the performance."
        },
      ];
    
      return (
        <section className="customer-reviews bg-gray-50 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div data-aos="zoom-in" className="reviews-container max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map(review => (
              <div key={review.id} className="review-card bg-white shadow-md rounded-lg p-6">
                <div className="flex items-center space-x-4">
                  <img src={review.photo} alt={review.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h3 className="text-xl font-semibold">{review.name}</h3>
                    <div className="rating flex space-x-1 text-yellow-500">
                      {Array.from({ length: review.rating }, (_, index) => (
                        <span key={index} className="text-xl">★</span>
                      ))}
                      {Array.from({ length: 5 - review.rating }, (_, index) => (
                        <span key={index} className="text-xl text-gray-400">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mt-4 italic">"{review.feedback}"</p>
              </div>
            ))}
          </div>
        </section>
      );
    };

export default Reviewsection;