import Img1 from '../assets/product1.png';
import Img2 from '../assets/product2.png';
import Img3 from '../assets/product3.png';
import Img4 from "../assets/women4.jpg";
import Review_img from "../assets/review_img.png";
import ProductImg from "./product_img";


export const products_data = [
    {
      id: 1,
      title: "Elegant Evening Dress",
      price: 999,
      oldPrice: 1999,
      description: "This stunning evening dress is perfect for any special occasion. Made from luxurious fabric, it features a flattering silhouette and exquisite detailing.",
      images: [Img1, Img2, Img3],
      img: Img1,
      sizes: ['XS', 'S', 'M', 'L'],
      reviews: [
        {
          name: "John Doe",
          review: "This dress is absolutely stunning! The fabric is soft and the fit is perfect. I received so many compliments at the party.",
          img: Review_img,
          stars: 5,
          rating: 4.8,
        },
        {
          name: "John Carter",
          review: "Loved the color and fit. Would buy again.",
          img: Review_img,
          stars: 4,
          rating: 4,
        },
        {
          name: "John Dom",
          review: "Good quality but delivery was late.",
          img: Review_img,
          stars: 3,
          rating: 3,
        },
      ],
    },
    {
      id: 2,
      title: "Elegant morning Dress",
      price: 2999,
      oldPrice: 12999,
      description: "This stunning evening dress is perfect for any special occasion. Made from luxurious fabric, it features a flattering silhouette and exquisite detailing.",
      images: [Img1, Img2, Img3],
      img: Img2,
      sizes: [ 'M', 'L', 'XL'],
      reviews: [
        {
          name: "John Doe",
          review: "This dress is absolutely stunning! The fabric is soft and the fit is perfect. I received so many compliments at the party.",
          img: Review_img,
          stars: 5,
          rating: 4.8,
        },
        {
          name: "John Carter",
          review: "Loved the color and fit. Would buy again.",
          img: Review_img,
          stars: 4,
          rating: 4,
        },
        {
          name: "John Dom",
          review: "Good quality but delivery was late.",
          img: Review_img,
          stars: 3,
          rating: 3,
        },
      ],
    },
    {
      id: 3,
      title: "Elegant Night Dress",
      price: 1999,
      oldPrice: 11999,
      description: "This stunning evening dress is perfect for any special occasion. Made from luxurious fabric, it features a flattering silhouette and exquisite detailing.",
      images: [Img1, Img2, Img3],
      img: Img3,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      reviews: [
        {
          name: "John Doe",
          review: "This dress is absolutely stunning! The fabric is soft and the fit is perfect. I received so many compliments at the party.",
          img: Review_img,
          stars: 5,
          rating: 4.8,
        },
        {
          name: "John Carter",
          review: "Loved the color and fit. Would buy again.",
          img: Review_img,
          stars: 4,
          rating: 4,
        },
        {
          name: "John Dom",
          review: "Good quality but delivery was late.",
          img: Review_img,
          stars: 3,
          rating: 3,
        },
      ],
    },
    {
      id: 4,
      title: "Elegant Party Dress",
      price: 5999,
      oldPrice: 15999,
      description: "This stunning evening dress is perfect for any special occasion. Made from luxurious fabric, it features a flattering silhouette and exquisite detailing.",
      images: [Img1, Img2, Img3,Img4],
      img: Img4,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      reviews: [
        {
          name: "John Doe",
          review: "This dress is absolutely stunning! The fabric is soft and the fit is perfect. I received so many compliments at the party.",
          img: Review_img,
          stars: 5,
          rating: 4.8,
        },
        {
          name: "John Carter",
          review: "Loved the color and fit. Would buy again.",
          img: Review_img,
          stars: 4,
          rating: 4,
        },
        {
          name: "John Dom",
          review: "Good quality but delivery was late.",
          img: Review_img,
          stars: 3,
          rating: 3,
        },
      ],
    },
    // Add more products here...
];