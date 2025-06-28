
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    console.log('📱 Inicializando detección móvil...');
    
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      const newIsMobile = window.innerWidth < MOBILE_BREAKPOINT;
      console.log('📱 Cambio de pantalla detectado - Móvil:', newIsMobile, 'Ancho:', window.innerWidth);
      setIsMobile(newIsMobile);
    }
    
    mql.addEventListener("change", onChange)
    
    // Verificación inicial
    const initialIsMobile = window.innerWidth < MOBILE_BREAKPOINT;
    console.log('📱 Detección inicial - Móvil:', initialIsMobile, 'Ancho:', window.innerWidth);
    setIsMobile(initialIsMobile);
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
