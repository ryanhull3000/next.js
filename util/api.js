export const getUsers = async () => await (await fetch('https://reqres.in/api/users/')).json();

export const getUser = async (id) => await (await fetch('https://reqres.in/api/users/' + id)).json();