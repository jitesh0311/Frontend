import styled from "styled-components";


export const SpotifySection = styled.div`
    width:100%;
    max-width: 1500px;
`
export const SpotifyWrapper = styled.div`
width:100%;
max-width: 1500px;
display:flex;
min-height:700px;
gap: 5px;
justify-content: center;
align-items: center;
`

export const LoginContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
gap:40px;
width: 100%;
max-width: 600px;
min-height:452px;
`
export const LogoWrapper = styled.div`
width:300px;
display: flex;
justify-content:center;
`
export const SpotifyLogo = styled.img`
width: 100%;
max-width: 200px;
`
export const SignIn = styled.form`
display: flex;
justify-content:center;
width:100%;
max-width: 400px;
align-items: center;
flex-direction: column;
gap: 30px;
`
export const SignUp = styled.div`

`
export const StyledTextField = styled.input`
width: 100%;
max-width: 500px;
padding: 10px;
outline: none;
border-radius: 5px;
`
export const SignInButton = styled.button`
  width: 100%;
  max-width: 350px;
  padding: 5px;
  outline: none;
`;
export const TextFieldWrapper = styled.div`
display:flex;
flex-direction: column;
gap:20px;
width:100%;
align-items: center;
justify-content: center;
max-width: 500px;   
`

export const ErrorMessage = styled.p`
    color : red;
    font-size:14px;
    font-weight: 400;
`
export const SignUpRouter = styled.p``


export const FormWrapper = styled.div`
  border: 1px solid #fffefee6;; /* Add your desired border properties here */
  padding: 70px; /* Add your desired padding */
  border-radius: 10px; /* Optional: Add border radius for rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add box shadow for a subtle effect */
  width: 100%;
  max-width: 500px;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

