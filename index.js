import React from "react";
import axios from "axios";

const PostDBHook = async ({
  ceeLogUrl,
  myStoreDB,
  ceeLogData,
  myStoreData,
}) => {
  const url = ceeLogUrl && myStoreDB;
  try {
    return await axios.post({
      method: "post",
      url: url,
      data: {
        ceeLogData,
        myStoreData,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default PostDBHook;
