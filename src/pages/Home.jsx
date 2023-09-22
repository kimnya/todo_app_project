import React from 'react';
import styled from 'styled-components';
import useUserHooks from '../useHooks/useUserHooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useCtxDispatch } from '../contexts/todoCtxProvider';

const Wrap = styled.div`
	display: none;
	width: 100%;
	padding: 10px;

	font-size: 0.8em; //모바일에서는 em단위 사용
	line-height: 1.25em;

	box-sizing: border-box;
`;

const Header = styled.header`
	display: flex;
	flex-direction: column;
	font-size: 20px;
	padding: 16px 0;
	text-align: center;
	> .datetime {
		> strong {
			margin-right: 5px;
		}
	}
	> h1 {
		order: 100;
		margin: 16px 0;
		font-size: 20px;
		line-height: 1.5;
	}
	> .quote {
		display: flex;
		flex-direction: column-reverse; //주축설정
		flex-wrap: wrap; //여러줄설정
		align-content: center; //교차축정렬
		margin-top: 24px;
		> q {
			display: block;
			width: 40%;
			line-height: 1.3;
			// border: 1px solid #000;
		}
		> .author {
			margin-top: 8px;
			font-size: 0.6em;
		}
	}
`;
const Main = styled.main`
	> section {
		margin-bottom: 16px;
		padding: 24px 0;
		border: 2px solid #a799ff;
		border-radius: 24px;
	}

	> section.weather {
		text-align: center;
		> h2 {
			.city {
				color: #7964ff;
			}
		} //end of h2
		> article.current {
			> img {
				width: 122px;
			}
			> h3 {
				font-size: 1.2rem;
			}
		} //end of .current

		> article.forecast {
			margin-top: 48px;
			> h3 {
				width: 60%;
				color: #7964ff;
				margin: 0 auto 16px;
				text-align: left;
			}
			> div {
				display: flex;
				justify-content: space-between;
				width: 55%;
				margin: 0 auto;
				> p {
					display: flex;
					align-items: center;
					> .frame {
						display: block;
						width: 72px;
						height: 72px;
						background-position: center center;
						background-size: cover;
					}
					> span {
						line-height: 1.5;
						text-align: left;
					}
				} //end of p
			}
		} //end of article
	} //end of .weather

	> section.Dday {
		position: relative;
		> .tit {
			display: flex;
			align-items: center;
			width: 90%;

			margin: 0 auto;
			padding: 10px 0 20px;
			border-bottom: 2px solid $secColor;
			> h2 {
				flex: 1 1 0; //플렉스컨테이너의 남는공간에 대한 비율설정
				text-align: center;
				> small {
					color: #ccc;
					&:hover {
						text-decoration: underline;
					}
					cursor: pointer;
				}
			}
			> svg {
				color: #a799ff;
				font-size: 24px;
				cursor: pointer;
				&:hover {
					color: darken(#a799ff, 10%);
				}
			}
		} //end of .tit

		> .inputBox {
			display: none;
			position: absolute;
			left: 50%;
			top: 70px;
			width: 90%;
			height: 48px;
			background-color: #fff;
			border: 3px solid #ccc;
			border-bottom-width: 3px;
			transform: translate(-50%, 0);
			box-sizing: border-box;

			@media #{$pc} {
				height: 58px;
			}

			&.show {
				display: block;
			}

			> form {
				&.on {
					display: flex;
				}

				display: none;
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				padding: 10px 0;
				background-color: #fff;
				> label {
					padding: 0 10px;
				}
				> input[type='text'] {
					flex: 1;
					outline: none;
				}
				> input[type='date'] {
					margin: 0 5px;
				}
				> .insert {
					padding-right: 10px;
					font-size: 20px;
					background: none;
					border: none;
					outline: none;
					cursor: pointer;
				}
			} //end of p
		} //end of .inputBox

		> .list {
			overflow: auto;
			width: 90%;
			height: 150px;
			margin: 24px auto 0;
			> li {
				display: flex;
				align-items: center;
				margin-bottom: 24px;

				&.complete {
					text-decoration: line-through #a799ff;
				}

				&:last-child {
					margin-bottom: 0;
				}

				> i {
					font-size: 18px;
					color: $pointColor;
					&:hover {
						color: darken(#a799ff, 10%);
					}
				}

				> h3 {
					padding: 0 10px;
					color: #a799ff;
					font-size: 20px;
				}

				> p {
					flex: 1; //flex:1 1 0; 와 같다
					font-size: 20px;
				}
			} //end of li
		} //end of .list
	} //end of .Dday
`;

const Footer = styled.footer`
	line-height: 30px;
	text-align: center;
`;

const Aside = styled.aside`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	right: 3vw;
	top: 2vh;

	// background-color: #fff;

	> i {
		display: block;
		margin-bottom: 5px;

		//초기화버튼
		&.fa-trash-restore-alt {
			font-size: 15px;
		}

		&:hover {
			color: #a799ff;
			cursor: pointer;
		}
	}
`;

const Home = ({ on }) => {
	const [name] = useUserHooks();
	const dispatch = useCtxDispatch;

	return (
		<>
			<Wrap className={on ? 'on' : 'off'}>
				<Header>
					<p className="datetime">
						<span className="date">2023.07.14</span>
						<strong className="day">금</strong>
						<span className="time">(9:13:45 pm)</span>
					</p>
					{/* <h1>Have a good day, <span class="userid">Duly</span>~!</h1>  */}
					<h1>
						<span className="user">{name}</span>님,
						<br />
						오늘도 즐거운 하루 되세요~!
					</h1>
					<p className="quote">
						<span className="author">Hemmingway</span>
						<span className="sr-only">-</span>
						<q className="msg">Never go on trips with anyone you do not love.</q>
					</p>
				</Header>
				<Main>
					<section class="weather">
						<h2>
							<span class="city">{/* <!--서울--> */}</span> Weather
						</h2>
						<article class="current">
							<img src="#" alt="Rain" />
							<h3>{/* <!--Rain / 28º--> */}</h3>
						</article>
						<article class="forecast today">
							<h3>Today</h3>
							<div>
								<p>
									<span
										class="frame"
										// style="background-image: url(https://openweathermap.org/img/wn/10d@2x.png)"
									></span>
									<span>
										<span class="when">9시</span>
										<span class="temp">23</span>º
									</span>
								</p>
								<p>
									<span
										class="frame"
										// style="background-image: url(https://openweathermap.org/img/wn/50d@2x.png)"
									></span>
									<span>
										<span class="when">9시</span>
										<span class="temp">23</span>º
									</span>
								</p>
							</div>
						</article>
						<article class="forecast tomorrow">
							<h3>Tomorrow</h3>
							<div>
								<p>
									<span
										class="frame"
										// style="background-image: url(https://openweathermap.org/img/wn/50d@2x.png)"
									></span>
									<span>
										<span class="when">19시</span>
										<span class="temp">23</span>º
									</span>
								</p>
								<p>
									<span
										class="frame"
										// style="background-image: url(https://openweathermap.org/img/wn/10d@2x.png)"
									></span>
									<span>
										<span class="when">9시</span>
										<span class="temp">23</span>º
									</span>
								</p>
							</div>
						</article>
					</section>
					<section class="Dday">
						<div class="tit">
							<h2 title="클릭시 전체데이터 삭제됨">
								D-Day Goal Setting <small>&lt;전체삭제&gt;</small>
							</h2>
							<FontAwesomeIcon
								icon={faCirclePlus}
								onClick={dispatchEvent({
									type: 'SHOW',
								})}
							/>
						</div>
						<div className="inputbox">
							<form name="frmAdd" className={on ? 'on' : 'off'}>
								<label for="addTit">목표</label>
								<input
									type="text"
									name="addTit"
									id="addTit"
									autocomplete="off"
									placeholder="Enter your goal and press enter"
								/>
								<input type="date" name="addDate" />
								<button class="insert fas fa-check-square"></button>
							</form>
							<form name="frmEdit">
								<label for="editTit">수정</label>
								<input
									type="text"
									name="editTit"
									id="editTit"
									autocomplete="off"
									placeholder="Enter your goal and press enter"
								/>
								<input type="date" name="editDate" />
								<button class="insert fas fa-check-square"></button>
							</form>
						</div>
						<ul class="list">
							{/* <!--             
						<li>
							<i class="fas fa-times-circle"></i>
							<h3>D-1</h3>
							<p>투두 프로젝트</p>
							<i class="fas fa-edit"></i>
						</li> --> */}
						</ul>
					</section>
				</Main>
				<Footer></Footer>
				<Aside></Aside>
			</Wrap>
		</>
	);
};

export default Home;
