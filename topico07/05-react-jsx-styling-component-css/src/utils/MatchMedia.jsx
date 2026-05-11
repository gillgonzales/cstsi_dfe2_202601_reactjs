/* eslint-disable react/prop-types */
import { useEffect } from 'react'


export const getTheme = () => {
  return window.matchMedia("(prefers-color-scheme: light)").matches;
};

const detectThemeChanges = (callback) => {
  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", ({ matches }) => callback(matches));
};

const MatchMedia = ({onChange}) => {
  
    useEffect(() => {
         detectThemeChanges(onChange);
  }, []);
  
    return (<></> )
}

export default MatchMedia
