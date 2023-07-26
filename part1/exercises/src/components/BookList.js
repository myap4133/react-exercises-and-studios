export default function BookList() {
   let pageTitle = "Favorite Books";
   let book1 = "https://m.media-amazon.com/images/I/71HbYElfY0L._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://images.penguinrandomhouse.com/cover/9781400090921";
   let book3 = "https://prodimage.images-bn.com/pimages/9780316327336_p0_v1_s1200x630.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Harry Potter And The Sorcerer's Stone" />
         <img src={book2} alt="Dragon Rider" />
         <img src={book3} alt="Twilight" />
      </div>      
   );
}