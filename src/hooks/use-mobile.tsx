
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)
  const [isInitialized, setIsInitialized] = React.useState(false)

  React.useEffect(() => {
    console.log('📱 Inicializando detección móvil optimizada...');
    
    // Safe check for window object
    if (typeof window === 'undefined') {
      console.log('⚠️ Window no disponible - SSR detectado');
      return;
    }

    try {
      const checkIsMobile = () => {
        const newIsMobile = window.innerWidth < MOBILE_BREAKPOINT;
        console.log('📱 Detección móvil - Ancho:', window.innerWidth, 'Es móvil:', newIsMobile);
        setIsMobile(newIsMobile);
        if (!isInitialized) {
          setIsInitialized(true);
        }
      };

      // Initial check
      checkIsMobile();

      // Create media query listener for better performance
      const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
      
      const handleChange = (e: MediaQueryListEvent) => {
        console.log('📱 Media query cambio detectado - Es móvil:', e.matches);
        setIsMobile(e.matches);
      };

      // Add listener with fallback for older browsers
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange);
      } else {
        // Fallback for older browsers
        mediaQuery.addListener(handleChange);
      }

      // Cleanup function
      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener('change', handleChange);
        } else {
          mediaQuery.removeListener(handleChange);
        }
      };
    } catch (error) {
      console.error('❌ Error en useIsMobile:', error);
      // Fallback: assume mobile if error occurs
      setIsMobile(true);
      setIsInitialized(true);
    }
  }, [isInitialized]);

  // Return false by default until initialized to prevent hydration issues
  return isInitialized ? isMobile : false;
}
