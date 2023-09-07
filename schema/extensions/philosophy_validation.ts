import { Prisma } from "@prisma/client";

export const PhilosophyValidation = Prisma.defineExtension({
    query: {
        philosophy: {
            create({ args, query }) {
                // TODO(https://github.com/ironstein0/life/issues/1#issue-1885413210): validate credits.
                return query(args);
            },
            upddate({ args, query }) {
                // TODO(https://github.com/ironstein0/life/issues/1#issue-1885413210): validate credits.
                return query(args);
            }
        }
    }
})