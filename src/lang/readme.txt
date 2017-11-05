The language database in ./src/lang/db.js
You can edit, add keyword and translate like:

"keyword" : {
  en : "Some English word",
  fr : "Some French word"
}

To display the keyword on Component, use:
this.k("keyword")

For faster writting and clearer, You can set stay alone k at the head of render function

render() {
  let k = this.k

  return <div>{k("keyword")}</div>
}

P/S : I helped you fixed some code, but not all of them. Ask me if need fix anything more
About Jobs & Career link: I didn't work with wordpress so don't know how to fix/make for you. Sorry about that. But I will Google it and find answer for you after wake up