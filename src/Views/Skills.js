import React, { useState } from 'react'
import { Navbar } from '../Components/Navbar'
import './../Style/Main.css'

export default function Skills() {
  const [backgroundColor, handleBC] = useState('white')

  function change(skill) {
    var new1 = new Audio('https://freesound.org/data/previews/245/245645_1038806-lq.mp3')
    new1.volume = 0.2 
    new1.play() 
  
    switch (skill) {
      case 'react':
        handleBC('#61dafb')
        break;
      case 'js':
        handleBC('#ffb400')
        break;
      case 'bootstrap':
        handleBC('#563d7c')
        break;
      case 'html':
        handleBC('#fd684b')
        break;
      case 'python':
        handleBC('#3d729f')
        break;
      case 'css':
        handleBC('#f33052')
        break;
      case 'sql':
        handleBC('#5e95ae')
        break;
      case 'firebase':
        handleBC('grey');
        break;
    }
  }

  function leave() {
    handleBC('white')
  }
  return (
    <React.Fragment className="border">
      
      <p className="text-center display-4">Skills</p>
    <div className="skill mb-3" style={{ backgroundColor: backgroundColor , transition:'.5s'}}>
      {/* <Navbar /> */}
      
      <div className="skillfill" style={{justifyContent:"space-around",flexWrap:"wrap",alignItems:"center"}}>
        <div  onclick={() => change('js')} onMouseEnter={() => change('js')} onMouseLeave={() => leave()}>
          <img draggable src="https://a.thumbs.redditmedia.com/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4.png" className="lang" style={{ borderRadius: '50%', border: '4px solid whitesmoke', height: "140px", width: "140px" }} />
          <p style={{ color: 'black', textAlign: 'center', fontStyle: 'italic' }}>JAVASCRIPT</p>
        </div>
        <div onMouseEnter={() => change('react')} onMouseLeave={() => leave()}>
          <img draggable src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png" className="lang" style={{ borderRadius: '50%', border: '4px solid whitesmoke', height: "140px", width: "140px" }} />
          <p style={{ color: 'black', textAlign: 'center', fontStyle: 'italic'}}>REACT</p>
        </div>
        <div onMouseEnter={() => change('sql')} onMouseLeave={() => leave()}>
          <img src="https://www.prchecker.info/free-icons/128x128/mysql_128_px.png" className="lang" style={{ borderRadius: '50%', border: '4px solid whitesmoke', height: "140px", width: "140px" }} />
          <p style={{ color: 'black', textAlign: 'center', fontStyle: 'italic' }}>MY-SQL</p>
        </div>
        <div onMouseEnter={() => change('html')} onMouseLeave={() => leave()}>
          <img src="https://www.retiredwhatnow.net/wp-content/uploads/2018/03/html_2.png" className="lang" style={{ borderRadius: '50%', border: '4px solid whitesmoke', height: "140px", width: "140px" }} />
          <p style={{ color: 'black', textAlign: 'center', fontStyle: 'italic'}}>HTML</p>
        </div>

        <div onMouseEnter={() => change('bootstrap')} onMouseLeave={() => leave()}>
          <img draggable src="https://hackr.io/tutorials/bootstrap/logo-bootstrap.svg?ver=1555328097" className="lang" style={{ borderRadius: '50%', border: '4px solid whitesmoke', height: "140px", width: "140px" }} />
          <p style={{ color: 'black', textAlign: 'center', fontStyle: 'italic'}}>BOOTSTRAP</p>
        </div>
        <div onMouseEnter={() => change('python')} onMouseLeave={() => leave()}>
          <img draggable src="https://static-s.aa-cdn.net/img/amazon/30600000503215/3cc55976c46a1427a2068b2adb4fce48" className="lang" style={{ borderRadius: '50%', border: '4px solid whitesmoke', height: "140px", width: "140px" }} />
          <p style={{ color: 'black', textAlign: 'center', fontStyle: 'italic'}}>PYTHON</p>
        </div>
        <div onMouseEnter={() => change('css')} onMouseLeave={() => leave()}>
          <img draggable src="https://www.flaticon.com/svg/static/icons/svg/331/331383.svg" className="lang" style={{ borderRadius: '50%', border: '4px solid whitesmoke', height: "140px", width: "140px" }} />
          <p style={{ color: 'black', textAlign: 'center', fontStyle: 'italic' }}>CSS</p>
        </div>
        <div onMouseEnter={() => change('purple')} onMouseLeave={() => leave()}>
          <img draggable src="https://everyday.codes/wp-content/uploads/2020/01/0-U2DmhXYumRyXH6X1.png" className="lang p-2" style={{ borderRadius: '50%', border: '4px solid whitesmoke', height: "140px", width: "140px" }} />
          <p style={{ color: 'black', textAlign: 'center', fontStyle: 'italic' }}>REDUX</p>
        </div>
        <div onMouseEnter={() => change('firebase')} onMouseLeave={() => leave()}>
          <img draggable src="https://cdn-media-1.freecodecamp.org/images/0*CPTNvq87xG-sUGdx.png" className="lang p-2" style={{ borderRadius: '50%', border: '4px solid whitesmoke', height: "140px", width: "140px" }} />
          <p style={{ color: 'black', textAlign: 'center', fontStyle: 'italic'}}>FIREBASE</p>
        </div>
        
      </div>
    </div>
    </React.Fragment>
  )
}
