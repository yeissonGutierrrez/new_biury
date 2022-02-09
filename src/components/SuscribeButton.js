
import SuscribeButtonStyle from "../styles/components/SuscribeButtonStyle"

function SuscribeButton({bgColor, textColor, width}) {
    return (
        <div style={{width: width}} className={`${SuscribeButtonStyle} button`}>
            <button style={{backgroundColor: bgColor, color: textColor}}>
                ACTIVAR SUSCRIPCIÓN
            </button>
            <div className='border'></div>
        </div>
    )
}
export default SuscribeButton