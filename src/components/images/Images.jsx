// IMPORTS
import './images.css'
// FONCTIONS
export default function Images({ isUsed, isPunching }) {
    // DECLA VARIABLES
    const nouveauSac = "../../src/assets/images/bag1.png";
    const sacKC = "../../src/assets/images/bag2.png";
  
    const bagClass = `bag-image ${isPunching ? 'punched' : ''}`;

    // RETURN
    return (
      <div className="bag-image-container">
        <img 
          src={isUsed ? sacKC : nouveauSac} 
          alt={isUsed ? "Sac de frappe usé" : "Sac de frappe neuf"} 
          className={bagClass}
        />
      </div>
    );
  }