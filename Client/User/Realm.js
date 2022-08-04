const TaskSchema = {
  name: "Task",
  properties: {
    _id: "int",
    name: "string",
    status: "string?",
  },
  primaryKey: "_id",
};

const realm = await Realm.open({
  path: "myrealm",
  schema: [TaskSchema],
});
