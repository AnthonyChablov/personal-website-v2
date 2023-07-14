import React from 'react';

interface IResume {
  pdfUrl: string;
}

const PDFEmbed = ({ pdfUrl }: IResume) => {
  return (
    <div className="">
      <div
        className="w-11/12 mx-auto border border-slate-700 shadow-2xl rounded-md overflow-hidden animate-fadeIn "
        style={{  height: '1000px' }}
      >
        <iframe
          src={`${pdfUrl}`}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default PDFEmbed;
