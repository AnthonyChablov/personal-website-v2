
interface IResume{
  pdfUrl:string,

}

const PDFEmbed = ({pdfUrl}:IResume) => {
  return (
    <div style={{ width: '100%', height: '800px' }}>
      <iframe
        src={`${pdfUrl}`}
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  )
}

export default PDFEmbed;