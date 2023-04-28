import { useState } from 'react';
import '../static/css/numpick.scss';

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
    [73, 74,  ,  ,  ,  ],
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
    setShowForm2(true);
  };

  const handleForm2Submit = (event) => {
    event.preventDefault();
    setShowForm3(true);
  };

  const handleForm2ColumnSelect = (columnIndex) => {
    setForm2SelectedColumn(columnIndex);
  };

  const handleForm2OptionSelect = (item) => {
    setForm2Selection([item]);
  };

  const handleSelectFinal = (item) => {
    if (!form3Selection.includes(item)) {
      setForm3Selection([item]);
    }
  };

  return (
    <>
      {/* Form 1 */}
      {!showForm2 && (
        <form onSubmit={handleForm1Submit}>
          <table>
            <tbody>
              {[...Array(13)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {[...Array(6)].map((_, colIndex) => {
                    const item = rowIndex * 6 + colIndex + 1;
                    return (
                      <td
                        key={item}
                        onClick={() => handleSelect(item)}
                        className={
                          form1Selection.includes(item) ? 'selected' : ''
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
      <button type="submit">Confirm</button>
    </form>
  )}

  {/* Form 2 */}
  {showForm2 && !showForm3 && (
    <form onSubmit={handleForm2Submit}>
      <table>
        <tbody>
          <tr>
            {form2Selection.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th colSpan={6}>Table 2</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(13)].map((_, rowIndex) => (
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
      <div>
        <label htmlFor="columns">Select Column:</label>
        <select
          id="columns"
          value={form2SelectedColumn !== null ? form2SelectedColumn : ''}
          onChange={(event) => handleForm2ColumnSelect(parseInt(event.target.value))}
        >
          <option value="">All</option>
          {[...Array(6)].map((_, i) => (
            <option key={i} value={i}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Confirm</button>
    </form>
  )}

  {/* Form 3 */}
  {showForm3 && (
    <form>
      <table>
        <thead>
          <tr>
            <th colSpan={6}>Table 1 Selection</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {form1Selection.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Table 2 Selection</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {form2Selection.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Final Selection</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {form3Selection.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </form>
  )}
</>
);
}

export default Numpick;