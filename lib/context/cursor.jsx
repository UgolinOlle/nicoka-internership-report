import { useRef, createContext, useState } from 'react';

export const CursorContext = createContext();

export default function CursorProvider({ children }) {
  const [cursorText, setCursorText] = useState(null);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [ref] = useRef(null);

  return (
    <CursorContext.Provider
      value={{
        cursorText,
        setCursorText,
        cursorVariant,
        setCursorVariant,
        ref
      }}>
      {children}
    </CursorContext.Provider>
  )
}
