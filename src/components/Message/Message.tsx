import { FC } from "react";
import { App } from "../../models";

type MessageType = {
  data: App.Message;
};

const Message: FC<MessageType> = ({ data }) => {
  return <p>{data.text}</p>;
};

export default Message;
