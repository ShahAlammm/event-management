import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetails from "../../Components/CardDetails/CardDetails";

const ViewDetails = () => {
  const [details, setDetails] = useState();

  const { id } = useParams();

  const elements = useLoaderData();

  useEffect(() => {
    const findItem = elements?.find((details) => details.id == id);

    setDetails(findItem);
  }, [id, elements]);
  return (
    <div>
      <CardDetails details={details}></CardDetails>
    </div>
  );
};

export default ViewDetails;
