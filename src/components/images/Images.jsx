// IMPORTS
import './images.css'
// FONCTIONS
export default function Images({ isUsed, isPunching }) {
    // DECLA VARIABLES
    const nouveauSac = "../../src/assets/images/bag1.png";
    const sacKC = "../../src/assets/images/bag2.png";
    // CONDITIONS, SI IS PUNCHING === TRUE, ON AJOUTE LA CLASSE PUNCHED QUI EST LINK DANS LE CSS
    const bagClass = `bag-image ${isPunching ? 'punched' : ''}`;
    // RETURN
    return (
      <div className="bag-image-container">
        {/* PARAIT ILLOGIQUE MAIS AVEC isGameOver c'est le bon ordre a mettre, parce que les deux sont false donc il va afficher le nouveauSac et pas sacKC */}
        <img src={isUsed ? sacKC : nouveauSac} alt='' className={bagClass}
        />
      </div>
    );
  }