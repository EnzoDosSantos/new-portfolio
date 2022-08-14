import './index.scss'

function BurguerButton({handleClick, clicked}) {
    return (
      <div className='burger-white'>
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