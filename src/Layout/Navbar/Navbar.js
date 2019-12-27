import React from 'react'
import './navbar.scss'


const HomeIcon = ({size=48, color="#f5a623"}) => (
    <svg xmlns="http://www.w3.org/2000/svg"
     width={size}
      height={size}
       viewBox="0 0 24 24" fill="none"
        stroke={color}
         strokeWidth="2.5"
          strokeLinecap="round"
           strokeLinejoin="round">
           <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
           </path>
           <polyline points="9 22 9 12 15 12 15 22">
           </polyline>
           </svg>
           )

const GridIcon = ({size=48, color="#f5a623"}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} 
    viewBox="0 0 24 24" fill="none" stroke={color}
     strokeWidth="2"
      strokeLinecap="round" 
      strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7">
              </rect><rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              );

              const X = ({size=48, color="#f5a623"}) => (
              <svg xmlns="http://www.w3.org/2000/svg"
               width={size}
                height={size}
                 viewBox="0 0 24 24"
                  fill="none"
                   stroke={color}
                    strokeWidth="2.5"
                     strokeLinecap="round"
                      strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18">
                              </line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              )

           const MicIcon = ({size=48, color="#f5a623"}) => (
           <svg xmlns="http://www.w3.org/2000/svg"
            width={size}
             height={size}
              viewBox="0 0 24 24"
               fill="none"
                stroke={color}
                 strokeWidth="2.5"
                  strokeLinecap="round"
                   strokeLinejoin="round">
                       <path d="M12 2c-1.7 0-3 1.2-3 2.6v6.8c0 1.4 1.3 2.6 3 2.6s3-1.2 3-2.6V4.6C15 3.2 13.7 2 12 2z"/>
                       <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18.4v3.3M8 22h8"/>
                       </svg>
                       )

const Menu = (props) => {
    return (
      <svg className="item-svg" width="2.5rem" height="2.5rem" viewBox="0 0 64 64" {...props}>
        <defs>
          <style>{".prefix__cls-1{fill:#35353d}"}</style>
        </defs>
        <title>{"Asset 52"}</title>
        <g id="prefix__Layer_2" data-name="Layer 2">
          <g id="prefix__Layer_1-2" data-name="Layer 1">
            <path
              className="prefix__cls-1"
              d="M0 16h16V0H0zM5.33 5.33h5.34v5.34H5.33zM24 16h16V0H24zm5.33-10.67h5.34v5.34h-5.34zM48 0v16h16V0zm10.67 10.67h-5.34V5.33h5.34zM0 40h16V24H0zm5.33-10.67h5.34v5.34H5.33zM24 40h16V24H24zm5.33-10.67h5.34v5.34h-5.34zM48 40h16V24H48zm5.33-10.67h5.34v5.34h-5.34zM0 64h16V48H0zm5.33-10.67h5.34v5.34H5.33zM24 64h16V48H24zm5.33-10.67h5.34v5.34h-5.34zM48 64h16V48H48zm5.33-10.67h5.34v5.34h-5.34z"
            />
          </g>
        </g>
      </svg>
    )
  }



const Navbar = (props) => {
    // state = {
    //     onPress: false
    // }
    return (
        <nav>
            <div className="menu">
                
                <HomeIcon />
                <MicIcon />

            </div>
           
        </nav>
    )
}

export default Navbar

