import { useState } from "react";
import Nav from "../Nav";

function Front() {
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [financialIncome, setFinancialIncome] = useState('0');
    const [specialBuilding, setSpecialBuilding] = useState('1');
  const addMainForm = () => {};
  const finansavimoSaltinis = ['valstybės biudžetas', 'savivaldybės biudžetas', 'įmonės lėšos', 'fizinio asmens lėšos'];
  return (
    <>
      <Nav></Nav>
      <div className="createForm">
        <h2>Pagrindiniai duomenys apie statinį</h2>
        <div className="formGroup">
          <span>Statinio pavadinimas, paskirtis</span>
          <input
            className="regCodeInput"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <span>Adresas</span>
          <input
            className="regCodeInput"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <span>Statybos kaina (pagal statybos rangos sutartį) <input
            className="regCodeInput"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />EUR, tame tarpe statybos-montavimo darbų kaina</span>
          <input
            className="regCodeInput"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="formGroup">
            <label>Finansavimo šaltinis</label>
            <select
              className="create-color"
                onChange={(e) => {
                  setFinancialIncome(e.target.value)
                }}
                value={financialIncome}
            >
              <option value="0" disabled>
                Pasirinkti
              </option>
              {
                finansavimoSaltinis.map((fin, i) => <option key={i} value={i + 1}>{fin}</option>)
              }
            </select>
          </div>
          <div className="formGroup">
            <label>Ar statinys priklauso ypatingųjų statinių kategorijai</label>
            <select
                onChange={(e) => {
                  setSpecialBuilding(e.target.value)
                }}
                value={specialBuilding}
            >
              <option value="1">
                Priklauso
              </option>
              <option value="0">
                Nepriklauso
              </option>
            </select>
          </div>
          <div className="formGroup">
            <span>Darbu pradžia</span>
            <input
              type="date"
              //   value={lastUseTime}
              //   onChange={(e) => setLastUseTime(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <span>Darbu pabaiga</span>
            <input
              type="date"
              //   value={lastUseTime}
              //   onChange={(e) => setLastUseTime(e.target.value)}
            />
          </div>
          <div className="formGroup">
          <span>Statybos leidžiančio dokumento Nr.<input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />išdavimo data</span>
          <input
            type="date"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <span>Projektuotojas</span>
          <input
            className="regCodeInput"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <span>Statytojas</span>
          <input
            className="regCodeInput"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <span>Rangovas</span>
          <input
            className="regCodeInput"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
          <div>
            <button className="btn addButton" onClick={addMainForm}>
              Baigti pildymą
            </button>
          </div>
        </div>
    </>
  );
}

export default Front;
