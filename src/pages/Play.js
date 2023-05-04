import React from 'react';
import { useState } from 'react';
import '../static/css/numpick.scss';
import Header from '../components/header';
import Footer from '../components/footer';

function Numpick() {
  const [form1Selection, setForm1Selection] = useState([]);
  const [form2Selection, setForm2Selection] = useState([]);
  const [form3Selection, setForm3Selection] = useState([]);
  const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);
  const [form2Options, setForm1Options] = useState([
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42],
    [43, 44, 45, 46, 47, 48],
    [49, 50, 51, 52, 53, 54],
    [55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66],
    [67, 68, 69, 70, 71, 72],
    [73, 74,  ,  ,  ,  ],
  ]);
  const [form2SelectedColumn, setForm2SelectedColumn] = useState(null);

  const handleSelect = (item) => {
    if (!form1Selection.includes(item)) {
      if (form1Selection.length < 5) {
        setForm1Selection([...form1Selection, item]);
      }
    } else {
      setForm1Selection(form1Selection.filter((i) => i !== item));
    }
  };

  const handleForm1Submit = (event) => {
    event.preventDefault();
    if (form1Selection.length < 5) {
      alert('Please select at least 5 items.');
    } else {
      setShowForm2(true);
    }
  };


  const handleForm2Submit = (event) => {
    event.preventDefault();
    if (form2Selection.length < 1) {
      alert('Please select at least 1 items.');
    } else {
      setShowForm3(true);
    }
  };


  const handleForm2ColumnSelect = (columnIndex) => {
    setForm2SelectedColumn(columnIndex);
  };

  const handleForm2OptionSelect = (item) => {
    setForm2Selection([item]);
  };


  return (
    <>
    <Header/>
      {/* Form 1 */}
      {!showForm2 && (
        <form onSubmit={handleForm1Submit} className="main__form">
        <table>
        <thead>
          <tr>
            <th colSpan={6}>Main numbers</th>
          </tr>
        </thead>
          <tbody>
            {Array.from({ length: 13 }, (_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: 6 }, (_, colIndex) => {
                  const item = rowIndex * 6 + colIndex + 1;
                  const isSelected = form1Selection.includes(item);
                  return (
                    <td
                      key={item}
                      onClick={() => handleSelect(item)}
                      className={isSelected ? 'selected' : ''}
                    >
                      {item}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button1">
          <button type="submit" className="button__style">Confirm</button>
        </div>
      </form>
  )}

  {/* Form 2 */}
  {showForm2 && !showForm3 && (
    <form onSubmit={handleForm2Submit}>

      <table>
        <thead>
          <tr>
            <th colSpan={6}>Bonus numbers</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(6)].map((_, colIndex) => {
                const item = form2Options[rowIndex][colIndex];
                const disabled =
                  form2SelectedColumn !== null && colIndex !== form2SelectedColumn;
                return (
                  <td
                    key={item}
                    onClick={() => {
                      if (!disabled) {
                        handleForm2OptionSelect(item);
                      }
                    }}
                    className={
                      form2Selection.includes(item) ? 'selected' : disabled ? 'disabled' : ''
                    }
                  >
                    {item}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button1">
          <button type="submit" className="button__style">Confirm</button>
      </div>
    </form>
  )}

  {/* Form 3 */}
  {showForm3 && (
    <form>
      <table>
        <thead>
          <tr>
            <th colSpan={6}>5/5 Main numbers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {form1Selection.map((item) => (
              <td key={item} className='red'>{item}</td>
            ))}
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>1/1 Bonus numbers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {form2Selection.map((item) => (
              <td key={item} className='green'>{item}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </form>
  )}
  <Footer/>
</>
);
}

export default Numpick;