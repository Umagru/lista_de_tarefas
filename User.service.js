const users = [
    {
        name: "Flávio Medeiros",
        address: "57035-100",
    },
    {
        name: "Renata Pedrosa",
        address: "57035-020",
    },
    {
        name: "Bruna Gama",
        address: "57035-300",
    }
];

const getUsers = (filter) => {

    return new Promise(function (myResolve, myReject) {
        var delayInMilliseconds = 1500;
        setTimeout(function () {

            let filteredUsers = [];
            users.forEach((user) => {
                if (user.name.toLowerCase().includes(filter)) {
                    filteredUsers.push(user);
                }
            });

            myResolve(filteredUsers);
            /*myReject({
                message: "Não conseguimos acessar a API!"
            });*/

        }, delayInMilliseconds);

    });
}

export default getUsers;