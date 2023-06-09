import React from "react";
import { useNavigate } from "react-router-dom";

const NavigationButton = ({ visible, handleSubmit }) => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate("/");
  };

  const submitData = () => {
    handleSubmit();
    navigateToMain();
  };

  return (
    <div class="creation-buttons">
      {visible && (
        <div
          role="button"
          class="send-button-creation round-shadow-box-form clickable form"
          onClick={submitData}
        >
          <span class="send-text">Send</span>
        </div>
      )}
      <div
        role="button"
        class="cancel-button-navigation round-shadow-box-form clickable form"
        onClick={navigateToMain}
      >
        <span class="cancel-text">Cancel</span>
      </div>
    </div>
  );
};

export default NavigationButton;
