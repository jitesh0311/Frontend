import styled from "styled-components";

export const AdminSection = styled.div`
  width: 100%;
  max-width: 1500px;
  min-height: 649px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AdminWrap = styled.div`
  width: 100%;
  max-width: 1300px;
  min-height: 580px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AdminForm = styled.form`
  width: 100%;
  max-width: 800px;
  min-height: 500px;
  background-color: #795bf5;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    max-width: 700px;
  }

  @media (max-width: 800px) {
    max-width: 600px;
  }

  @media (max-width: 700px) {
    max-width: 500px;
  }

  @media (max-width: 600px) {
    max-width: 400px;
  }

  @media (max-width: 500px) {
    max-width: 350px;
  }

  @media (max-width: 400px) {
    max-width: 300px;
  }

  @media (max-width: 360px) {
    max-width: 250px;
  }
`;
export const AdminFormWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (max-width: 900px) {
    max-width: 700px;
  }
`;

export const AdminHeadingWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  padding-left: 20px;
  text-align: left;
  border-bottom: 1px solid white;
`;

export const AdminHeading = styled.div`
  color: white;
  font-size: 40px;
`;

export const AdminBottom = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 15px;
  min-height: 380px;
  @media (max-width: 900px) {
    max-width: 550px;
  }

  @media (max-width: 800px) {
    max-width: 500px;
  }

  @media (max-width: 700px) {
    max-width: 400px;
  }

  @media (max-width: 600px) {
    max-width: 300px;
  }

  @media (max-width: 500px) {
    max-width: 200px;
  }

  @media (max-width: 400px) {
    max-width: 150px;
  }

 
`;
export const AdminBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const DateLabel = styled.label`
  color: white;
`;
export const DateInput = styled.input`
  outline: none;
`;
export const TimeSelect = styled.select``;
export const TimeOption = styled.option`
  outline: none;
`;

export const SubmitButtonWrap = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SubmitButton = styled.button``;
  