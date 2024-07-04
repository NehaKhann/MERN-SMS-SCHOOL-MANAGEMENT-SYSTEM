import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button, Typography } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.png";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <StyledContentContainer>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <StyledImage src={Students} alt="students" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledPaper elevation={3}>
                            <StyledTitle style={{textTransform:"uppercase"}}  variant="h4" align="center" gutterBottom>
                                School Management System
                            </StyledTitle>
                            <StyledButtonsContainer>
                                <StyledButton to="/choose">
                                    <LightPurpleButton variant="contained" fullWidth>
                                        Login
                                    </LightPurpleButton>
                                </StyledButton>
                                <StyledButton to="/chooseasguest">
                                    <Button variant="outlined" fullWidth
                                        sx={{ mt: 2, color: "#7f56da", borderColor: "#7f56da" }}
                                    >
                                        Login as Guest
                                    </Button>
                                </StyledButton>
                                <StyledSignUpLink to="/Adminregister">
                                    Don't have an account? Sign up here
                                </StyledSignUpLink>
                            </StyledButtonsContainer>
                        </StyledPaper>
                    </Grid>
                </Grid>
            </StyledContentContainer>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
    background-color: #f9f9f9;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledContentContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 40px;
`;

const StyledImage = styled.img`
    width: 100%;
    height: auto;
`;

const StyledPaper = styled(Box)`
    background-color: #ffffff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled(Typography)`
    color: #333333;
    font-weight: bold;
    text-align: center;
`;

const StyledButtonsContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const StyledButton = styled(Link)`
    text-decoration: none;
`;

const StyledSignUpLink = styled(Link)`
    color: #7f56da;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;
