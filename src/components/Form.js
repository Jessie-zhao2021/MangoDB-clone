import { Checkbox, TextField } from '@mui/material';
import styled from 'styled-components';
import { useForm } from "react-hook-form";

const FormContainer = styled.div`
    grid-column: 4 / span 6;
    border-radius: 40px;
    border: 1px solid lightgray;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .10);
    max-width: 700px;
    margin: auto;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 24px;
    padding: 40px 48px 40px 48px
`;

const FormTitle = styled.h4`
    margin: 0;
    color: #001e2b;
    font-family: MongoDB Value Serif;
    font-size: 28px;
    line-height: 32px;
    grid-column: 2 / span 4;
    text-align: center;
    font-weight: 400;
`;

const FormSubtitle = styled.span`
    margin: 0;
    color: #023430;
    font-family: EuclidCircularA;
    font-size: 18px;
    line-height: 32px;
    grid-column: 2 / span 4;
    font-weight: 400;
    display: block;
    text-align: center;
`;

const AtlasForm = styled.form`
    display: grid;
    gap: 16px;
    grid-column: 1 / span 6;
    width: 100%;
    max-width: 456px;
`;

const GoogleSignUpContainer = styled.div`
    grid-column: span 12;
    font-family: EuclidCircularA;
    font-size: 16px;
    font-weight: 500;
    border-radius: 4px;
    line-height: 16px;
    border: 1px solid #00684A;

    &:hover {
        color:red;
        border-radius: 40px;
    }

    a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 16px 32px 16px 32px;
        text-align: center;
        gap: 8px;
        text-decoration: none;
    }

    img {
        width: 16px;
        display: inline-block;
    }

    span {
        color: #001E2B;
        text-decoration: none;
        display: inline-block;
    }
`;

const NameFieldContainer = styled.div`
    grid-column: span 6;
`;

const TextFiledContainer = styled.div`
    grid-column: span 12;
`;

const PlainField = styled(TextField)`
    width: 100%;
`;

const PasswordField = styled(PlainField)``;

const ErrorLabel = styled.span`
    display: inline-block;
    margin: 8px 0px 0px 24px;
    font-family: "EuclidCircularA";
    font-size: 14px;
    line-height: 20px;
    color: #001E2B;
`;

const CheckboxContainer = styled.div`
    grid-column: span 12;
    margin: 24px 0;
    display: block;

    input {
        color: #42494f;
    }
`;

const ButtonsContainer = styled.div`
    grid-column: span 12;
    display: flex;
    flex-direction: column;

    button {
        width: 100%;
        padding: 16px 32px 16px 32px;
        font-family: EuclidCircularA;
        font-size: 16px;
        font-weight: 500;
        border-radius: 4px;
        line-height: 16px;
        border: 1px solid #00684A;
        border-width: 1px;
        text-decoration: none;
        display: inline-block;
        gap: 8px;
        transition: border-radius .15s;
        color: #001E2B;
        stroke: #001E2B;
        fill: #001E2B;
        background-color: #00ED64;
        &:hover {
            border-radius: 40px;
        }
    }

    a {
        text-decoration: none;
        font-family: EuclidCircularA;
        display: block;
        margin-top: 40px;
        font-weight: Bold;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: #001E2B;
    }
`;

const passwordValidator = (value, _) => {
    if (!/[A-Z]+/.test(value)) {
        return false;
    }

    if (!/\W+/.test(value)) {
        return false;
    }

    if (!/\d+/.test(value)) {
        return false;
    }

    return true;
};

function Form(){  
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    console.log(watch("termsChecked"));
    console.log(errors);

    return(
        <FormContainer>
            <FormTitle>Sign up</FormTitle>
            <FormSubtitle>See what Atlas is capable of for free</FormSubtitle>

            <AtlasForm id='atlas-form' onSubmit={handleSubmit(onSubmit)}>
                <GoogleSignUpContainer>
                    <a href="https://account.mongodb.com/account/sso/google?signupSource=www.mongodb.com%2Fcloud%2Fatlas%2Fregister&amp;referer=undefined&amp;_ga=2.126940365.1331689785.1725419829-1832240946.1725419829">
                        <img src="https://webimages.mongodb.com/_com_assets/cms/kr6fvgdym4qzsgqo3-Google%20Icon.svg" alt="Google icon"/>
                        <span>Sign up with Google</span>
                    </a>
                </GoogleSignUpContainer>

                <NameFieldContainer>
                    <TextField label="FirstName" variant="filled" 
                        error={!!errors.firstName}
                        {...register('firstName', { required: true })} 
                    />
                    { errors.firstName?.type === 'required' && <ErrorLabel>This field is required</ErrorLabel>}

                </NameFieldContainer>

                <NameFieldContainer>
                    <TextField label="LastName" variant="filled" 
                        error={!!errors.lastName}
                        {...register('lastName', { required: true })} 
                    />
                    {errors.lastName?.type === 'required' && <ErrorLabel>This field is required</ErrorLabel>}
                </NameFieldContainer>

                <TextFiledContainer>
                    <PlainField id="company" label="Company" variant="filled" {...register('company')} />
                </TextFiledContainer>
                
                <TextFiledContainer>
                    <PlainField label="Email" variant="filled" 
                        error={!!errors.email}
                        {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })} 
                    />
                    {errors.email?.type === 'required' && <ErrorLabel>This field is required</ErrorLabel>}
                    {errors.email?.type === 'pattern' && <ErrorLabel>Please include a valid domain in the email address.</ErrorLabel>}
                </TextFiledContainer>

                <TextFiledContainer>
                    <PasswordField label="Password" variant="filled" type="password" 
                        error={!!errors.password}
                        {...register('password', { 
                            required: true, 
                            minLength: 8, 
                            validate: passwordValidator
                        })} 
                    />
                    {errors.password?.type === 'required' && <ErrorLabel>This field is required</ErrorLabel>}
                    {errors.password?.type === 'minLength' && <ErrorLabel>This field must have at least 8 characters.</ErrorLabel>}
                    {errors.password?.type === 'validate' && <ErrorLabel>at least one uppercase letter, one number, and one special character.</ErrorLabel>}
                </TextFiledContainer>

                <CheckboxContainer>                        
                    <Checkbox id="terms-agreed" {...register('termsChecked', { required: true })} />
                    <label>I agree to the Terms of Service and Privacy Policy.</label>
                    {errors.termsChecked?.type === 'required' && <ErrorLabel>This field is required</ErrorLabel>}
                </CheckboxContainer>

                <ButtonsContainer>                        
                    <button type='submit'>Create your Atlas account</button>
                    <a href="https://account.mongodb.com/account/login">Sign in</a>
                </ButtonsContainer>           
            </AtlasForm>
        </FormContainer>
    )
}

export default Form;
