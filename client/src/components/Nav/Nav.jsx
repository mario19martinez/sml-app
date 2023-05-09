import React from 'react';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';
import {
	IoLogOut,
	IoStatsChart,
	IoSettingsSharp,
	IoGrid,
} from 'react-icons/io5';

function Nav() {
	return (
		<div className={style.container}>
			<div className={style.containerContent}>
				<div className={style.contentTitle}>
					<div className={style.title}>
						<Link to='/'>
							<span>ICONO</span>
						</Link>
						<h1>SML</h1>
					</div>
					<div />
					<div className={style.contentList}>
						<div className={style.list}>
							<ul>
								<li>
									<span>
										<IoGrid />
									</span>
									<span>
										<Link to={'/dashboard'}>Dashboard</Link>
									</span>
								</li>
								<li>
									<span>
										<IoStatsChart />
									</span>
									<span>
										<Link to={'/analytics'}>Analytics</Link>
									</span>
								</li>
								<li>
									<span>
										<IoSettingsSharp />
									</span>
									<span>
										<Link to={'/settings'}>Settings</Link>
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className={style.log}>
					<img
						className={style.img}
						src={
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFADjIwjVTPKIf_2YkWdv2-N5TPzIItNC0TQ&usqp=CAU'
						}></img>
					<div className={style.text}>
						<p>Easin Arafat</p>
						<p>Free Account</p>
					</div>
					<div className={style.logout}>
						<IoLogOut />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Nav;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { IoLogOut, IoStatsChart, IoSettingsSharp, IoGrid } from 'react-icons/io5';

// function Nav() {
// 	return (
// 		<div className="bg-gray-800 flex min-w-15rem h-screen">
// 			<div className="flex flex-col justify-between items-center mt-0.5rem w-full">
// 				<div className="flex flex-col items-center justify-center gap-1rem mt-1rem w-full">
// 					<div className="flex flex-col items-center justify-center">
// 						<Link to="/">
// 							<span className="text-gray-200">ICONO</span>
// 						</Link>
// 						<h1 className="text-white">SML</h1>
// 					</div>
// 					<div />
// 					<div className="flex w-full ml-3rem md:ml-0.5rem">
// 						<ul className="flex flex-col gap-1rem">
// 							<li className="flex items-center gap-1rem">
// 								<span className="text-gray-300">
// 									<IoGrid />
// 								</span>
// 								<Link to="/dashboard" className="text-white">
// 									Dashboard
// 								</Link>
// 							</li>
// 							<li className="flex items-center gap-1rem">
// 								<span className="text-gray-300">
// 									<IoStatsChart />
// 								</span>
// 								<Link to="/analytics" className="text-white">
// 									Analytics
// 								</Link>
// 							</li>
// 							<li className="flex items-center gap-1rem">
// 								<span className="text-gray-300">
// 									<IoSettingsSharp />
// 								</span>
// 								<Link to="/settings" className="text-white">
// 									Settings
// 								</Link>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>

// 				<div className="flex justify-center items-center gap-0.5rem ml-1rem mb-3rem md:flex-col">
// 					<img
// 						className="w-3rem h-3rem rounded-full"
// 						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFADjIwjVTPKIf_2YkWdv2-N5TPzIItNC0TQ&usqp=CAU"
// 						alt="avatar"
// 					/>
// 					<div className="text-white text-sm">
// 						<p>Easin Arafat</p>
// 						<p>Free Account</p>
// 					</div>
// 					<div className="text-white text-xl ml-0.5rem">
// 						<IoLogOut />
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Nav;
