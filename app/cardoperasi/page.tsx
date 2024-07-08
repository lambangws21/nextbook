"use client";   
import React from 'react';
import OperationCard from '@/app/components/cardoperastion';
import { Dokter } from '@/app/libs/operationcard';

const operations: Dokter[] = [
    {
        doctorName: 'Dr. Erica',
        doctorPhoto: '/public/images/drerica.webp',
        operationName: 'Operasi Shoulder',
        operationLink: '/drerica/shoulder',
    },
    {
        doctorName: 'Dr. Jane Smith',
        doctorPhoto: '/public/images/drerica.webp',
        operationName: 'Operasi Ginjal',
        operationLink: '/operations/ginjal',
    },
    // Tambahkan operasi lainnya di sini
];

const Home: React.FC = () => (
    <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Daftar Operasi</h1>
        {operations.map((operation, index) => (
            <OperationCard key={index} dokterProps={operation} />
        ))}
    </div>
);

export default Home;
