'use client'
import React, {useState} from "react";
import { Document, Page, pdfjs } from 'react-pdf'
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

export default function Resume() {
    pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

    const [numPages, setNumPages] = useState(null);

    return(
        <div>
            <Document file="public/resume.pdf">
                <Page pageNumber='1' />
            </Document>
        </div>
    )
}