import "./styles.css";
import { useState, useEffect, useContext, useRef } from "react";

export default function Reacty() {
  const [jeuEnCours, setJeuEnCours] = useState(false);
  const [faim, setFaim] = useState(100);
  const [energie, setEnergie] = useState(100);
  const [humeur, setHumeur] = useState(100);

  function nourrir() {
    if (faim < 100) {
      setFaim((prevFaim) => Math.min(prevFaim + 10, 100));
    }
    return faim;
  }

  function sleep() {
    if (energie < 100) {
      setEnergie((prevEnergie) => Math.min(prevEnergie + 15, 100));
    }
    return energie;
  }
  useEffect(() => {
    if (!jeuEnCours) return;
    const interval = setInterval(() => {
      setFaim((prevFaim) => Math.max(prevFaim - 10, 0));
      setEnergie((prevEnergie) => Math.max(prevEnergie - 10, 0));
      setHumeur((prevHumeur) => Math.max(prevHumeur - 10, 0));
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [jeuEnCours]);

  return (
    <div className="main-content">
      🐱REACTY THE MAGNIFICIENT
      <p>FAIM : {faim}</p>
      <p>ENERGIE: {energie}</p>
      <p>HUMEUR: {humeur}</p>
      {humeur < 20 && <p className="alerte">😾REACTY boude sévérement !</p>}
      <button onClick={nourrir} disabled={!jeuEnCours}>
        NOURRIR REACTY 🍖
      </button>
      <button onClick={sleep}>SLEEP 🛌</button>
      {!jeuEnCours && (
        <button onClick={() => setJeuEnCours(true)}>
          Démarrer l'élevage de Reacty !
        </button>
      )}
    </div>
  );
}
