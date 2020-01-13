const todos = ['brush your teeth', "go to school" , "learn stuff"];

const controller = {
    get: (req, res) => {
        res.status(200).send(todos);
    },
    post: (req, res) => {
        let {todo} = req.body; // todos = req.body.todo
        todos.push(todo);
        res.status(201).send(`Posted todo ${todo}`);
    },

    delete: (req, res) => {
        let {index} = req.params;
        let deleted = todos.splice(index, 1);

        res.status(200).send(`Deleted todo ${deleted}`);
    }
}

module.exports = controller;
 