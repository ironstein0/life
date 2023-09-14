import { Prisma } from "@prisma/client";
import { NewMddbClient } from '../mddb';

export const DocumentModelExtension = Prisma.defineExtension({
    name: 'DocumentModelExtension',
    result: {
        document: {
            content: {
                needs: { path: true },
                compute(document: Document) {
                    const client = NewMddbClient()
                    return "foo";
                }
            }
        }
    }
})