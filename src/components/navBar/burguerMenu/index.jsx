import './index.scss'

function BurguerButton({handleClick, clicked}) {
    return (
      <nav className='burger-white'>
        <div  onClick={handleClick} 
              className={`nav-icon-5 ${clicked ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    )
  }
  
  export default BurguerButton