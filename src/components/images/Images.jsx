// IMPORTS
import './images.css'
import img from '../../assets/images/bag1.png'
import img2 from '../../assets/images/bag2.png'
// FONCTIONS
export default function Images({ isUsed, isPunching }) {
    // DECLA VARIABLES
    const nouveauSac = img
    const sacKC = img2
    // CONDITIONS, SI IS PUNCHING === TRUE, ON AJOUTE LA CLASSE PUNCHED QUI EST LINK DANS LE CSS
    const bagClass = `bag-image ${isPunching ? 'punched' : ''}`;
    // RETURN
    return (
      <div className="bag-image-container">
        {/* PARAIT ILLOGIQUE MAIS AVEC isFF c'est le bon ordre a mettre, parce que les deux sont false donc il va afficher le nouveauSac et pas sacKC */}
        <img src={isUsed ? sacKC : nouveauSac} alt='' className={bagClass}
        />
      </div>
    );
  }