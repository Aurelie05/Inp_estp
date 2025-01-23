import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import logo from '@/Assets/ESTP.f30db3437790b8dbc7d7.png'
import '@/Style/Dash.css'

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <main>
             <div className="top-bar">
                <input type="text" placeholder="Search..." />
                <div className="user-section">
                    <span>Notifications</span>
                    <span>Settings</span>
                    <span>
                        <img
                        src={logo}
                        alt="User Avatar"
                        className="avatar"
                        />
                    </span>
                </div>
            </div>

      <div className="stats-grid">
        <div className="stats-card">
          <h3>155+</h3>
          <p>Completed Courses</p>
        </div>
        <div className="stats-card">
          <h3>39+</h3>
          <p>Earned Certificates</p>
        </div>
        <div className="stats-card">
          <h3>25+</h3>
          <p>Courses in Progress</p>
        </div>
        <div className="stats-card">
          <h3>18k+</h3>
          <p>Community Support</p>
        </div>
      </div>

       
      
    
            

      </main>  
        </AuthenticatedLayout>
    );
}
