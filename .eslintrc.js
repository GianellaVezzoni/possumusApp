module.exports = {
	root: true,
	extends: '@react-native-community',
	rules: {
		'prettier/prettier': 'off',
		'no-tabs': 'off',
		'no-mixed-spaces-and-tabs': [ 'error', 'smart-tabs' ],
		'space-in-parens': [ 'error', 'always' ],
		'array-bracket-spacing': [ 'error', 'always', {
			objectsInArrays: true,
			arraysInArrays: true
		} ],
		curly: [ 'error', 'multi', 'consistent' ],
		'object-curly-spacing': [
			'error',
			'always',
			{
				arraysInObjects: true,
				objectsInObjects: true
			}
		],
		indent: [ 'error', 'tab', {
			SwitchCase: 1
		} ],
		'comma-dangle': [ 'error', 'never' ],
		'comma-spacing': [ 'error', {
			before: false,
			after: true
		} ],
		'max-depth': [ 'error', { max: 2 } ],
		'max-params': [ 'error', { max: 4 } ]
	}
};
