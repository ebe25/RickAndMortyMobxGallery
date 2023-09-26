"use client"
import { useColorMode, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function NavBar() {
  console.log("NavBar");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ?<SunIcon />  : <MoonIcon /> }
      </Button>
    </div>
  );
}
