import jsPDF from "jspdf";
import "jspdf-autotable";

export default function GeneratePDF({ person }) {
  const generate = () => {
    const doc = new jsPDF();

    doc.autoTable({
      head: [["Name", "Age", "Country"]],
      body: person.map(({ name, age, country }) => {
        return [name, age, country];
      }),
    });

    doc.save("table.pdf");
  };

  return (
    <div>
      <button type="primary" onClick={generate}>
        Download PDF
      </button>
    </div>
  );
}
