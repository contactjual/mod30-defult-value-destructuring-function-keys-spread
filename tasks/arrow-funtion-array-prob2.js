
const getevenName = (myFriends) => {

    const all = [...myFriends];

    const newArray = [];

    for (let key of all) {

        if (key.length % 2 == 0) {
            newArray.push(key);
        }
    };

    return newArray;

};
const input = getevenName(myFriends = ['Rohim', 'Korim', 'Jamil', 'Rohima', 'Korima', 'Jamila'])
console.log(input);
