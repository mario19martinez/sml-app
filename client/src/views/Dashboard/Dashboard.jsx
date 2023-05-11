import React from 'react';
import Nav from '../../components/Nav/Nav';
import DashboardVendedores from '../../components/Vendedores/Dashboard/DashboardVendedores';

function Dashboard() {
	return (
		<div className='flex flex-row w-screen'>
			<Nav />
			<div className='flex flex-row w-screen'>
				<div>Dashboard</div>
				<DashboardVendedores />
			</div>
		</div>
	);
}

export default Dashboard;
