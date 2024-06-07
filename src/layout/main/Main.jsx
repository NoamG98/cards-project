import { Box } from '@mui/material';
import React from 'react';
import { useTheme } from '../../providers/CustomThemeProvider';

export default function Main({ children }) {
  const { isDark } = useTheme();
  
  // Define Amazonas colors
  const amazonasLight = '#80cbc4';
  const amazonasDark = '#004d40';
  
  return (
    <Box
      sx={{
        minHeight: '85vh',
        backgroundColor: isDark ? amazonasDark : amazonasLight,
        color: isDark ? '#ECE3CE' : '#3A4D39',
        transition: 'background-color 0.3s, color 0.3s'
      }}
    >
      {children}
    </Box>
  );
}
