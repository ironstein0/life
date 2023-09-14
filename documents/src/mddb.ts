
const dbPath = "markdown.db";

export async function NewMddbClient() {
    const mddb = await import('mddb');
    return new mddb.MarkdownDB({
        client: "sqlite3",
        connection: {
        filename: dbPath,
    },
});
}
