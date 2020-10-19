window.onload = () => {

  const makkia_test = document.getElementById("test_1");

  async function makkia_retrieve () {

    const makkia_todos = await (await fetch('https://1jzxrj179.lp.gql.zone/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ posts { title } }' }),
    })).json();
}


}