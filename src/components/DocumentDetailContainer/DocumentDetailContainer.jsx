import React, { useState, useEffect } from "react";
import { APICallSingleDocumentsIndex } from "../services/mockDocuments";
import { APICallSingleDocuments } from "../services/fireBase";
import DocumentDetail from "../DocumentDetail/DocumentDetail";
import { useParams } from "react-router-dom";
import "./DocumentDetailContainer.css";
import DocumentInformation from "../DocumentInformation/DocumentInformation";
import Loader from "../Loader/Loader";

function DocumentDetailContainer() {
  const [document, setDocument] = useState([]);
  const [index, setIndex] = useState(0);
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  let idDocument = index;

  useEffect(() => {
    if (id !== undefined && idDocument !== 0) {
      APICallSingleDocumentsIndex(idDocument)
        .then((response) => {
          setDocument(response);
          setLoading(false);
        })
        .catch((error) => console.error("Documento not found"));
    } else {
      APICallSingleDocuments(id)
        .then((response) => {
          setDocument(response);
          setLoading(false);
        })
        .catch((error) => console.error("Documento not found"));
    }

    let hora = new Date().toLocaleTimeString();
    setDate(hora);
  }, [id, idDocument, document]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container-detail-document">
          <DocumentDetail
            document={document}
            date={date}
            setIndex={setIndex}
            index={index}
          />
          <DocumentInformation document={document} />
        </div>
      )}
    </>
  );
}

export default DocumentDetailContainer;
