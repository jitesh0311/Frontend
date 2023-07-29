import styled from "styled-components";
import { TextField,Button } from "@mui/material";

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
export const StyledTextField = styled(TextField)`
width: 100%;
max-width: 350px;
`
export const SignInButton = styled(Button)`
width: 100%;
max-width: 350px;
`
export const TextFieldWrapper = styled.div`
display:flex;
flex-direction: column;
gap:20px;
width:100%;
align-items: center;
justify-content: center;
max-width: 400px;   
`

export const ErrorMessage = styled.p`
    color : red;
    font-size:14px;
    font-weight: 400;
`
export const SignUpRouter = styled.p``


