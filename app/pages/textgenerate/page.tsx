// pages/text-generate.tsx
"use client";
import React, { useState } from 'react';
import CustomModal from '../../components/modal';

const TextGenerate: React.FC = () => {
  const [formData, setFormData] = useState({
    operasi: '',
    operator: '',
    keadaan: '',
    kesadaran: '',
    riwayat: '',
    pengobatan: '',
    penunjang: '',
    persediaan: '',
    postoperasi: '',
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [completedSentence, setCompletedSentence] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const completedSentence = `Pasien dengan tindakan operasi ${formData.operasi} dengan operator ${formData.operator} Keadaan umum pasien ${formData.keadaan} kesadaran pasien ${formData.kesadaran}, pasien ada riwayat  ${formData.riwayat} pengobatan rutin ${formData.pengobatan}, pemeriksaan penunjang preoperasi ${formData.penunjang} persediaan darah ${formData.persediaan}, perawatan selanjutnya post operasi ${formData.postoperasi}.`;
    setModalIsOpen(true);
    setCompletedSentence(completedSentence);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(completedSentence);
  };

  return (
    <div className="h-screen flex flex-row-reverse items-center justify-center ml-10">
      <div className="bg-blue-950 border-2 border-yellow-300 p-5 rounded-lg shadow-md w-96 h-90">
        <h2 className="text-2xl font-semibold mb-4 text-blue-50 text-center underline">
          Diagnosis Generate
        </h2>
        <form onSubmit={handleSubmit} className="space-y-2 flex flex-wrap justify-center items-center">
          {/* Form fields */}
          {Object.keys(formData).map((key) => (
            <div className="mb-4" key={key}>
              <label htmlFor={key} className="block text-gray-200 mb-2 font-semibold">
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type="text"
                id={key}
                className="w-72 border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
                value={formData[key as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-950 text-white rounded-md p-2 w-32 hover:bg-yellow-300 hover:text-slate-700 mt-5 border-2 border-yellow-200"
          >
            Submit
          </button>
        </form>
      </div>
      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Lengkapi Kalimat Modal"
      >
        <h2 className="text-4xl font-semibold mb-4 flex justify-center">Data Generated!</h2>
        <textarea
          readOnly
          className="w-[340px] h-40 justify-center border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-900"
          value={completedSentence}
        />
        <button
          className="bg-blue-500 text-white rounded-md p-2 w-40 mt-4 hover:bg-yellow-600"
          onClick={copyToClipboard}
        >
          Salin Teks
        </button>
        <button
          className="bg-gray-300 text-gray-700 rounded-md p-2 w-40 mt-2 ml-4 hover:bg-gray-400"
          onClick={() => setModalIsOpen(false)}
        >
          Tutup
        </button>
      </CustomModal>
    </div>
  );
};

export default TextGenerate;
