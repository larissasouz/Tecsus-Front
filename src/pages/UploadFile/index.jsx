import React, { useState } from 'react';
import CSVReader from 'react-csv-reader';
import './upload.css'

import Sidebar from '../../components/sidebar/sidebar'
import Title from '../../components/title/title'
import { GrDocumentCsv } from "react-icons/gr";

export default function UploadFile() {

    const [csvData, setCsvData] = useState(null);
    const [fileActivate, setFileActivate] = useState(false)

    const handleFileUpload = (data, fileInfo) => {

        try{
            setCsvData({ data, fileInfo });
            setFileActivate(true)
        }
        catch(e){
            setFileActivate(false)
        }

        
    };

    return (
        <div className='upload'>
            <Sidebar />
            <main className='page-container'>
                <Title name={"Atualizar Dados"}>
                    <GrDocumentCsv size={25} />
                </Title>
                <form className='form-upload'>
                    <div className='group-input'>
                        <label>Selecione o arquivo atualizado</label>
                        <div className='input-box'>
                            {csvData ? <h2 className='arq-name'>Arquivo carregado: {csvData.fileInfo.name}</h2> : <h2 className='arq-name'></h2>}
                            <CSVReader className={'button-csv'}
                                onFileLoaded={handleFileUpload} />
                        </div>
                        {fileActivate === true  && <span style={{ backgroundColor: '#226c22' }} className='label-msg' >Arquivo carregado com sucesso</span>}
                        {fileActivate === null  && <span style={{ backgroundColor: '#930000' }} className='label-msg' >Falha ao carregar o arquivo</span>}
                        
                    </div>
                </form>
            </main>
        </div>
    )
}