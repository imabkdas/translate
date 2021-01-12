import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {
    
    //static contextType = LanguageContext;  //always use contextType, no other name || Button.contextType = LanguageContext;
    
    renderSubmit(language){
        return language === 'english' ? 'Submit': 'प्रस्तुत';
    }
    
    renderButton(color) {
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render () {
       // const text = this.context === 'english' ? 'submit' : 'प्रस्तुत';
        return (
            <ColorContext.Consumer>
                {(color) =>this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;