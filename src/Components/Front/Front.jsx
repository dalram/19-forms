import { useEffect, useState } from "react";
import Nav from "../Nav";
import axios from 'axios';
import { uuid } from 'uuidv4'
function Front() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createForm, setCreateForm] = useState(null);
  const [messages, setMessages] = useState([]);

  // Main Form States
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [cost, setCost] = useState('');
    const [constructionCost, setConstructionCost] = useState('');
    const [financialIncome, setFinancialIncome] = useState('0');
    const [specialBuilding, setSpecialBuilding] = useState('1');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [validDocumentNumber, setValidDocumentNumber] = useState('');
    const [validDocumentDate, setValidDocumentDate] = useState('');
    const [architect, setArchitect] = useState('');
    const [builder, setBuilder] = useState('');
    const [contractor, setContractor] = useState('');



    useEffect(() => {
      if (null === createForm) return;
      axios.post('http://localhost:3003/forms', createForm)
          .then(res => {
              setLastUpdate(Date.now());
          })
  }, [createForm]);
  
    
  const addMainForm = () => {
    const data = {
      title, 
      address, 
      cost: parseFloat(cost),
      constructionCost: parseFloat(constructionCost),
      financialIncome: finansavimoSaltinis[financialIncome - 1],
      specialBuilding: specialBuilding ? 1 : 0,
      startDate,
      endDate,
      validDocumentNumber,
      validDocumentDate,
      architect,
      builder,
      contractor
    }
    setCreateForm(data);
    setTitle('');
    setAddress('');
    setCost('');
    setConstructionCost('');
    setFinancialIncome('0');
    setSpecialBuilding('1');
    setStartDate('');
    setEndDate('');
    setValidDocumentNumber('');
    setValidDocumentDate('');
    setArchitect('');
    setBuilder('');
    setContractor('');
  };
  const finansavimoSaltinis = ['valstybės biudžetas', 'savivaldybės biudžetas', 'įmonės lėšos', 'fizinio asmens lėšos'];
console.log(finansavimoSaltinis[financialIncome - 1]);
  const showMessage = (m) => {
    const id = uuid();
    m.id = id;
    setMessages(msg => [...msg, m]);
    setTimeout(() => {
        setMessages(mes => mes.filter(ms => ms.id !== id))
    }, 5000);
}
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
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />EUR, tame tarpe statybos-montavimo darbų kaina</span>
          <input
            className="regCodeInput"
            type="text"
            value={constructionCost}
            onChange={(e) => setConstructionCost(e.target.value)}
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
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <span>Darbu pabaiga</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="formGroup">
          <span>Statybos leidžiančio dokumento Nr.<input
            type="text"
            value={validDocumentNumber}
            onChange={(e) => setValidDocumentNumber(e.target.value)}
          />išdavimo data</span>
          <input
            type="date"
            value={validDocumentDate}
            onChange={(e) => setValidDocumentDate(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <span>Projektuotojas</span>
          <input
            className="regCodeInput"
            type="text"
            value={architect}
            onChange={(e) => setArchitect(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <span>Statytojas</span>
          <input
            className="regCodeInput"
            type="text"
            value={builder}
            onChange={(e) => setBuilder(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <span>Rangovas</span>
          <input
            className="regCodeInput"
            type="text"
            value={contractor}
            onChange={(e) => setContractor(e.target.value)}
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
