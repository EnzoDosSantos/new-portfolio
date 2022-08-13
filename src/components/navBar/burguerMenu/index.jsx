import './index.scss'

function BurguerButton({handleClick, change, clicked}) {
    return (
      <div className={change? 'burger-yellow' : 'burger-white'}>
        <div  onClick={handleClick} 
              className={`nav-icon-5 ${clicked ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }
  
  export default BurguerButton