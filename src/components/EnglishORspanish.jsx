import React from 'react'
import "./english.css"
const EnglishORspanish = () => {
  return (
    <div className='english-boton-content'>
       <div class="btn-container">
	
    <label class="switch btn-color-mode-switch">
        <input value="1" id="color_mode" name="color_mode" type="checkbox"/>
        <label class="btn-color-mode-switch-inner" data-off="En" data-on="Es" for="color_mode"></label>
    </label>

</div>
    </div>
  )
}

export default EnglishORspanish
