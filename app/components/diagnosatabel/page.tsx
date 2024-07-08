"use client"

import { useState, useEffect } from "react";
import MockData from "./data.json";
import { copyToClipboard, formatListWithNumbers } from "../copyboard/clipboardUtils";

interface TableProps {
  data: {
    diagnosaKeperawatan: string;
    luaranKeperawatan: string[];
    intervensiKeperawatan: string[];
  }[];
}

const NursingCareTable: React.FC<TableProps> = ({ data }) => {
  
  const handleCopy = (list: string[]) => {
    const formattedText = formatListWithNumbers(list);
    copyToClipboard(formattedText);
    alert("Copied to clipboard!");
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 block md:table-cell">
              Diagnosa Keperawatan
            </th>
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 block md:table-cell">
              Luaran Keperawatan
            </th>
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 block md:table-cell">
              Intervensi Keperawatan
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {data.map((row, index) => (
            <tr
              key={index}
              className="bg-white border border-gray-300 md:border-none block md:table-row"
            >
              <td className="p-2 md:border md:border-gray-300 block md:table-cell">
                {row.diagnosaKeperawatan}
              </td>
              <td className="p-2 md:border md:border-gray-300 block md:table-cell">
                <ul className="list-disc ml-5">
                  {row.luaranKeperawatan.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <button
                  className="mt-2 text-blue-500"
                  onClick={() => handleCopy(row.luaranKeperawatan)}
                >
                  Copy Luaran
                </button>
              </td>
              <td className="p-2 md:border md:border-gray-300 block md:table-cell">
                <ul className="list-disc ml-5">
                  {row.intervensiKeperawatan.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <button
                  className="mt-2 text-blue-500"
                  onClick={() => handleCopy(row.intervensiKeperawatan)}
                >
                  Copy Intervensi
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NursingCareTable;
