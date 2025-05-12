import './images.css'
export default function Images({isUsed}) {
    const sacNouveau = "../../src/assets/images/bag1.png"
    const sacKC = "../../src/assets/images/bag2.png"
    return(
        <>
        <div className='bag-image-container'>
            <img className='bag-image' src={isUsed ? sacKC : sacNouveau} alt="" />
        </div>
        </>
    )
}