import { useEffect, useState, useCallback } from 'react';

export const useFormTransition = (isActive: boolean) => {
  const [animationClass, setAnimationClass] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const triggerTransition = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setAnimationClass('form-transition-out');
    
    setTimeout(() => {
      setAnimationClass('form-transition-in');
      
      setTimeout(() => {
        setAnimationClass('');
        setIsTransitioning(false);
      }, 500);
    }, 500);
  }, [isTransitioning]);

  useEffect(() => {
    if (isActive !== undefined) {
      triggerTransition();
    }
  }, [isActive, triggerTransition]);

  return { animationClass, isTransitioning };
};