import { useEffect, useState } from "react";
import axios from "axios";

const useFetchIP = () => {
  const [ipAddr, setIPAddr] = useState(null);
  const errorMsg = "Error getting IP address.";

  useEffect(() => {
    let ignore = false;

    axios("https://api.ipify.org?format=json")
      .then((data) => {
        if (!ignore) {
          setIPAddr(data?.data?.ip || errorMsg);
        }
      })
      .catch((err) => {
        if (!ignore) {
          setIPAddr(errorMsg);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return [ipAddr];
};

export default useFetchIP;
