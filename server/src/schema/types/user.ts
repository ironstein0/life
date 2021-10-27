import { mutationType, objectType, queryType } from "nexus"

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
  },
})

export const userQueryType = queryType({
  definition(t) {
    t.crud.user()
    t.crud.users({ ordering: true })
  }
});

export const userMutationType = mutationType({
  definition(t) {
    t.crud.createOneUser()
    t.crud.updateOneUser()
    t.crud.deleteOneUser()
  }
})