async function main() {
    await tree.iterateOverTree(async (chunk) => {
        if(chunk.subItems.includes(mainChunk)){
            // console.log(chunk);
        }
    });
}

main();