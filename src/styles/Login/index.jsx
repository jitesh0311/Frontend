import styled from "styled-components";

export const SpotifySection = styled.div`
  width: 100%;
  max-width: 1500px;
`;
export const SpotifyWrapper = styled.div`
  width: 100%;
  max-width: 1500px;
  display: flex;
  min-height: 700px;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 600px;
  min-height: 452px;

  @media (max-width: 682px) {
    max-width: 450px;
  }

  @media (max-width: 558px) {
    max-width: 400px;
  }

  @media (max-width: 497px) {
    max-width: 350px;
  }

  @media (max-width: 497px) {
    max-width: 300px;
  }

  @media (max-width: 375px) {
    max-width: 250px;
  }

  @media (max-width: 330px) {
    max-width: 240px;
  }
`;
export const LogoWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
`;
export const SpotifyLogo = styled.img`
  width: 100%;
  max-width: 200px;
`;
export const Heading = styled.h1`
  color: white;
  font-size: 20px;

  @media (max-width: 683px) {
    font-size: 18px;
  }

  @media (max-width: 558px) {
    font-size: 17px;
  }

  @media (max-width: 497px) {
    font-size: 12px;
  }

  @media (max-width: 375px) {
    font-size: 10px;
  }

  @media (max-width: 330px) {
    font-size: 9px;
  }
`;

export const FormWrapper = styled.div`
  border: 1px solid #fffefee6; /* Add your desired border properties here */ /* Add your desired padding */
  border-radius: 10px; /* Optional: Add border radius for rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add box shadow for a subtle effect */
  width: 100%;
  max-width: 500px;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignIn = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 682px) {
    max-width: 350px;
  }
`;
export const SignUp = styled.div`
  min-height: 450px;
`;
export const StyledTextField = styled.input`
  width: 100%;
  max-width: 350px;
  padding: 10px;
  outline: none;
  border-radius: 5px;

  @media (max-width: 558px) {
    max-width: 300px;
  }

  @media (max-width: 497px) {
    max-width: 250px;
  }

  @media (max-width: 497px) {
    max-width: 200px;
  }

  @media (max-width: 375px) {
    max-width: 170px;
  }

  @media (max-width: 330px) {
    max-width: 160px;
  }
`;
export const SignInButton = styled.button`
  width: 100%;
  max-width: 350px;
  padding: 5px;
  outline: none;

  @media (max-width: 558px) {
    max-width: 300px;
  }

  @media (max-width: 497px) {
    max-width: 200px;
  }

  @media (max-width: 375px) {
    max-width: 170px;
  }

  @media (max-width: 330px) {
    max-width: 160px;
  }
`;
export const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: 500px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  font-weight: 400;
`;
export const SignUpRouter = styled.p``;
