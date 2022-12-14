import { useEffect } from "react";
import { useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState();

  useEffect(() => {
    const url = `http://localhost:5000/allTools`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, []);

  return [tools];
};

export default useTools;
