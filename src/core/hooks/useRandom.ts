import { useState } from "react";
import axios from "axios";

import { App } from "../../models";
import { BASE_URL } from "../api";

const useRandom = () => {
  //   const [joke, setJoke] = useState<App.Response | null>(null);

  async function fetchJoke() {
    try {
      const res = await axios.get(BASE_URL);
      const data = res.data;
      //       setJoke(data);
    } catch (err) {
      console.log(err);
    }
  }

  return { fetchJoke };
};

export default useRandom;
