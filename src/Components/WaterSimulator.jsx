// components/WaterCalculator.jsx
import { useState } from 'react';
import '../Styles/WaterSimulator.css';

const WaterCalculator = () => {
  const [waterUsage, setWaterUsage] = useState(0);
  const [numResidents, setNumResidents] = useState(1);
  const [usageType, setUsageType] = useState('residential');
  const [billAmount, setBillAmount] = useState(0);

  const calculateBill = () => {
    // Assuming different rates for residential and commercial usage
    const ratePerGallon = usageType === 'residential' ? 0.10 : 0.15;
    const calculatedBill = waterUsage * ratePerGallon * numResidents;
    setBillAmount(calculatedBill.toFixed(2)); // Limit to two decimal places
  };

  return (
    <>
    <h1 style={{textAlign:'center',fontSize:"25px",marginTop:"50px"}}>Vous souhaitez acheter un bien ? · Vous aspirez à acheter un bien ?Estimer votre facture avec notre simulateur</h1>
    <div className="water-calculator">
      <h2>Calculateur de Consommation d'Eau</h2>
      <label>
        Consommation d'eau (gallons):
        <input
          type="number"
          value={waterUsage}
          onChange={(e) => setWaterUsage(e.target.value)}
        />
      </label>
      <label>
        Nombre d'habitants :
        <input
          type="number"
          value={numResidents}
          onChange={(e) => setNumResidents(e.target.value)}
        />
      </label>
      <label>
        Type d'utilisation :
        <select
          value={usageType}
          onChange={(e) => setUsageType(e.target.value)}
        >
          <option value="residential">Résidentiel</option>
          <option value="commercial">Commercial</option>
        </select>
      </label>
      <button onClick={calculateBill}>Calculer la Facture</button>
      {billAmount > 0 && (
        <div>
          <h3>Montant de la Facture</h3>
          <p id='result'>{`$${billAmount}`}</p>
        </div>
      )}
    </div></>
  );
};

export default WaterCalculator;
