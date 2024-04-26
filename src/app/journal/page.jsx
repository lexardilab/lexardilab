"use client";
import React, { useState, useEffect } from "react";
import JournalCard from "../components/JournalCard";
import { getAllJournals } from "../../../sanity/lib/journal-util";

function Journals() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [journalsPerPage, setJournalsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const journals = await getAllJournals();
      setData(journals);
    };
    fetchData();
  }, []);

  // Logic for displaying current products
  const indexOfLastJournal = currentPage * journalsPerPage;
  const indexOfFirstJournal = indexOfLastJournal - journalsPerPage;
  const currentJournals = data.slice(indexOfFirstJournal, indexOfLastJournal);

  // Change page

  return (
    <div className="grid h-screen grid-cols-4 bg-slate-100">
      {currentJournals?.map((journal) => (
        <JournalCard key={journal._id} journal={journal} />
      ))}
    </div>
  );
}

export default Journals;
