import React from 'react';
import style from './Employees.module.css';
import CardEmploy from '../../components/Employees_components/CardEmploy/CardEmploy';
import Detail from '../../components/Employees_components/Detail/Detail';
import Nav from '../../components/Nav/Nav';

function Employees() {
	return (
		<div className={style.container}>
			<Nav />
			<div className={style.divEmployees}>
				<h1 className=' text-white'>Employees</h1>

				<ul className={style.lista}>
					<li>asdfasdf</li>
					<li>asdfasdf</li>
					<li>asdfasdf</li>
					<li>asdfasdf</li>
				</ul>
				<div>
					<CardEmploy />
				</div>
			</div>
			<div className={style.divDetail}>
				<Detail />
			</div>
		</div>
	);
}

export default Employees;
