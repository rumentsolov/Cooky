//app/(tabs)/basket.tsx

import React from 'react';
import { Vw } from '@/components/Vw'; // Import the Vw component
import { LAYOUTS } from '@/constants/Layouts'; 
import { ThemeProvider } from '@/context/ThemeContext'; 
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Basket() {
    return (  
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider> 
            <Vw style={LAYOUTS.scrollContent}>
                <Vw.Text type="medium" align='center' paddingTop={20}>This is Basket Page</Vw.Text>
            </Vw>
        </ThemeProvider>
      </SafeAreaView>

    );
}
