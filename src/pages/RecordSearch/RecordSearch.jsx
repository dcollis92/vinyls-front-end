import { useState, useEffect } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { getAllRecords } from '../../services/recordService';
import Record from '../../components/Record/Record';

const RecordSearch = ({records}) => {
  

  return (
    <main>
      <h3>recids</h3>
      {records.length ?
      <>
        {records.map(record =>            
          <Record key={record.title} record={record} />
        )}
      </>
      :
      <h2>No Matching records</h2>
      
        }
    </main>
  );
}

export default RecordSearch;