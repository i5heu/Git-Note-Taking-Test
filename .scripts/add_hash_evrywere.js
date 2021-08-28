async function findTable() {
    let foo;

    await tree.iterateOverTree(async (chunk) => {
        chunk.subItems.forEach(element => {
            if (element.name && element.name.includes(".calcSum.")) {
                foo = element;
            }
        });
    });

    return foo;
}

async function main() {
    const element = await findTable();
    var data = await getContentOfFile(element.path, "utf8");

    console.log("add_hash_evrywere.js", await findMarkdownTable(data));

    console.log("md",md);
}

main();