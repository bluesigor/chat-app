import { useState } from "react";
import axios from "axios";

import { BASE_URL } from "../api";
import { idGenerator } from "../helpers/helpers";
import { App } from "../../models";

const useRandom = () => {
  const [joke, setJoke] = useState<App.Message>({
    id: null,
    sender: "",
    text: "",
  });

  async function fetchJoke() {
    try {
      const res = await axios.get(BASE_URL);
      const data = await res.data;

      setJoke({
        id: idGenerator(),
        sender: "bot",
        text: data?.value,
      });
    } catch (err) {
      console.error(err);
    }
  }

  return { fetchJoke, joke };
};

export default useRandom;
