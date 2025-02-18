import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { AiOutlineHeart, AiOutlineExpandAlt } from 'react-icons/ai';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export default function ProductCard({
   badgeText = '',
   imageSrc = '/images/show/1.1.webp',
   title = 'White Tee',
   price = 40.0,
   rating = 3.5,
}) {
   const [hovered, setHovered] = useState(false);

   const renderStars = () => {
      const fullStars = Math.floor(rating);
      const halfStar = rating % 1 !== 0;
      const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

      return (
         <>
            {[...Array(fullStars)].map((_, i) => (
               <BsStarFill key={`full-${i}`} />
            ))}
            {halfStar && <BsStarHalf />}
            {[...Array(emptyStars)].map((_, i) => (
               <BsStar key={`empty-${i}`} />
            ))}
         </>
      );
   };

   return (
      <div>
         <Card
            className="product-card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
         >
            {badgeText && (
               <span className="badge-label">
                  {badgeText}
               </span>
            )}

            <Card.Img
               variant="top"
               src={imageSrc}
               alt={title}
               className="product-image"
            />

            <div className={`hover-overlay ${hovered ? 'show' : ''}`}>
               <div className="overlay-content">
                  <Button variant="dark" size="sm">
                     Add to cart
                  </Button>
                  <AiOutlineHeart className="icon" />
                  <AiOutlineExpandAlt className="icon" />
                  <div className="star-rating">
                     {renderStars()}
                  </div>
               </div>
            </div>
         </Card>

         <div>
            <span>{title}</span>
            <p className="text-muted">${price.toFixed(2)}</p>
         </div>
      </div>
   );
}
