import * as React from "react";
import { createRoot } from "react-dom/client";
import { Piral, createInstance, createStandardApi } from "piral";
import { layout, errors } from "./layout";

// change to your feed URL here (either using feed.piral.io or your own service)
const feedUrl = "https://feed.piral.io/api/v1/pilet/empty";

const root = createRoot(document.getElementById("app"));
const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
  },
  plugins: [...createStandardApi()],
  requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
});

root.render(<Piral instance={instance} />);
