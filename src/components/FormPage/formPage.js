import { useState } from "react";
import "./formPage.css";
import ProgressBar from "./progressBar";

function FormPage() {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    if (page === 4) return;
    setPage((page) => page + 1);
  };

  return (
    <div>
      <ProgressBar />

      {page === 1 && <p>entry time, flight details, exit time, pax numbers</p>}
      {page === 2 && <p>choose carpark</p>}
      {page === 3 && <p>choose extras</p>}
      {page === 4 && <p>summary and payment</p>}

      {page !== 4 && <button onClick={nextPage}>Next step</button>}
      {page === 4 && <button type="submit">Submit</button>}
    </div>
  );
}

export default FormPage;
