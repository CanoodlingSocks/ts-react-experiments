import React, { FC, ReactNode } from "react";
import { Button } from "react-bootstrap";

interface ButtonContainerProps {
    children: ReactNode;
}

interface SubmitButtonProps {
    label: string;
  }
  

export const ButtonContainer: FC<ButtonContainerProps> = ({ children }) => {
  return (
    <div style={{  marginTop: "45px", marginRight: "20px" }}>
      {children}
    </div>
  );
};

  
export const SubmitButton: FC<SubmitButtonProps> = ({ label}) => {
    return (
      <Button 
      variant="primary" 
      type="submit" 
      style={{ marginRight: "10px" }} 
      >
        {label}
      </Button>
    );
  };

export const ResetButton = () => {
    return(
        <Button 
        variant="secondary" 
        type="reset">
            Reset
        </Button>
    )
}