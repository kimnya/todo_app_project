import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components';
import useUserHooks from './useHooks/useUserHooks';
import WelcomeHi from './components/WelcomeHi';
import { useState } from 'react';
import TodoCtxProvider from './contexts/todoCtxProvider';

const GlobalStyle = createGlobalStyle`
    /* CSS RESET */
    .on{
      display: block;
    }
    .off{
      display: none;
    }
    .sr-only{
		position: absolute;
		left: -9999px;
	}
html,
body {
	width: 100%;
	height: 100%;
}

html,
body,
div,
span,
object,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
em,
img,
ins,
q,
strong,
sub,
sup,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
a,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}
ul,
ol,
li,
dl {
	list-style: none;
}
blockquote,
q {
	quotes: none;
}
a,
a:link,
a:hover,
a:active {
	text-decoration: none;
}
em,
i,
address {
	font-style: normal;
	font-weight: normal;
}
table {
	border-collapse: collapse;
}
img,
fieldset {
	border: 0;
}
hr,
legend,
caption {
	display: none;
}
textarea {
	resize: none;
}
label,
button {
	cursor: pointer;
}

a:link,
a:visited,
a:hover,
a:active {
	color: #222;
	text-decoration: none;
}

body {
	overflow-y: scroll;
	color: #222;
	font-family: 'Noto Sans KR', 'Nanum Gothic', 돋움, 굴림;
}

/*공통요소*/
.text-center {
	height: 100px;
	line-height: 100px;
	text-align: center;
}
.sr-only {
	position: absolute;
	left: -9999px;
}
.clearfix {
	*zoom: 1;
}
.clearfix:after {
	display: block;
	clear: both;
	content: '';
}
`;

function App() {
	const [on, setOn] = useState(false);

	const submitFn = (evt) => {
		evt.preventDefault();
		setOn(!on);
	};

	return (
		// 조건부 렌더링
		<>
			<GlobalStyle />
			<TodoCtxProvider>
				<WelcomeHi on={on} submitFn={submitFn}></WelcomeHi>
				<Home on={on}></Home>
			</TodoCtxProvider>
		</>
	);
}

export default App;
