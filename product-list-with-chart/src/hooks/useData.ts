import { useEffect, useState } from "react";

interface dataType {
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const useData = () => {
  const [data, setData] = useState<dataType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/data.json", {
          method: "GET",
        });

        if (response.status === 200) {
          const data = await response.json();

          setData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return { data };
};

export default useData;
