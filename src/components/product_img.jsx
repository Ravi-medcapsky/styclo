import img1 from '../assets/product1.png';
import img2 from '../assets/product2.png';
import img3 from '../assets/product3.png';
import {useState} from 'react';


function ProductImg( {img , images = []}) {
    const [imgShow, setimgShow] = useState(img || images[0] || '');
  return (
    <>
        {/* Product  image */}
        <div >
            {/* main image  */}
            <div className='flex justify-center items-center'>
                
                <img src={imgShow} alt="Product" className=" h-[450px] rounded-lg shadow-lg" />

            </div>

            {/* multiple images grid view */}
            
                <div className="flex items-center justify-center my-10 gap-4">
                    {images.map((img, index) => (
                        <img src={img} alt="product"
                        key={index}
                        className=" h-[100px] rounded-lg shadow-md"
                        onClick={() => setimgShow(img)}/>))}                
            </div>
        </div>

    </>
  );
}


export default ProductImg;

