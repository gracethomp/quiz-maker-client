import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationButton=({visible}) => {
    const navigate = useNavigate();

    const navigateToMain = () => {
      navigate('/');
    };
    return (
        <div class='creation-buttons'>
            {visible && (
                <div role='button' class='send-button-creation form'>
                    <span class='send-text'>Send</span>
                </div>
            )}
              <div role='button' class='cancel-button-navigation form' onClick={navigateToMain}>
                  <span class='cancel-text'>Cancel</span>
              </div>
          </div>
    )
}

export default NavigationButton;