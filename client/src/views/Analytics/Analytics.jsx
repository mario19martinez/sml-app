import React from 'react';
import style from './Analytics.module.css';
import Nav from '../../components/Nav/Nav';

function Analytics() {
	return (
		<div className={style.container}>
			<Nav />
			<div className={style.containerHeader}>
				<h1 className=''>Analytics</h1>
				<select>
					<option>2023</option>
				</select>
			</div>
		</div>
	);
}

export default Analytics;
