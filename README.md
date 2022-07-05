```js
//
// mongo/index.js
//

import mongoose from "mongoose";

const { Schema } = mongoose;

const { ObjectId } = Schema;

const auditProps = {
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
  createdBy: { type: ObjectId, ref: "User" },
  updatedBy: { type: ObjectId, ref: "User" },
};

const Model = (defaultProps) => {
  return (name, props) => {
    const schema = new Schema({
      ...defaultProps,
      ...props,
    });

    return mongoose.model(name, schema);
  };
};

export const withAudit = Model(auditProps);
```

```js
//
// ejemplo
//

import { withAudit } from "./index.js";

const products = withAudit("Product", {
  name: String,
  desc: String,
});
```
