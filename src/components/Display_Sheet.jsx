// import React, { useEffect, useState } from "react";

// const Display_Sheet = () => {
//   const [data, setData] = useState([]);
//   const [newRow, setNewRow] = useState("");

//   const SHEET_URL =
//     "https://docs.google.com/spreadsheets/d/e/2PACX-1vRGq7ss6oVZAL3o4cv0bqn__fVZeg9jRK8QvantA8ZdCDhg_OihL5V4kKlspfzCCidbjGv_bR4PfrGx/pubhtml";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(SHEET_URL);
//         const html = await response.text();

//         // Create a temporary DOM element to parse the HTML
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, "text/html");

//         // Extract table rows from the HTML
//         const rows = Array.from(doc.querySelectorAll("table tr")).map((row) =>
//           Array.from(row.querySelectorAll("td, th")).map(
//             (cell) => cell.textContent
//           )
//         );

//         setData(rows);
//       } catch (error) {
//         console.error("Error fetching sheet data: ", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Add a new row
//   const addRow = () => {
//     if (newRow.trim()) {
//       const newData = [...data, newRow.split(",")];
//       setData(newData);
//       setNewRow("");
//     }
//   };

//   // Remove a specific row
//   const removeRow = (index) => {
//     const updatedData = data.filter((_, rowIndex) => rowIndex !== index);
//     setData(updatedData);
//   };

//   // Download updated data as CSV
//   const downloadCSV = () => {
//     const csvContent =
//       "data:text/csv;charset=utf-8," +
//       data.map((row) => row.join(",")).join("\n");
//     const encodedUri = encodeURI(csvContent);
//     const link = document.createElement("a");
//     link.setAttribute("href", encodedUri);
//     link.setAttribute("download", "updated_sheet.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Google Sheets Data</h1>
//       <div className="mb-4">
//         <input
//           type="text"
//           value={newRow}
//           onChange={(e) => setNewRow(e.target.value)}
//           placeholder="Enter comma-separated values for new row"
//           className="border border-gray-300 px-4 py-2 mr-2"
//         />
//         <button
//           onClick={addRow}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Add Row
//         </button>
//         <button
//           onClick={downloadCSV}
//           className="bg-green-500 text-white px-4 py-2 rounded ml-2"
//         >
//           Download CSV
//         </button>
//       </div>
//       {data.length > 0 ? (
//         <table className="table-auto border-collapse border border-gray-400">
//           <thead>
//             <tr>
//               {data[0]?.map((header, index) => (
//                 <th key={index} className="border border-gray-300 px-4 py-2">
//                   {header}
//                 </th>
//               ))}
//               <th className="border border-gray-300 px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.slice(1).map((row, rowIndex) => (
//               <tr key={rowIndex}>
//                 {row.map((cell, cellIndex) => (
//                   <td
//                     key={cellIndex}
//                     className="border border-gray-300 px-4 py-2 text-center"
//                   >
//                     {cell}
//                   </td>
//                 ))}
//                 <td className="border border-gray-300 px-4 py-2 text-center">
//                   <button
//                     onClick={() => removeRow(rowIndex + 1)}
//                     className="bg-red-500 text-white px-2 py-1 rounded"
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// };

// export default Display_Sheet;





import React, { useEffect, useState } from "react";

const Display_Sheet = () => {
  const [data, setData] = useState([]);
  const [newRow, setNewRow] = useState("");

  const SHEET_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRGq7ss6oVZAL3o4cv0bqn__fVZeg9jRK8QvantA8ZdCDhg_OihL5V4kKlspfzCCidbjGv_bR4PfrGx/pubhtml";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SHEET_URL);
        const html = await response.text();

        // Create a temporary DOM element to parse the HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // Extract table rows from the HTML
        const rows = Array.from(doc.querySelectorAll("table tr")).map((row) =>
          Array.from(row.querySelectorAll("td, th")).map(
            (cell) => cell.textContent
          )
        );

        setData(rows);
      } catch (error) {
        console.error("Error fetching sheet data: ", error);
      }
    };

    fetchData();
  }, []);

  const addRow = () => {
    if (newRow.trim()) {
      const newData = [...data, newRow.split(",")];
      setData(newData);
      setNewRow("");
    }
  };

  const removeRow = (index) => {
    const updatedData = data.filter((_, rowIndex) => rowIndex !== index);
    setData(updatedData);
  };

  const downloadCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      data.map((row) => row.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "updated_sheet.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
        Google Sheets Data
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <div className="flex items-center mb-6 space-x-4">
          <input
            type="text"
            value={newRow}
            onChange={(e) => setNewRow(e.target.value)}
            placeholder="Enter comma-separated values for new row"
            className="flex-1 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addRow}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
          >
            Add Row
          </button>
          <button
            onClick={downloadCSV}
            className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition"
          >
            Download CSV
          </button>
        </div>
        {data.length > 1 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 shadow">
              <thead>
                <tr className="bg-blue-500 text-white">
                  {data[1]?.map((header, index) => (
                    <th
                      key={index}
                      className="border border-gray-200 px-4 py-2 text-left"
                    >
                      {header}
                    </th>
                  ))}
                  <th className="border border-gray-200 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.slice(1).map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`${
                      rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } hover:bg-gray-200 transition`}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border border-gray-200 px-4 py-2 text-gray-800"
                      >
                        {cell}
                      </td>
                    ))}
                    <td className="border border-gray-200 px-4 py-2 text-center">
                      <button
                        onClick={() => removeRow(rowIndex + 1)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default Display_Sheet;
