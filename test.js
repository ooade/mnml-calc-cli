const test = require('tape')
const { execSync } = require('child_process')

test('Calc Gives Right Outputs', t => {
	t.plan(4)

	t.equal(15, executeCommand('add 6 9'), 'add two numbers')

	t.equal(3, executeCommand('sub 9 6'), 'subtract two numbers')

	t.equal(50, executeCommand('mul 5 10'), 'multiply two numbers')

	t.equal(500, executeCommand('div 5000 10'), 'divide two numbers')
})

function executeCommand(args) {
	return +execSync('node ./src ' + args)
}
