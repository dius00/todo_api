window.onload = () => {

  const makkia_test = document.getElementById("test_1");
  const makkia_codebox = document.getElementById("makkiatarget")
  
  async function makkia_retrieve () {
    const query = `{
      getToDosinList(id:"f4149f30-8d9b-4ef4-bedb-6a06d6fded9f"){
        id,
        description,
        completed
      }
    }
    `;
    console.log('fetch start');
    let results = await (await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    })).json();
    results = results.data.getToDosinList;
    for(const elem of results){
      makkia_codebox.append(JSON.stringify(elem));
      const linebreak = document.createElement("br");
      makkia_codebox.append(linebreak);
      }
  }
  
  const cc_test = document.getElementById("test_2");
  const cc_codebox = document.getElementById("cctarget");

  async function cc_retrieve () {
    let query = `{
      getList(id:"132b59f4-0cb7-4e56-bbb5-ce27cf561c2a"){
        id,
        is_public,
        listname
      }
    }`;
    console.log('fetch start');
    let results = await (await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    })).json();
    let linebreak = document.createElement("br");
    cc_codebox.append(JSON.stringify(results.data.getList));
    cc_codebox.append(linebreak);
    linebreak = document.createElement("br"); //linebreak has to bre rassigned to see changes
    cc_codebox.append(linebreak);
    query = `query{getToDosinList(id:"132b59f4-0cb7-4e56-bbb5-ce27cf561c2a"){id,description,completed}}`;
    results = await (await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    })).json();
    results = results.data.getToDosinList;
    for(const elem of results){
      cc_codebox.append(JSON.stringify(elem));
      linebreak = document.createElement("br");
      cc_codebox.append(linebreak);
      }
      linebreak = document.createElement("br");
      cc_codebox.append(linebreak);
  }

  const taiso_test = document.getElementById("test_3");
  const taiso_codebox = document.getElementById("taisotarget");

  async function taiso_complete () {
    let query =`{getToDo(id:"ffa0f221-ec73-45f4-8a40-287f9067f1c4"){id,description,completed}}`;
    console.log('fetch start');
    let results = await (await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    })).json();
    results = results.data.getToDo;
    let linebreak = document.createElement("br");
    taiso_codebox.append(JSON.stringify(results));
    taiso_codebox.append(linebreak);
    linebreak = document.createElement("br"); //linebreak has to bre rassigned to see changes
    taiso_codebox.append(linebreak);
    query =`mutation{switchCompleteToDo(id:"ffa0f221-ec73-45f4-8a40-287f9067f1c4"){id,description,completed}}`;
    results = await (await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    })).json();
    taiso_codebox.append(JSON.stringify(results.data.switchCompleteToDo));
    linebreak = document.createElement("br"); //linebreak has to bre rassigned to see changes
    taiso_codebox.append(linebreak);
   
  }


  makkia_test.onclick = makkia_retrieve;
  cc_test.onclick = cc_retrieve;
  taiso_test.onclick = taiso_complete;
}