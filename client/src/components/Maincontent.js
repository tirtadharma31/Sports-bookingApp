import { Routes, Route } from 'react-router-dom'

import BookingDataPage from '../pages/admin/bookingPage.js'
import CourtDataPage from '../pages/admin/courtPage.js'
import MemberDataPage from '../pages/admin/memberPage.js'
import { EditCourt } from '../pages/admin/courteditPage.js'
import { EditMember } from '../pages/admin/membereditPage.js'

import HomePage from '../pages/user/homePage.js'

import { Sidebar } from './Sidebar.js'
import { Footer } from './Footer.js'

const MainContent = () => {
    let role = 'user'

    return (
        role === 'admin'
            // admin
            ? <div className='row w-100'>
                <div style={{ display: 'flex' }}>
                    <Sidebar style={{ flex: '1 auto' }}></Sidebar>
                    <div className='row'>
                        <Routes>
                            <Route path='/' element={<MemberDataPage />} />
                            <Route path='/bookings/:courtId' element={<BookingDataPage />} />
                            <Route path='/courts' element={<CourtDataPage />} />
                            <Route path='/editCourt/:courtId' element={<EditCourt />} />
                            <Route path='/members' element={<MemberDataPage />} />
                            <Route path='/editMember/:memberId' element={<EditMember />} />
                            <Route path='/payments' element={<MemberDataPage />} />
                        </Routes>

                        {/* footer */}
                        <div className='text-end' style={{
                            backgroundColor: "#f0f0f0"
                        }}><Footer></Footer>
                        </div>
                    </div>
                </div>
            </div>
            // user
            : <div>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
            </div>
    )
}

export default MainContent