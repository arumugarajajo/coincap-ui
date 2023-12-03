import React from 'react'
import Navbar from '../components/navbar/Navbar'
import DataTable from '../components/dataTable/DataTable'
import Footer from '../components/footer/Footer'

function Home() {
  return (
    <div className='home'>
        <Navbar />
        <DataTable />
        <Footer />
    </div>
  )
}

export default Home