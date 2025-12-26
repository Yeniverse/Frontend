import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
    Box,
    Button,
    Typography,
    Paper,
    Divider,
    IconButton,
    TextField,
    InputAdornment,
    Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<String>("");
    const [passwordError, setPasswordError] = useState<String>("");

    const login = (): void => {
        // Redirect to Keycloak / Gateway
        window.location.href =
            "http://gateway-url/oauth2/authorization/keycloak";
    };

    const forgotPassword = (): void => {
        // Keycloak forgot password page
        window.location.href =
            "http://keycloak-url/realms/your-realm/account";
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #e3f2fd, #fce4ec)",
            }}
        >
            <Paper elevation={3} sx={{ p: 4, width: 380, borderRadius: 3 }}>
                <Typography variant="h5" textAlign="center" mb={1}>
                    Login
                </Typography>

                {/* <Typography
          variant="body2"
          textAlign="center"
          color="text.secondary"
          mb={3}
        >
          Make a new doc to bring your words, data,
          and teams together. For free
        </Typography> */}

                {/* Email */}
                <TextField
                    fullWidth
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ mb: 2 }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon color="action" />
                            </InputAdornment>
                        ),
                    }}
                />

                {/* Password */}
                <TextField
                    fullWidth
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon color="action" />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                {/* Forgot password */}
                <Box sx={{ textAlign: "right", mt: 1, mb: 2 }}>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={forgotPassword}
                        sx={{
                            color: "black",
                            textDecoration: "none",
                            "&:hover": {
                                textDecoration: "underline",
                            },
                        }}
                    >
                        Forgot password?
                    </Link>
                </Box>

                {/* Login */}
                <Button
                    variant="contained"
                    fullWidth
                    sx={{ borderRadius: 3, py: 1.2, mb: 3 }}
                    onClick={login}
                >
                    Get Started
                </Button>
                <Box sx={{ textAlign: "center", mb: 2 }}>
                    <Typography variant="body2">
                        Don’t have an account?{" "}
                        <Link
                            component={RouterLink}
                            to="/signup"
                            sx={{
                                fontWeight: 600,
                                textDecoration: "none",
                                color: "primary.main",
                            }}
                        >
                            Sign up
                        </Link>
                    </Typography>
                </Box>


                <Divider sx={{ mb: 2 }}>Or sign in with</Divider>

                {/* Social icons */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                    }}
                >
                    <IconButton
                        onClick={login}
                        sx={{ border: "1px solid #e0e0e0", borderRadius: 2 }}
                    >
                        <GoogleIcon />
                    </IconButton>

                    <IconButton
                        onClick={login}
                        sx={{ border: "1px solid #e0e0e0", borderRadius: 2 }}
                    >
                        <FacebookIcon />
                    </IconButton>

                    <IconButton
                        onClick={login}
                        sx={{ border: "1px solid #e0e0e0", borderRadius: 2 }}
                    >
                        <AppleIcon />
                    </IconButton>
                </Box>
            </Paper>
        </Box>
    );
};

export default LoginPage;
