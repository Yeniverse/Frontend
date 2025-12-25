import React, { useState } from "react";
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
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";

const SignupPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const signup = () => {
    // Redirect to Keycloak / Signup API
    console.log({ name, email, password, confirmPassword });
  };

  const goToLogin = () => {
    window.location.href = "/login";
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
        <Typography variant="h5" textAlign="center" mb={2}>
          Create Account
        </Typography>

        {/* Name */}
        <TextField
          fullWidth
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon color="action" />
              </InputAdornment>
            ),
          }}
        />

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
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon color="action" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Confirm Password */}
        <TextField
          fullWidth
          placeholder="Confirm Password"
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{ mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon color="action" />
              </InputAdornment>
            ),
          }}
        />

        {/* Signup Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{ borderRadius: 3, py: 1.2, mb: 2 }}
          onClick={signup}
        >
          Sign Up
        </Button>

        {/* Login Link */}
        <Typography variant="body2" textAlign="center" mb={2}>
          Already have an account?{" "}
          <Link
            component="button"
            onClick={goToLogin}
            sx={{ fontWeight: 500 }}
          >
            Sign in
          </Link>
        </Typography>

        <Divider sx={{ mb: 2 }}>Or sign up with</Divider>

        {/* Social Signup */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <IconButton sx={{ border: "1px solid #e0e0e0", borderRadius: 2 }}>
            <GoogleIcon />
          </IconButton>
          <IconButton sx={{ border: "1px solid #e0e0e0", borderRadius: 2 }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ border: "1px solid #e0e0e0", borderRadius: 2 }}>
            <AppleIcon />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignupPage;
