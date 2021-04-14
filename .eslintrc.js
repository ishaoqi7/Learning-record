// http://eslint.org/docs/user-guide/configuring

module.exports = {
  // �� ESLint ���Ƶ�һ���ض�����Ŀ���������ļ������� "root": true��ESLint һ�����������ļ����� "root": true�����ͻ�ֹͣ�ڸ���Ŀ¼��Ѱ�ҡ�
  root: true,
  // ���ES6����
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // 
  env: {
    browser: true,
  },
  // ����no-undefӰ��
  globals: {
    _: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'vue',
    'html'
  ],
  // add your custom rules here
//   0��off�����رչ��� 
// 1��warn�����򿪹��򣬲�����Ϊһ�����棨�����ᵼ�¼�鲻ͨ������ 
// 2��error�����򿪹��򣬲�����Ϊһ������ (�˳���Ϊ1����鲻ͨ��)��

// ����˵���� 
// ����1 �� ����ȼ� 
// ����2 �� ����ʽ
  'rules': {
    'prefer-promise-reject-errors': 0,
    'space-unary-ops': 0,
    'no-unused-expressions': 0,
    'no-useless-return': 0,
    'standard/no-callback-literal': 0,
    'import/first': 0,
    'import/export': 0,
    'no-mixed-operators': 0,
    'no-use-before-define': 0,
    // ����ʹ�÷ֺ�
    'semi': [0, 'never'],
    // ����ʹ��==
    'eqeqeq': 0,
    // ����ʹ�ò�������
    'indent': 0,
    // ����ʹ��tab
    'no-tabs': 0,
    // ����Բ����֮ǰû�пո�
    'space-before-function-paren': [2, "never"],
    // ��Ҫ����ڿո�����ʽ
    'padded-blocks': 0,
    // �����Ʊ���һ������
    'one-var': 0,
    // debuggerʹ��
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
	
	"no-unused-vars": [2, { 
	      // ��������δʹ�ñ���
	      "vars": "local",
	      // ���������
	      "args": "none" 
	    }],
    // ����ģʽ����ʹ��console
    'no-console': 0,
    // ��������и��Ʋ�������Ҫ��Բ����������
    'no-cond-assign': [2, 'except-parens'],
    // ����ʹ���������ʽʹ�ó���
    'no-constant-condition': 0,
    // ���пɺ��Դ����ţ����в��ɺ���
    'curly': [2, 'multi-line'],
    // ������ʹ��var����
    'no-var': 2,
    // ��������ֶ���ո�
    'no-multi-spaces': ["error", { ignoreEOLComments: true }],
    'camelcase': 0,
    // �����������ļ�ֵ�ո���
    'key-spacing': 2,
    // if������һ��return��䣬 else�Ͷ���
    'no-else-return': 2,
    // ���齫�������ֵ�������ȡΪ����
    'no-magic-numbers': [0, {ignoreArrayIndexes: true}],
    // �������ظ���������
    'no-redeclare': [2, {builtinGlobals: true}],
    // ����ִ�к������
    'wrap-iife': [2, 'inside'],
    // ������Բ�����г��ֿո�
    'space-in-parens': [2, 'never'],
    // ȷ���������Χ�пո�
    'space-infix-ops': 2,
    // ǿ�Ƶ��������ͬһ��
    'dot-location': [2, 'property'],
    // ǿ�Ƶ��д���ʹ�ÿո�
    'block-spacing': [2, 'always'],
    // Լ��for-inʹ��hasOwnProperty�ж�
    'guard-for-in': 0,
    // ����one true brace style�����ŷ��
    'brace-style': [2, '1tbs', {'allowSingleLine': true}],
    // ͳһ������Χ�ո���
    'comma-spacing': [2, {'before': false, 'after': true}],
    // ��ֹ���ֶ������
    'no-multiple-empty-lines': [2, {'max': 1, 'maxEOF': 2}],
    // �����ͷ������ʹ��Բ����
    'arrow-parens': 0,
    // �淶generator������ʹ��
    'generator-star-spacing': [2, {'before': false, 'after': true}],
    // Ҫ���ڿ鼶
    'lines-around-comment': [2, {'beforeBlockComment': true, 'afterBlockComment': false, 'beforeLineComment': true, 'afterLineComment': false}]
  }
}